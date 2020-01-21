const express=require('express');
const router = express.Router();

let users=["abolfazl"];
router.get('/user', (req, res, next) => {
    res.status(200).send(users);
});

router.post('/users', (req, res, next) => {
    users.push(req.body.name);
});
export default router;
