
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
            // chats.map((singleChat) => {
            //     console.log(singleChat);
                
            // })
            // console.log(chats);
            chats[0].findElements(By.css('*')).then(newElements=>{
                // console.log('this is one new element:', newElements);
                newElements[0].getContents().then(contents=>{
                    console.log('contents:', contents);
                })
                
                // newElements[1].findElements(By.css("*")).then(newerElements=>{
                //     console.log('this is the second layer:', newerElements);
                // })
                    // console.log('these are the second children elements:', newerElements);
                    // newerElements[1].getText().then(messageCount=>{
                    //     console.log('this is the number:', messageCount);
                    // })
                // })
            })
            
            
            
            // for(let a=0; a< chats.length; a++){
            //     chats[a].findElements(By.css('*')).then(newElements=>{
            //         // console.log('this is one new element:', newElements);
            //         newElements[0].findElements(By.css("*")).then(newerElements=>{
            //             console.log('these are the second children elements:', newerElements);
            //             // newerElements[1].getText().then(messageCount=>{
            //             //     console.log('this is the number:', messageCount);
            //             // })
            //         })
            //     })
            // }
            // ___________________________
            // const domParser = new DOMParser();
            // const doc = domParser.











            // ___________________________

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
