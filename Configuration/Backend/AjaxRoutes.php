<?php

return [
    // Dispatch the create action
    'evoweb_sessionplaner_create' => [
        'path' => '/evoweb/sessionplaner/create',
        'target' => \Evoweb\Sessionplaner\Controller\AjaxController::class . '::createSessionAction'
    ],
    // Dispatch the update action
    'evoweb_sessionplaner_update' => [
        'path' => '/evoweb/sessionplaner/update',
        'target' => \Evoweb\Sessionplaner\Controller\AjaxController::class . '::updateSessionAction'
    ],
    // Dispatch the delete action
    'evoweb_sessionplaner_delete' => [
        'path' => '/evoweb/sessionplaner/delete',
        'target' => \Evoweb\Sessionplaner\Controller\AjaxController::class . '::deleteSessionAction'
    ]
];
