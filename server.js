const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('../snowBook/server/routes/AppRouter');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'Server Works' }));
app.use('/api', routes);
app.listen(PORT, () => {
  console.log(`Server Started On Port: ${PORT}`);
});
