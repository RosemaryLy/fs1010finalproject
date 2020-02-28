'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');

// Create versions of `fs` methods we'll be using to return promises
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

// Declare where the DB path is relative from where our `package.json` is
let contactlistingpath = path.resolve('src/db/contactlisting.json');


// 
async function readContacts() {
  let filecontents = await readFile(contactlistingpath)
  let allContactInfo = JSON.parse(filecontents)
  return allContactInfo;
}


async function writeContacts(ContactListing) {
  let json = JSON.stringify(contactlisting, null, 2);
  await writeFile(contactlistingpath, json);
}


async function addItem(newInfo) {
  let allContactInfo = await readContacts();
  allContactInfo.push(newInfo)
  await writeContacts(allContactInfo);
}

module.exports = {
  read: contactlisting,
  addItem: addItem,
}
