import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

const MONGO_URI =
  'mongodb+srv://kulvir-singh:WsFl9p4Xu0jUVcd5@cluster0.g3thzoj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on('error', (error: Error) => {
  console.log(error);
});

app.use('/', router());
