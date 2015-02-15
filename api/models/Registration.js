/**
* Registration.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user_id:{
      type:"integer",
      autoIncrement:true,
      unique:true,
      primaryKey:true
    },
    user_name:{
      type:"string",
      required:true
    },
    user_pwd:{
      type:"string",
      required:true
    },
    user_email:{
      type:"email",
      unique:true
    }

  }
};

// Registration.create({user_name:'Walter Jr', user_pwd:"vais",user_email:"vaishujr@gmail.com"}).exec(function createCB(err,created){
//   console.log('Created user with name '+created.user_name);
//   });