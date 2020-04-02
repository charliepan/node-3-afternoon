module.exports ={
    create: (req,res) =>{
        const db = req.app.get('db');
        const {name, description, price, image_url} =req.body;
        db.create_product(name, description, price, image_url).then(() => {
            res.sendStatus(200);
        }).catch(err=>{
            res.status(500).send({errorMessage:"SOMETHING WONG"});
            console.log(err);
        });
    },
    getOne: (req,res) =>{
        const db = req.app.get('db');
        const {id} = req.params;
        db.read_product(id).then(dbres => {
            res.sendStatus(200).send(dbres);
        }).catch(err=>{
            res.status(500).send({errorMessage:"SOMETHING WONG"});
            console.log(err);
        });
    },
    getAll: (req,res) =>{
        const db = req.app.get('db');
        db.read_products().then(dbres => {
            res.status(200).send(dbres);
        }).catch(err=>{
            res.status(500).send({errorMessage:"SOMETHING WONG"});
            console.log(err);
        });
    },
    update: (req,res) =>{
        const db = req.app.get('db');
        const {params, query} = req;
        db.update_product(query.desc, params.id).then(() => {
            res.sendStatus(200);
        }).catch(err=>{
            res.status(500).send({errorMessage:"SOMETHING WONG"});
            console.log(err);
        });
    },
    delete: (req,res) =>{
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product(id).then(() => {
            res.sendStatus(200);
        }).catch(err=>{
            res.status(500).send({errorMessage:"SOMETHING WONG"});
            console.log(err);
        });
    }
}