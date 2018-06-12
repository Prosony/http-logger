import Mongoose     from '../DataBase'

const record = new Mongoose.Schema({
    id_record: {
        type: String,
        unique: true,
        require: true
    },
    id_account: {
        type: String,
        require: true
    },
    title_app: {
        type: String,
        require: true
    },
    log: {
        type: String,
        require: true
    }
});
export default Mongoose.model('record', record);