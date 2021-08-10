//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

// Using `console.log` log all the evan values from 1 to 10.

// Using `console.log` log all the od values from 1 to 10.

// Calculate the sum of all numbers from 1 to 10.

// Log all the values from 1 to 10 using while loop

let i=1;

while(i<=10){
    console.log(i);
    i++;
}


/*even numbers*/
while(i<=10){
    if(i%2===0){
        console.log(i);
    }
    i++;
}


/* odd numbers*/
while(i<=10){
    if(i%2 !==0){
        console.log(i)
    }
    i++;
}


/* sum of numbers */

let sum=0;
for(i=1; i<=10;i++){
    sum=sum+i;
}
console.log(sum);


/* logging numbers 1-10*/

while(i<=10){
    console.log(i);
    i++;
}