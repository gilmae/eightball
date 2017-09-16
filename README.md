A slightly extensible eightball. When consulted, returns a promise

## Usage
```js

const EightBall = require('eightball-extensible');

let e = new EightBall({});

e.consult().then(function(response){
...
})

// Adds two extra responses to the standard eightball responses
let e2 = new EightBall({additionalResponses: ['Yeah, nah', 'Sure, why not']});

// Overrides the standard responses with our own
let e3 = new EightBall({responses: ['Yeah, nah', 'Sure, why not']});
```
