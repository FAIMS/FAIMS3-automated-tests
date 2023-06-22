import WelcomePage from "../../pages/WelcomePage";
import SignInPage from "../../pages/SignInPage";
import {userFixture} from "../../fixture/User";
import MenuFragment from "../../pages/MenuFragment";
import NewNoteBookPage from "../../pages/NewNoteBookPage";
import * as assert from "assert";

describe("Sign in Test Suite", () =>  {

    it("sign-in with wrong cred", async () => {
        const contexts = await driver.getContexts(); // get list of context
        await driver.switchContext(contexts[0].toString()); // set context to APP_NATIVE

        await WelcomePage.signInHomeButtonClick()
        await WelcomePage.signInButtonClick()

        await SignInPage.usernameSendValue('someUsername')
        await SignInPage.passwordSendValue('somePassword')

        assert.ok(SignInPage.submitButton.isDisplayed())
    });


    it("sign-in with pass", async () => {
        /*Fill data in userFixture*/
        await SignInPage.usernameSendValue(userFixture.login)
        await SignInPage.passwordSendValue(userFixture.pass)
        await SignInPage.submitClick()

        await MenuFragment.menuButtonClick()

        await MenuFragment.newNoteBookButtonClick()

        await MenuFragment.backMenuButtonClick()

        assert.equal(await NewNoteBookPage.primaryTabGetText(), 'DESIGN', 'Tabs not presented')
    });

    before(async function () {
        let name = this.test.parent.title
        const executorConfigName = {
            "action": "setSessionName",
            "arguments": {
                "name": name
            }
        };
        await driver.execute('browserstack_executor: ' + JSON.stringify(executorConfigName));})

    after(async function () {
        let state = this.currentTest.state
        const executorConfig = {
            "action": "setSessionStatus",
            "arguments": {
                "status": state
            },
        };
        await driver.execute('browserstack_executor: ' + JSON.stringify(executorConfig));
    });
});