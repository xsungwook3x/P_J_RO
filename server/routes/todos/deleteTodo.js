const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const deleteTodo=async(req,res)=>{
    const id=req.params.id;
    const user_id=req.params.user_id;
    try{
        const delete_todo=await prisma.todos.delete({
            where:{
                id: parseInt(id)
            },
            
        });

        const todo=await prisma.todos.findMany({
            where:{
                user_id: parseInt(user_id)
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
module.exports=deleteTodo;