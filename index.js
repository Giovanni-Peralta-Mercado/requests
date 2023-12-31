const express = require('express')

const app = express()
app.use(express.json())

app.get('/:user/:password',(req,res)=>{

    const {user,password} = req.params

    if(user=== 'giovanni' && password ==='1234'){
        res.json({msg: 'Inicio de sesion exitoso'})
        return
    }


    res.status(404).json({msg: 'Error en el usuario o contraseña'})
})

//  http://localhost:3000/login?user=giovanni&&password=1234
app.get('/login',(req,res)=>{  //Endpoint
    const {user,password} = req.query
    if(!user || !password){
        res.status(400).json({
            msg:'You need to provide <user> and <password> parameters'
        })
        return

    }


    if(user=== 'giovanni' && password ==='1234'){
        res.json({msg: 'Inicio de sesion exitoso'})
        return
    }


    res.status(404).json({msg: 'Error en el usuario o contraseña'})


})

//  http://localhost:3000/login
app.post('/login',(req,res)=>{
    const {user,password} = req.body
    if(!user || !password){
        res.status(400).json({
            msg:'You need to provide <user> and <password> parameters'
        })
        return

    }


    if(user=== 'giovanni' && password ==='1234'){
        res.json({msg: 'Inicio de sesion exitoso'})
        return
    }


    res.status(404).json({msg: 'Error en el usuario o contraseña'})

})


app.post('/',(request,response)=>{
    response.json({msg:'Hola Post'})
})
app.put('/',(request,response)=>{
    response.jsom({msg:'Hola Put'})
})
app.patch('/',(request,response)=>{
    response.json({msg:'Hola Patch'})
})
app.delete('/',(request,response)=>{
    response.json({msg:'Hola delete'})
})

/*
*
*
*     FUNCIONALIDAD   
*
*/

//http://localhost:3000/giovanni/1234
app.listen(3000,()=>{
    console.log('listening on port 3000')
})