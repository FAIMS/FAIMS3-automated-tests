export default class Page{
    private title: string;

    constructor() {
        this.title = 'My Page'
    }

    async open(path) {
        await browser.url(path)
    }

    async getWaiterTimeForElement(){
        return 60000;
    }

    async waitElementAndClick(element: WebdriverIO.Element) {
        await element.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await element.click()
    }

    async isElementPresent(element: WebdriverIO.Element): Promise<boolean> {
        return await element.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
    }

    async waitElementAndGetText(element: WebdriverIO.Element) {
        await element.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        return await element.getText()
    }

    async waitElementAndSendKeys(element: WebdriverIO.Element, keys: string) {
        await element.waitForDisplayed({timeout:await this.getWaiterTimeForElement()})
        await element.setValue(keys)
    }

    async scrollToElement(element: WebdriverIO.Element){
        await driver.touchAction([
            { action: 'moveTo',element: element},
            'release'
        ])
    }

}