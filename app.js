//----------------CHAPTER # 01---------------------------------

// Q1: Write a script to greet your website visitor using JS alert box
//ANSWER:
//   alert("Hello World!");


// Q2: Write a script to display following message on your web page:
//ANSWER:
// alert("Error! Please enter a valid password.");



// Q3: Write a script to display following message on your webpage: (Hint : Use line break)
//ANSWER:
// alert("Welcome to JS Land... \nHappy Coding!");


// Q4: Write a script to display following messages in sequence:
//ANSWER:
// alert("Welcome to JS Land...");
// alert("Happy Coding! \nPrevent this message from creating additional dialogs.");


//Q5: Generate the following message through browser’s developer console:
//ANSWER:
// console.log("Hello! I can run JS through my web browser's console.")


//Q6: Make use of alerts in your new/existing HTML & CSS project.
//ANSWER:
// check html page


//Q7: Practice placement of <script></script> element in following sections of your project in exercise 6:
//ANSWER:
// Check html page


//----------------CHAPTER # 02---------------------------------

//Q1: Declare a variable called username.
//ANSWER:
// var username;


//Q2:Declare a variable called myName & assign to it a string that represents your Full Name.
//ANSWER:
// var myName;
// myName = "Hafiza Arysha Khan";
// alert(myName);


//Q3: Write script a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.
//ANSWER:
// var message;
// message = "Hello World!";
// alert(message);


//Q4: Write a script to save student’s bio data in JS variables and show the data in alert boxes.
//ANSWER:
// var name =  "Jhone Doe";
// var age = "15 years old";
// var certify = "Mobile Application Development";
// alert(name);
// alert(age);
// alert(certify);


//Q5:Write a script to display the following alert using one JS variable:
//ANSWER:
// var piz = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(piz);


//Q6: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
//ANSWER:
// var email;
// email= "hafizaarysha1502@gmail.com";
// alert("My email address is "+ email);


//Q7:Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
//ANSWER:
// var book;
// book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book "+ book);


//Q8: Write a script to display this in browser through JS.
//ANSWER:
// document.write("Yah! I can write HTML content through Javascript");


//Q9:Store following string in a variable and show in alert and browser through JS
//ANSWER:

// var char = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(char);
// document.write(char);



//----------------CHAPTER # 03---------------------------------

// Q1: Declare a variable called age & assign to it your age. Show your age in an alert box.
//ANSWER:

// var age ;
// age = 19;
// alert("I am "+ age + " years old");


// Q2: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
//ANSWER:

// var visit;
// visit = 8;
// alert("You have visited this site "+ visit +" times");


// Q3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
//ANSWER:

//  var birthYear;
//  birthYear = 2002;
//  document.write("My birth year is "+ birthYear+ "<br> Data Type of my declared variable is number");


//Q4: A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
//ANSWER:

// var vis_name = "Hafiza Arysha Khan";
// var product = "Bag";
// var Quantity = 4;
// document.write(vis_name + " ordered "+ Quantity + " " + product+ "(s) on XYZ Clothing store.")



//----------------CHAPTER # 04---------------------------------

// Q1: Declare 3 variables in one statement.
//ANSWER:
// var a = "Hey!", b = "I'm Arysha", c = "Computer Science Student.";


// Q2: Declare 5 legal & 5 illegal variable names.
//ANSWER:

//Legal Variable:
// var animal;
// var $dollar;
// var _february;
// var abc_2$;
// var clock17;

// Illegal Variable:
//  var super store;
//  var percent_2%;
//  var 1528ae;
//  var ?$32a;
//  var ak$2&;


// Q3: Display this in your browser a) A heading stating “Rules for naming JS variables” b) Variable names can only contain __, __, __ and __. For example $my_1stVariable c) Variables must begin with a __, __ or __. For example $name, _name or name d) Variable names are case ____ e) Variable names should not be JS ___
//ANSWER:

// document.write("<h1>Rules for naming JS variables</h1>  Variable names can only contain numbers, $, and _. <br> For example $my_1stVariable <br>Variables must begin with a letter, dollar or _ . For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keywords.");



//----------------CHAPTER # 05---------------------------------



//Q1:  Write a program that take two numbers & add them in a new variable. Show the result in your browser
//ANSWER:

// var num1 = 4;
// var num2 = 5;
// var num = num1+ num2;
// document.write("Sum of " + num1 + " and "+ num2 + " is: " +num);


// Q2: Repeat task1 for subtraction, multiplication, division & modulus.
//ANSWER:

// var num1 = 10;
// var num2 = 5;
// var num = num1 - num2;
// var numa = num1 * num2;
// var numb = num1 / num2;
// var numc = num1 % num2;
// document.write("Subtraction of " + num1 + " and "+ num2 + " is: " +num + "<br>"); 
// document.write("Multiplication of " + num1 + " and "+ num2 + " is: " +numa + "<br>");
// document.write("Division of " + num1 + " and "+ num2 + " is: " +numb + "<br>");
// document.write("Modulus of " + num1 + " and "+ num2 + " is: " +numc + "<br>");


// Q3: Do the following using JS Mathematic Expressions a) Declare a variable. b) Show the value of variable in your browser like “Value after variable declaration is: ??”. c) Initialize the variable with some number. d) Show the value of variable in your browser like “Initial value: 5”. e) Increment the variable. f) Show the value of variable in your browser like “Value after increment is: 6”. g) Add 7 to the variable. h) Show the value of variable in your browser like “Value
//ANSWER:

// var a;
// document.write("Value after variable declaration is: " + a + "<br>");
// a = 5;
// document.write("Initial value is: " + a + "<br>");
// a = ++a;
// document.write("Value after increment is: " + a + "<br>");
// a = a + 7;
// document.write("Value after addition is: "+ a + "<br>");
// a = --a;
// document.write("Value after decrement is: " + a + "<br>");
// a = a % 3;
// document.write("The remainder is: " + a);


//Q4: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
//ANSWER:

// var cost = 600;
// var num_of_ticket = 5;
// var total = cost * num_of_ticket;
// document.write("Total cost to buy " + num_of_ticket + " tickets to a movie is " + total + "PKR");


// Q5:Write a script to display multiplication table of any number in your browser. 
//ANSWER:

// num = 5;
// document.write("Table of "+ num + "<br>"+ num+  " x  1 = " + num+ "<br>" + num +  " x  2 = " + num*2+ "<br>"+  num+  " x  3 = " + num*3+ "<br>"+  num+  " x  4 = " + num*4+ "<br>"+  num+  " x  5 = " + num*5+ "<br>" + num+  " x  6 = " + num*6+ "<br>"+  num+  " x  7 = " + num*7+ "<br>" + num+  " x  8 = " + num*8+ "<br>"+  num+  " x  9 = " + num*9+ "<br>"+  num+  " x  10 = " + num*10+ "<br>" );


// Q6: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”
//ANSWER:

// var C = "25";
// var Feh = (C * 9/5)+ 32;
// document.write(C + "<sup>o</sup>" +"C is "+ Feh + "<sup>o</sup>" +"F <br>" );
// var F = 70;
// var cent = (F - 32 ) * 5/9;
// document.write(F + "<sup>o</sup>" +"C is "+ cent + "<sup>o</sup>" +"C" );


//Q7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges. Compute the total cost & show the receipt in your browser.
//ANSWER:

// var p1 = 650;
// var p2 = 100;
// var q1 = 3;
// var q2 = 7;
// var ship_charge = 100;
// var total1 = p1*q1;
// var total2 = p2*q2;
// var total = total1 +total2 +ship_charge;
// document.write("<h1>Shopping Cart</h1><br>Price of item 1 is :" +p1 +"<br> Quantity of item 1 is " + q1 + "<br>Price of item 2 is :" +p2 +"<br> Quantity of item 2 is " + q2 +"<br>Shipping Charges "+ship_charge +"<br><br> Total cost of your order is "+ total);


//Q8: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
//ANSWER:

// var total_mark =980;
// var marks_obt = 804;
// var percent = (marks_obt/total_mark)*100;
// document.write("<h1>Marks Sheet</h1><br>Total Marks: "+ total_mark +"<br>Marks obtained: "+marks_obt+ "<br>Percentage: " +  percent + "%");


// Q9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
//ANSWER:

// var dollar = 10;
// var oneDollar_in_rup = 104.80;
// var riyal = 25;
// var OneRiyal_in_rup = 28;
// var currency = (dollar * oneDollar_in_rup) + (riyal * OneRiyal_in_rup);
// document.write("Total Currency in PKR is: "+ currency);


//Q10: Write a program to initialize a variable with some number and do arithmetic in following sequence: a) Add 5. b) Multiply by 10. c) Divide the result by 2 -Perform all calculations in a single expression
//ANSWER:

// var a = 4;
// var total = (a+5*10)/2;
// document.write("The output is: " + total);



// Q11: . The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
//ANSWER:

// var current_year = 2021;
// var birth_year = 2002;
// var age = current_year - birth_year;
// document.write("<h1>Age Calculator</h1><br> Current Year: "+ current_year+ "<br>Birth Year: "+birth_year+ "<br>Your Age is:  They are either " + age + " or " + (age - 1)+ " years old");



//Q12: The Geometrizer: Calculate properties of a circle.a) Store a radius into a variable. MATH EXPRESSIONS | JAVASCRIPT Page 8 of 9. b) Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
//ANSWER:

//  var r = 20;
//  var circumference =   ( 2 * 3.142 * r );
//  var Area = 3.142 * r * r ;
//  document.write("<h1>The Geometrizer</h1> <br>Radius of a circle is: "+r+ "<br>The circumference is: " + circumference + "<br>The area is: " + Area);



// Q13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a) Store your favorite snack into a variable b) Store your current age into a variable. c) Store a maximum age into a variable. d) Store an estimated amount per day (as a number). e) Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
//ANSWER:

// var snack = "chocolato";     
// var age = 15;
// var estimated_age = 65;
// var amount_per_day = 3;
// var total = (amount_per_day * ( estimated_age - age));
// document.write("<h1>The Lifetime Supply Calculator</h1><br> Favourite snacks: " + snack +"<br>Current Age: " + age +"<br>Estimated Mximum Age: "+ estimated_age+"<br>Amount of snacks per day: "+ amount_per_day+"<br> You will need " + total + " " + snack + " to last you until the ripe old age of " + estimated_age + ".<br>");



//----------------CHAPTER # 06 - 09---------------------------------


// Q1:  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
//ANSWER:

// var a = 10;
// document.write("Result:<br>The value of a is: "+ a +"<br>............................................<br><br>");
// var a = ++a;
// document.write("The value of ++a is: "+ a+ "<br>");
// document.write("Now the value of a is: "+ a + "<br><br>" );
// var a = a++;
// document.write("The value of a++ is: "+ a+ "<br>");
// a = a+1;
// document.write("Now the value of a is: "+ a + "<br><br>" );
// var a = --a;
// document.write("The value of --a is: "+ a + "<br>" );
// document.write("Now the value of a is: "+ a + "<br><br>" );
// var a = a--;
// document.write("The value of a-- is: "+ a + "<br>" );
// var a = a - 1;
// document.write("Now the value of a is: "+ a + "<br><br>" );



// Q2: What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage:
//ANSWER:

// var a = 2;
// var b = 1;
// document.write("The value of a is: "+ a + "<br>The value of b is: "+ b+ "<br>");
// var a = --a;
// document.write("<b>At stage 1---></b> The value is: "+a +"<br>");
// var x = a - --b;
// document.write("<b>At stage 2---></b> The value is: "+ x +"<br>");
// var c = x + ++b;
// document.write("<b>At stage 3---></b> The value is: "+ c +"<br>");
// var result = c + b--;
// document.write("The final result is: "+ result +"<br>");



// Q3: Write a program that takes input a name from user & greet the user.
//ANSWER:

// var username = prompt("Enter your name: " );
// document.write("Hey "+ username + "! How are you ?");



//Q4: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
//ANSWER:

// var num = prompt("Enter the number: " );
// if (num == ""){
//     var x = 1;
//     while (x <= 10){
//         var y = 5 * x;
//         document.write(5 + " x " + x + " = " + y+ "<br>");
//         x = x + 1;
//     }
// }
// else{
//     var x = 1;
//     while (x <= 10){
//         var y = num * x;
//         document.write(num + " x " + x + " = "+ y + "<br>");
//         x = x + 1;
//     }

// }



// Q5: Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user andstored it in different variable. d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
//ANSWER:

// var sub1 = "English";
// var sub2 = "Maths";
// var sub3 = "Urdu";
// var totalabc = 100;
// var total = 300;
// var obt1 = +prompt("Enter the obtained marks of English: " );
// var obt2 = +prompt("Enter the obtained marks of Maths: "  );
// var obt3 = +prompt("Enter the obtained marks of Urdu: " );
// var obtained = obt1 + obt2 + obt3;
// var percent1 = (obt1/totalabc)*100;
// var percent2 = (obt2/totalabc)*100;
// var percent3 = (obt3/totalabc)*100;
// var percent = (obtained/total)*100;
// document.write("<table><tr><th>Subject &nbsp;&nbsp;</th> <th>Total Marks &nbsp;&nbsp; </th> <th> Obtained Marks &nbsp;</th> <th>Percentage &nbsp;&nbsp;</th></tr> <tr><td>"+sub1+ "&nbsp;&nbsp;</td><td>"+totalabc+"&nbsp;&nbsp;</td><td>"+obt1+"&nbsp;&nbsp;</td><td>"+percent1+"%&nbsp;&nbsp;</td></tr> <tr><td>"+sub2+ "&nbsp;&nbsp;</td><td>"+totalabc+"&nbsp;&nbsp;</td><td>"+obt2+"&nbsp;&nbsp;</td><td>"+percent2+"%&nbsp;&nbsp;</td></tr> <tr><td>"+sub3+ "&nbsp;&nbsp;</td><td>"+totalabc+"&nbsp;&nbsp;</td><td>"+obt3+"&nbsp;&nbsp;</td><td>"+percent3+"%&nbsp;&nbsp;</td></tr> <tr><th></th><th>"+total+"&nbsp;&nbsp;</th><th>"+obtained+"&nbsp;&nbsp;</th><th>"+percent+"%</th></tr> </table>");



//----------------CHAPTER # 09 - 11---------------------------------


// Q1:  Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
//ANSWER:

// var city = prompt("Enter the city name: ");
// if ( city == "Karachi"){
//     alert("Welcome to city of lights"); 
// }
// else{
//     alert("It's not Karachi");
// }


// Q2: Write a program to take “gender” as input from user. If th euser is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
//ANSWER:

// var gender = prompt("Enter your gender: ");
// if (gender == "male"){
//     alert("Good Morning Sir!");
// }
// else if (gender == "female"){
//     alert("Good Morning Ma'am!");
// }
// else{
//     alert("Good Morning!");
// }


// Q3: Write a program to take input color of road traffic signal from the user & show the message according to this table:
//ANSWER:

// var color = prompt("Enter your signal color: ");
// if (color == "Red"){
//     alert("Must Stop");
// }
// else if(color == "Yellow"){
//     alert("Ready to move");
// }
// else if (color == "Green"){
//     alert("Move now");
// }
// else{
//     alert("It is not a traffic signal color")
// }


// Q4: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
//ANSWER:

// var fuel = prompt("Enter the fuel in the car in litre: ");
// if (fuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }



//Q5: Run this script, & check whether alert message would be displayed or not. Record the outputs.
//ANSWER:

// Part a:
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // Part b:
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// // Part c:
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// // Part d:
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // Part e:
// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//  }

// // Part f:
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    


// Q6: Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: Show the total marks, marks obtained, percentage, grade & remarks 
//ANSWER:

// var sub1 = +prompt("Enter the marks obtained of subject 1: ");
// var sub2 = +prompt("Enter the marks obtained of subject 2: ");
// var sub3 = +prompt("Enter the marks obtained of subject 3: ");
// var total = 300;
// var obtained = sub1 + sub2 + sub3;
// var percent = (obtained/total)*100;
// document.write("<h1>Marks Sheet</h1><br>Total Marks: "+total +"<br>Marks Obtained: "+obtained+ "<br> Percentage: "+ percent + "%<br>");
// if (percent>=80){
//     document.write("Grade: A -one <br>Remarks: Excellent" );
// }
// else if(percent>=70){
//     document.write("Grade: A <br>Remarks: Good" );
// }
// else if (percent>=60 ){
//     document.write("Grade: B <br>Remarks: You need to improve" );
// }
// else{
//     document.write("Grade: Fail <br>Remarks: Sorry" );
// } 


// Q7: Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
//ANSWER:

// var secret = 5;
// var num = +prompt("Guess a number between 1-10: ")
// var num_increment = num + 1;
// if (secret == num){
//     alert("Bingo! Correct answer");
// }
// else if(secret ==  num_increment){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Incorrect");
// }


// Q8: Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
//ANSWER:

// var num = prompt("Enter a number: ")
// if (num % 3 == 0){
//     alert("Number is divisible by 3");
// }
// else{
//     alert("Number is not divisible by 3");
// }


// Q9: Write a program that checks whether the given input is an even number or an odd number.
//ANSWER:

// var num = +prompt("Enter a number: ");
// if (num % 2 == 0){
//     alert("Number is Even");
// }
// else{
//     alert("Number is odd");
// }


// Q10: Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”
//ANSWER:

// var T = prompt("Enter the todays's temperature: ")
// if (T > 40 ){
//     alert("It is too hot outside.");
// }
// else if(T > 30 ){
//     alert("The Weather today is Normal.");
// }
// else if(T > 20){
//     alert("Today’s Weather is cool.");
// }
// else if(T > 10 ){
//     alert("OMG! Today’s weather is so Cool.")
// }
// else{
//     alert("Yahoo! Its a depth of winter");
// }


// Q11: Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
//ANSWER:

// var a = +prompt("Enter the first number: ");
// var b = +prompt("Enter the second number: ");
// var oper = prompt("Enter the operator sign: ");
// if (oper == "+"){
//     var add = a + b;
//     alert("Addition of two numbers is: "+ add);
// }
// else if (oper == "-") {
//     var sub = a - b;
//     alert("Subtraction of two numbers is: "+ sub);
// }
// else if( oper == "*"){
//     var multiple = a * b;
//     alert("Multiplication of two numbers is: "+ multiple);
// }
// else if (oper == "/"){
//     var div = a / b;
//     alert("Division of two numbers is: "+ div);
// }
// else if (oper = "%"){
//     var mod = a % b;
//     alert("Modulus of two numbers is: "+ mod);
// }
// else{
//     alert("Invalid Operator");
// }






//----------------CHAPTER # 12 - 13---------------------------------


// Q1: Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
//ANSWER:

// var value = prompt("Enter the number or character");
// if (value >= 65 && value <= 90){
//     alert("The given input is upper case Alphabet");
// }
// else if (value >=97 && value<=122){
//     alert("The given input is lower case Alphabet")
// } 
// else if (value>=48 && value<=57){
//     alert("The given input is a number");
// }




// Q2: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
//ANSWER:

// var a = +prompt("Enter the first number: ");
// var b = +prompt("Enter the second number: ");
// if (a > b){
//     alert(a + " is greater than "+ b);
// }
// else if ( a == b){
//     alert("Numbers are equal");
// }
// else{
//     alert(a + " is less than "+ b);
// }


// Q3: Write a program that takes input a number from user & state whether the number is positive, negative or zero.
//ANSWER:

// var num = +prompt("Enter the number: ");
// if ( num > 0 ){
//     alert(num +" is positive");
// }
// else if(num < 0){
//     alert(num +" is negative");
// }
// else{
//     alert(num +" is zero");
// }


// Q4: Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
//ANSWER:

// var char = prompt("Enter a character: ");
// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//     alert("True : "+ char +" is vowels");
// }
// else{
//     alert("False : "+ char +" is not a vowels");
// }



// Q5: Write a program that a. Store correct password in a JS variable. b. Asks user to enter his/her password c. Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
//ANSWER:

// var password = "computer123";
// var user_pass = prompt("Enter your correct password: ");

// if (user_pass == ""){
//     alert("Please enter your password");
// }
// else if (user_pass == password){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }



// Q6: This if/else statement does not work. Try to fix it:
//ANSWER:

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else{
//     greeting = "Good evening";
//     alert(greeting);
// }



// Q7: Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
//ANSWER:

// var time = prompt("Enter the time: ");
// if (time>=0000 && time<1200){
//     alert("Good Morning!");
// }
// else if (time >=1200 && time<1700){
//     alert("Good AfterNoon!");
// }
// else if ( time>=1700 && time<2100){
//     alert("Good Evening!");
// }
// else if (time >=2100 && time<=2359){
//     alert("Good Night!");
// }
// else{
//     alert("Invalid input");
// }
