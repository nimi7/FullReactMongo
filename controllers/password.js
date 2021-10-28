const router = require("express").Router();
const User = require('../models/password');
const passport = require('passport');



router.get("/", (req, res) => {
  console.log('router',req.user)
  return User.find({})
    .then((date) => {
      res.status(200).send(date);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

// router.get('/password',  function (req, res, next) {

// console.log('router.get.password',req.user)
// console.log('router.get.password',req.user.email)
 
//   res.send(`hallow  ${req.user.email}`);
// });


router.get('/Passwords/edit/:id', (req, res) => {
  console.log('router.get',req.user)
  User.findById({ _id: req.params.id }, (err, guide) => {
    if (err) {
      return res.status(400).json({ success: false, error: `guide not found` })
    }
    if (!guide) {
      return res.status(404).json({ success: false, error: `guide not found` })
    }
    return res.status(200).json({ success: true, data: guide })
  }).catch(err => console.log(err))
});


router.get('/Passwords/:id', (req, res) => {

  User.findOne({ _id: req.params.id }, (err, guide) => {
    if (err) {
      return res.status(400).json({ success: false, error: `guide not found` })
    }
    if (!guide) {
      return res.status(404).json({ success: false, error: `guide not found` })
    }
    return res.status(200).json({ success: true, data: guide })
  }).catch(err => console.log(err))
});


router.post('/password', async function (req, res, next) {
  console.log('This is password Post')


  const {name, email, password } = req.body
  const post = new User({
    name,
    email,
    password
  });
  try {
    await post.save();
  } catch (err) {
    return next(err);
  }
  res.redirect('/');
});




router.delete("/Password/:id", (req, res) => {
  console.log('This is Delete router')
  console.log(req.params.id)
  const id = req.params.id;
  User.findByIdAndRemove({ _id: id })
    .then((results) => {
      res.status(200).json(results).redirect('/');
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
  res.redirect('/');
});




router.post('/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/Login',
    failureFlash: true,
  })

);






router.put("/User/:id", (req, res) => {

  console.log('This is Put new', req.params.id, req.body.id)
  const updateData = {
    name: req.body.name,
    last: req.body.last,
    email: req.body.email,
    pic: req.body.pic,
    date: Date.now()
    // modifideDate: Date.now(),
  };
  console.log(updateData);

  User.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true },
    function (err, result) {
      res.send(result);

    }
  );
});



module.exports = router;