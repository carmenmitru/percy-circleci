describe("Iframe", () => {
    beforeEach(() => {
        browser.url("./#/iframe");
    })
    it('should look nice', async function () {
        //await browser.url(TEST_URL)
        await percySnapshot(browser, this.test.fullTitle())
        //assert.equal(await browser.getTitle(), 'jQuery • TodoMVC')
    })

    // it('should save screenshot of fullpage', () => {
    //     browser.saveFullPageScreen('iframe', {});
    // });

    // it('should compare successful with a baseline', () => {
    //     expect(browser.checkScreen('iframe', {})).to.equal(0);
    // });

    // it('should save screenshot of navbar', () => {
    //     browser.saveElement(browser.$('nav'), 'navbar', {});

    // });

    // it('should compare navabr successful with a baseline navbar', () => {
    //     expect(browser.checkElement(browser.$('nav'), 'navbar', {})).to.equal(0);
    // });


});