const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const findTodo=async(req,res)=>{
    const user_id=parseInt(req.params.user_id);
    try{
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
module.exports=findTodo;