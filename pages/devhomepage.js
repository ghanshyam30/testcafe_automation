import { Selector } from 'testcafe';

export default class DevHomePage{
    constructor(){
        this.navBar = Selector('button').withAttribute('id','navigation-butt');
        this.allAboutDevOption = Selector('a').withText('All about DEV');
        this.aboutLink = Selector('a').withText('About');
        this.discussTag = Selector('span').withText('#discuss').nth(1);
    }
}