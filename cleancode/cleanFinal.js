'use strict';
const budget = Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
  ]);
  
  const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100,
  });
  
  //optional chaining (.) and nullish coalescing operator(?) ES2020 and refactoring or removing duplicate code
  const userSpendLimit = (limits, user) => limits?.[user] ?? 0;

  const addExpense = function (state, limits, value, description, user = 'jonas') {
    const cleanUser = user.toLowerCase();
  
      return value <= userSpendLimit(limits, cleanUser) ? 
      [...state, { value: -value, description, user: cleanUser }] : state;
  };
  const customExpense1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
  console.log(customExpense1);
  const customExpense2 = addExpense(customExpense1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
  console.log(customExpense2);
//   addExpense(200, 'Stuff', 'Jay');

const checkBudget = (state, limits) =>
     state.map(entry => 
         entry.value < -userSpendLimit(limits, entry.user) 
         ? {...entry, flag: 'limit'} : entry
     );

  const finalBudget = checkBudget(customExpense2, spendingLimits);
  console.log(finalBudget);

// const bigExpenses = function (state, limit) {
//     const hugeExpense = state.filter(entry => entry.value <= -limit).map(entry => entry.description.slice(-2))
//     .join('/');
//     console.log(hugeExpense);  
//   };
//   bigExpenses(customExpense2, 1000);
//   console.log(bigExpensesResult);


const bigExpenses1 = function name(state, bigExpense) {
    const bigExpenseResult = state.filter(entry => entry.value <= -bigExpense)
    .map(entry => entry.description.slice(-2)).join('/');
    console.log(bigExpenseResult);
  };
  bigExpenses1(budget, 500)

  //addExpense function call added 2 parameters, functions shouldn't have to access outer scope for 
  //objects or variables, so we pass them directly in the function itself

  //in addExpense used only copies or variables and objects
  //Also used direct return and ternary instead of if statement
  //Used default arguments in user = 'jonas'
  //Used object.freeze to freeze array and objects
