const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const deleteTodo=async(req,res)=>{
    const id=req.params.id;
    try{
        const todo=await prisma.todos.delete({
            where:{
                id: parseInt(id)
            },
            
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