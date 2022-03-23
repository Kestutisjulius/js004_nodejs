const a1 = [10,8,2,4];
const a2 = [1,3,5,7,9];
const a3 = [147,258,369,123,456,789];

function vidurkis(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];      
    }
    return (sum/array.length);
}

 // console.log(` "a3" skaiciu masyvas, kuri sudaro ${a3.length} skaiciai/iu, vidurkis yra ${vidurkis(a3)}`);

const s1 = 'mike pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder Woman';
const s4 = 'Algimantas Cekuolis';

// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

function trumpinys(s) {
    const words = s.split(' ');
    const name = words[0];
    const nameFirstLetter = name[0].toUpperCase();
    const surName = words[1];
    const surNameFirstLetter = surName[0].toUpperCase();
    console.log(`Legendines asmenybes ${name} ${surName} trumpinys yra ${nameFirstLetter}.${surNameFirstLetter}. `);
}
//  trumpinys(s1);
//  trumpinys(s2);
//  trumpinys(s3);
//  trumpinys(s4);

 const people = [
    {name: 'Jonas', surName: 'Jonaitis', age: 99},
    {name: 'Maryte', surName: 'Marytaite', age: 87},
 ];
 const skaicius = people.length;

 function printPeople(p){
    console.log(`${p.name} ${p.surName} yra ${p.age} metu amziaus`);
 }
 function introduce(zmogai) {
     console.log('------ for OF');
     for (const zmogus of zmogai) {
        printPeople(zmogus);
     }
     console.log('------ for i');
         for(i=0; i<skaicius; i++) {
         const zmogs = zmogai[i];
        printPeople(zmogs);
     }
     console.log('------ while');
     let iw = 0;
     while (iw < skaicius) {
         const person = people[iw];
         printPeople(person);
         iw++;
     }
     console.log('-----do while');
     let idw = 0;
     do {
         const individas = people[idw];
         printPeople(individas);
         idw++;
     } while (idw < skaicius);
     console.log('-----for in');
     for(const i in people) {
         const asmuo = people[i];
         printPeople(asmuo);
     }
     console.log('-----for each');
     people.forEach(
        (persona) => printPeople(persona)
     );

 }
 introduce(people);