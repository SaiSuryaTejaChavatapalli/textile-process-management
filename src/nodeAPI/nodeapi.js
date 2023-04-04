// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");

// Create connection to MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@14',
    database: 'textile'
});

// Initialize Express app
const app = express();

const process = {
    "yarn_storage " : 1,
    "windind" : 2,
    "warping" : 3,
    "looming" : 4,
    "weaving" : 5,
    "checking": 6,
    "repairing" : 7,
    "packing" : 8,
    "dispatch" : 9

}

// Configure body-parser middleware to handle JSON data
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    next();
})

app.get('/getData', (req, res) => {
    const query = 'SELECT * FROM user'; // SQL query to select all data from table
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
});

// Define API route to accept and store JSON data
app.post('/store-login-data', (req, res) => {
    const data = req.body; // JSON data sent in request body
    const query = 'INSERT INTO user SET ?'; // SQL query to insert data into table
    connection.query(query, data, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error storing data in database');
        } else {
            console.log('Data stored successfully');
            res.status(200).send('Data stored successfully');
        }
    });
});


app.post('/current-process', (req, res) => {
    const orderId = req.body.orderid; // JSON data sent in request body
    const query = `SELECT * from orders1 where orderid=${orderId}`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
    
});

app.post('/store-loom-details', (req, res) => {
    const data = req.body; // JSON data sent in request body
    const orderNo = data.orderid
    console.log(orderNo)
    const query1 = `update orders1 set process_status="looming" where orderid = ${orderNo}`;
    const query = 'INSERT INTO loom_loading SET ?';
    connection.query(query, data,(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
    connection.query(query1,(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Status updated successfully');
            res.status(200).json(result);
        }
    });

    
    
});

app.post('/store-jobcard-details', (req, res) => {
    const data = req.body; // JSON data sent in request body
    const query = 'INSERT INTO jobcard SET ?';
    connection.query(query, data,(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
    
});

app.post('/yarn-storage', (req, res) => {
    const data = req.body; // JSON data sent in request body
    const query = 'INSERT INTO yarn_storage SET ?';
    connection.query(query, data,(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
    
});

app.post('/store-winding-details', (req, res) => {
    const data = req.body; // JSON data sent in request body
    const query = 'INSERT INTO winding SET ?';
    connection.query(query, data,(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
    
});

app.post('/store-warpping-details', (req, res) => {
    const data = req.body; // JSON data sent in request body
    const query = 'INSERT INTO wrapping SET ?';
    connection.query(query, data,(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
    
});

app.post('/store-looming-details', (req, res) => {
    const data = req.body; // JSON data sent in request body
    const query = 'INSERT INTO looming SET ?';
    connection.query(query, data,(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
});

app.post('/store-order-details', (req, res) => {
    const data = req.body; // JSON data sent in request body
    const query = 'INSERT INTO orders1 SET ?';
    connection.query(query, data,(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
});


app.post('/store-repairing-details', (req, res) => {
        const data = req.body; // JSON data sent in request body
        const query = 'INSERT INTO repairing SET ?';
        connection.query(query, data,(err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error fetching data from database');
            } else {
                console.log('Data fetched successfully');
                res.status(200).json(result);
            }
        });
});



// app.post('/store-repairing-details', (req, res) => {
//         const data = req.body; // JSON data sent in request body
//         const query = 'INSERT INTO repairing SET ?';
//         connection.query(query, data,(err, result) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send('Error fetching data from database');
//             } else {
//                 console.log('Data fetched successfully');
//                 res.status(200).json(result);
//             }
//         });
// })

app.post('/store-checking-details', (req, res) => {
            const data = req.body; // JSON data sent in request body
            const query = 'INSERT INTO checking SET ?';
            connection.query(query, data,(err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error fetching data from database');
                } else {
                    console.log('Data fetched successfully');
                    res.status(200).json(result);
                }
            });
    
});

app.get('/get-pre-winding-data', (req, res) => {
    const orderId = req.params.id
    const query = `SELECT yarn_requierment, wrap_count, weft_count, reed, picks, wrapping_length  FROM winding where orderid = ${orderId}`; // SQL query to select all data from table
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            res.status(200).json(result);
        }
    });
});

app.get('/get-pre-warping-data', (req, res) => {
    const orderId = req.params.id
    var finalRes = {}
    const query1 = `
     SELECT orders1.count, orders1.order_quality, winding.no_of_cones
     from orders1
     inner join winding where orders1.orderid = ${orderId} and winding.orderid=${orderId}`; 
    const query2 = `select wrapping_length from jobcard where orderid = ${orderId}`;
     // SQL query to select all data from table
    connection.query(query1, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            finalRes =  result[0]
        }
    });

    connection.query(query2, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data from database');
        } else {
            console.log('Data fetched successfully');
            console.log(result)
            finalRes.wrapping_length = result[0]["wrapping_length"]
            res.status(200).json(finalRes);

        }
    });
});



// Start the server
app.listen(8080, () => {
    console.log('Server started on port 8080');
});

// // Import required modules
// const express = require('express');
// const mysql = require('mysql');

// Create connection to MySQL database
// const connection = mysql.createConnection({
// host: 'localhost',
// user: 'root',
// password: 'password',
// database: 'mydb'
// });

// Initialize Express app
// const app = express();

// Define API route to fetch data from MySQL database
// app.get('/api/getData', (req, res) => {
// const query = 'SELECT * FROM mytable'; // SQL query to select all data from table
// connection.query(query, (err, result) => {
// if (err) {
// console.error(err);
// res.status(500).send('Error fetching data from database');
// } else {
// console.log('Data fetched successfully');
// res.status(200).json(result);
// }
// });
// });

// Start the server
// app.listen(3001, () => {
// console.log('Server started on port 3001');
// });