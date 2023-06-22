# Preconditions

* Fill User Fixture with your own Login and Password 
[User.ts](fixture%2FUser.ts)
* Fill BrowserStack Credential [first.conf.ts](test%2Ffirst.conf.ts)
* Run tests BrowserStack - `npm run testBrowserStack`
* Run tests Local - `npm run test`
* Go to [BrowserStack](https://www.browserstack.com/) Dashboard

# Device list
Can be managed on [Config file](test%2Ffirst.conf.ts) just add  `'bstack:options': {
projectName: "FAIMS3",
buildName: 'FAIMS3 Android',
deviceName: 'Samsung Galaxy Tab S8',
platformVersion: '12.0',
platformName: 'android',
}` in capabilities array

# Reporter
After Suite run was finished you can look on report - [Reporter](https://observability.browserstack.com/projects/FAIMS3/builds) 

# Test suites
Create new notebook Suite - [newNoteBookTablet.ts](test%2Fspecs%2FnewNoteBookTablet.ts)

Sing in Tests Suite - [SignInTests.ts](test%2Fspecs%2FSignInTests.ts)

User Tests Suite - [UserTests.ts](test%2Fspecs%2FUserTests.ts)

WorkSpaceSuite - [WorkSpaceTests.ts](test%2Fspecs%2FWorkSpaceTests.ts)

# Locators 
Describes by Pages [pages](pages)