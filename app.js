const express = require('express');
const app = express();
const cors = require("cors");
const {StatusCodes} = require('http-status-codes');
require("dotenv").config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/api/v1/basicInfo', (req, res) => {
    res.json({
        success: true,
        message: "basic information",
        status: StatusCodes.OK,
        data:{
            email: process.env.myEmail,
            currentDateTime: new Date().toISOString(),
            gitHubUrl: process.env.gitHubUrl
        }
    });
});

app.listen(PORT, () =>{
    console.log(`Server is listening on PORT ${PORT}`);
})