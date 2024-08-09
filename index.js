const express = require('express');
const app = express();
const homeroutes = require('./routes/homeRoutes');
const userroutes = require('./routes/userRoutes');
const caseroutes = require('./routes/caseRoutes');
const appointmentroutes = require('./routes/appointmentRoutes');
const corsAuthentication = require('./middleware/CorsMiddleware');
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(corsAuthentication);

app.use('/', homeroutes);
app.use('/user', userroutes);
app.use('/case', caseroutes);
app.use('/appointment', appointmentroutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});