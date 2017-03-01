// Application bootstrap file
var modulesToLoad = ['MainCore', 'Logger', 'AjaxEngine', 'CookieHandler',
    'NotificationHandler', 'StorageHandler', 'Utilities',
    'App_Content', 'App_Footer', 'App_Header', 'SandBox',
    'AppTester', 'CookieHandlerTester', 'StorageHandlerTester', 'Base',
    'jquery', 'GlobalData_Sub', 'GlobalData'];

require(modulesToLoad, function(App_Core, Logger, AjaxEngine,
    CookieHandler, NotificationHandler, StorageHandler, Utilities,
    App_Content, App_Footer, App_Header, SandBox,
    Base, jquery, GlobalData_Sub, GlobalData) {
    //register StorageHandler with MainCore
    App_Core.StorageHandler.register = (function() {
        App_Core.registerModule(App_Core.StorageHandler);
    })();
    //add error handling to all methods of StorageHandler, in case localStorage not available
    if (App_Core.Utilitizes) {
        App_Core.Utilitizes.addLocalStorageCheck(App_Core.StorageHandler);
    }
    App_Core.initializeAllModules();
    App_Core.initializeAllComponents();
    // uncomment below if you'd like to run some unit test and then see results in the console
    // remember that running tests deletes all the cookie and localstorage values for the this app
    //App_Core.runAllUnitTests();
    App_Core.handlePageChange(location.pathname);
});