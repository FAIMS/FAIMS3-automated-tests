import {newNoteBookFixture} from "../../fixture/newNoteBook";
import {tapByCoordinates} from "../utils/scroll";
import * as assert from "assert";
import MenuFragment from "../../pages/MenuFragment";
import NewNoteBookPage from "../../pages/NewNoteBookPage";
import WelcomePage from "../../pages/WelcomePage";
import NoteBookPage from "../../pages/NoteBookPage";
import SignInPage from "../../pages/SignInPage";
import {userFixture} from "../../fixture/User";

describe("Create New Note Book", () => {

    it("sign-in with pass", async () => {
        await MenuFragment.menuButtonClick()

        await MenuFragment.newNoteBookButtonClick()

        await MenuFragment.backMenuButtonClick()

        assert.equal(await NewNoteBookPage.primaryTabGetText(), 'DESIGN', 'Tabs not presented')
    });

    it("New noteBook", async () => {
        await tapByCoordinates()
        await NewNoteBookPage.projectNameSendValue(newNoteBookFixture.projectName)

        await NewNoteBookPage.descriptionSendValue(newNoteBookFixture.desc)
        await NewNoteBookPage.leadSendValue(newNoteBookFixture.lead)
        await NewNoteBookPage.leadInstitutionSendValue(newNoteBookFixture.leadInstitiution)
        await NewNoteBookPage.goNextClick()

        await NewNoteBookPage.metaFieldSendValue(newNoteBookFixture.newMeta)
        await NewNoteBookPage.metaAddButtonClick()
        await NewNoteBookPage.goNextClick()

        await NewNoteBookPage.userRoleSendValue(newNoteBookFixture.newRole)
        await NewNoteBookPage.userAddButtonClick()
        await NewNoteBookPage.goNextClick()

        await NewNoteBookPage.attachFieldClick()
        await NewNoteBookPage.imageRootChoiceFile()

        await NewNoteBookPage.goNextIdButtonClick()

        await tapByCoordinates()
        await NewNoteBookPage.inheritCheckBoxClick()
        await NewNoteBookPage.goNextIdButtonClick()

        await NewNoteBookPage.descriptionSectionSendValue('Some desc')

        await NewNoteBookPage.goNextIdButtonClick()
        await NewNoteBookPage.inputTextFieldSection()

        await NewNoteBookPage.submitButtonClick()
        await NewNoteBookPage.submitSaveButtonClick()

        await MenuFragment.menuButtonClick()
        await MenuFragment.notebooksButtonClick()
        assert.equal(await MenuFragment.getProjectNameFromNoteBook(), newNoteBookFixture.projectName, 'Incorrect project name')
        await MenuFragment.backMenuButtonClick()
    });

    it('new Record', async () => {
        await MenuFragment.menuButtonClick()
        await MenuFragment.projectNameFromNoteBookClick()
        await MenuFragment.backMenuButtonClick()

        await NoteBookPage.infoTabClick()
        await NoteBookPage.settingsTabClick()
        await NoteBookPage.recordsTabClick()

        await NoteBookPage.draftsClick()
        await NoteBookPage.recordsClick()
    })

    it('Refresh notebook', async () => {
        await NoteBookPage.refreshButtonClick()
    })

    it('New record page opened', async () => {
        await MenuFragment.menuButtonClick()
        await MenuFragment.projectNameFromNoteBookClick()
        await MenuFragment.backMenuButtonClick()

        await NoteBookPage.newRecordButtonClick()
        // TODO impl when app was fixed
    })

    before(async function () {
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

    after(async  function () {
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