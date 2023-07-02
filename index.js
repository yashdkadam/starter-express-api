const express = require('express')
const linkedIn = require('linkedin-jobs-api');
const app = express()
app.all('/', (req, res) => {
    const queryOptions = {
        keyword: 'software engineer',
        location: 'India',
        dateSincePosted: 'past Week',
        jobType: 'full time',
        remoteFilter: 'remote',
        salary: '100000',
        experienceLevel: 'entry level',
        limit: '10'
    };

    linkedIn.query(queryOptions).then(response => {
        console.log(response); // An array of Job objects
    });
    console.log("Just got a request!")
    res.send('seding response')
})
app.listen(process.env.PORT || 3000)