require('express')()
  .get('/', (req, res) => {
    res.json({
      status: 'ok'
    });
  })
  .listen(2000);
