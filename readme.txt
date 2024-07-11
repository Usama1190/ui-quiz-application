=============================== TypeScript =====================================


let quizQuestions = [
    "1. What are the three main 'simple types' in TypeScript?",
    "2. What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
    "3. True or False: TypeScript can always correctly infer a variables type.",
    "4. You can disable implicit variable type assignment by enabling the compiler option:",
    "5. You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
    "6. ______ is similar to 'any', but a safer alternative when uncertain about the type.",
    "7. What is the inherited type for the variable example in `const example = ['Dylan']`?",
    "8. What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'God']`?",
    "9. True or False: TypeScript will always correctly infer the type of an array.",
    "10. True or False: a Tuple and an Array are the same thing when discussing types",
    "11. Which is a successful example of this tuple `[number, string]`?",
    "12. Type Aliases are mostly used with ______.",
    "13. True or False: Interfaces are similar to type aliases, but only for object types?",
    "14. ________ an interface will have the same properties as that interface.",
    "15. What are the two types of enums?",
    "16. Numeric enums first value is defaulted to what?",
    "17. True or False: 'keyof' can be used with index signatures to extract the index type.",
    "18. True or False: Generics can not be assigned default values.",
    "19. Definitely Typed is...",
    "20. What is the type of the parameter: `function ex(param1?: string){}`?",
    "21. _____ is a return type for when nothing is returned.",
    "22. Access modifiers control the ______ of properties and methods.",
    "23. True or False: public modifiers allow access to the class members from anywhere.",
    "24. True or False: protected modifiers only are allowed in the inherited class.",
    "25. When a class extends another class and replaces the members of its parent it is called what?"
];



let options = [{
    a: 'Boolean, Number, String',
    b: 'Object, Array, Symbol',
    c: 'Array, Object, Boolean',
    d: 'Object, String, Number'
},
{
    a: 'Explicit',
    b: 'Implicit'
},
{
    a: 'True',
    b: 'False'
},
{
    a: 'autoTypeAssignment = FALSE',
    b: 'implicit = FALSE',
    c: 'noAutoType',
    d: 'noImplicitAny'
},
{
    a: 'strictNullChecks',
    b: 'strictChecksRequired',
    c: 'noFalseyInits',
    d: 'noAutoType',
},
{
    a: 'unknown',
    b: 'similer',
    c: 'never'
},
{
    a: 'string[]',
    b: 'unknown[]',
    c: 'any[]',
    d: 'string',
},
{
    a: 'Makes it private and can only be used in the file its created',
    b: 'Makes you read it for bette clean code',
    c: 'Allows no changes and is there simply to be read from and not modified',
    d: 'Allows only adding but not deleting elements in the array',
},
{
    a: 'false',
    b: 'true'
},
{
    a: 'true',
    b: 'false'
},
{
    a: 'cosnt ourTuple = [101, "Coding God"]',
    b: 'cosnt ourTuple = [101, 101, "Coding God", "Coding God"]',
    c: 'cosnt ourTuple = ["Coding God", 101]',
    d: 'cosnt ourTuple = [101]',
},
{
    a: 'Number',
    b: 'Boolean',
    c: 'String'
},
{
    a: 'false',
    b: 'true'
},
{
    a: 'Idolizing',
    b: 'Duplicating',
    c: 'Improving',
    d: 'Extending',
},
{
    a: 'Number and Number Array',
    b: 'String and Number',
    c: 'Number and Boolean',
    d: 'String and Boolean',
},
{
    a: '0',
    b: '5',
    c: '1',
    d: '10',
},
{
    a: 'True',
    b: 'False'
},
{
    a: 'False',
    b: 'True'
},
{
    a: 'a project whose goal is to make types dynamic',
    b: 'a project that provides a central repositary of TypeScript definitions for NPM packages which do not have types.',
    c: 'a superset of TypeScript',
    d: 'the official name of TypeScript',
},
{
    a: 'string | undefined',
    b: 'unknown',
    c: 'string',
    d: 'string | null',
},
{
    a: 'any[]',
    b: 'unknown',
    c: 'void',
    d: 'any',
},
{
    a: 'mocking',
    b: 'inhritance',
    c: 'visiblity',
    d: 'Type',
},
{
    a: 'False',
    b: 'True'
},
{
    a: 'False',
    b: 'True'
},
{
    a: 'inheriting',
    b: 'overload',
    c: 'extending',
    d: 'override',
}];


let correctOptions = [
    'Boolean, Number, String', 'Explicit', 'False', 'noImplicitAny', 
    'strictNullChecks', 'unknown', 'string[]', 
    'Allows no changes and is there simply to be read from and not modified', 
    'false', 'false', 'cosnt ourTuple = [101, "Coding God"]', 'String', 'true', 
    'Extending', 'String and Number', '0', 'True', 'False', 
    'a project that provides a central repositary of TypeScript definitions for NPM packages which do not have types.',
    'string | undefined', 'void', 'Type', 'True', 'False', 'override'
];