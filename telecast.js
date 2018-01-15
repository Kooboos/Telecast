var webdriver = require('selenium-webdriver'), By  = webdriver.By, until = webdriver.until;
var chromeCapabilities = webdriver.Capabilities.chrome();
var chromeOptions = {
    'args': ['']
}
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://web.telegram.org/#/login')



// var driver = new webdriver.Builder().forBrowser('chrome').build();

// driver.get('https://web.telegram.org/#/login')

// //Element which prompts to select groupchat to start chatting in.

// var query = driver.wait(until.elementLocated(By.css("body > div.page_wrap > div.im_page_wrap.clearfix.im_page_peer_not_selected > div > div.im_history_col_wrap.noselect > div.im_history_not_selected_wrap > div")));

// query.then(()=> {
//     console.log('found Element!');
//     // let groupchats = [];
//     // const getGroupChats = driver.findElements(By.className("im_dialog_wrap"));
//     // getGroupChats.then(chats=>{
//     //     console.log('chats:-------\n', chats);
//     // })

//     //Check is this works
//     driver.sleep(15000);
//     driver.findElements(By.xpath('//*[@id="ng-app"]/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[1]/div[2]/div[2]/div[4]/div[2]/div/div/div[2]/div')).then((elements)=>{
//         elements.map((oneElement)=>[
//             oneElement.getText().then((text)=>{
//                 console.log('this is one message:', text);
//             })
//         ])
//     })
// })