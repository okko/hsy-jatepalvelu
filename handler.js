'use strict';

const got = require('got');
const cheerio = require('cheerio');

const API_SOURCE_URL = process.env.API_SOURCE_URL;
const HTML_SOURCE_URL = process.env.HTML_SOURCE_URL;
const HTML_SOURCE_TUNNUS = process.env.HTML_SOURCE_TUNNUS;
const HTML_SOURCE_POSTINUMERO = process.env.HTML_SOURCE_POSTINUMERO;

// module.exports.index = async event => {
//   const {body} = await got(
//     API_SOURCE_URL, {
//       headers: {
//         'Content-type': 'application/json;charset=UTF-8',
//         'X-API-KEY': process.env.API_KEY,
//       }
//     }
//   );
//   return {
//     statusCode: 200,
//     body: body,
//   };
// };

module.exports.scrape = async event => {
  const gotten = await got.post(
    HTML_SOURCE_URL, {
      body: 'HakuehtoPalvelutunnus=' + HTML_SOURCE_TUNNUS + '&HakuehtoPostinumero=' + HTML_SOURCE_POSTINUMERO,
      headers: {
        'Accept': '*/*',
        'User-Agent': 'Mozilla/5.0 Jatepalvelutietojenscraper/1.0',
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
  );
  const $ = cheerio.load(gotten.body);
  const scrapedTitle = $('#Tyhjennyspaivat').attr('title');
  const body = scrapedTitle.split('|')[1];

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html;charset=utf-8',
    },
    body: '<html><body>' + body + '</body></html>',
  };
};
