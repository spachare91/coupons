const express = require('express')
const { sequelize ,Coupons,} = require('./models/index')
const {Op} =require('sequelize')

const app= express()

app.use(express.json())

app.get('/',async(req,res)=>{
    res.send("hello world....")
})
// add coupons

app.post('/coupon',async(req,res)=>{
    try {
        console.log(req.body);
        const ans= await Coupons.create(req.body)
        
        res.json({ans})

    } catch (err) {
        res.json({err})
        
    }
})


// fetch valid coupons...

app.post('/validcoupon',async(req,res)=>{
    try {
        const {title, branch_id,customer_no,bday} =req.body
        
            if(bday==true){
                const ans= await Coupons.findAll({
                    where: {title:[title,"birthday"], branch_id:branch_id , [Op.or]: [{customer_no: null}, {customer_no: customer_no}]}
                })
                res.json({ans})
            }
            else{
                const ans= await Coupons.findAll({
                    where: { title:title, branch_id:branch_id , [Op.or]: [{customer_no: null}, {customer_no: customer_no}]}
                })
                res.json({ans})
            }
  
            res.send()
        

    } catch (err) {
        res.json({err})
        
    }
})




app.listen(5000,async()=>{
    console.log(`Connected on port http://localhost:5000`)
    try {
     //   Coupons.sync({force:true})
        await sequelize.authenticate();
        console.log("Database connected....");
    } catch (err) {
        console.log(err);
    }
    
})