import Page from "../Page";


class WelcomePage extends Page{
    get signInHomeButtoniOs () {
        return $('(//XCUIElementTypeLink[@name="SIGN IN"])[2]')
    }

    async signInButtonClick(){
        await this.signInHomeButtoniOs.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.signInHomeButtoniOs.click()
    }

    async signInButtonIsDisplayed(){
        return await this.signInHomeButtoniOs.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
    }
}

export default new WelcomePage()