const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const updateTodo=async(req,res)=>{
    const {id,user_id,checked}=req.body;
    try{
        const update_todo=await prisma.todos.update({
            where:{
                id: parseInt(id)
            },
            data:{
                checked: checked
            }
        });

        const todo=await prisma.todos.findMany({
            where:{
                user_id: user_id
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