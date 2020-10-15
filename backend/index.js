'use strict';
const koa = require('koa');
const koaRouter = require('koa-router');
const json = require('koa-json');
const bodyParser = require('koa-body');
const { port,password,host,user,database } = require('./config/env');
const {auth} = require('./routes/auth');
const {subscription} = require('./routes/subscription');
const {admin}        = require('./routes/admin');
const cors = require('@koa/cors');
const koaOptions = {
  origin: true,
  credentials: true
};


let con = require('./models/connection')(host,user,password,database);

const app = new koa();
const router = new koaRouter();

//error middleware
app.use( async (ctx, next) => {
    try { 
      await next()
    } catch(err) {
      console.log(err.status)
      ctx.status = err.status || 500;
      ctx.body = err.message;
    }
  });

  // logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// add koa-body middleware to parse JSON and form-data body
app.use(bodyParser({
  multipart: true,
  formidable: {
      maxFileSize:200 * 1024 * 1024, //Upload file size
      keepExtensions: true, //  Extensions to save images
  }
  }));

// Json Prettier Middleware
app.use(json());

router.use(auth(koaRouter,con).routes());
router.use(subscription(koaRouter,con).routes());
router.use(admin(koaRouter,con).routes());

//Router Middleware
app.use(router.routes()).use(router.allowedMethods())
    .use(cors(koaOptions));

const server = app.listen(port, ()=> console.log('Server Started...'));
//Set Up Auth Api

module.exports = server;