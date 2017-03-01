require.config({
    deps: ['main'],
    paths: {
        'MainCore': 'Modules/Core/MainCore',
        'Logger': 'Modules/Core/Logger',
        'AjaxEngine': 'Modules/Core/AjaxEngine',
        'CookieHandler': 'Modules/Core/CookieHandler',
        'NotificationHandler': 'Modules/Core/NotificationHandler',
        'StorageHandler': 'Modules/Core/StorageHandler',
        'Utilities': 'Modules/Core/Utilities',
        'SandBox': 'Modules/SandBox/SandBox',
        'App_Content': 'Components/App_Content',
        'App_Footer': 'Components/App_Footer',
        'App_Header': 'Components/App_Header',
        'AppTester': 'Modules/AppTester/AppTester',
        'CookieHandlerTester': 'Modules/AppTester/CookieHandlerTester',
        'StorageHandlerTester': 'Modules/AppTester/StorageHandlerTester',
        'Base': 'Modules/Base/Base',
        'jquery': 'Modules/Base/jquery-1.10.2.min',
        'GlobalData_Sub': 'Modules/GlobalData/GlobalData_Sub',
        'GlobalData': 'Modules/GlobalData/GlobalData'
    },
    shim: {
        'Base': {
            exports: 'Base'
        },
        'jquery': {
            exports: 'jquery'
        },
        'GlobalData_Sub': {
            exports: 'GlobalData_Sub'
        },
        'GlobalData': {
            exports: 'GlobalData'
        },
        'MainCore': {
            deps: ['SandBox', 'jquery', 'GlobalData_Sub', 'GlobalData'],
            exports: 'App_Core'
                // use this alias in the global scope and pass it to modules as dependency
        },
        'SandBox': {
            exports: 'SandBox'
        },
        'App_Content': {
            deps: ['MainCore'],
            exports: "App_Content"
        },
        'App_Footer': {
            deps: ['MainCore'],
            exports: "App_Footer"
        },
        'App_Header': {
            deps: ['MainCore'],
            exports: "App_Header"
        },
        'AppTester': {
            deps: ['MainCore']
        },
        'CookieHandlerTester': {
            deps: ['AppTester', 'CookieHandler']
        },
        'StorageHandlerTester': {
            deps: ['AppTester', 'StorageHandler']
        }
    }
});