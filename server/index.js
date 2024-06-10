// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db');
const md5 = require('md5');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Sign Up Route
app.post('/signup', (req, res) => {
    const { fName, lName, email, password } = req.body;
    const hashedPassword = md5(password);

    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
    connection.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Database error' });
            return;
        }
        if (result.length > 0) {
            res.status(400).json({ success: false, message: 'Email address already exists!' });
        } else {
            const insertQuery = 'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
            connection.query(insertQuery, [fName, lName, email, hashedPassword], (err, result) => {
                if (err) {
                    res.status(500).json({ success: false, message: 'Error inserting user' });
                } else {
                    res.status(201).json({ success: true, message: 'Registration successful!' });
                }
            });
        }
    });
});

// Sign In Route
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = md5(password);

    const signInQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(signInQuery, [email, hashedPassword], (err, result) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Database error' });
            return;
        }
        if (result.length > 0) {
            res.status(200).json({ success: true, message: 'Login successful!' });
        } else {
            res.status(401).json({ success: false, message: 'Incorrect Email or Password' });
        }
    });
});

app.get('/rooms', (req, res) => {
    const getAllRoomsQuery = 'SELECT * FROM rooms';
    connection.query(getAllRoomsQuery, (err, results) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Database error' });
        } else {
            res.status(200).json({ success: true, rooms: results });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
