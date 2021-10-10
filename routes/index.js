const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controllers');

console.log('Router loaded.');
router.get('/',homeController.home);

router.post('/create-todo',homeController.create);

module.exports=router;