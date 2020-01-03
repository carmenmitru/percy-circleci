describe("Tabs", () => {
    beforeEach(() => {
        // load the webpage
        browser.url("./#/tabs");
    })
    it("shows the first tab on page load", () => {

        let tabList = browser.$$("li.nav-item");
        let firstTab = tabList[0];
        expect(firstTab.$("a").getAttribute("class")).to.contain("active");
    });
    it("shows the first tab content on page load", () => {
        // fetch the paragraph
        let element = browser.$("div.tab-pane  > p");
        let isDisplayed = element.isDisplayed();
        expect(isDisplayed).to.be.true;
    });
    it("display black header of the first tab", () => {
        let tabList = browser.$$("li.nav-item");
        let firstTab = tabList[0];
        const firstLink = firstTab.$("a");
        console.log(firstLink.getCSSProperty("color"));
        expect(firstLink.getCSSProperty("color").parsed.hex).to.equal("#495057");
    });
    it("the second tab becomes active when click on fancy tab", () => {
        let secondTab = browser.$("a#fancy-tab");
        secondTab.click();
        expect(secondTab.getAttribute("class")).to.contain("active");
    })

});