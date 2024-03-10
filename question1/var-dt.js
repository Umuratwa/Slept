//1. The first problem to solve is determining how many hours of sleep you got each night of the week.
//you can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.

//create a function named getSleepHours with a single parameter named day.
function getSleepHours(day) {
    switch(day.toLowerCase()) {
      case 'monday':
        return 10; // assuming 8 hours of sleep on Monday
      case 'tuesday':
        return 5; // assuming 7 hours of sleep on Tuesday
      case 'wednesday':
        return 6; // assuming 6 hours of sleep on Wednesday
      case 'thursday':
        return 8; // assuming 7 hours of sleep on Thursday
      case 'friday':
        return 4; // assuming 8 hours of sleep on Friday
      case 'saturday':
        return 9; // assuming 9 hours of sleep on Saturday
      case 'sunday':
        return 13; // assuming 8 hours of sleep on Sunday
      default:
        return 'Invalid day'; // if an invalid day is provided
    }
  }
  
  // Example usage:
  console.log(getSleepHours('monday')); // Output: 8
  console.log(getSleepHours('friday')); // Output: 8
  console.log(getSleepHours('sunday')); // Output: 8
  console.log(getSleepHours('holiday')); // Output: Invalid day
  //2. The function should accept a day as an argument and return the number of hours you slept that night.
//for instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

//use an if/else or switch statement to implement this.
function getSleepHours(day) {
    if (day.toLowerCase() === 'monday') {
      return 8; // assuming 8 hours of sleep on Monday
    } else if (day.toLowerCase() === 'tuesday') {
      return 7; // assuming 7 hours of sleep on Tuesday
    } else if (day.toLowerCase() === 'wednesday') {
      return 6; // assuming 6 hours of sleep on Wednesday
    } else if (day.toLowerCase() === 'thursday') {
      return 7; // assuming 7 hours of sleep on Thursday
    } else if (day.toLowerCase() === 'friday') {
      return 8; // assuming 8 hours of sleep on Friday
    } else if (day.toLowerCase() === 'saturday') {
      return 9; // assuming 9 hours of sleep on Saturday
    } else if (day.toLowerCase() === 'sunday') {
      return 8; // assuming 8 hours of sleep on Sunday
    } else {
      return 'Invalid day'; // if an invalid day is provided
    }
  }
  
  // Example usage:
  console.log(getSleepHours('monday')); // Output: 8
  console.log(getSleepHours('friday')); // Output: 8
  console.log(getSleepHours('sunday')); // Output: 8
  console.log(getSleepHours('holiday')); // Output: Invalid day
  
  //3. Test the function by calling it multiple times and printing the results to the console.
  //you can remove the tests when you know your function works.
  
  

  function getSleepHours(day) {
    if (day.toLowerCase() === 'monday') {
      return 8; // assuming 8 hours of sleep on Monday
    } else if (day.toLowerCase() === 'tuesday') {
      return 7; // assuming 7 hours of sleep on Tuesday
    } else if (day.toLowerCase() === 'wednesday') {
      return 6; // assuming 6 hours of sleep on Wednesday
    } else if (day.toLowerCase() === 'thursday') {
      return 7; // assuming 7 hours of sleep on Thursday
    } else if (day.toLowerCase() === 'friday') {
      return 8; // assuming 8 hours of sleep on Friday
    } else if (day.toLowerCase() === 'saturday') {
      return 9; // assuming 9 hours of sleep on Saturday
    } else if (day.toLowerCase() === 'sunday') {
      return 8; // assuming 8 hours of sleep on Sunday
    } else {
      return 'Invalid day'; // if an invalid day is provided
    }
  }
  
  // Test the function by calling it multiple times
  console.log(getSleepHours('monday')); // Output: 8
  console.log(getSleepHours('tuesday')); // Output: 7
  console.log(getSleepHours('wednesday')); // Output: 6
  console.log(getSleepHours('thursday')); // Output: 7
  console.log(getSleepHours('friday')); // Output: 8
  console.log(getSleepHours('saturday')); // Output: 9
  console.log(getSleepHours('sunday')); // Output: 8
  console.log(getSleepHours('holiday')); // Output: Invalid day
  
  //4.Now that you’ve written a function to get the sleep hours for each night, we need to do three things:
  //Get the total sleep hours that you slept
  //Get the ideal sleep hours that you prefer
  //Calculate the sleep debt, if any.
  //To get the total sleep hours that you slept, create a new function named getActualSleepHours that takes no parameters.
  // Function to get actual sleep hours
function getActualSleepHours() {
    const sleepHours = {
      monday: 8,
      tuesday: 7,
      wednesday: 6,
      thursday: 8,
      friday: 7,
      saturday: 9,
      sunday: 7
    };
    
    // Summing up all sleep hours
    const totalSleepHours = Object.values(sleepHours).reduce((acc, cur) => acc + cur, 0);
    
    return totalSleepHours;
  }
  
  // Function to get ideal sleep hours
  function getIdealSleepHours() {
    const idealHoursPerDay = 8; // You can adjust this according to your preference
    const idealHoursPerWeek = idealHoursPerDay * 7;
    return idealHoursPerWeek;
  }
  
  // Function to calculate sleep debt
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    const sleepDebt = idealSleepHours - actualSleepHours;
    
    if (sleepDebt === 0) {
      return 'You got the perfect amount of sleep!';
    } else if (sleepDebt > 0) {
      return `You got more sleep than needed by ${sleepDebt} hours.`;
    } else {
      return `You should get some rest, you're short of sleep by ${Math.abs(sleepDebt)} hours.`;
    }
  }
  
  // Test the functions
  console.log("Total actual sleep hours:", getActualSleepHours());
  console.log("Total ideal sleep hours:", getIdealSleepHours());
  console.log(calculateSleepDebt());

  
  //5.5. Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.

function getActualSleepHours() {
    const sleepHours = {
      monday: 8,
      tuesday: 7,
      wednesday: 6,
      thursday: 8,
      friday: 7,
      saturday: 9,
      sunday: 7
    };
    
    // Summing up all sleep hours
    const totalSleepHours = Object.values(sleepHours).reduce((acc, cur) => acc + cur, 0);
    
    return totalSleepHours;
  }
  
  // Function to get ideal sleep hours
  function getIdealSleepHours() {
    const idealHoursPerDay = 8; // You can adjust this according to your preference
    const idealHoursPerWeek = idealHoursPerDay * 7;
    return idealHoursPerWeek;
  }
  
  // Function to calculate sleep debt
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    const sleepDebt = idealSleepHours - actualSleepHours;
    
    if (sleepDebt === 0) {
      return 'You got the perfect amount of sleep!';
    } else if (sleepDebt > 0) {
      return `You got more sleep than needed by ${sleepDebt} hours.`;
    } else {
      return `You should get some rest, you're short of sleep by ${Math.abs(sleepDebt)} hours.`;
    }
  }
  
  // Test the functions
  console.log("Total actual sleep hours:", getActualSleepHours());
  console.log("Total ideal sleep hours:", getIdealSleepHours());
  console.log(calculateSleepDebt());
  

//   //6. To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
// //inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.
// //you’ll want to multiply by 7 to get the total hours you prefer per week.
function getIdealSleepHours() {
    // Ideal hours per night
    let idealHours = 8; // You can set this to your preferred ideal hours

    // Calculate total hours per week
    let totalIdealHours = idealHours * 7;

    // Return the total ideal hours per week
    return totalIdealHours;
}

// Example usage:
console.log(getIdealSleepHours()); // Output will depend on the value of idealHours


  //7.. Test your two new functions by calling them and printing the results to the console.
//you can remove the tests when you know your functions works.

const getActualSleepHours = () => {
    const mondayHours = 8;
    const tuesdayHours = 7;
    const wednesdayHours = 8;
    const thursdayHours = 7;
    const fridayHours = 6;
    const saturdayHours = 9;
    const sundayHours = 8;
    return mondayHours + tuesdayHours + wednesdayHours + thursdayHours + fridayHours + saturdayHours + sundayHours;
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8; // Change this value to your preferred ideal hours per night
    return idealHours * 7; // Multiply by 7 to get the total hours preferred per week
  };
  
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  console.log("Actual sleep hours:", actualSleepHours);
  console.log("Ideal sleep hours:", idealSleepHours);
  
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
  } else {
    console.log("You should get some rest.");
  }
// //8.Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.
// //create a function named calculateSleepDebt with no parameters.

// //inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.

// //then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

const getActualSleepHours = () => {
    const mondayHours = 8;
    const tuesdayHours = 7;
    const wednesdayHours = 8;
    const thursdayHours = 7;
    const fridayHours = 6;
    const saturdayHours = 9;
    const sundayHours = 8;
    return mondayHours + tuesdayHours + wednesdayHours + thursdayHours + fridayHours + saturdayHours + sundayHours;
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8; // Change this value to your preferred ideal hours per night
    return idealHours * 7; // Multiply by 7 to get the total hours preferred per week
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  };

  
//   //9.. Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:
// //If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
// //If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
// //If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.


  function sleepAnalysis(actualSleepHours, idealSleepHours) {
    if (actualSleepHours === idealSleepHours) {
        console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got more sleep than needed.");
    } else {
        console.log("You should get some rest.");
    }
}

// Example usage:
const actualsleepHours = 8; // Replace with actual hours slept
const idealsleepHours = 7; // Replace with ideal hours of sleep

sleepAnalysis(actualsleepHours, idealsleepHours);

// //10. To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().


function getSleepHours(day) {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 8;
      case 'friday':
        return 9;
      case 'saturday':
        return 10;
      case 'sunday':
        return 9;
      default:
        return 'Invalid day';
    }
  }
  
  function getActualSleepHours() {
    let totalSleepHours = 0;
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    for (let day of daysOfWeek) {
      totalSleepHours += getSleepHours(day);
    }
    return totalSleepHours;
  }
  
  function getIdealSleepHours() {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
      const overSleep = actualSleepHours - idealSleepHours;
      console.log(`You got more sleep than needed. You overslept by ${overSleep} hours.`);
    } else {
      const underSleep = idealSleepHours - actualSleepHours;
      console.log(`You should get some rest. You are under your ideal sleep by ${underSleep} hours.`);
    }
  }
  
  calculateSleepDebt();
  
// //11.On the last line of the program, start the program by calling the calculateSleepDebt() function.

function getSleepHours(day) {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 8;
      case 'friday':
        return 9;
      case 'saturday':
        return 10;
      case 'sunday':
        return 9;
      default:
        return 'Invalid day';
    }
  }
  
  function getActualSleepHours() {
    let totalSleepHours = 0;
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    for (let day of daysOfWeek) {
      totalSleepHours += getSleepHours(day);
    }
    return totalSleepHours;
  }
  
  function getIdealSleepHours() {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
      const overSleep = actualSleepHours - idealSleepHours;
      console.log(`You got more sleep than needed. You overslept by ${overSleep} hours.`);
    } else {
      const underSleep = idealSleepHours - actualSleepHours;
      console.log(`You should get some rest. You are under your ideal sleep by ${underSleep} hours.`);
    }
  }
  
  calculateSleepDebt(); // Start the program by calling the calculateSleepDebt() function
  
// //12. For extra practice, try these:
// //getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.

// //some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.

function getActualSleepHours() {
    // Sum of literal numbers representing hours slept each day
    return 8 + 7 + 6 + 8 + 9 + 10 + 9;
  }
  
  function getIdealSleepHours(idealHoursPerNight) {
    // Multiply ideal hours per night by 7 for the entire week
    return idealHoursPerNight * 7;
  }
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8); // Pass 8 as the ideal hours per night
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
      const overSleep = actualSleepHours - idealSleepHours;
      console.log(`You got more sleep than needed. You overslept by ${overSleep} hours.`);
    } else {
      const underSleep = idealSleepHours - actualSleepHours;
      console.log(`You should get some rest. You are under your ideal sleep by ${underSleep} hours.`);
    }
  }
  
  calculateSleepDebt(); // Start the program by calling the calculateSleepDebt() function
   

