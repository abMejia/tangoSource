// Get dependencies
let express       = require('express');
let path          = require('path');
let http          = require('http');
let bodyParser    = require('body-parser');
var logger        = require('morgan')


let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

let routes = require('./server/routes');
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

let port = process.env.PORT || '3000';
app.set('port', port);

let server = http.createServer(app);
server.listen(port, () => console.log(`Magic happens on localhost:${port}`));