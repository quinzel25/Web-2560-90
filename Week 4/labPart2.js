/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.

// this grabs the object that is nested the objects
let latGrab = iss_location.iss_position.latitude;
let longGrab = iss_location.iss_position.longitude;

// this prints the objects int the console
console.log('ISS Latitude: ' + latGrab);
console.log('ISS Longitude: ' + longGrab);


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// this adds the object into the object array
rates.CHF = 1.1787;
// print the newly added object in the console
console.log("New Item: " + rates.CHF);

// math operation to find the the amount of AUD you get from euros
let euros = 100;
let exchange = rates.AUD;
let euroToAUD = euros * exchange;
// logs to consol
console.log("100 Euros in AUD is: " + euroToAUD);

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

// Found this code snippet online, works great!

// initializes the rates object in to a variable
let arr = Object.values(rates);
// this grabs the max value of the values set in the arr variable
let max = Math.max(...arr);

// prints to console
console.log(`Max value: ${max}`);

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
];

// grabs the elements at index 1 in the object array and grabs element at the second object location: cat
let catGrab = cats_and_owners[1].cat;
// prints to console
console.log(`Gary Olman's cat is named: ${catGrab}`);

// this adds the a new object in the object array
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"});

// for loop that grabs the the owners and cats (iterating over i) and prints out the owner and cat (from the template) in the console
for (let i = 0 ; i < cats_and_owners.length ; i++){

    let cat = cats_and_owners[i].cat;
    let name = cats_and_owners[i].name;
    let logTemp = `Owner: ${name} Cat: ${cat}`;
    console.log(logTemp)



}

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.




/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */



let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]

};

// these variables grab the first and last names of the laureates from the 4th prize; literature
let litFirst = nobel_prize_winners_2017.prizes[3].laureates[0].firstname;
let litLast = nobel_prize_winners_2017.prizes[3].laureates[0].surname;
// prints in the console
console.log(`2017 Literature laureate: ${litFirst} ${litLast}`);


// grabs the length of the laureates of the prize with the index of [0]
let count = nobel_prize_winners_2017.prizes[0].laureates.length;
// this loop grabs the id of the the laureates (it iterates over laureates) in prize[0] and prints in the console
for (let i = 0 ; i < count ; i++) {
    let idGrab = nobel_prize_winners_2017.prizes[0].laureates[i].id;
    console.log(`ID = ${idGrab}`)
}

// grabs the length
let count1 = nobel_prize_winners_2017.prizes.length;
// prints description
console.log('Categories:');

// this loop grabs the category and prints it in the console (iterates over x)
for (let x = 0 ; x < count1 ; x++) {
    let categoryGrab = nobel_prize_winners_2017.prizes[x].category;

    console.log(categoryGrab)
}

   // sets counter to 0
    let dudes  = 0 ;
    // grabs the prizes variable
    let prizes = nobel_prize_winners_2017.prizes;

    // loop that counts how many laureates there are for 2017
    prizes.forEach(function (prize ){
        for (let laur in prize.laureates) {
            dudes++
        }

    });
    console.log(`Number of Laureates: ${dudes}`);





// TODO print the full name of the Literature Nobel laureate. Done
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
//
//
//
//TODO write code to count the total number of laureates from 2017.

//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.