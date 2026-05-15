import colors from 'colors';
import server from './server';

// variables del entorno
const port = process.env.PORT || 3000;
// node --watch index.js
// npm i -D typescript ts-node

server.listen(port, () => console.log(colors.bgBlue.magenta.italic(`Example app listening en el puerto: ${port}!`),)); 