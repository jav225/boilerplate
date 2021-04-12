import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
//routes
import user from './src/routes/user.routes'

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 3000;

//middlewares
//logger
app.use(morgan('dev'))
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

//Routes
app.use('/user', user)

//catch 404 Errors and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

//Error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    res.status(status).json({
        error: {
            message: error.message
        }
    })
    console.log(err)
})

//Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});