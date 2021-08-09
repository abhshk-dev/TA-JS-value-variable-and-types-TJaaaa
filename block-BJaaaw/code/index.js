// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"

let num=Number(prompt("Enter a number"));
if(num%2==0){
  alert("The number is even");
}
else{
  alert("The number is odd");
}
*/
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1=Number(prompt(`Enter 1st number`));
let num2=Number(prompt(`Enter 2nd number`));
if(num1>num2){
  alert(`${num1} is the max value`);
}
else{
  alert(`${num2} is the max value`)
}
// 3. Convert the above code using`?` terniary operator
num1 > num2 ?  alert(`${num1} is the max value`): alert(`${num2} is the max value`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
//let houseName=prompt("Enter your House Name");
//if(houseName=="stark"){
  //alert("Winter is coming");
//}
//else if(houseName=="lannister"){
//alert("A lannister always pays his debt");
//}
//else{
  //alert("All men must die");
//}
// 5. Convert the above code using`?` terniary operator

//houseName=="stark" ? alert("Winter is coming") : houseName=="lannister" ? alert("A lannister always pays his debt") :  alert("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let numMonth=Number(prompt(`Enter the month number`));

switch(numMonth){
  case 1:
    alert(`The month is January an the number of days is 31`);
    break;
  case 2:
    alert(`The month has 28 days and month is february`);
    break;
  case 3:
    alert(`The month has 31 days. March`);
    break;
  case 4:
    alert(`The month has 30 days. April`);
    break;
  case 5:
      alert(`The month has 31 days. May`);
      break;
   case 6:
        alert(`The month has 30 days. June`);
        break; 
    case 7:
      alert(`The month has 31 days. July`);
      break;
      case 8:
        alert(`The month has 30 days. August`);
        break;
        case 9:
          alert(`The month has 30 days. September`);
          break;
          case 10:
            alert(`The month has 31 days. October`);
            break;
            case 11:
              alert(`The month has 30 days.November`);
              break;
              case 12:
                alert(`The month has 31 days.December`);
                break;   
    default:
      alert(`Month not found`)
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary=Number(prompt(`Enter the salary`));
let inHand;
switch(true || false){
  case salary<=20000:
    inHand= salary-(10/100*salary);
    alert(`IN HAND AMOUNT IS: ${inHand} `);
    break;
  case salary<=40000:
    inHand=salary-(20/100*salary);
    alert(`IN HAND AMOUNT IS: ${inHand} `);
    break;
  case salary > 50000:
    inHand=salary-(30/100*salary);
    alert(`IN HAND AMOUNT IS: ${inHand} `);
    break;
  default:
    alert(`Salary not in TAX bracket`);
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=Number(prompt(`Enter your marks`));

if(marks>100){
  alert(`Marks can't be greater than 100`);
}
else if(marks>80 && marks<100){
  alert(`Grade A`);
}
else if(marks>50 && marks<80){
  alert(`Grade B`);
}
else if(marks>30 && marks<50){
  alert(`Grade C`);
}
else if(marks>0){
  alert(`Grade D`)
}
else{
  alert(`fail`);
}

switch(true){
  case marks>100:
    alert(`Marks can't be greater than 100`);
    break;
  case marks>80 && marks<100:
    alert(`Grade A`);
    break;
  case marks>50 && marks<80:
    alert(`Grade B`);
    break;
  case marks>30 && marks<50:
    alert(`Grade C`);
    break;
  case marks>0:
    alert(`Grade D`);
    break;
  default:
    alert('fail');
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/


let weather=prompt(`What is the weather like outside`);

switch(true){
  case weather=="sunny":
    alert(`Wear a T-Shirt`);
    break;
  case weather=="rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case weather=="hot":
    alert(`Get a Hanky`);
    break;
  case weather=="freezing":
    alert(`Get your sweater on`);
    break;
  default:
    alert(`Not a valid input`);
    break;
}