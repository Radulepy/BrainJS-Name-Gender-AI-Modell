import names from "./names.js";
import * as brain from "brain.js";
import * as fs from "fs";

function searchGender(string) { // return gender from names
    const raspuns = names.filter((el) => el.input.toLowerCase().includes(string.toLowerCase()));
    return raspuns.length !== 0 ? raspuns[0].output : -1;
}

// console.log(searchGender('Andrei'));

const config = {
    iterations: 50,
    log: true,
    logPeriod: 1,
    layers: [10],
}

const test = "Iris";
const test2 = "Carmen";
const test3 = "Costi";

const network = new brain.default.recurrent.LSTM();

//* Train and save NN model: (UN-COMMENT THIS:)
// network.train(names, config);
// const networkState = network.toJSON();
// fs.writeFileSync("output/network_state.json", JSON.stringify(networkState), "utf-8");

//* Load NN model: (COMMENT THIS)
const networkState = JSON.parse(fs.readFileSync("output/network_state.json", "utf-8"));
network.fromJSON(networkState);

// Test batch:
const output = network.run(test);
const output2 = network.run(test2);
const output3 = network.run(test3);

console.log(`${test} is ${output}`);
console.log(`${test2} is ${output2}`);
console.log(`${test3} is ${output3}`);
