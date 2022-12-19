import ('./CONFIG/config.js');
import express from 'express';

import router from './ROUTER/router.js';



const app = express();
app.use(express.json());
app.use('/api/v1',router)

const port = 2001;
app.listen(port, () => {
    console.log(`listening on port:` + port)
});