const app = require('./app');

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

const port = 3456;
const server = app.listen(port, () => {
    console.log(`App running on port ${port} !!!`);
});