// https://www.digitalocean.com/community/tutorials/nodejs-command-line-arguments-node-scripts

const willhaben = require('willhaben')

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

const www = process.argv[2];

willhaben.getListings(www).then(json => {console.log(json)});
