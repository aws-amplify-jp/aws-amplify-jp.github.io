const fs = require('fs');
const path = require('path')
const fetch = require('node-fetch');
const { v4: uuid } = require('uuid');
const glob = require('glob');
const mapping = require('../src/contents/external/mapping');

async function cleanContents() {
  const files = glob.sync(path.join(__dirname, '../src/contents/external/*.md'));
  if (files.length === 0) return;
  console.log(`Cleaning ${path.join(__dirname, '../src/contents/external/*.md')}`)
  for await (item of files) {
    console.log(`Removing ${item}`);
    fs.unlinkSync(item);
  }
}

async function fetchContents() {
  for (item of mapping) {
    try {
      const header = `---\nslug: ${item.slug}\nname: ${item.name}\n---\n`;
      console.log(`Downloading ${item.url}`);
      const response = await fetch(item.url);
      const content = await response.text();
      const file = path.join(__dirname, `../src/contents/external/${uuid()}.md`);      
      console.log(`Writing ${file}`);
      fs.writeFileSync(file, header + content);
    } catch(e) {
      console.error(e);
    }
  }
}

cleanContents();
fetchContents();