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
                app: 'bs://168b32756177ca33126733aecc9f87b1b1692f60',
                buildIdentifier: "${BUILD_NUMBER}",
                browserstackLocal: true,
                interactiveDebugging: true,
            },
        ]
    ],
    capabilities: [{
        'bstack:options': {
            projectName: "FAIMS3",
            buildName: 'FAIMS3 Android',
            deviceName: 'Google Pixel 4',
            platformVersion: '11.0',
            platformName: 'android',
            interactiveDebugging: true
    }},{
        'bstack:options': {
            projectName: "FAIMS3",
            buildName: 'FAIMS3 Android',
            deviceName: 'Samsung Galaxy Tab S7',
            platformVersion: '11.0',
            platformName: 'android',
            interactiveDebugging: true
        }},
    ],


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