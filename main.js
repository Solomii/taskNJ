/**
 * 
 * @param {Array} users users in array
 * @param {String} id number
 * @param {String} firstName name the person's first name
 * @param {Number} earning
 * @param {Number} earnings
 *
 */

let users = new Map();
users.set("1", { firstName: "Alice", earnings: 4000 });
users.set("2", { firstName: "Madison", earning: 0 });
users.set("3", { firstName: "Zaya", earnings: 12000 });
users.set("4", { firstName: "Brendon", earning: -1 });
users.set("5", { firstName: "Ted", donations: 15500 });
users.set("6", { firstName: "Brian" });
users.set("7", { firstName: "Zelda", earning: 20000 });
users.set("8", { firstName: "Brian", earning: null });
users.set("9", { firstName: "Brian", earning: 2000, earnings: 0 });
users.set("10", { firstName: "Ted", earning: undefined });


/**
 * 
 * The function takes an array of id and calulates the income on them.Checks compliance certain conditions.
 * If the conditions are not met it returns an Error!
 * 
 * 
 * @param {Array} userIds to calculate earnings for
 * @return {Number}  sum earnings and earning from array
 */

function currentEarnings(userIds) {
  let current = 0;
  if (!Array.isArray(userIds)) {
    return "not an array!";
  }
  for (let i = 0; i < userIds.length; i++)
  {
    if (typeof userIds[i] !== 'number') {
      return "Wrong input!"
    }
    let obj = users.get(userIds[i].toString());

    //IF.....
    if (obj !== null && obj !== undefined && obj.hasOwnProperty('earning') && obj.earning !== undefined && obj.earning !== null) {
      current += obj.earning;
    } else if (obj !== null && obj !== undefined && obj.hasOwnProperty('earnings') && obj.earnings !== undefined && obj.earnings !== null) {
      current += obj.earnings;
    } else {
      return "error";
    }
    
  }
    return current;
}
console.log(currentEarnings([1, 2, 3]));
console.log(currentEarnings([1, 9, 3]));
console.log(currentEarnings([1,false,3]));
console.log(currentEarnings([1, 7, 3]));
console.log(currentEarnings([6, 10, 3]));
console.log(currentEarnings([6, 10, false]));
console.log(currentEarnings([false, 10, false]));
console.log(currentEarnings([1, , 7]));
console.log(currentEarnings([1, 2, false]));
console.log(currentEarnings([false, 2, 3]));
console.log(currentEarnings([1, "vasa", 3]));
console.log(currentEarnings([1, false, 3]));
console.log(currentEarnings([8, 1, 3]));
console.log(currentEarnings([3, 2, 8]));
console.log(currentEarnings([9, 7, 4]));
console.log(currentEarnings([1, 4, 3]));
console.log(currentEarnings([7, 2, false]));
console.log(currentEarnings([6, 2, 4]));
console.log(currentEarnings([1, 8, 3]));
console.log(currentEarnings([5, 2, false]));
console.log(currentEarnings(null));
console.log(currentEarnings("vasa"));


/**
 * The test function checks whether the result is equal to the expected one
 * @returns {String}  sum earnings and earning from array
 */

function test() {
  if (
    currentEarnings([1, 2, 3]) == 16000 &&
    currentEarnings([1, 9, 3]) == 18000 &&
    currentEarnings([1, 7, 3]) == 36000 &&
    currentEarnings([1, 9, 3]) == 18000 &&
    currentEarnings([9, 7, 4]) == 21999 &&
    currentEarnings([1, 4, 3]) == 15999 &&
    currentEarnings([6, 10, 3]) == "error" &&
    currentEarnings([6, 10, false]) == "error" &&
    currentEarnings([1, 8, 3]) == "error" &&
    currentEarnings([8, 5, 3]) == "error" &&
    currentEarnings([3, 2, 8]) == "error" &&
    currentEarnings([1, 10, 3]) == "error" &&
    currentEarnings([false, 10, false]) == "Wrong input!" &&
    currentEarnings([1, false, 3]) == "Wrong input!" &&
    currentEarnings([7, 2, false]) == "Wrong input!" &&
    currentEarnings([false, 2, 3]) == "Wrong input!" &&
    currentEarnings([1, 2, false]) == "Wrong input!" &&
    currentEarnings([1, , 7])  == "Wrong input!" &&
    currentEarnings() == "not an array!" &&
    currentEarnings(1) == "not an array!" &&
    currentEarnings("vasa") == "not an array!" &&
    currentEarnings(null) == "not an array!" 
  ) {
    return "Test passes!";
  } else {
    return "Test failed";
  }

};
 console.log(test());

