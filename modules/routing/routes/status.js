import express  from    'express'
import Logger   from    '../../log/Logger'
import account  from    '../../db/model/account'


export default express()
    .get(`/`, (request, response) => {
        console.log(`status page`);
        response.render(`ejs/status.ejs`);
    })