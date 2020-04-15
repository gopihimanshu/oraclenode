const express = require('express');
const app = express();

const executeDatabase = require('./db/connectDB');
const { GET_EMPLOYEE_DATA, CREATE_NEW_EMPLOYEE } = require('./db/query');
const { formatData, formatEmployee } = require('./formatData');

app.use(express.json());

app.get('/getData', async (req, res) => {
    const data = await executeDatabase(GET_EMPLOYEE_DATA, 'SELECT');
    const employees = formatEmployee(data.metaData, data.rows);
    res.json({ employees });
});

app.post('/insertData', async (req, res) => {
    const bindParams = formatData(req.body);
    const result = await executeDatabase(CREATE_NEW_EMPLOYEE, 'INSERT', bindParams);
    res.json('Data inserted successfully ' + result);
})

app.listen('3000', () => {
    console.log('PORT is running at 3000' )
});
