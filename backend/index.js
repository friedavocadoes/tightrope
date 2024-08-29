const run = require('./prompt');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(express.json());
app.use(bodyParser.json()); 

app.use(cors({ origin: '*'}));


app.post('/search', async (req, res) => {
    try {
        const loc = req.body.loc;
        const mood = req.body.mood;
        const budget = req.body.budget;
        const lang = req.body.lang;
        console.log(`${mood}, ${loc}, ${budget}, ${lang}`);
        const text = await run(mood, budget, loc, lang);
        
        // un-comment to see output from Gemini
        console.log(text);
        
        const jtext = JSON.parse(text);
        console.log(jtext.vacation_spots[0].name);
        
        res.send(jtext);
    } catch {
        console.log('err');
        res.send({vacation_spots: [{name: "Couldn't Parse Response", description: "Check your API key or try again"}]});
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});