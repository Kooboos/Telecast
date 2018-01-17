
// var chromeCapabilities = webdriver.Capabilities.chrome();
// var o = new chrome.Options();
// o.addArguments("Users/jasoncaserta/Library/Application Support/Google/Chrome/Default");
// var driver = new webdriver.Builder().forBrowser('chrome').build();
// driver.get('https://web.telegram.org/#/login')


var webdriver = require('selenium-webdriver'), By  = webdriver.By, until = webdriver.until;
const username = require('username');
var chrome = require('selenium-webdriver/chrome');

username().then(username => {
    var o = new chrome.Options();
    o.addArguments("user-data-dir=/Users/" + username + "/Library/Application\ Support/Google/Chrome/Default");
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build();
    driver.get('https://web.telegram.org/#/im');

    var query = driver.wait(until.elementLocated(By.xpath('//*[@id="ng-app"]/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]')));

    query.then(() => {
        // let groupchats = [];
        // const getGroupChats = driver.findElements(By.className("im_dialog_wrap"));
        // getGroupChats.then(chats=>{
        //     console.log('chats:-------\n', chats);
        // })

        //Check is this works
        driver.sleep(10000);
        driver.findElements(By.css('li')).then((chats) => {
            chats.map((singleChat) => {
                singleChat 
            })
        })
        // driver.findElement(By.xpath('//*[@id="ng-app"]/body/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/ul/li[1]')).then((messageCountElement) => {
        //     messageCountElement.map((oneElement) => [
        //         oneElement.getText().then((text)=>{
        //             console.log('This is one text' , text);
        //         })
        //     ])
        //     console.log('COUNT IS ',messageCountElement)
        // })
        // driver.findElements(By.xpath('//*[@id="ng-app"]/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[1]/div[2]/div[2]/div[4]/div[2]/div/div/div[2]/div')).then((elements) => {
        //     elements.map((oneElement) => [
        //         oneElement.getText().then((text) => {
        //             console.log('this is one message:', text);
        //         })
        //     ])
        // })
    })
});