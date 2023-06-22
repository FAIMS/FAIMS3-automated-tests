import Page from "./Page";

class WelcomePage extends Page{
    get signInHomeButton () {return $('//android.widget.TextView[@text=\'SIGN IN\']')}
    get signInButton () {return $('//android.widget.Button[@text=\'SIGN IN\']')}
    get returnAppButton () {return $('//*[@text=\'Return to App\']')}
    get logOutAppButton () {return $('//android.view.View[@content-desc="Log Out of App "]')}
    get workspaceButton () {return $('//android.view.View[@content-desc="WORKSPACE"]')}
    get maximizeAppButton () {return $('//android.widget.Button[@content-desc="Maximize"]')}

    async maximizeAppButtonClick(){
        await this.maximizeAppButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.maximizeAppButton.click()
    }

    async signInHomeButtonClick(){
        await this.signInHomeButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.signInHomeButton.click()
    }

    async signInButtonClick(){
        await this.signInButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.signInButton.click()
    }

    async signInButtonIsDisplayed(){
        return await this.signInButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
    }

    async returnAppButtonClick(){
        await this.returnAppButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.returnAppButton.click()
    }

    async logOutButtonClick(){
        await this.logOutAppButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.logOutAppButton.click()
    }

    async workspaceButtonClick(){
        await this.workspaceButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.workspaceButton.click()
    }


}

export default new WelcomePage()