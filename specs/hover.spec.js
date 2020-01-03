// extract the thumbnail image
browser.addCommand("getThumbnailImage", (index) => {
    return browser.$$("div.thumbnail")[index].$("img");
});
browser.addCommand("getThumbnail", (index) => {
    return browser.$$("div.thumbnail")[index].$("div.caption > h4");
});
browser.addCommand("getThumbnailDetails", (index) => {
    let thumbnailDetails = {
        title: browser.$$("div.thumbnail")[index].$("div.caption > h4").getText(),
        description: browser.$$("div.thumbnail")[index].$("div.caption > p").getText()
    };
    return thumbnailDetails;
});
describe("Hover Images", () => {
    beforeEach(() => {
        browser.url("./#/hover");
    });
    it("renders the thumbnail details on hover", () => {
        let first_thumbnail = browser.getThumbnailImage(0);
        first_thumbnail.moveTo(10, 10);
        browser.pause(500);
        let thumbnailDetails = browser.getThumbnail(0);
        console.log(browser.getThumbnailDetails(0));
        expect(thumbnailDetails.isDisplayed()).to.be.true;
    });
});