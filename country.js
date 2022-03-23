//[name] [surname] has [count] children, and their's names are: [names]
const fs = require('fs/promises');
const path = require('path');


(async () => {
    const fullPath = path.join(__dirname, './data/country.json');
    const coc = await fs.readFile(fullPath, 'utf-8');

    const personInfo = JSON.parse(coc);


    console.log(personInfo);

})();
