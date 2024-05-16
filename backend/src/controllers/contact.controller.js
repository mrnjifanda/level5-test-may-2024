const contactService = require('../../services/contact.service');
const res = require('../../configs/response.configs');

const getAll = async (request, response, next) => {
    const contacts = await contactService.getAll();
    if (!contacts.error) {

        return response.json(
            res.success('All posts', contacts.data)
        );
    }

    return response.status(401).json(
        res.error(contacts.data, 'ERROR', 401)
    );
};

const getAllByUserId = async (request, response, next) => {
    const user_id = request.user_id;
    const contacts = await contactService.getAll({ "user": user_id });
    if (!contacts.error) {

        return response.json(
            res.success('All posts by author', contacts.data)
        );
    }

    return response.status(401).json(
        res.error(contacts.data, 'ERROR', 401)
    );
};
const getOneById = async (request, response, next) => {
    const id = request.params?.id;
    if(id) {

        const find = await contactService.findById(id);
        if (!find.error) {

            return response.json(
                res.success('Article content', find.data)
            );
        }
    }

    return response.status(401).json(
        res.error(posts.data, 'ERROR', 401)
    );
};

const create = async (request, response, next) => {
    const data = request.body;
    data.author = request.user_id;
    const result = await contactService.create(data);
    if (!result.error) {

        return response.status(201).json(
            res.success('Article created', result.data, 201)
        )
    }

    return response.status(422).json(
        res.error(result.data)
    );
};


module.exports = { getAll, getAllByUserId, getOneById, create }