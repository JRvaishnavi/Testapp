/**
 * RegistrationController
 *
 * @description :: Server-side logic for managing registrations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  findData:function(req,resp){
    console.log("hello");
    Registration.find(function(err, res){
      if(err){
        console.log("error");
         res.send(500, { error: "DB Error" });
      }else{
        console.log(res);
        return res;
      }
    });
  },
  newUser:function(req,res){
    console.log("create");
    console.log(req.params.all());
    Registration.create(req.params.all(),function(err, res){
      console.log("created");
      console.log(res);
      return res;
    });
  }
};

