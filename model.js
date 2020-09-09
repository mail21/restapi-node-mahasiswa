const mysql = require('mysql');
const koneksi = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbmahasiswa',
});

koneksi.connect(() => {
  console.log('Connected to database');
});

module.exports = koneksi;
