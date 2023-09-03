console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// function printOdds(count) {

//     for (let i = 1; i <= count; i++) {
//         if (i % 2 != 0) {
//             console.log(i);
//         }
//     }
// }

// printOdds(10);

// Exercise 2 Section
// function checkAge(age) {
//     const aboveSixteen = "You can drive!";
//     const belowSixteen = "Sorry, but you need to wait until you're 16.";
//     if (age >= 16) {
//       console.log(aboveSixteen);
//     } else {
//       console.log(belowSixteen);
//     }
//   }

// Exercise 3 Section

// function checkQuadrant(x, y) {
//   if (x > 0 && y > 0) {
//     return 1;
//   } else if (x < 0 && y > 0) {
//     return 2;
//   } else if (x < 0 && y < 0) {
//     return 3;
//   } else if (x > 0 && y < 0) {
//     return 4;
//   } else if (x == 0 && y != 0) {
//     return "x AXIS";
//   } else if (x != 0 && y == 0) {
//     return "y AXIS";
//   } else {
//     return "orgin";
//   }
// }

// console.log(checkQuadrant(0, 2));
// console.log(checkQuadrant(1, 2));
// console.log(checkQuadrant(-6, 18));

// Exercise 4 Section

// function isValidTri(a, b, c) {

//     return a + b > c && a + c > b && b + c > a
// }

// function checkTri(a, b, c) {
//     let isValid = isValidTri(a, b, c,);
//     if (isValid) {
//         if ( a == b && b == c) {
//             return `Equilateral`;
//         } else if ( a == b || b == c || a == c) {
            
//         } else {
//             return `Scalene`;
//         }



//     } else {
//         return `not valid`;
//     }
// }

// console.log(checkTri(2, 3, 4));  //sc
// console.log(checkTri(2, 2, 2)); //wq
// console.log(checkTri(1, 2, 2)); //iso


// Exercise 5 Section

function dataUsageFeedback(planlimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planlimit / periodLength;
    let remainingData = planlimit - usage;
    let remainingDays = periodLength - day;
    let statusMsg;
    let projectedUsage = remainingDays * currentAvg;

    console.log(`${day} days used, ${remainingDays} days remaining`);
    console.log(`daily average is ${projectedAvg} GB a day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "Exceeding";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your daily average use ${currentAvg} GB a day. Continuing this usage will end up using ${planlimit - projectedUsage} from your data limit.`);
    
    return statusMsg;
}

console.log(dataUsageFeedback(50, 12, 25));

