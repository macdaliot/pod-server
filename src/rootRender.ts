import path from 'path'
import Router from 'koa-router'
import views from 'koa-views'

export default function getRootRenderRouter (rootOrigin: any): Router {
  const router = new Router()
  router.all('/', views(path.join(__dirname, 'views'), { extension: 'ejs' }))
  router.use(async (ctx, next) => {
    console.log('PATHNAME!!!!!!!!!!!!!!!!!!!!!', ctx.path)
    if (ctx.path === '/') {
      return ctx.render('home', {
        rootOrigin
      })
    } else {
      await next()
    }
  })
  return router
}
