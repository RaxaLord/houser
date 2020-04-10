module.exports = {
  getAll: (req, res, next) => {
    const db = res.app.get('db');

    db.get_all_homes()
      .then((results) => res.status(200).send(results))
      .catch((err) => {
        res.status(500).send({ errorMessage: 'Something went wrong' });
        console.log(err);
      });
  },

  addHouse: (req, res, next) => {
    const db = res.app.get('db');
    const { name, address, city, state, zip } = req.body;

    db.add_house([name, address, city, state, zip])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage: 'Something went wrong.',
        });
        console.log(err);
      });
  },

  deleteHouse: (req, res, next) => {
    const db = res.app.get('db');
    const { id } = req.params;

    db.delete_house()
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage: 'Something went wrong!',
        });
        console.log(err);
      });
  },
};
