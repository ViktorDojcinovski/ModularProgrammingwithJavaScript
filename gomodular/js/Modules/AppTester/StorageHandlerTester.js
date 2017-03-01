App_Core.AppTester = (function(mainTestModule) {
    if (!mainTestModule) {
        App_Core.log(3, 'main test module not found!');
        return false;
    }
    var StorageTester = mainTestModule.StorageHandlerTester = {};
    var unitTests = [],
        totalErrors = 0,
        totalPasses = 0;
    //create a new value in the storage
    unitTests[unitTests.length] = StorageTester.replaceValueForNewKey =
        function(key, value, decodeFlag) {
            if (!key) {
                key = 'test';
            }
            if (!value) {
                value = 'hello there';
            }
            if (!decodeFlag) {
                decodeFlag = false;
            }
            App_Core.StorageHandler.replaceValueForKey(key, value,
                false);
            var valueExtracted = App_Core.StorageHandler.getValueForKeyAsString(
                key);
            if (valueExtracted === value) {
                App_Core.log(1,
                    'replaceValueForNewKey has passed', 'green');
                totalPasses++;
            } else {
                App_Core.log(3,
                    'replaceValueForNewKey has Failed!');
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.getValueForKeyAsString =
        function(key, value, decodeFlag) {
            if (!key) {
                key = 'test';
            }
            if (!value) {
                value = 'hello there';
            }
            if (!decodeFlag) {
                decodeFlag = false;
            }
            var valueExtracted = App_Core.StorageHandler.getValueForKeyAsString(
                key);
            if (valueExtracted === value) {
                App_Core.log(1,
                    'getValueForKeyAsStringFromStorage has passed',
                    'green');
                totalPasses++;
            } else {
                App_Core.log(3,
                    'getValueForKeyAsStringFromStorage has Failed!'
                );
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.checkLocalStorageForkey =
        function(key) {
            if (!key) {
                key = 'test';
            }
            var checkedKey = App_Core.StorageHandler.checkLocalStorageForkey(
                key);
            if (checkedKey) {
                App_Core.log(1,
                    'checkLocalStorageForkey has passed', 'green');
                totalPasses++;
            } else {
                App_Core.log(3,
                    'checkLocalStorageForkey has Failed!');
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.saveArrayToLocalStorage =
        function(key, value, encodeFlag) {
            if (!key) {
                key = "testArray";
            }
            if (!value) {
                value = ["testArrayValue", 1];
            }
            value = App_Core.StorageHandler.saveArrayToLocalStorage(
                key, value, encodeFlag);
            if (value) {
                App_Core.log(1,
                    'saveArrayToLocalStorage has passed', 'green');
                totalPasses++;
            } else {
                App_Core.log(3,
                    'saveArrayToLocalStorage has Failed!');
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.getValueForKeyAsObject =
        function() {
            var key = "testArray2",
                firstKeyPassed, secondKeyPassed;
            var value = {
                firstVal: "firstValue",
                secondVal: 2
            };
            // first save the object to local storage
            App_Core.StorageHandler.appendObjectToLocalStorageArray(
                key, value, true);
            // read the object from local storage
            var objRead = App_Core.StorageHandler.getValueForKeyAsObject(
                key, true);
            if (objRead) {
                //** we use this to test for values of the object saved
                Object.keys(objRead).forEach(function(key, index) {
                    if (key === "firstVal") {
                        if (objRead[key] === "firstValue") {
                            firstKeyPassed = true;
                        } else {
                            firstKeyPassed = false;
                        }
                    }
                    if (key === "secondVal") {
                        if (objRead[key] === 2) {
                            secondKeyPassed = true;
                        } else {
                            secondKeyPassed = false;
                        }
                    }
                });
                if (firstKeyPassed && secondKeyPassed) {
                    App_Core.log(1,
                        'getValueForKeyAsObject has passed',
                        'green');
                    totalPasses++;
                } else {
                    App_Core.log(3,
                        'getValueForKeyAsObject has Failed!');
                    totalErrors++;
                }
            } else {
                App_Core.log(3,
                    'getValueForKeyAsObject has Failed!');
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.appendObjectToLocalStorageArray =
        function() {
            var key = "testArrayAppend";
            var valueArray = [{
                name: "firstObj"
            }];
            var newObj = {
                name: "secondObj"
            };
            // first save the object to local storage
            App_Core.StorageHandler.appendObjectToLocalStorageArray(
                key, valueArray, true);
            // append the new value to the existing array
            App_Core.StorageHandler.appendObjectToLocalStorageArray(
                key, newObj, true);
            var returnedArray = App_Core.StorageHandler.getValueForKeyAsObject(
                key, true);
            if (returnedArray) {
                if (returnedArray[0].name === 'firstObj' &&
                    returnedArray[1].name === 'secondObj') {
                    App_Core.log(1,
                        'appendObjectToLocalStorageArray has passed',
                        'green');
                    totalPasses++;
                } else {
                    App_Core.log(3,
                        'appendObjectToLocalStorageArray has Failed'
                    );
                    totalErrors++;
                }
            } else {
                App_Core.log(3,
                    'appendObjectToLocalStorageArray has Failed');
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.appendStringToLocalStorage =
        function() {
            var originalVal = "this is a test";
            var addedVal = "this is another test";
            var returnedVal;
            // create the key/value in the local storage
            App_Core.StorageHandler.appendStringToLocalStorage(
                'testingAppendString', originalVal, false);
            // add the second string to the same key;
            App_Core.StorageHandler.appendStringToLocalStorage(
                'testingAppendString', addedVal, false);
            returnedVal = App_Core.StorageHandler.getValueForKeyAsString(
                'testingAppendString', false);
            if (returnedVal === "this is a testthis is another test") {
                App_Core.log(1,
                    'appendStringToLocalStorage has passed',
                    'green');
                totalPasses++;
            } else {
                App_Core.log(3,
                    'appendStringToLocalStorage has Failed!');
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.appendValueToKey =
        function(key, value, encodeFlag) {
            if (!key) {
                key = "testString";
            }
            if (!value) {
                value = "Append Value to key is being tested";
            }
            // create the entry in the local storage
            App_Core.StorageHandler.appendValueToKey(key, value,
                encodeFlag);
            var returnedValue = App_Core.StorageHandler.getValueForKeyAsString(
                key, encodeFlag);
            if (returnedValue === "Append Value to key is being tested") {
                App_Core.log(1, 'appendValueToKey has passed',
                    'green');
                totalPasses++;
            } else {
                App_Core.log(3, 'appendValueToKey has Failed!');
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.replaceValueForExistingKey =
        function(key, encodeFlag) {
            if (!key) {
                key = "ReplaceValueTest";
            }
            var origValue =
                "this is a test for replacing a key in storage";
            // create the entry in the local storage
            App_Core.StorageHandler.appendValueToKey(key,
                origValue, encodeFlag);
            App_Core.StorageHandler.replaceValueForKey(key,
                "This value has been replaced", encodeFlag);
            var returnedVal = App_Core.StorageHandler.getValueForKeyAsString(
                key);
            if (returnedVal && returnedVal ===
                "This value has been replaced") {
                App_Core.log(1,
                    'replaceValueForExistingKey has passed',
                    'green');
                totalPasses++;
            } else {
                App_Core.log(3,
                    'replaceValueForExistingKey has Failed!');
                totalErrors++;
            }
        };
    unitTests[unitTests.length] = StorageTester.removeKeyFromStorage =
        function(key) {
            if (!key) {
                key = "RemoveKeyTest";
            }
            var value = "this is a test for removing a key in storage";
            // create the entry in the local storage
            App_Core.StorageHandler.appendValueToKey(key, value);
            // remove key from the storage
            App_Core.StorageHandler.removeKeyFromStorage(key);
            var returnedVal = App_Core.StorageHandler.getValueForKeyAsString(
                key);
            if (!returnedVal) {
                App_Core.log(1, 'removeKeyFromStorage has passed',
                    'green');
                totalPasses++;
            } else {
                App_Core.log(3,
                    'removeKeyFromStorage has Failed!');
                totalErrors++;
            }
        };
    // ** unit tests will fail on the next run if localstorage is not cleared up
    StorageTester.clearLocalStorage = function() {
        App_Core.StorageHandler.clearLocalStorage();
    };
    StorageTester.cleanup = function() {
        StorageTester.clearLocalStorage(); //** cleaning up after
        totalErrors = 0;
        totalPasses = 0;
    };
    // run all unit tests
    StorageTester.runAllTests = function() {
        var failTestMsgColor;
        App_Core.log(1,
            '*** RUNNING StorangeHandler MODULE UNIT TESTS ***',
            'orange');
        // run all unit tests
        for (var i = 0; i < unitTests.length; i++) {
            unitTests[i]();
        }
        mainTestModule.reportTestResults(unitTests.length,
            totalPasses, totalErrors);
        StorageTester.cleanup();
    };
    return mainTestModule;
})(App_Core.AppTester); // using tight augmentation