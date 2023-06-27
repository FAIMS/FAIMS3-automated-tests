import WelcomePage from "../../pages/WelcomePage";
import SignInPage from "../../pages/SignInPage";
import {userFixture} from "../../fixture/User";
import MenuFragment from "../../pages/MenuFragment";
import NewNoteBookPage from "../../pages/NewNoteBookPage";
import * as assert from "assert";

describe("Sign in Test Suite", async () => {

    it("sign-in with pass", async () => {
        const contexts = await driver.getContexts(); // get list of context
        await driver.switchContext(contexts[0].toString()); // set context to APP_NATIVE

        await WelcomePage.signInHomeButtonClick()
        await WelcomePage.signInButtonClick()

        if (!userFixture.isLocal){
            await WelcomePage.chromeChoseClick()
            await WelcomePage.alwaysClick()
        }

        if (await WelcomePage.logOutButtonIsDisplayed(10000)){
            await WelcomePage.logOutButtonClick()
            await SignInPage.dataCenterClick()
        }else {
            await SignInPage.dataCenterClick()
            await SignInPage.usernameSendValue(userFixture.login)
            await SignInPage.passwordSendValue(userFixture.pass)
            await SignInPage.continueClick()
        }

        await MenuFragment.menuButtonClick()
        await MenuFragment.newNoteBookButtonClick()
        await MenuFragment.backMenuButtonClick()

        assert.equal(await NewNoteBookPage.primaryTabGetText(), 'DESIGN', 'Tabs not presented')
    });

    before(async function () {
        if (!userFixture.isLocal) {
            let name = this.test.parent.title

            const executorConfigName = {
                "action": "setSessionName",
                "arguments": {
                    "name": name
                }
            };
            await driver.execute('browserstack_executor: ' + JSON.stringify(executorConfigName));
        }
    })

    after(async function () {
        if (!userFixture.isLocal) {
            let state = this.currentTest.state
            const executorConfig = {
                "action": "setSessionStatus",
                "arguments": {
                    "status": state
                },
            };
            await driver.execute('browserstack_executor: ' + JSON.stringify(executorConfig));
        }
    });

});