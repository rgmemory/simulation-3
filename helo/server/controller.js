var test = [1,2,3]



module.exports = {

    get: function(req, res){
        req.app.get('db').get_users().then(users => {
            res.status(200).send(users)
        })
    },

    register: function(req, res){
        req.app.get('db').add_user([req.body.username, req.body.password]).then(ok => {

            res.status(200).send(ok);
        })
    },

    login: function(req, res){
        // console.log("login works", req.body)

        req.app.get('db').find_user([req.body.username, req.body.password]).then(user => {
            console.log(user);
            // res.send(user);
        })

    },

    getpost: function(req, res){
        // console.log("backend works")
        req.app.get('db').get_join().then(users => {
            console.log(users)
            res.status(200).send(users)
        })

        

    }
}