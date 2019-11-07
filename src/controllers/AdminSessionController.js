const Admin = require('../models/Admin');

module.exports = {
    async store(req, res){
        const { user, email, matricula } = req.body;

    let admin = await Admin.findOne({ user, email, matricula });

    if(!admin){
        admin = await Admin.create({ 
            email,
            password,
            email,
            matricula
        });
    }
    
    return res.status(400).json({ statusMessage: "O usuário foi criado com sucesso!"});
    }
};