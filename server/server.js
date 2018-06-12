import path         from 'path'
import express      from 'express'
import session      from 'express-session'
import bodyParser   from 'body-parser'
import connectMongo from 'connect-mongo'

import config       from '../config/global-config.json'
import Logger       from '../modules/log/Logger'
import Mongoose     from '../modules/db/DataBase'
import Router       from '../modules/routing/switch'

const MongoStore  = connectMongo(session);
express()
    // .set('views', path.join(__dirname, 'views'))
    .use(express.static('views'))
    .set('view engine', 'ejs')
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(session({
        secret: config.Session.SECRET,
        resave: config.Session.RESAVE,
        saveUninitialized: config.Session.SAVEUNITILAZIED,
        store: new MongoStore({ mongooseConnection: Mongoose.connection })
    }))
    .use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        Logger.success('MIDDLEWARE', 'Access-Control-Allow-Origin разрешён');
        response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        Logger.success('MIDDLEWARE', `Access-Control-Allow-Headers разрешён`);
        next()
    })
    .use(Router)
    .listen(config.Server.PORT, () => {
        Logger.info(`СЕРВЕР висит на порту: ${config.Server.PORT}`, `SUCCESS`)
    });