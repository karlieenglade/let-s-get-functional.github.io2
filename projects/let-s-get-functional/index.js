// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//i: array of objects
//o: number, number of male customers

var maleCount = function(array) {
    //could use filter to make this simpler
    //filter returns array, so i could return the length
    //assigning filter func on customer to males variable which stores passed tests in array
    const males = _.filter(array, function(customer){
      //only pass for customers with gender key value "male"
      return customer.gender === "male";
    });
  
    //return length of males array
  return males.length;
};

var femaleCount = function(array){
  // filter takes array and a function that takes a customer
    // tests if customer.gender is female
    //filter returns array of all values that pass (are female)
    //then return the length of this array since it will be the number of females
  return _.filter(array, (customer) => customer.gender === "female").length;
};

//i: array
//o: string
// returns name of oldest customer
// reduce --> if customer.age <   ??
var oldestCustomer = function(array){
  //assigning result of reduce to variable oldest
    // reduce takes array and function
        // function takes in acc and cur. no seed bc returning existing data (a name)
  let oldest = _.reduce(array, function(acc, customer){
    //call back function passed to reduce says if customer age is < acc age
    if (customer.age < acc.age){
      //return acc (since older)
      return acc;
      //else return customer
    } else {
      return customer;
    }
    //accessing name of which ever (acc or customer) is returned 
  }).name;
  //returning name of oldest customer
  return oldest;

  //native reduce. don't use this
//  let oldest2 = array.reduce(function(acc, customer){
//   if(customer.age < acc.age){
//     return acc;
//   } else {
//     return customer;
//   }
//   }).name; // <-- do not need seed bc returning existing data .name 
// return oldest;
  
};

//i: array of objects
//o: name of youngest customer
var youngestCustomer = function(array, string){
  //assigning result of reduce to variable youngest
    // reduce takes array and function
        // function takes in acc and cur. no seed bc returning existing data (a name)
        let youngest = _.reduce(array, function(acc, customer){
          //call back function passed to reduce says if customer age is < acc age
          if (customer.age < acc.age){
            //return customer (since younger)
            return customer;
            //else return acc
          } else {
            return acc;
          }
          //accessing name of which ever (acc or customer) is returned 
        }).name;
        //returning name of youngest customer
        return youngest;
};


//i: array of objects
//o: number, average balance of all customers 
var averageBalance = function(array){
  /// balance is a string and has $ and , .. need to take those out before doing math!!!
  //create variable set to output of reduce
    //reduce takes array, function. function takes acc, customer, and seed (0)
var balance = _.reduce(array, function(acc, customer){
  //acc (seed) += customer.balance. convert to number since it's a string
    // replacing $ and , in customer.balance. converting to number. adding to acc each time
  acc += Number(customer.balance.replace(/[$,]/g, ""));
  //return acc
  return acc;
}, 0); //<-- seed is 0 since output is number
//return balance divided by array length to get average balance
return balance / array.length;

}
//i: array of objects, string letter
//o: number of names in <array> that begin with <letter>
var firstLetterCount = function(array, letter){
//make variable to assign filter results to. both to lowercase
let filtered = _.filter(array, (value) => value.name[0].toLowerCase() === letter.toLowerCase());
//return the length of filtered array (array of names that meet condition ^)
return filtered.length;

};

//i: array (of objects), customer (STRING), letter (string)
//o: number of customer's friends whose names start with <letter>
var friendFirstLetterCount = function(array, customer, letter){
  //loop over <array>
  for (let i = 0; i < array.length; i++){
    //if current value name is <customer>
    if (array[i].name === customer){
      //filter that customer's friends array (array of objects)
      let filtered = _.filter(array[i].friends, function(friend){
        //return array of friend's names that start with <letter>
        return friend.name[0].toLowerCase() === letter.toLowerCase();
      });
      //return filtered.length, since we want to know how many friends name start with <letter>
      return filtered.length;
    }
  }
};

//i: array, name
//o: array
//return array of customers' names that has <name> in their friends list
// if name is Olga, then it should return an array of all the names who have Olga as a friend
var friendsCount = function(array, name){
  //creating array to push into and return later
  let output = []; 
  //loop over <array>
  for (let i = 0; i < array.length; i++){
      //filter each customer's friends array (array of objects)
      let filtered = _.filter(array[i].friends, function(friend){
        //return array of friends who have <name> in friends array
        return friend.name === name;
      });
    
      //checking that filtered is not empty bc if it was then i would be pushing every name into it
        // if filtered array is not empty, it means that the friends (that have <name> as a friend) have been filtered into it
    if (filtered.length > 0){
      //pushing names into output array
      output.push(array[i].name);
    }
    
  }
  //return output array of names
  return output;
};

//i: array of customers/objects
//o: array, of top 3 tags
//Find the three most common tags among all customers' associated tags
var topThreeTags = function(array){
  //can use reduce with seed []
  let tags = _.reduce(array, function(acc, customer){
      // customer.tags
    return acc;
  }, []);

};

//i: array, of objects
//o: object
//c: use reduce
/* 
{
    male: 3,
    female: 4,
    non-binary: 1
}
*/
var genderCount = function(array){
// filter to get array of each gender. use length as key value in reduce
let females = array.filter(cust => cust.gender === "female");
let males = array.filter(cust => cust.gender === "male");
let nonBinary = array.filter(cust => cust.gender === "non-binary");

  let genderObj = _.reduce(array, function(acc, customer){
    // acc[customer.gender] = customer.gender;
    acc.female = females.length;
    acc.male = males.length;
    acc["non-binary"] = nonBinary.length;
    return acc
  }, {}); // <-- seed is object
  return genderObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
