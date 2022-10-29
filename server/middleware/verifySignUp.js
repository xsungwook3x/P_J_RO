const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

checkDuplicateEmail = async(req,res,next) => {
    try{
        const user= await prisma.users.findUnique({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                res.status(400).send({
                    message:"Failed! Username is already in use!"
                });
                return;
            }
        })

        next();
    }catch(err){
        res.status(409).send({
            ok: false,
            message: err.message,
            });
    }
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,

};

module.exports = verifySignUp;