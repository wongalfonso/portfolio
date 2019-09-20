const server = require('./server');

const PORT = process.env.NODE_ENV === 'production' ? 3000 : 3001;

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
