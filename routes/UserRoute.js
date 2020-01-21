const express=require('express');
const router = express.Router();

let users=[{name:"abolfazl"},{name:"ali"}];
router.get('/user', (req, res, next) => {
    res.status(200).send(users);
});

router.post('/user', (req, res, next) => {
    users.push(req.body.name);
});
module.exports.route=router;
