define(['MainCore'], function(App_Core) {
    var self = {},
        messageParam, colorParam;
    self.logMessage = function(severity, message, color) {
        // if no severity number was possed in, then give the message and warn the user
        if (typeof severity === 'string') {
            message = severity;
            severity = 2;
        }
        if (color) {
            messageParam = "%c " + message;
            colorParam = "color:" + color;
        } else {
            messageParam = message;
            colorParam = undefined;
        }
        // if in debug mode, handle errors more descriptively
        if (App_Core.debug) {
            var consoleFunc = (severity === 1) ? 'log' : (severity ===
                2) ? 'warn' : 'error';
            if (colorParam) {
                console[consoleFunc](messageParam, colorParam);
            } else {
                console[consoleFunc](messageParam);
            }
        } else if (App_Core.sendMsgToServer) {
            // send error to the server
        } else {
            // do something else
        }
    };
    self.initialize = function() {
        App_Core.log(1,
            'LoggingHandler Module has been initialized...',
            'blue');
    };
    // register with MainCore
    self.register = (function() {
        App_Core.registerModule(self);
    })();
    return App_Core.LoggingHandler = {
        logMessage: self.logMessage,
        initialize: self.initialize
    };
});