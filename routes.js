module.exports = (app) => {
  const mahasiswa = require('./controller');

  app.get('/getAllMahasiswa', mahasiswa.getAll);

  app.get('/mahasiswa/:nim', mahasiswa.getNIm);

  app.post('/mahasiswa/create', mahasiswa.create);

  app.put('/mahasiswa/edit/:nim', mahasiswa.edit);

  app.delete('/mahasiswa/delete/:nim', mahasiswa.delete);
};
