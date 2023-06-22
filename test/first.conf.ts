exports.config = {
    /*Put your user and key from browserstack*/
    user: process.env.BROWSERSTACK_USERNAME || '',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '',
    hostname: 'hub.browserstack.com',
    updateJob: false,
    specs: [
        './specs/**.ts',
    ],
    exclude: [],
    services: [
        [
            'browserstack',
            {
                app: 'bs://16ac49f20da6409ce07a4931a1f2754fba31e761',
                buildIdentifier: "${BUILD_NUMBER}",
                browserstackLocal: true
            },
        ]
    ],
    capabilities: [{
        'bstack:options': {
            projectName: "FAIMS3",
            buildName: 'FAIMS3 Android',
            deviceName: 'Samsung Galaxy Tab S8',
            platformVersion: '12.0',
            platformName: 'android',
        }
    }, {
        'bstack:options': {
            projectName: "FAIMS3",
            buildName: 'FAIMS3 Android',
            deviceName: 'Samsung Galaxy Tab S7',
            platformVersion: '11.0',
            platformName: 'android',
        }
    }],


    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    maxInstances: 1,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }
};