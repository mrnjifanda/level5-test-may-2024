const express = require("express");
const User = require("../models/User");
const router = express.Router();
const Contacts = require("../models/Contacts");

router.post('/adduser', async (req, res, next) => {
    const user = new User(req.body)
    console.log(user)
    const save = await user.save()
    res.status(201).json({errors: false, data:save})
})

router.post("/addcontact", async (req, res, next) => {
    const contact = new Contacts(req.body);
    console.log(contact)
  const save = await contact.save();
   res.status(201).json({ errors: false, data: save });
});
router.get("/getusers", async (req, res, next) => {
    const users = await User.find()
    res.status(200).json({ error: false, data: users })
})
router.get("/getcontacts", async (req, res, next) => {
  const contacts = await Contacts.find().populate('added_by')
  res.status(200).json({ error: false, data: contacts });
});
router.delete("/delete/:contactid", async (req, res, next) => {
  const contact = await Contacts.findByIdAndDelete(req.params.contactid)
  res.status(200).json({ error: false, data: contact })

})
router.put("/update/:contactid", async (req, res, next) => {
  const contact = await Contacts.findByIdAndUpdate(req.params.contactid, req.body)
  res.status(200).json({ error: false, data: contact })
})
router.get("/getcontact/:id", async (req, res, next) => {
  const contacts = await Contacts.findById(req.params.id).populate("added_by");
  res.status(200).json({ error: false, data: contacts });
});
module.exports = router;