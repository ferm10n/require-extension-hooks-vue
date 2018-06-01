const cons = require('consolidate');
const lang = process.argv[2];
const content = process.argv[3];
const optString = process.argv[4];

if (!cons[lang]) {
  throw new Error(`Template language "${lang}" can't be compiled by Consolidate.js`);
}

let options = {};
if (optString) options = JSON.parse(optString)

cons[lang]
  .render(content, options)
  .then((result) => {
    process.stdout.write(result);
  }, (err) => { throw err; });
