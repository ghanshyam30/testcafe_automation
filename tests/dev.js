import DevHomePage from "../pages/devhomepage";
import DevAboutPage from "../pages/devaboutpage";
import DevDiscussTagPage from "../pages/devdiscusstagpage";

const devHomePage = new DevHomePage();
const devAboutPage = new DevAboutPage();
const devDiscussTagPage = new DevDiscussTagPage();

fixture('DEV Tests')
    .page('http://dev.to/');

test("Check founder's names", async(t) => {
    await t
        .click(devHomePage.navBar)
        .expect(devHomePage.allAboutDevOption).ok();
    await t
        .click(devHomePage.allAboutDevOption)
        .wait(3000)
        .expect(devHomePage.aboutLink).ok();
    await t
        .click(devHomePage.aboutLink)
        .expect(devAboutPage.firstFounder.exists).ok()
        .expect(devAboutPage.secondFounder.exists).ok()
        .expect(devAboutPage.thirdFounder.exists).ok();
});

test("Filter articles by discuss tag", async (t) => {
    await t
        .click(devHomePage.discussTag)
        .wait(3000)
        .expect(devHomePage.discussTag).ok();
    await t
        .click(devHomePage.discussTag)
        .expect(devDiscussTagPage.discussTitle.exists).ok();
});
