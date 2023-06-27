import Page from "./Page";

class SignInPage extends Page{
    // get usernameField () {return $('//*[@resource-id=\'InputIdentifier\']')}
    // get passwordField () {return $('//*[@resource-id=\'InputPassword\']')}
    get submitButton () {return $('//*[@text=\'Submit\']')}
    get dataCentral () {return $('//android.view.View[@content-desc="Data Central"]')}
    get usernameField () {return $('//*[@resource-id=\'username\']')}
    get passwordField () {return $('//*[@resource-id=\'password\']')}
    get continueButton () {return $('//*[@text=\'Continue\']')}

    async usernameSendValue(username:string){
        await this.usernameField.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.usernameField.setValue(username)
    }

    async usernameIsDisplayed(){
        await driver.pause(3000)
        return await this.usernameField.isDisplayed()
    }

    async passwordSendValue(password:string){
        await this.passwordField.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.passwordField.setValue(password)
    }


    async dataCenterClick(){
        await this.dataCentral.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.dataCentral.click()
    }

    async continueClick(){
        await this.continueButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.continueButton.click()
    }
}

export default new SignInPage()