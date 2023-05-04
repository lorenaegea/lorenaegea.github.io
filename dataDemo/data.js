/*
    JS is Loose-Typed like Python

    python declaration
        num = 1             - num is an integer
        letter = 'A'        - letter is a string/char
    
    JS declaration
        variables:
        var num = 1;
        -or-                - num is an integer
        let num = 1;

        var letter = 'A';
        -or-                - letter is a char
        let letter = 'A';

        constants: 
        const NUM2 = 10;    - NUM2 is an integer that cannot change value

*/

// declare a variable to hold a name
let name = 'Pac-Man';

// display the value of name to the console
console.log(`${name} evades ghosts on board of dots and fruit`);

// JS objects - store values in value/key pairs
let inky = {
    name: 'Inky',
    color: 'Blue',
};

let pinky = {
    name: 'Pinky',
    color: 'Pink',
};

let blinky = {
    name: 'Blinky',
    color: 'Red',
};

let Clyde = {
    name: 'Clyde',
    color: 'Orange',
};

// display key value from an object 
console.log(`${inky.name} is ${inky.color}`);

// arrays in JS can be made in two ways:
// 1. initialization list
// 2. empty array where values are pushed
let values = [1, 2, 3, 4, 5];

let group2Teams = [];

// use the .push() command to add data to an array
group2Teams.push('Team Alpha');
group2Teams.push('Team Beta');
group2Teams.push('Team Gamma');
group2Teams.push('Team Delta');
group2Teams.push('Team Epsilon');
group2Teams.push('Team Zeta');
group2Teams.push('Team Eta');
group2Teams.push('Team Theta');

// display the info from the arrays
console.log(values);

console.log(group2Teams);

/*
    use relational operators to implement decisions

    > - greater than
    < - less than
    >= - greater than or equal
    <= - less than or equal
    == - is equal (loose comparison: checks across data types) 
        1 == '1' : true
    === - is equal to (strict comparison: does not include the data type)
        1 === '1' : false
    ! - logical not (flips the value of a boolean)
    != - is not equal
    && - logical and (inclusive comparison)
    || - logical or (optional comparison)


    single alternative decisions
    if (condition)
    {
        statement(s);
    }


    dual alternative decisions
    if (condition)
    {
        statement(s);
    }
    else
    {
        statement(s);
    }


    multiple alternative decisions
    if (condition)
    {
        statement(s);
    }
    else if (condition)
    {
        statement(s);
    }
    else
    {
        statement(s);
    }


    switch(variable)
    {
        case value:
            statement(s);
            break;
        case anotherValue:
            statement(s);
            break;
        default:
            statement(s);
            break;
    }

*/

/*
    // looping

    // pretest and posttest loops

    // while - pretest
    // checks the condition, then executes the statement, if the condition is true
    
    while (condition)
    {
        statement(s);
    }


    // for - pretest
    
    for (start, condition, amount to change)
    {
        statement(s);
    }


    // do-while - posttest
    // executes statement, then checks for condition
    // executes at least once
    
    do 
    {
        statement(s);
    }while(condition);

*/

// use a for loop to access and display the content of the arrays one-by-one
// start the value of i at 0, up to # of items in group2Teams, increment by 1
for(var i = 0; i < group2Teams.length; i++)
{
    console.log(group2Teams[i]);
}