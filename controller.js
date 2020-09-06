const db = require('./model');

module.exports = {
  getAll: (req, res) => {
    db.query('SELECT * FROM tbmahasiswa', (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result[2]);
      res.json(result);
    });
  },

  create: (req, res) => {
    console.log(req.body);
    db.query('INSERT INTO tbmahasiswa SET ?', req.body, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send('New Mahasiswa has been created');
    });
  },
  edit: (req, res) => {
    const { nim, nama, semester, kelas } = req.body;
    db.query(
      'UPDATE tbmahasiswa SET nama=?, semester=?, kelas =?  WHERE nim = ?',
      [nama, semester, kelas, nim],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        res.send(`Mahasiswa bernim kan ${nim} Telah berhasil di update`);
      }
    );
  },
  delete: (req, res) => {
    db.query('DELETE from tbmahasiswa WHERE nim = ?', req.params.nim, (err, result) => {
      if (err) {
        console.log(err);
      }

      res.send(`Mahasiswa bernim kan ${nim} Telah berhasil di hapus`);
    });
  },
  getNIm: (req, res) => {
    db.query(`SELECT * FROM tbmahasiswa WHERE nim = ${req.params.nim}`, (err, result) => {
      //if found
      if (result.length) {
        console.log('result', result.length);
        res.json(result);
      }

      res.send('not found');
    });
  },
};
