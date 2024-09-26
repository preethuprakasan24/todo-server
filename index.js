const jsonServer = require('json-server')

const todoServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

todoServer.use(middleware)
todoServer.use(router)


const PORT = 4000 || process.env.PORT

todoServer.listen(PORT, () => {
    console.log(`server running successfully in ${PORT}`);

})