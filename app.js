const express = require('express')
const { sequelize ,Coupons,} = require('./models/index')
const {Op} =require('sequelize')
const res = require('express/lib/response')
const { json } = require('express/lib/response')

const app= express()

app.use(express.json())

app.get('/',async(req,res)=>{
    res.send("hello world....")
})
// add coupons

app.post('/coupon',async(req,res)=>{
    try {
        // console.log(req.body);
        const ans= await Coupons.create(req.body)
        
        res.json({ans})

    } catch (err) {
        res.json({err})
        
    }
})


// fetch valid coupons...

app.post('/validcoupon',async(req,res)=>{
    try {
        const {title, branch_id,customer_no,bday,emp_id} =req.body
        const date=new Date();

            //search by title...plat gold etc..working

            if(title!=null && emp_id==null && customer_no==null && bday==null && branch_id==null){
                try {
                    const ans= await Coupons.findAll({
                        where:{title:title,start:{[Op.lte]:date},end:{ [Op.gte]:date}}
                    })
                    res.json({ans})
                
 
                } catch (err) {
                    console.log(err)
                    req.json({ans})
                 

                }
                
            }

             // if employee id is given and customer no is null...working
             if(emp_id!=null && title==null && customer_no==null && bday==null && branch_id!=null){
                try {
                    const ans=await Coupons.findAll({
                        where: {employee_id:emp_id,branch_id:branch_id, start:{[Op.lte]:date},end:{ [Op.gte]:date}}
                    })
                    res.json({ans})

                } catch (err) {
                    console.log(err);

                }
            }           
            
            // if employee id and customer no is given...working...
            if(title==null && emp_id!=null && customer_no!=null && bday==null && branch_id!=null){
                try {
                    const ans=await Coupons.findAll({
                        where: {employee_id:emp_id,branch_id:branch_id,customer_no:customer_no, start:{[Op.lte]:date},end:{ [Op.gte]:date}}
                    })
                    console.log("form here")
                    res.json({ans})

                } catch (err) {
                    console.log(err);

                }
            }

            // show coupons branch wise.....working
            if(title==null && emp_id==null && customer_no==null && bday==null && branch_id!=null){
                try {
                    const ans=await Coupons.findAll({
                        where: {branch_id:branch_id, start:{[Op.lte]:date},end:{ [Op.gte]:date}}
                    })
                    res.json({ans})

                } catch (err) {
                    console.log(err);

                }
            }

            // if bday value is true..WORKING
            if(title==null && emp_id==null && customer_no==null && bday==true && branch_id==null){
                try {
                    const ans= await Coupons.findAll({
                        where: {title:"birthday"}
                    })
                    res.json({ans})
                } catch (err) {
                    console.log(err)
                    res.json({err})   
                }
            }
  
            // show coupons for current date...WORKING
            if(title==null && emp_id==null && customer_no==null && bday==null && branch_id==null){
                try {
                    const ans=await Coupons.findAll({
                        where: {start:{[Op.lte]:date},end:{ [Op.gte]:date}}
                    })
                    res.json({ans})
                    res.send()
                } catch (err) {
                    console.log(err);
                    res.send();
                }
            }

            res.send()
        

    } catch (err) {
        console.log(err)
        res.json({err})
        
    }
})



app.listen(5000,async()=>{
    console.log(`Connected on port http://localhost:5000`)
    try {
        await sequelize.authenticate();
        console.log("Database connected....");


    } catch (err) {
        console.log(err);
    }
    
})