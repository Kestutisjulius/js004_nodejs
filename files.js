const fs = require('fs/promises');

    (async () => {
        const content = await fs.readFile('./data/drinks.txt', 'utf-8');
        //console.log(typeof content);
        const drinksList = content.split('\r\n');

        let i = 1;
        for (const drinks of drinksList) {
            
            const eilute = drinks.split(' ');
            // const pavadinimas = eilute[0];
            // const kaina = eilute[1];
            // const kiekis = eilute[2];
            const [name, price, count]=eilute;
            const balance = +price * +count;
            const precision = 2;
            const b1 = balance.toFixed(precision);
            const b2 = Math.round(balance * (10 ** precision)) / (10 ** precision);
            console.log( `Pasirinkimas:${i++}-${name}, kurio kaina yra ${price}, EUR buvo parduota ${count} ir apyvarta ${b2} EUR` );
        }
        

    })();



