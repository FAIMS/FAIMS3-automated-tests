exports.config = {
    /*Put your user and key from browserstack*/
    user: process.env.BROWSERSTACK_USERNAME || '',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '',
    hostname: 'hub.browserstack.com',
    updateJob: false,
    specs: [
        './specs/iOs/SignInTests.ts',
    ],
    exclude: [],
    services: [
        [
            'browserstack',
            {
                app: 'bs://a80244008fa5951b0618bfd3de6887696599d00f',
                buildIdentifier: "${BUILD_NUMBER}",
                browserstackLocal: true
            },
        ]
    ],
    capabilities: [{
        'bstack:options': {
            projectName: "FAIMS3",
            deviceName: 'iPad Pro 11 2022',
            platformVersion: '16',
            platformName: 'ios',
        },
    },{
        'bstack:options': {
            projectName: "FAIMS3",
            deviceName: 'iPhone 14',
            platformVersion: '16',
            platformName: 'ios',
        },
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