const router = require('express').Router();
const { User, Meal, Workout } = require('../../models');
const { findByPk } = require('../../models/user');
const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  








module.exports = router;