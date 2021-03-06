require('dotenv').config();
const mongoose = require('mongoose');
const mySecret = process.env['MONGO_URI']
mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });

// let Person;
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});
const Person = mongoose.model("Person", personSchema);
console.log(Person);

const createAndSavePerson = (done) => {
  function saveData(done){
    const person = new Person({
      name:'Vishu',
      age:28,
      favoriteFoods:['pani puri', 'naan', 'pav bhaji']
    });
    person.save(function(err, data){
      if (err) return console.log(err);
      done(null, data);
    });
  }
  saveData(done);
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data){
    if (err) return console.log(err);
    done(null, data);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name : personName}, function(err, data){
    if(err)return console.log(err);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food}, function(err, data){
    if(err) return console.log(err);
    done(null, data);
  })
  
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId},function(err, data){
    if(err) return console.log(err);
    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({ _id: personId }, function (err, data) {
    if (err) return console.log(err);
  }).then(function (doc) {
    doc.favoriteFoods.push(foodToAdd);
    doc.save(function (err, data) {
      if (err) return console.log(err);
      done(null, data);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
