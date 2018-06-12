import Mongoose from '../DataBase'

const account = new Mongoose.Schema({
    id_account: {
        type: String,
        require: true
    },
    id_session: {
        type: String,
        unique: true,
        require: true
    },
    token: {
        type: String,
        unique: true,
        require: true
    }
});

export default Mongoose.model('account', account);