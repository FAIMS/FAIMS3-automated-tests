import Page from "./Page";

class WelcomePage extends Page{
    get signInHomeButton () {
        return $('//android.widget.TextView[@text=\'SIGN IN\']')
    }

    get signInHomeButtoniOs () {
        return $('(//XCUIElementTypeLink[@name="SIGN IN"])[2]')
    }

    get signInButton () {return $('//android.widget.Button[@text=\'SIGN IN\']')}
    get returnAppButton () {return $('//*[@text=\'Return to App\']')}
    get logOutAppButton () {return $('//android.view.View[@content-desc="Log Out of App "]')}
    get workspaceButton () {return $('//android.view.View[@content-desc="WORKSPACE"]')}
    get maximizeAppButton () {return $('//android.widget.Button[@content-desc="Maximize"]')}

    get chromeChoos () {return $('//*[@resource-id=\'android:id/resolver_list\']/android.widget.LinearLayout[2]')}

    get alwaysChoose () {return $('//*[@resource-id=\'android:id/button_always\']')}


    async chromeChoseClick(){
        await this.chromeChoos.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.chromeChoos.click()
    }


    async alwaysClick(){
        await this.alwaysChoose.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.alwaysChoose.click()
    }

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

    async signInButtonClickiOs(){
        await this.signInHomeButtoniOs.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.signInHomeButtoniOs.click()
    }

    async signInButtonIsDisplayed(){
        return await this.signInButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
    }

    async returnAppButtonClick(){
        await this.returnAppButton.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await this.returnAppButton.click()
    }

    async logOutButtonIsDisplayed(time:number){
        try{
            await this.logOutAppButton.waitForDisplayed({timeout:time})
            return await this.logOutAppButton.isDisplayed()
        }catch (e){
            return await this.logOutAppButton.isDisplayed()
        }
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