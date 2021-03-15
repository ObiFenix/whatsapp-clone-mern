import { join } from 'path';
import { readdirSync } from 'fs';
import { mongoCloudURI } from './keys';
import { connect } from 'mongoose';

const mongooseConfig = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

connect(mongoCloudURI, mongooseConfig)
  .then(() => console.log("MongoDB Connected...!\n"))
  .catch(error => console.log(error));

const models_path = join(__dirname, '../model/');    // create a variable that points to the models folder
readdirSync(models_path).forEach((file) => {           // read all of the files in the models_path and require (run) each of the javascript files
    if (file.indexOf('.js') >= 0) {                       // require the file (this runs the model file which registers the schema)
        require(models_path + file);
    }
});