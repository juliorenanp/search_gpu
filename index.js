const http = require('http');
const puppeteer = require('puppeteer');

const site = 'https://www.submarino.com.br/produto/2818205379/placa-de-video-gigabyte-amd-radeon-rx-5600-xt-windforce-oc-6g-6gb-gddr6-rev-1-0-gv-r56xtwf2oc-6gd';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
    await page.goto(site);
    await page.setDefaultNavigationTimeout(60000);
    await page.screenshot({ path: 'ronaldo.png' });

    try {
      const element = await page.$("#title-stock");
      const text = await page.evaluate(element => element.textContent, element);
      console.log(text);  
    } catch (error) {
      console.log(error);
    }

    await browser.close();
  })();


