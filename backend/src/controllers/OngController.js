const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/conection')

module.exports = {
    async index(request, response) {
    
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
        
    },

    async create(request, response) {
        const data = request.body;
        const {name, city, email, uf, whatsapp} = data;
        const id = generateUniqueId();
    
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