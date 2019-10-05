import mongoose from 'mongoose';

import { DB } from '@common/config';

const url = `mongodb://${DB.host}:${DB.port}/${DB.database}`;

export default mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Mongo connected')) // eslint-disable-line no-console
  .catch(err => console.log(err)); // eslint-disable-line no-console
