const user = require('../Model/User')
const create = async (request, response, next) => {
    const data = request.body;
    console.log(data);
    const result = await user.create(data);
    if (!result.error) {
        response.status(201).json({
            status: ' Created',
            status_code: 201,
            message: 'User created succesfully',
        })

        return response.status(422).json({
            status: 'Error',
            status_code: 422,
            message: 'Please fill out all the fields',
        })
    }

}

module.exports = { create }