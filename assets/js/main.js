console.log("läuft")

// Objects Lev 1_2

// let person = {
//     name: "Vanessa",
//     alter: 28,
//     sagNameAlter: () => {
//         alert(person.name);
//         alert(person.alter);
//     }
// }

// for (const key in person) {
//     console.log(person[key]);
// }

// person.sagNameAlter();


// Objects Lev 1_4

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

// for (const elt of unsereHaustiere) {
//     console.log(elt.names);
//     console.log(elt.names[2])
//     console.log(elt.names[1])
// } // damit habe ich alle namen in der console aufgerufen und einzelne aus den Object

console.log(unsereHaustiere[0].names[1]);

// fehlt noch Methode um Namen zu ändern



// Level 1_5

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

// console.log(unserLager)

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Untere Schublade"]);


// Level 1_6


let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];
console.log(myMusic);

myMusic.push({
    kunstler: "H.E.R",
    title: "Best Part",
    release_jahr: 2020,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
})

console.log(myMusic);

console.log(myMusic[0].kunstler);
console.log(myMusic[0].formate[3]);
console.log(myMusic[0].gold)
console.log(myMusic[2].release_jahr);
console.log(myMusic[3].release_jahr);
console.log(myMusic[0].formate[2]);
console.log(myMusic[3].title.split(" ")[4]);
console.log(myMusic[2].title.split(" ")[2]);
console.log(myMusic[1].kunstler.split(" ")[1]);



// Level 1_7

let myMusic1 = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let body = document.querySelector('body');
let catalogue = document.createElement('div');
body.appendChild(catalogue);

myMusic1.forEach((key) => {
    let artist = key.artist;
    let title = key.title;
    let medium = key.medium;
    let li = document.createElement('p');
    catalogue.appendChild(li);
    li.innerHTML = `${artist}<br>${title}<br>${medium}`;
})



// Level 1_8
//Objects Arrays Loop Accessing

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];


studentData.forEach((key) => {
    let name = key.name;
    let coop = key.coop;
    let city = key.address.city;
    let emails = key.emails;
    console.log(name);
    console.log(coop)
    console.log(city);
    console.log(emails);
})











