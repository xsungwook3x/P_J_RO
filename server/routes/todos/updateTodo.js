const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const updateTodo=async(req,res)=>{
    const {id,checked}=req.body;
    try{
        const todo=await prisma.todos.update({
            where:{
                id: parseInt(id)
            },
            data:{
                checked: checked
            }
        });

        res.status(200).send({
            ok: true,
            data: {todo},
        });
    } catch (err) {
        res.status(409).send({
        ok: false,
        message: err.message,
        });
    }
}
module.exports=updateTodo;