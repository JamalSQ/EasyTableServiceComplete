import express from 'express'
const app=express();
import web from './Routes/web.js'


//Loads Routes
app.use('/', web)

// connect the public folder with the View folder files
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
