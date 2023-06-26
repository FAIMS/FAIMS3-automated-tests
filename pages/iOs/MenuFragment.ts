import Page from "../Page";


class MenuFragment extends Page {
    get menuButton() {
        return $('//XCUIElementTypeButton[@name="open drawer"]')
    }

    get returnButton(){
        return $('//XCUIElementTypeOther[@name="FAIMS3"]/XCUIElementTypeOther/XCUIElementTypeButton')
    }
    get menuButtonHome() {
        return $('//XCUIElementTypeLink[@name="Home"]')
    }

    get menuButtonWorkspace() {
        return $('//XCUIElementTypeLink[@name="WorkSpace"]')
    }

    get menuButtonNoteBooks() {
        return $('//XCUIElementTypeLink[@name="Notebooks"]')
    }

    get menuButtonNewNotebook() {
        return $('//XCUIElementTypeLink[@name="New Notebook"]')
    }

    async menuButtonClick() {
        await this.menuButton.waitForDisplayed({timeout: await this.getWaiterTimeForElement()})
        await this.menuButton.click()
    }

    async menuButtonReturnClick() {
        await this.returnButton.waitForDisplayed({timeout: await this.getWaiterTimeForElement()})
        await this.returnButton.click()
    }

    async menuButtonHomeClick() {
        await this.menuButtonHome.waitForDisplayed({timeout: await this.getWaiterTimeForElement()})
        await this.menuButtonHome.click()
    }

    async menuButtonWorkspaceClick() {
        await this.menuButtonWorkspace.waitForDisplayed({timeout: await this.getWaiterTimeForElement()})
        await this.menuButtonWorkspace.click()
    }

    async menuButtonNoteBookClick() {
        await this.menuButtonNoteBooks.waitForDisplayed({timeout: await this.getWaiterTimeForElement()})
        await this.menuButtonNoteBooks.click()
    }

    async menuButtonNewNoteBookClick() {
        await this.menuButtonNewNotebook.waitForDisplayed({timeout: await this.getWaiterTimeForElement()})
        await this.menuButtonNewNotebook.click()
    }

}
export default new MenuFragment()