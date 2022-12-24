# BrainJS-Name-Gender-AI-Modell
AI Modell trained on Romanian names to predict the gender from a given name.

It uses Brain.Js library to use the Romanian names and train a modell which predicts a gender from any given names.
Steps:
- pre-trains the modell and exports the network states JSON file into the `output` folder
- uses the pre-trained network modell to run the test batch.

## Run:
To run the app: `Node app.js`

## To Re-train the modell:
Just comment the rows 25-28 and un-comment the rows 31-32 to train the modell for your specific config file.

