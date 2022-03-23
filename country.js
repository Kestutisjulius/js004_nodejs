//[name] [surname] has [count] children, and their's names are: [names]
const fs = require('fs/promises');
const path = require('path');


(async () => {

    const skaiciai = [1,2,3,4,8];
    const vardai = ['jonas', 'ona', 'Cubaka'];
    const trigubiSkaiciai = skaiciai.map(skaicius => skaicius * 3);
    console.log(trigubiSkaiciai);
    const pirmosRaides = vardai.map(v => v[0]);
    console.log(pirmosRaides);


    function parseJSONtoObject(text) {
        try {
            const obj = JSON.parse(text);
            return [false, obj]
        } catch (e) {
            return [true, {}];
        } finally {
           // console.log('Baigiau bandyti parsinti faila...');
        }
      }

      function childrenNames(childrenList) {
          const namesOnly = [];
          for (const child of childrenList) {
              namesOnly.push(child.name);
          }
          return namesOnly.join(', ');
      }

      const fullPath = path.join(__dirname, './data/country.json');
      const cc = await fs.readFile(fullPath, 'utf8');

      const [personError, personObj] = parseJSONtoObject(cc);

      if (personError) {
          console.log('Parsinant faila ivyko klaida');
      } else {
          const {name, lastName, children} = personObj;
          console.log(`${name} ${lastName} has ${children.length} children and they names are: ${childrenNames(children)}`);
          console.log(`${name} ${lastName} has ${children.length} children and they names are: ${children.map(c => c.name)}`);
      }


    
})();
