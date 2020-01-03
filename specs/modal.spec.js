describe("Modal", () => {
    beforeEach(() => {
        browser.url("./#/modal");
    });
    it("renders the modal on btn click", () => {
        let openBtn = browser.$("button");
        openBtn.click();
        let modal = browser.$("ngb-modal-window");
        modal.waitForDisplayed(14000);
        expect(modal.isDisplayed()).to.be.true;
    });

});