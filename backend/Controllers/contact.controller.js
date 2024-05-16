const Contact = require('../Model/Contact')


const add = async(request,response,next) =>{

}


const read = async(request,response,next) =>{
    const contacts = await Contact.find();
    return response.json({
        status: 'OK',
        status_code : 200,
        message: 'All Users',
        data: contacts
  })
}


const update = async(request,response,next) =>{
    
}

const deletes = async(request,response,next) =>{
   
        const {id} = request.params;
        const contact = await Contact.deleteOne({_id: id})
        if (contact) {
            response.json({
                status: 'Deleted',
                status_code : 204,
                message: 'Deleted Succesfully',
               
            })
          }
      };
      


module.exports = { add, read, update, deletes }