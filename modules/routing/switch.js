import express          from 'express'

import SessionModule    from '../sessions.js'

import WriteLog         from '../routing/routes/write.js'
import StatusPage       from '../routing/routes/status.js'

export default express()
    .use(SessionModule)
    .use('/status', StatusPage)
    .use('/write', WriteLog)
