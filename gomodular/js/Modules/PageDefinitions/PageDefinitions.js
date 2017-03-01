(function() {
    var FavouritesPageDefinition = {
        pageID: "Favourites",
        htmlStr: "<div id='favouritedHeader'><h3>Your Favorite Images</h3></div>",
        cssFile: "FavoritesView.css",
        cssPath: "css/"
    };
    var NotificationWidgetDefinition = {
        componentID: "notificationWidget",
        scriptFile: "NotificationWidget.js",
        scriptPath: "/js/Widgets/",
        cssFile: "NotificationWidget.css",
        cssPath: "css/"
    };
    App_Core.saveValueToLocalStorage(App_GlobalData.getFavouritesPageObjDefID(),
        FavouritesPageDefinition);
    App_Core.saveValueToLocalStorage(App_GlobalData.getNoficationWidgetDefID(),
        NotificationWidgetDefinition);
})();