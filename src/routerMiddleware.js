module.exports = function (req, res, next){
    if(Object.keys(req.body).indexOf('name') > -1){
        if(req.body.name[0] >= 'A' && req.body.name[0] <= 'Z'){
            next();
        }else{
            res.status(400).json({ error: 'User name is not capitalized!'});
        }
    }else{
        res.status(400).json({ error: 'You need to pass name to this user!'});
    }
}