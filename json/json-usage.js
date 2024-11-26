
// JSON = JavaScript Object Notation
// JSON format is text/string only
// JSON data is written as name:value pairs, just like JavaScript object properties

// JSON object properties require "double quotes", AND the total object should be WRAPPED in a `string template` literal
let employees = `{
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
}`;

// Converting a JSON Text/String to a JavaScript Object
const empObj = JSON.parse(employees);

console.log( empObj.employees[1].firstName, empObj.employees[2].lastName ); // Anna Jones


// converting a JavaScript `object` to a JSON string/text
const empJson = JSON.stringify(empObj);

console.log( empJson );
