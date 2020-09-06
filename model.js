const mysql = require('mysql');
const koneksi = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbaplikasipenilaianmahasiswa',
});

koneksi.connect(() => {
  console.log('Connected to database');
});

module.exports = koneksi;
