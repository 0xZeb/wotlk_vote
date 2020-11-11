const puppeteer = require('puppeteer-core');

(async () => {

  const browser = await puppeteer.launch({headless:false});

  const page = await browswer.newPage();
  await page.goto('https://wotlkraids.com/login');

  await page.type( "#login_username", "ironshot");
  await page.type( "#login_password", "zebadactyl73");


  await Promise.all([
    page.waitForNavigation(),
    page.click("#content_ajax > article > section > form > center > input[type=submit]")
  ])
  .then( values = () => {
    console.log("prolly worked?")
  })
  .catch(error => {
    console.error(error.message)
  });

  await page.screenshot({path: 'wotlk.png'});

  await browser.close();

})().catch(e => {console.log(e)});
