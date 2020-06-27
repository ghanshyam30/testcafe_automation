const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe()
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['tests/dev.js'])
            .browsers(['firefox'])
            .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });