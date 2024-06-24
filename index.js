import inquirer from "inquirer";
// class Opponent
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
// Class Opponent
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is Your Name!"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Zombie", "Assassin"]
    }
]);
const p1 = new Player(player.name);
const o1 = new Opponent(opponent.select);
console.log("Welcome to the Adventure game!");
console.log("-----------------------------------");
console.log(` \n \t ${opponent.select} has Appered #\n\t`);
console.log(`   ${player.name} HP: 100`);
console.log(`   ${opponent.select} 's HP: 73`);
do {
    // Define "Skeleton"
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For life"]
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} Fuel is  ${p1.fuel}`);
                console.log(`${o1.name} Fuel is  ${o1.fuel}`);
            }
            if (p1.fuel <= 0) {
                console.log("You are Loose, Betetter Luck Next Time");
                process.exit();
            }
            if (num <= 0) {
                console.log("Wolrd");
                o1.fuelDecrease();
                console.log(`${p1.name} Fuel is  ${p1.fuel}`);
                console.log(`${o1.name} Fuel is  ${o1.fuel}`);
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`Drink Helth Potion is Full ${p1.fuel}`);
        }
        if (ask.opt == "Run For life") {
            console.log("You are Loose, Better Luck Next Time");
        }
    }
    // Define "Zombie"
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For life"]
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} Fuel is  ${p1.fuel}`);
                console.log(`${o1.name} Fuel is  ${o1.fuel}`);
            }
            if (p1.fuel <= 0) {
                console.log("You are Loose, Betetter Luck Next Time");
                process.exit();
            }
            if (num <= 0) {
                console.log("Wolrd");
                o1.fuelDecrease();
                console.log(`${p1.name} Fuel is  ${p1.fuel}`);
                console.log(`${o1.name} Fuel is  ${o1.fuel}`);
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`Drink Helth Potion is Full ${p1.fuel}`);
        }
        if (ask.opt == "Run For life") {
            console.log("You are Loose, Better Luck Next Time");
        }
    }
    // define "Assassin"
    if (opponent.select === "Assassin") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For life"]
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} Fuel is  ${p1.fuel}`);
                console.log(`${o1.name} Fuel is  ${o1.fuel}`);
            }
            if (p1.fuel <= 0) {
                console.log("You are Loose, Betetter Luck Next Time");
                process.exit();
            }
            if (num <= 0) {
                console.log("Wolrd");
                o1.fuelDecrease();
                console.log(`${p1.name} Fuel is  ${p1.fuel}`);
                console.log(`${o1.name} Fuel is  ${o1.fuel}`);
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`Drink Helth Potion is Full ${p1.fuel}`);
        }
        if (ask.opt == "Run For life") {
            console.log("You are Loose, Better Luck Next Time");
        }
    }
} while (true);
