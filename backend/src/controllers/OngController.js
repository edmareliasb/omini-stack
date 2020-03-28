const crypto = require('crypto');
const connection = require('../database/conection')

module.exports = {
    async index(request, response) {
    
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
        
    },

    async create(request, response) {
        const data = request.body;
        const {name, city, email, uf, whatsapp} = data;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        console.log(data);
    
        return response.json({id});
    }
}