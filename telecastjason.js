
// var webdriver = require('selenium-webdriver'),
//     By  = webdriver.By,
//     until = webdriver.until;
    
//     var driver = new webdriver.Builder().forBrowser('chrome').build();
//     driver.get('https://web.telegram.org/#/login');
//     driver.wait(until.elementIsVisible(By.css('body > div.page_wrap > div > div.login_page > div.login_form_wrap > form > div.login_phone_groups_wrap.clearfix > div.md-input-group.login_phone_num_input_group.md-input-animated > input')));
//     driver.findElement(By.xpath('//*[@id="ng-app"]/body/div[1]/div/div[2]/div[2]/form/div[2]/div[2]/input')).click;
//     driver.findElement(By.xpath('//*[@id="ng-app"]/body/div[1]/div/div[2]/div[2]/form/div[2]/div[2]/input')).sendKeys('9175772837');
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
    // let groupchats = [];
    // const getGroupChats = driver.findElements(By.className("im_dialog_wrap"));
    // getGroupChats.then(chats=>{
    //     console.log('chats:-------\n', chats);
    // })

    //Check is this works
//     driver.sleep(15000);
//     driver.findElements(By.xpath('//*[@id="ng-app"]/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[1]/div[2]/div[2]/div[4]/div[2]/div/div/div[2]/div')).then((elements)=>{
//         elements.map((oneElement)=>[
//             oneElement.getText().then((text)=>{
//                 console.log('this is one message:', text);
//             })
//         ])
//     })
// })



//body > div.page_wrap > div.im_page_wrap.clearfix > div > div.im_history_col_wrap.noselect.im_history_loaded > div.im_history_selected_wrap > div > div.im_history_wrap.nano.active-scrollbar > div.im_history_scrollable_wrap.nano-content > div > div.im_history.im_history_selectable > div.im_history_messages > div:nth-child(3) > div:nth-child(2) > div > div > div > div.im_message_body.im_message_body_media > div > div.im_message_text
//body/   div[1]/                   div[2]/        div/                        div[2]/                               div[3]/                div/                   div[2]/                                      div[1]/                     div/                div[1]/                          div[2]/           |||     div[2]/            div[1]/      div[2]/div/ div/                   div[2]/                    div/       div[1]
//message box
//*[@id="ng-app"]/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[1]/div[2]/div[2]
//imtext path
//*[@id="ng-app"]/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[1]/div[2]/div[2]/div[1]/div[2]/div/div/div[2]/div/div[1]
//*[@id="ng-app"]/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[1]/div[2]