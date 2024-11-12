const router = require("express").Router();
const Todo = require("../models/Todo");

//routes
router.post("/add/todo", (req, res) => {
  const todo = req.body.todo;
  const newTodo = new Todo({todo:todo});

  //save the todo
  newTodo
    .save()
    .then(() => {
      console.log("successfully added todo");
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
    });
})
.get('/delete/todo/:_id',(req,res)=>{
    const {_id}=req.params
    Todo.deleteOne({_id})
    .then(()=>{
        console.log('deleted todo sucessfully ')
        res.redirect('/')
    }).catch((err)=> console.log(err))
})

module.exports = router;
