const http = require('http');
const { moveCursor } = require('node:readline');
const puppeteer = require('puppeteer');

const sitex = 'https://www.submarino.com.br/produto/2818205379/placa-de-video-gigabyte-amd-radeon-rx-5600-xt-windforce-oc-6g-6gb-gddr6-rev-1-0-gv-r56xtwf2oc-6gd';

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
  await page.goto(sitex);
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


function getSites() {

  let listOfSites: { site: string, url: string, div: string }[] = [
    { site: '', url: '', div: '' },

    { site: 'TeraByte', url: 'https://www.terabyteshop.com.br/produto/12436/placa-de-video-asus-phoenix-geforce-gtx-1660-super-oc-dual-6gb-gddr6-192bit-ph-gtx1660s-o6g', div: '#indisponivel' },
    
    { site: 'Shoptime', url: 'https://www.shoptime.com.br/produto/2056887915/placa-de-video-asus-geforce-gtx-1660-super-oc-edition?opn=GOOGLEXML&sellerid=18552346000168', div: '#title-stock' },
    { site: 'Shoptime', url: 'https://www.shoptime.com.br/produto/133253298/placa-de-video-radeon-rx-580-8gb-oc-gts-xxx-edition-ddr5-1386mhz-xfx?epar=sa_at_ov_fb_depart_csproduto7d_t1&fbclid=PAAaZEFw4bAHsWdn6gAsXyOf_Yg7LedZUySuWb6R0jsYj_BWBXladKxS0NrC8_aem_AbyVPpJmYj8WbKTz-24RQ2H9AtRbNMq8pfTnL-p451TryEnOL36XPTJA9fGGfeU5lseUQpQIUM-SPpoZ9t-5Sby3tYxsbQA2yksDy-eujFqrLpg0Pv3rL0j07X7Jol9IH4o&opn=FACEBOOKDPA&s_term=FACEBOOKDPA', div: '#title-stock' },

    { site: 'Casas Bahia', url: 'https://www.casasbahia.com.br/placa-de-video-asus-geforce-gtx-1660-super-oc-edition-1508522431/p/1508522431?utm_medium=Cpc&utm_source=GP_PLA&IdSku=1508522431&idLojista=12231&utm_campaign=group4_smart-shopping_3p&gclid=CjwKCAjwjbCDBhAwEiwAiudBy6PEvjg5CaXMma_Xxa19KZBaQnVYI1V_yY9A4aQ3fAd7ND4sczE1ihoCwVAQAvD_BwE', div: '#titleAvailability' },
    { site: 'Casas Bahia', url: 'https://www.casasbahia.com.br/Informatica/ComponentesePecas/PlacasdeVideo/geforce-gtx-1660-super-6gb-gddr6-192bits-asus-ph-gtx1660s-o6g-1503422648.html?IdSku=1503422648', div: '#titleAvailability' },
    { site: 'Casas Bahia', url: 'https://www.casasbahia.com.br/Informatica/ComponentesePecas/PlacasdeVideo/placa-de-video-gainward-geforce-gtx-1660-super-pegasus-6gb-1504990681.html?IdSku=1504990681', div: '#titleAvailability' },

    { site: 'Ponto Frio', url: 'https://www.pontofrio.com.br/placa-de-video-asus-geforce-gtx-1660-super-oc-edition-1508522431/p/1508522431?utm_medium=cpc&utm_source=GP_PLA&IdSku=1508522431&idLojista=12231&utm_campaign=3p_shopping-full&gclid=CjwKCAjwjbCDBhAwEiwAiudBy_d89s5uSqoBXb6fdMfj4qSJuwPGk0ue-1AhldZ_OxobQUjTcp63FRoCSUEQAvD_BwE', div: '#titleAvailability' },
    { site: 'Extra', url: 'https://www.extra.com.br/placa-de-video-asus-geforce-gtx-1660-super-oc-edition-1508522431/p/1508522431?utm_medium=cpc&utm_source=GP_PLA&IdSku=1508522431&idLojista=12231&utm_campaign=prod_shopping_3p&gclid=CjwKCAjwjbCDBhAwEiwAiudBywlrieT_yn4SakKLvMOgSoHrx90fmTCKR4q4KreJ6SxiNgt4CQhliBoCkJ0QAvD_BwE', div: '#titleAvailability' },

  ];

}
