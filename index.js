import express from 'express'

const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/order/food",(req, res)=>{
    const {quantity, menu, price} = req.query;

    const {user, contry, age} = req.headers;

    const totalPrice = parseInt(price) * parseInt(quantity);

    res.json({
        message: `You have ordered ${quantity} ${menu}`,
        bill: `Your total bill is ${totalPrice}`,
        details: `You are ${user} from ${contry} and age is ${age}`
    })
})

app.get("/food/:type", (req, res)=>{
    const {type} = req.params;

    if(type=="veg"){
        return res.json({
            message: "You have ordered veg food"
        })
    }
    else if(type=="non-veg"){
        return res.json({
            message: "You have ordered non-veg food"
        })
    }
    else{
        return res.json({
            message: "You have ordered food"
        })
    }
})

app.post("/user", (req, res)=>{
    const {name, age} = req.body;

    res.json({
        message: `Hello ${name}, you are ${age} years old`
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})