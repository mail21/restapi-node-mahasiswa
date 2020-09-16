module.exports = (app) => {
  const mahasiswa = require('./controller');
  // http://localhost:3000/

  // app.use(function (req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept'
  //   );
  //   next();
  // });

  app.get('/', (req, res) =>
    res.send(
      `/getAllMahasiswa , /mahasiswa/create, /mahasiswa/edit/:nim , /mahasiswa/delete/:nim`
    )
  );

  app.get('/getAllMahasiswa', mahasiswa.getAll);

  app.get('/mahasiswa/:nim', mahasiswa.getNIm);

  app.post('/mahasiswa/create', mahasiswa.create);

  app.put('/mahasiswa/edit/:nim', mahasiswa.edit);

  app.delete('/mahasiswa/delete/:nim', mahasiswa.delete);
};
