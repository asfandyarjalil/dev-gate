# dev-gate

# Installation

1.  Once you download the folder
2.  Open terminal go the project directory and type the below command :

```shell
$ npm install
```

3. After that create `.env` file in root.
   <br>
   `DATABASE`="paste your mongodb string"
   <br>
   `PORT`=8080

4. the run the command

```shell
    $ npm start
```

5. open your browser and paste the following url
   "http://localhost:8080/"

<br>
<br>

# Answer 1 :

It will print 100 (100 times) because of the timeout function the code becomes non-block

# Answer 2 :

It will print "hello

# Answer 3 :

var :- The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function.

let:- let is a block scope it can only be access within particular block

const: const value can't be updated

# Answer 4:

["hello" , "another"]

# Answer 5 :

The Luhn algorithm, also known as the modulus 10 or mod 10 algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, Canadian Social Insurance Numbers (ref : GeeksForGeeks)

<h6>Step 1</h6> – Starting from the rightmost digit, double the value of every second digit.
<br>
<h6>Step 2</h6> – If doubling of a number results in a two digit number i.e greater than 9(e.g., 6 × 2 = 12), then add the digits of the product (e.g., 12: 1 + 2 = 3, 15: 1 + 5 = 6), to get a single digit number.
<br>
<h6>Step 3</h6> – Now take the sum of all the digits.
<br>
<h6>Step 4</h6> – If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.

# All above steps perform in middleware/checkCardNumber.js function.

<h6>Step 5</h6> – To encrypt the CVV and Card Number i have used bcrypt. (utils/encrypt.js)
