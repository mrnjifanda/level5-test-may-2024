const contacts = require('../src/models/contact');

class contactService {

    async getAll (where = {}) {

        try {

            const posts = await contacts.find(where);
            return { error: false, data: posts };
        } catch (error) {

            console.log(error);
            return { error: true, data: error.message };
        }
    }

    async findByTitle (search_value) {

        try {

            const find = await contacts.find({ "title": {
                $regex: '.*' + search_value + '.*',
                $options: 'i'
            }});
            return { error: false, data: find };
        } catch (error) {

            console.log(error);
            return { error: true, data: error.message };
        }
    }

    async findById (id) {

        try {

            const find = await contacts.findById(id).populate({
                path: 'author',
                select: 'username -_id'
            });
            return { error: false, data: find };
        } catch (error) {
        
            console.log(error);
            return { error: true, data: error.message };
        }
    }

    async create (data) {

        try {

            const post = await contacts.create(data);
            return { error: false, data: post };
        } catch (error) {

            console.log(error);
            return { error: true, data: error.message };
        }
    }
}

module.exports = new contactService();
