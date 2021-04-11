const http = require('http');
const puppeteer = require('puppeteer');

const site = 'https://www.shoptime.com.br/produto/2056887915/placa-de-video-asus-geforce-gtx-1660-super-oc-edition?opn=GOOGLEXML&sellerid=18552346000168';

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
    await page.goto(site);
    // await page.screenshot({ path: 'example2.png' });
    page.on('console', (log) => console[log._type](log._text));
  
    

    await browser.close();
  })();


