
import mongoose from 'mongoose';
console.log('schema');
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;