import Logger   from '../modules/log/Logger'
import Account  from '../modules/db/model/account'

import Config   from '../config/global-config.json'

export default (request, response, next) => {
    if (Config.Status.AUTH){
        if (request.path === '/favicon.ico') {
            next()
        } else {
            Logger.info('SESSION', `проверка сессии: ${request.sessionID}`);
            Account.findOne({ id_session: request.sessionID })
                .then(result => {
                    if (result != null && result.token !== undefined) {
                        Logger.success('SESSION DATABASE', 'сессия прошла проверку');
                        next()
                    } else {
                        Logger.error('SESSION DATABASE', 'сессия не найдена');
                        next() //TODO fix this
                    }
                })
                .catch(error => {
                    response.redirect('/authentication/sign-in');
                    Logger.error('SESSION DATABASE', `ошибка базы данных: ${error.message}`)
                })
        }
    }else{
        next();
    }

}