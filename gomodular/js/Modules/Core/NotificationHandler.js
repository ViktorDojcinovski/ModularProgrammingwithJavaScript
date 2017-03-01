// using simple sub-module augmentation
define(['MainCore'], function(App_Core) {
    var self = {},
        NotificationWidgetDef, NotificationWidgetObj;
    // initialize as a core sub-modules
    self.initialize = function() {
        this.id = "Notification";
        App_Core.registeredComponents.push(this);
        App_Core.log(1,
            'NotificationHandler Module has been initialized...',
            "blue");
    };
    // initialize as a component 
    self.init = function() {
        App_Core.registerForCustomEvents("Notification", {
            'support-Clicked': this.handleSupportClick
        });
        App_Core.log(1,
            'NotificationHandler is listening to custom events now...',
            'purple');
    };
    self.destroy = function() {
        App_Core.unregisterAllCustomEvents("Notification");
        App_Core.log(1,
            'NotificationHandler has been destroyed...',
            'purple');
    };
    self.handleSupportClick = function() {
        // name of the component when it registers itselft with core is used here
        NotificationWidgetObj = App_Core.getComponentByID(
            "notificationWidget");
        if (!NotificationWidgetObj) {
            App_Core.loadComponent(App_GlobalData.getNoficationWidgetDefID(),
                self.renderWidget);
        } else {
            self.renderWidget();
        }
    };
    self.renderWidget = function() {
        App_Core.getComponentByID("notificationWidget").renderWidget();
    };
    // register with MainCore
    self.register = (function() {
        App_Core.registerModule(self);
    })();
    return App_Core.NotificationHandler = {
        handleSupportClick: self.handleSupportClick
    };
});