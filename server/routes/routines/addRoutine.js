const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const addRoutine=async(req,res)=>{
    const {user_id,title,mon,tue,wed,thr,fri,sat,sun}=req.body;
    try{
        const new_routine=await prisma.routines.create({
            data: {
                user_id,
                title,
                mon,
                tue,
                wed,
                thr,
                fri,
                sat,
                sun

            },
        });
        
        const routine=await prisma.routines.findMany({
            where:{
                user_id: user_id
            }
        });

        res.status(200).send({
            ok: true,
            data: {routine}
        });
    } catch (err) {
        res.status(409).send({
        ok: false,
        message: err.message,
        });
    }
}
module.exports=addRoutine;