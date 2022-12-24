![](https://img.shields.io/badge/author-Radu%20Lepadatu-brightgreen) 
![](https://img.shields.io/badge/language-JavaScript-green) 
![](https://img.shields.io/badge/AI%20library-Brain.js-green) 
![](https://img.shields.io/badge/AI%20Data-Romanian%20Names%20(self%20data)-orange)

# BrainJS-Name-Gender-AI-Modell
AI Modell trained on Romanian names to predict the gender from a given name.

It uses Brain.Js library to use the Romanian names (`names.js`) and train a modell which predicts a gender from any given names.
Steps:
- pre-trains the modell and exports the network states JSON file into the `output` folder
- uses the pre-trained network modell to run the test batch.

## Run:
To run the app: `Node app.js`

## To Re-train the modell:
Just comment the rows 25-28 and un-comment the rows 31-32 to train the modell for your specific config file.

## Usability:
It can be used to help a user choose a gender for a character based on the input name. 
For example: make the `male button` bigger if the input name has a greater probability to be Male gender

## Disclaimer:
Only real genders used: MALE / FEMALE :-) 

