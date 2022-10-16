const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const deleteRoutine=async(req,res)=>{
    const id=req.params.id;
    const user_id=req.params.user_id;
    
    try{
        const delete_routine=await prisma.routines.delete({
            where:{
                id: parseInt(id)
            },
            
        });

        const routine=await prisma.routines.findMany({
            where:{
                user_id: parseInt(user_id)
            }
        });

        res.status(200).send({
            ok: true,
            data: {routine},
        });
    } catch (err) {
        res.status(409).send({
        ok: false,
        message: err.message,
        });
    }
}
module.exports=deleteRoutine;