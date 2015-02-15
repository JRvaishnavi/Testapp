/**
* Movies.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    movieId:{
      type:"integer",
      unique:true,
      primaryKey:true
    },
    movieName:"string",
    movieImg:"string",
    movieDirector:"string"
  },
  owner:{
    model:"Screens"
  }
};

