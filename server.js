const express = require('express');
const mysql = require('mysql12');
const PORT = process.env.PORT || 3001;
const app = express();
//Expect Middleware

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Mirapines8!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
});

//listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

