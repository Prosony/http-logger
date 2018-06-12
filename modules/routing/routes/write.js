import express  from 'express'
import Logger   from '../../log/Logger'
import account  from '../../db/model/account'

export default
    express().post('/', (request, response) => {
        console.log('Now we write your log');
        // account.findOne({ id_session: request.sessionID }).then(result => {
        //     if (result.token) {
        //
        //     }else{
        //         Logger.error('DATABASE', 'токен не найден');
        //     }
        // }).catch(error => {
        //     Logger.error('DATABASE', `ошибка базы данных ${error.message}`);
        // })
        response.sendStatus(200);
    })