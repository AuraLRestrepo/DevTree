import {CorsOptions} from 'cors';

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    // Permitir solicitudes desde cualquier origen
    // callback(null, true);

    const whitelist = [process.env.PORT_FRONTEND];

    if(process.argv[2] === '--api') {
      whitelist.push(undefined);
    }


    if(whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Error de CORS: Origen no permitido'));
    }
  },
  
};  