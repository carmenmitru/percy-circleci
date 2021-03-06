browser.addCommand("getActiveSlide", (carouselElements) => {
    const index = carouselElements.findIndex(el => {
        return (el.getAttribute("class").includes("active") === true);
    });
    return index;
});
describe("Carousel", () => {
    let images = [
        {
            img: "https://picsum.photos/id/944/900/500",
            caption: "Nature"
        },
        {
            img: "https://picsum.photos/id/1011/900/500",
            caption: "Lake"
        },
        {
            img: "https://picsum.photos/id/984/900/500",
            caption: "Landscape"
        }

    ]
    beforeEach(() => {
        browser.url("./#/carousel");
    })
    it("should count the number of slides in carousel", () => {
        let carouselElements = browser.$$("div.carousel-item");
        expect(carouselElements.length).to.equal(images.length);
    });
    it("renders carousel image + caption test", () => {
        let carouselElements = browser.$$("div.carousel-item");
        carouselElements.forEach(item => {
            //extract the caption text
            let itemCaption = browser.$("div.carousel-caption  > h3");
            // extract the image
            let itemImage = browser.$("div.picsum-img-wrapper > img");
            it("render the carousel image", () => {
                expect(itemImage.isDisplayed()).to.be.true;
            })
            it("render the caption text", () => {
                expect(itemCaption.isDisplayed()).to.be.true;
            });
        });
    });
    it("renders the next slide on next click", () => {
        let nextClick = browser.$("a.carousel-control-next");
        let carouselElements = browser.$$("div.carousel-item");
        let currentActiveSlide = browser.getActiveSlide(carouselElements);
        // console.log("Active slide " + currentActiveSlide);
        nextClick.click();
        let newActiveSlide = browser.getActiveSlide(carouselElements);
        expect(newActiveSlide).to.equal(currentActiveSlide + 1);

    });
    it("renders the previous slide on prev click", () => {
        let prevClick = browser.$("a.carousel-control-prev");
        let carouselElements = browser.$$("div.carousel-item");
        let currentActiveSlide = browser.getActiveSlide(carouselElements);
        // console.log("Active slide " + currentActiveSlide);
        prevClick.click();
        let newActiveSlide = browser.getActiveSlide(carouselElements);
        expect(newActiveSlide).to.equal(currentActiveSlide - 1);
    });
});