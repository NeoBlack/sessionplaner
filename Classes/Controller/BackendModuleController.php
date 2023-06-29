<?php

declare(strict_types=1);

/*
 * This file is part of the package evoweb/sessionplaner.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Evoweb\Sessionplaner\Controller;

use Evoweb\Sessionplaner\Constants;
use Evoweb\Sessionplaner\Domain\Model\Day;
use Evoweb\Sessionplaner\Domain\Repository\DayRepository;
use Evoweb\Sessionplaner\Domain\Repository\SessionRepository;
use Psr\Http\Message\ResponseInterface;
use TYPO3\CMS\Backend\Routing\Route;
use TYPO3\CMS\Backend\Routing\UriBuilder as BackendUriBuilder;
use TYPO3\CMS\Backend\Template\Components\ButtonBar;
use TYPO3\CMS\Backend\Template\Components\MenuRegistry;
use TYPO3\CMS\Backend\Template\ModuleTemplateFactory;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Imaging\Icon;
use TYPO3\CMS\Core\Imaging\IconFactory;
use TYPO3\CMS\Core\Localization\LanguageService;
use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;

class BackendModuleController extends ActionController
{
    protected int $id = 0;
    protected ?Day $currentDay = null;

    protected DayRepository $dayRepository;
    protected SessionRepository $sessionRepository;
    protected ModuleTemplateFactory $moduleTemplateFactory;
    protected IconFactory $iconFactory;
    protected PageRenderer $pageRenderer;
    protected BackendUriBuilder $backendUriBuilder;

    public function __construct(
        DayRepository $dayRepository,
        SessionRepository $sessionRepository,
        ModuleTemplateFactory $moduleTemplateFactory,
        IconFactory $iconFactory,
        PageRenderer $pageRenderer,
        BackendUriBuilder $backendUriBuilder
    ) {
        $this->dayRepository = $dayRepository;
        $this->sessionRepository = $sessionRepository;
        $this->moduleTemplateFactory = $moduleTemplateFactory;
        $this->iconFactory = $iconFactory;
        $this->pageRenderer = $pageRenderer;
        $this->backendUriBuilder = $backendUriBuilder;
    }

    protected function initializeAction()
    {
        $this->pageRenderer->addCssFile('EXT:sessionplaner/Resources/Public/Stylesheets/backend.css');
        $this->pageRenderer->loadRequireJsModule('TYPO3/CMS/Sessionplaner/Sessionplaner');
    }

    public function showAction(): ResponseInterface
    {
        $this->id = (int) ($this->request->getArgument('id') ?? 0);
        if ($this->request->hasArgument('day')) {
            $this->currentDay = $this->dayRepository->findByUid($this->request->getArgument('day'));
        } else {
            $this->currentDay = $this->dayRepository->findAll()->getFirst();
        }

        $days = $this->dayRepository->findAll();
        $this->view->assignMultiple([
            'currentDay' => $this->currentDay,
            'days' => $days,
            'unassignedSessions' => $this->sessionRepository->findUnassignedSessions(),
            'returnUri' => $this->createModuleUri(),
        ]);

        $moduleTemplate = $this->moduleTemplateFactory->create($this->request);
        $moduleTemplate->setTitle('Sessionplaner' . ($this->currentDay !== null ? ' ' . $this->currentDay->getName() : ''));
        $moduleTemplate->setContent($this->view->render());
        $this->registerMenuDays($moduleTemplate->getDocHeaderComponent()->getMenuRegistry());
        $this->registerButtonNewSession($moduleTemplate->getDocHeaderComponent()->getButtonBar());

        return $this->htmlResponse($moduleTemplate->renderContent());
    }

    protected function registerMenuDays(MenuRegistry $menuRegistry): void
    {
        $days = $this->dayRepository->findAll();
        if ($days->count() > 0) {
            $actionMenu = $menuRegistry->makeMenu();
            $actionMenu->setIdentifier('actionMenu');
            $actionMenu->setLabel('');
            foreach ($days as $day) {
                $title = $day->getDate() . ': ' . $day->getName();
                $actionMenu->addMenuItem(
                    $actionMenu->makeMenuItem()
                        ->setTitle((string) $title)
                        ->setHref((string) $this->createModuleUri(['day' => (string) $day->getUid()]))
                        ->setActive(($this->currentDay === $day))
                );
            }
            $menuRegistry->addMenu($actionMenu);
        }
    }

    protected function registerButtonNewSession(ButtonBar $buttonBar): void
    {
        // Only render new session button on storage folders
        $page = BackendUtility::getRecord('pages', $this->id);
        if ($page === null || $page['doktype'] !== Constants::STORAGE_FOLDER_TYPE) {
            return;
        }

        $parameters = [
            'edit' => [
                'tx_sessionplaner_domain_model_session' => [
                    $this->id => 'new',
                ],
            ],
            'returnUrl' => $this->createModuleUri()
        ];
        $button = $buttonBar->makeLinkButton()
            ->setHref((string)$this->backendUriBuilder->buildUriFromRoute('record_edit', $parameters))
            ->setTitle($this->getLanguageService()->sL('LLL:EXT:sessionplaner/Resources/Private/Language/locallang.xlf:session-new'))
            ->setShowLabelText(true)
            ->setIcon($this->iconFactory->getIcon('actions-plus', Icon::SIZE_SMALL));
        $buttonBar->addButton($button);
    }

    public function createModuleUri(array $params = []): string
    {
        $request = $this->request;
        $route = $request->getAttribute('route');
        if (!$route instanceof Route) {
            return null;
        }

        $baseParams = [
            'id' => (string) $this->id,
            'day' => $this->currentDay !== null ? (string) $this->currentDay->getUid() : '',
        ];

        $params = array_replace_recursive($baseParams, $params);
        $params = array_filter($params, static function ($value) {
            return $value !== null && trim($value) !== '';
        });

        return (string) $this->backendUriBuilder->buildUriFromRoute($route->getOption('_identifier'), $params);
    }

    protected function getLanguageService(): LanguageService
    {
        return $GLOBALS['LANG'];
    }
}
