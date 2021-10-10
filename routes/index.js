const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controllers');

console.log('Router loaded.');

// making requests
router.get('/',homeController.home);

router.post('/create-todo',homeController.create);

router.post('/destroy', homeController.destroy);

module.exports=router;