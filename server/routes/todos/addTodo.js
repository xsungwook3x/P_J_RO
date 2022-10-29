const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const addTodo=async(req,res)=>{
    const {user_id,title}=req.body;
    try{
        const new_todo=await prisma.todos.create({
            data: {
                user_id,
                title,
            },
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
module.exports=addTodo;