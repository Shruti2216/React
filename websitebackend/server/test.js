var  models = require('./server.js').models;

//How to Create Data

/*models.Profile.create({name: 'Nick'},(err, profile) =>{
    console.log("data?", err, profile);
})*/
/*
models.Profile.upsert({id:'60a23a3c365f37506be97f35',name: 'Nick1'},(err, profile) =>{
    console.log("data?", err, profile);
})
*/

/*models.Profile.findOrCreate({name: 'Nick2'},(err, profile) =>{
    //console.log("data?", err, profile);
    if(err){
        console.log("Tnere was an error");
    }else if(profile){
       //profile.updateAttributes({
           // email:"shruti@yeole.com"
        //}, (updateError,updated) => {
           // console.log("Save",updateError,updated);
        });//

        profile.email = 'shruti@new.com';
        profile.save((ue, updated) => {
            console.log("Updated",updated);
        });
    }
})*/
/* 
var toSave= [
    {name:'Nick1',email:'nick1@mail.com'},
    {name:'Nick2',email:'nick2@mail.com'},
    {name:'Nick3',email:'nick3@mail.com'},
    {name:'Nick4',email:'nick4@mail.com'},
    {name:'Nick5',email:'nick5@mail.com'},
    {name:'Nick6',email:'nick6@mail.com'},
    {name:'Nick7',email:'nick7@mail.com'},
    {name:'Nick8',email:'nick8@mail.com'},
    {name:'Nick9',email:'nick9@mail.com'},
    {name:'Nick10',email:'nick10@mail.com'},
    {name:'Nick11',email:'nick11@mail.com'},
    
];
toSave.map(obj => {
    models.Profile.create(obj, (err, created) => {
        console.log('Created?',created);
    })
}) */
//filetrartion of object

//THIS CODE FOR FINDING DOCUMENT ID DATABASE

 var filter ={
    where: {
        email:{like:'nick'}, //like return the same nick data
        //postCount: {gt: 10}  //gte:graterthan equal to and lte:less than equal to
    },  //kind of like MYSQL where Clause
    order: 'id ASC', //order by 'filed direction'
    limit: 10,
    skip:0, //skip first 4 data
    fileds:{
        email: true
    }
    /* include:{
        relation:'Posts',
        scope:{   //it is filter property for relation
           limit:5,  //it shows lastest 5 posts
           order:'date DESC', //it shows posts in decreasing order
           include:{
               relation:'Image',
               limit:1, //shows  only one image
               where:{type: 'thumbnail'}
           }
        }
    } */
}
 
//Profile.Posts.Image

/* models.Profile.findOne({where:{name:'Nick'}},(err,found) =>{   //Find first instance of Nick name from Profile
    console.log("Found?",err, found);
}) */ 


/* models.Profile.find({where:{name:'Nick1'},order:'id DESC'},(err,found) =>{   //Find array of instance of Nick name from Profile
    console.log("Found?",err, found);
}) */


//THIS IS CODE FOR DOCUMENT FIND BY ID AND ALSO USE A FILTER
/* models.Profile.findById("60a24cb75bf376564cbf9fca",filter,(err,found) =>{   //Find array instance of Nick name from Profile
    console.log("Found?",err, found);   //here we used a filter var
}) */

//THIS   CODE DESTROY THE DOCUMENT WHICH IS FOUNDED USING FINDbyID  (1st Way)
/* models.Profile.findById("60a24cb75bf376564cbf9fca",(err,found) =>{   //Find array instance of Nick name from Profile
    console.log("Found?",err, found);
    found.destroy();
}) */


//THIS IS SECOND WAY TO DESTROY DATA
/* models.Profile.destroyAll(filter.where,(err,found) =>{   //Find array instance of Nick name from Profile
    console.log("Found?",err, found);
    
}) */  

/*models.Profile.destroyById("60a23a3c365f37506be97f35",(err,found) =>{   //Find array instance of Nick name from Profile
    console.log("Found?",err, found);
    
})*/

models.Profile.findById("60a23a3c365f37506be97f35",{include:'Posts'},(err,found) =>{   //Find array instance of Nick name from Profile
    console.log("Found?",err, found);
    found.Posts.destroyAll({date:{lte: new Date('2019-02-04')}})
})

