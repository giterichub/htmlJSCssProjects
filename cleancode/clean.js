const budget = [
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
  ];
  
  const spendingLimits = {
    jonas: 1500,
    matilda: 100,
  };
  
  //optional chaining (.) and nullish coalescing operator(?) ES2020 and refactoring or removing duplicate code
  const userSpendLimit = user => spendingLimits?.[user] ?? 0;

  const addExpense = function (value, description, user = 'jonas') {
    // if (!user) user = 'jonas';
    user = user.toLowerCase();
  
    //the below line was an if-else statement before 
    // const userLimit = spendingLimits[user] ? spendingLimits[user] : 0;
  
    if (value <= userSpendLimit(user)) {
      //object literall syntax, property name same as variable name
      budget.push({ value: -value, description, user });
    }
  };
  addExpense(10, 'Pizza 🍕');
  addExpense(100, 'Going to movies 🍿', 'Matilda');
  addExpense(200, 'Stuff', 'Jay');
  
  const checkBudget = function () {
    for (let entry of budget)   
      if (entry.value < -userSpendLimit(entry.user)) 
        entry.flag = 'limit';
  };
  checkBudget();
    
  const bigExpenses = function (limit) {
    let output = '';
    for (let entry of budget)
        output += entry.value <= -limit ? `${entry.description.slice(-2)} / ` : '';
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
  };
  bigExpenses(1000);
  console.log(budget);



  //changed all var to const and let wherever required, remember where it is const and let now it was all 
  // var before
  //changed function and variable names to be more descriptive
  //in checkBudget function the for and if have no braces because it is a single declaration
  //so just one block of logic very straight forward, also there is no if else, just if 
