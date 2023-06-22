import MenuFragment from "../../pages/MenuFragment";
import WorkSpacePage from "../../pages/WorkSpacePage";
import * as assert from "assert";
import WelcomePage from "../../pages/WelcomePage";
import SignInPage from "../../pages/SignInPage";
import {userFixture} from "../../fixture/User";

describe("WorkSpace Suite", () => {
    it('Check workspace', async () => {
        await MenuFragment.menuButtonClick()
        await MenuFragment.workSpaceButtonClick()
        await MenuFragment.backMenuButtonClick()

        await WorkSpacePage.availableTabClick()
        await WorkSpacePage.activedTabClick()

        assert.ok(await WorkSpacePage.availableTabIsDisplayed(), 'Workspaces tab not presented')
    })

    it('Sync On Campus', async () => {
        await MenuFragment.menuButtonClick()
        await MenuFragment.workSpaceButtonClick()
        await MenuFragment.backMenuButtonClick()

        await WorkSpacePage.availableTabClick()
        await WorkSpacePage.activeFirstElementClick()
        await WorkSpacePage.dialogActiveClick()
        assert.ok(await WorkSpacePage.checkBoxOnIsDisplayed(),'Sync not ON')
    })

    it('Sync Off Campus', async () => {
        await MenuFragment.menuButtonClick()
        await MenuFragment.workSpaceButtonClick()
        await MenuFragment.backMenuButtonClick()
        await WorkSpacePage.syncCheckBoxClick()
        await WorkSpacePage.dialogActiveClick()
        assert.ok(await WorkSpacePage.checkBoxOffIsDisplayed(),'Sync not OFF')
    })

    before(async function() {
        let name = this.test.parent.title
        const executorConfigName = {
            "action": "setSessionName",
            "arguments": {
                "name": name
            }
        };
        await driver.execute('browserstack_executor: ' + JSON.stringify(executorConfigName));

        const contexts = await driver.getContexts(); // get list of context
        await driver.switchContext(contexts[0].toString()); // set context to APP_NATIVE
        await WelcomePage.signInHomeButtonClick()
        await WelcomePage.signInButtonClick()

        /*Fill data in userFixture*/
        await SignInPage.usernameSendValue(userFixture.login)
        await SignInPage.passwordSendValue(userFixture.pass)
        await SignInPage.submitClick()
    });

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
})