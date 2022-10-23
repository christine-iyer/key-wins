const RESOURCE_PATH = '/wins'
const viewController = {
     index(req,res,next){
          res.render('wins/Index', res.locals.data)

     },
     newView(req,res,next){
          res.render('wins/New')
     },
     edit(req,res,next){
          res.render('wins/Edit', res.locals.data)
     },
     show(req,res,next){
          res.render('wins/Show', res.locals.data)
     },
     redirectHome(req,res,next){
          res.redirect(RESOURCE_PATH)
     }, 
     redirectShow(req,res,next){
          const winId = req.params.id || res.locals.data.win._id
          res.redirect(`${RESOURCE_PATH}/${winId}`)

     }
}
module.exports = viewController