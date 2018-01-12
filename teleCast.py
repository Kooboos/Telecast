from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import pickle
import time


# create new instance of chrome in incognito mode
browser = webdriver.Chrome()

# go to website of interest
browser.get("https://web.telegram.org")

pickle.dump( browser.get_cookies() , open("cookies.pkl", "wb"))
# wait up to 10 seconds for page to load
timeout = 40
try:
    WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//*[@id='ng-app']/body/div[1]/div[2]/div/div[2]/div[1]/div")))

    print 'select the chat you want to scrape'
    time.sleep(10)  

    array = browser.find_elements_by_class("im_message_text")
    print 'this is the result'
    print array
except TimeoutException:
    print("Timed out waiting for page to load")
    browser.quit()


