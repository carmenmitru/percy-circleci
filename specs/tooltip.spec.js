describe("Tooltip", () => {
    beforeEach(() => {
        browser.url("./#/tooltip");
    });
    it("on page load the tooltip is not displayed", () => {
        let tooltip = browser.$("ngb-tooltip-window");
        expect(tooltip.isDisplayed()).to.be.false;
    });
    it("renders the tooltip on btn click", () => {
        let btn = browser.$("button");
        let tooltip = browser.$("ngb-tooltip-window");
        btn.click();
        expect(tooltip.isDisplayed()).to.be.true;
    });
    it("disappears the tooltip on press escape", () => {
        let btn = browser.$("button");
        let tooltip = browser.$("ngb-tooltip-window");
        btn.click();
        browser.keys("Escape");
        expect(tooltip.isDisplayed()).to.be.false;
    });
});