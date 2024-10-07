import { it } from "node:test";

let myAge: number = 30;
let firstName: string = 'Tomas';
let isFake: boolean;

myAge = 31;
firstName = 'Diana';
isFake = true;

// nebegalime keisti duomens tipo
let planet = 'Earth';
let moons = 1;
let isLarge = false;

// irgi negalim keist duomens tipo
let sonething: null;
let kazkas: undefined;


function br() {
    console.log('----------------------------------------------------------------------------------------');
}


// ----------------------------------------------------------------------------------------





// Masyvai – priima tik vieno duomens tipo duomenis
let vardai: string[] = ['Tomas', 'Diana', 'Tadas', 'Dominyka']
let amziai: number[] = [24, 33, 47, 19]

vardai.push('Tautvydas')
amziai.push(27)

// duomens tipas nusprendžiamas pagal pirmojo duomens tipą
let vaisiai = ['obuoliai', 'apelsinai', 'bananai', 'mangai']
const vaisius = vaisiai[3]

// union duomens tipas – nenusprendžia koks tai duomuo, tik vienas iš
let daiktai = [1, true, 'labas']
const daiktas = daiktai[2] // labas





// ----------------------------------------------------------------------------------------



// funkcijos
function suma(a: number, b: number): number {
    return a + b
  }
  
  const atimtis = (a: number, b: number): number => {
    return a - b
  }
  
  suma(9, 3)
  atimtis(8, 5)
  
  function sudetis(items: number[]) {
    const viso = items.reduce((a, c) => a + c, 0)
    console.log(viso)
    return viso
  }
  
  sudetis([5, 8, 19, 2, 9, 12])
  



// ----------------------------------------------------------------------------------------




// objektai
interface Person {vardas: string, amzius: number, id: string}

let vartotojas: Person = {
    vardas: '56',
    amzius: 23,
    id: crypto.randomUUID()
  }

  let vartotojas2: Person = {
    vardas: 'Tomas',
    amzius: 23,
    id: '1'
  }
  
  vartotojas.vardas = 'Giedrius'
  vartotojas.amzius = 25
  // bet negalime pridėti naujų savybių: telefonas, adresas ir pan.
  
  // nusprendžia duomenų tipą pagal įvestus duomenis
  let asmuo = {
    vardas: 'Saulius',
    amzius: 38
  }
  
  asmuo.vardas = 'Paulina'
  asmuo.amzius = 28





//----------------------------------------------------------------------------------------





// Any - leidžia keisti duomenų tipą, neturėtume dažnai naudoti
let age: any

age = 30
age = false

let title;
title = 25;
title = 'Ponas';

let manoDaiktai: any[] = ['labas', true, 123]
manoDaiktai.push({id: 15})

function sudeti(value: any): any {
  return value + value
}

const pirmas = sudeti('labas') // labaslabas





//----------------------------------------------------------------------------------------


// Tuples (masyvai, kuriuose duomenys yra įvairių tipų bet surūšiuoti pagal numatytą seką)

// tuples - privalome laikytis nurodytos sekos
let naujasAsmuo: [string, number, boolean] = ['Aidas', 30, true]
naujasAsmuo = ['67', 67, true]

// spalva
let hsla: [number, string, string, number]
hsla = [200, '100%', '65%', 0.5]

// koordinatės
function useCoords(): [number, number] {
  const lat = 100
  const long = 57
  return [lat, long]
}

const [lat, long] = useCoords()

// tuples su pavadinimais
let user: [name: string, age: number]
user = ['Domantas', 27]


br(); // ----------------------------------------------------------------------------------------


// interfaces - struktūriniai nustatymai, kuriuos galime priskirti kintamiesiems, masyvams, objektams, ir t.t.
interface Autorius {
    name: string,
    avatar: string
}

const pirmasAutorius: Autorius = { name: 'James', avatar: '/img/james.png' }

interface Post { 
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Autorius
}

const newPost = {
    title: 'Pirmas įrašas',
    body: 'Įdomi istorija',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: pirmasAutorius
}

  
// Interfaces funkcijose
function printPostInfo(post: Post): void {
    console.log(`Created post '${post.title}' by ${post.author.name}`)
}

// Interfaces masyvuose
let posts: Post[] = []
posts.push(newPost)
posts.push(newPost)
posts.push(newPost)
  
posts.forEach((item) => printPostInfo(item));




br(); // ----------------------------------------------------------------------------------------




// type guards – patikrina duomens tipą prieš vykdant kodą
type Id = number | string

function keistiIdTipa(id: Id) {
  if (typeof id === 'string') {
    return parseInt(id)
  } else {
    return id.toString()
  }
}

const pirmasId = keistiIdTipa(1)
const antrasId = keistiIdTipa('2')

console.log(
    pirmasId + ' : ' + typeof(pirmasId),
    '\n',
    antrasId + ' : ' + typeof(antrasId)
)



br(); // ----------------------------------------------------------------------------------------



interface hasQuantity {
    quantity: number
}

// visi elementai, kurie atkartoja interface, privalo turėti tą pačią struktūrą kaip interface
const kazkass: hasQuantity = { quantity: 300 }

function printQuantity(item: hasQuantity): void {
    console.log(`The quantity of the item is ${item.quantity}`)
}

const manoVaisius = { name: 'mangas', quantity: 50 }
const transportas = { type: 'autobusas', quantity: 12 }
const asmuo1 = { name: 'Darius', age: 30 }

printQuantity(manoVaisius) // ok
printQuantity(transportas) // ok
//printQuantity(asmuo) // klaida, nes nėra quantity savybės
  


br(); // ----------------------------------------------------------------------------------------

// 4. Parašykite TypeScript kodą, kuris deklaruoja
// konkretaus duomenų tipo masyvą. Parašykite įprastas
// masyvo operacijas, tokias kaip elementų pridėjimas ar
// pašalinimas iš masyvo, taip pat masyvo elementų
// pateikimas konsolėje.


interface Item {
    name: string;
}

let items: Item[] = [];

function additem(item: Item): void {
    items.push(item);
    console.log(`Sekmingai pridejau duomenis: ${item.name}\n`);
}

additem({name: 'Tautvydas'});
additem({name: 'Jonas'});
additem({name: 'Petras'});

function remove(itemname: string): void {
    const index = items.findIndex(item => item.name === itemname);
    if (index !== -1) {
        items.splice(index, 1);
        console.log('Pasalinom elementa ' + itemname + ' is indexo = ' + index);
    } else {
        console.log('Nerastas elementas [' + itemname + ']');

    }
}

remove('Kestas');

function diplayItems(): void {
    console.log(' Visi masyvo duomenys', items.map(item => item.name))
}

diplayItems();
remove('Tautvydas');
diplayItems();
