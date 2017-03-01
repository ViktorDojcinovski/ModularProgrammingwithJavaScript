// adding AppTester as a sub-module
App_Core.AppTester = (function() {
    
    function runAllUnitTests() {
        var testModule;
        for (testModule in App_Core.AppTester) {
            if (typeof App_Core.AppTester[testModule] ===
                'object') {
                // run tests
                App_Core.AppTester[testModule].runAllTests();
            }
        }
    }

    function reportTestResults(totalNumOfTest, passedNum, failedNum) {
        var failTestMsgColor;
        failTestMsgColor = failedNum ? 'red' : 'pink';
        App_Core.log(1, 'Total number of tests run: ' +
            totalNumOfTest, 'orange');
        App_Core.log(1, 'Number of Tests Passed: ' +
            passedNum, 'green');
        App_Core.log(1, 'Number of Tests failed: ' +
            failedNum, failTestMsgColor);
    }
    return {
        runAllUnitTests: runAllUnitTests,
        reportTestResults: reportTestResults
    };
})();