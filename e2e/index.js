const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "emulator-5554",
    browserName: "Chrome",
    automationName: "UiAutomator2"
  }
};

const DEFAULT_TIMEOUT = 15000;
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
async function main () {
  const client = await wdio.remote(opts);

  // await client.url("https://www.google.com/");
  await client.url("http://masaboo.cside.com/new_html1/ht_55.htm");
  
//  await client.saveScreenshot(process.env.SCREENSHOT_PATH + "/1.png");
  // const inputArea = await client.$('.gLFyf');
  // const inputArea = await client.$('[type="search"]');
  const inputArea = await client.$('[type="text"]');
  await inputArea.addValue("A");
  // await inputArea.addValue("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  // await inputArea.setValue({"value": "ABCDEFGHIJKLMNOPQRSTUVWXYZ"});
  await inputArea.addValue("abcdefghijklmnopqrstuvwxyz");
  await inputArea.addValue("あいうえおかきくけこさしすせそ");
  await inputArea.addValue("アイウエオカキクケコサシスセソ");

//   const menuButton = await client.$(".header__menu");
//   await menuButton.waitForDisplayed({timeout: DEFAULT_TIMEOUT});
//   await menuButton.click();
//   await sleep(5000);
// //  await client.saveScreenshot(process.env.SCREENSHOT_PATH + "/2.png");

//   await sleep(2000);
//   await client.touchScroll(0, 500);
//   await sleep(1000);

//   const siryoButton = await client.$('a[href="/download/company-overview/"]');
//   await siryoButton.waitForDisplayed({timeout: DEFAULT_TIMEOUT});
//   await siryoButton.click();
// //  await client.saveScreenshot(process.env.SCREENSHOT_PATH + "/3.png");

  await client.deleteSession();
}

main();
