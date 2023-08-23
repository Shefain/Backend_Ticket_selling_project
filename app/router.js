const express = require('express');
const router = express.Router()



router.use('/api/v1/ticket',require('../routes/ticket'))




router.get('/health',(_req,res)=>{
 res.status(200).json({message:"success"})
})


module.exports = router;
