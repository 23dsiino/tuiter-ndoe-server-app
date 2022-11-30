import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js'
const tuitsModel = mongoose.model('TuitModel', tuitsSchema);
console.log('model');
export default tuitsModel;