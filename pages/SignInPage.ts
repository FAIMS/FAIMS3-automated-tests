import Page from "./Page";

class SignInPage extends Page{
    get usernameField () {return $('//*[@resource-id=\'InputIdentifier\']')}
    get passwordField () {return $('//*[@resource-id=\'InputPassword\']')}
    get submitButton () {return $('//*[@text=\'Submit\']')}

    async usernameSendValue(username:string){
        await this.usernameField.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.usernameField.setValue(username)
    }

    async passwordSendValue(password:string){
        await this.passwordField.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.passwordField.setValue(password)
    }

    async submitClick(){
        await this.submitButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.submitButton.click()
    }
}

export default new SignInPage()