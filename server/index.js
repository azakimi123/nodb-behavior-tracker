const express = require('express');
const ctrl = require('./controller')




const app = express();

app.use(express.json());

//endpoints here
app.get('/api/behaviors', ctrl.displayBehaviors);







app.listen(4545, () => console.log(`Server is running on 4545`));


