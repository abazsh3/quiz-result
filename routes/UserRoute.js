const express=require('express');
const router = express.Router();

let users=["abolfazl"];
router.get('/user', (req, res, next) => {
    res.status(200).send(users.map((user)=>{name:user}));
});

router.post('/user', (req, res, next) => {
    users.push(req.body.name);
});
module.exports.route=router;
