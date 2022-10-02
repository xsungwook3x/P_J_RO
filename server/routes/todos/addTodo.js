const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const addTodo=async(req,res)=>{
    const {user_id,title}=req.body;
    try{
        const todo=await prisma.todos.create({
            data: {
                user_id,
                title,
            },
        });

        res.status(200).send({
            ok: true,
            data: {},
        });
    } catch (err) {
        res.status(409).send({
        ok: false,
        message: err.message,
        });
    }
}
module.exports=addTodo;