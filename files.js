const fs = require('fs/promises');

    (async () => {
        const content = await fs.readFile('./data/drinks.txt', 'utf-8');
        console.log(typeof content);

        for (const letter of content) {
            console.log(letter);
        }
    })();



