// https://www.digitalocean.com/community/tutorials/nodejs-command-line-arguments-node-scripts

const willhaben  = require('willhaben')
const filesystem = require("fs");

if (process.argv.length === 3) {
  console.error('Expected at least two arguments!');
  process.exit(1);
}

const res = process.argv[2];
const www = process.argv[3];

willhaben.getListings(www).then(json => {
  const data = JSON.stringify(json);
  filesystem.writeFile(res, data, (error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
      // logging the error
      console.error(error);

      throw error;
    }

    // console.log("JSON file was written correctly");
  });
});
