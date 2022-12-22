# :book: 0x00. ES6 Basics
## Topics Covered
1. ECMAScript 6 - ECMAScript 2015.
2. Node.js and NPM

## Project setup
```bash
# Create a new node project
npm init -y

# Install babel core for project
npm install --save-dev @babel/core

# Add babel presets (babel plugins and config options)
npm install --save-dev @babel/preset-env

# Create babel config file
touch babel.config.js

# Install babel-node for project
npm install --save-dev @babel/node

# Run js file using babel node
npx babel-node <js filename>

# Run js file using package.json script
npm run dev <filename>

# Install eslint for liniting js file
npm install --save-dev eslint

# Setup eslint configuration
npx eslint --init # or
npm init @eslint/config

# Lint a folder with js file or lint a js file.
npx eslint <folder | filename>

# Fix a js file lint issue
npx eslint <folder | filename> --fix

# Install Jest as development dependecy.
npm install --save-dev jest
npm uninstall --save-dev jest

npm install --save-dev jest@27.0.0

# Run jet test
npm run test

# Install @babel/jest
# npm install --save-dev babel-jest
# npm uninstall --save-dev babel-jest
```

# :computer: Tasks
## [0. Const or let?](0-constants.js)
```bash
touch 0-constants.js
chmod +x 0-constants.js
npm run lint 0-constants.js --fix

touch 0-main.js
chmod +x 0-main.js
npm run dev ./tests/0-main.js 
```

## [1. Block Scope](1-block-scoped.js)
```bash
touch 1-block-scoped.js
chmod +x 1-block-scoped.js
npm run lint 1-block-scoped.js --fix

touch ./tests/1-main.js
chmod +x ./tests/1-main.js
npm run dev ./tests/1-main.js 
```

## [2. Arrow functions](2-arrow.js)
```bash
touch 2-arrow.js
chmod +x 2-arrow.js
npm run lint 2-arrow.js --fix

touch ./tests/2-main.js
chmod +x ./tests/2-main.js
npm run dev ./tests/2-main.js 
```

## [3. Parameter defaults](3-default-parameter.js)
```bash
touch 3-default-parameter.js
chmod +x 3-default-parameter.js
npm run lint 3-default-parameter.js --fix

touch ./tests/3-main.js
chmod +x ./tests/3-main.js
npm run dev ./tests/3-main.js 
```

## [4. Rest parameter syntax for functions](4-rest-parameter.js)
```bash
touch 4-rest-parameter.js
chmod +x 4-rest-parameter.js
npm run lint 4-rest-parameter.js --fix

touch ./tests/4-main.js
chmod +x ./tests/4-main.js
npm run dev ./tests/4-main.js
```

## [5. The wonders of spread syntax](5-spread-operator.js)
```bash
touch 5-spread-operator.js
chmod +x 5-spread-operator.js
npm run lint 5-spread-operator.js --fix

touch ./tests/5-main.js
chmod +x ./tests/5-main.js
npm run dev ./tests/5-main.js
```

## [6. Take advantage of template literals](6-string-interpolation.js)
```bash
touch 6-string-interpolation.js
chmod +x 6-string-interpolation.js
npm run lint 6-string-interpolation.js --fix

touch ./tests/6-main.js
chmod +x ./tests/6-main.js
npm run dev ./tests/6-main.js
```

## [7. Object property value shorthand syntax](7-getBudgetObject.js)
```bash
touch 7-getBudgetObject.js
chmod +x 7-getBudgetObject.js
npm run lint 7-getBudgetObject.js --fix

touch ./tests/7-main.js
chmod +x ./tests/7-main.js
npm run dev ./tests/7-main.js
```

## [8. No need to create empty objects before adding in properties](8-getBudgetCurrentYear.js)
```bash
touch 8-getBudgetCurrentYear.js
chmod +x 8-getBudgetCurrentYear.js
npm run lint 8-getBudgetCurrentYear.js --fix

touch ./tests/8-main.js
chmod +x ./tests/8-main.js
npm run dev ./tests/8-main.js
```

## [9. ES6 method properties](9-getFullBudget.js)
```bash
touch 9-getFullBudget.js
chmod +x 9-getFullBudget.js
npm run lint 9-getFullBudget.js --fix

touch ./tests/9-main.js
chmod +x ./tests/9-main.js
npm run dev ./tests/9-main.js
```

## [10. For...of Loops](10-loops.js)
```bash
touch 10-loops.js
chmod +x 10-loops.js
npm run lint 10-loops.js --fix

touch ./tests/10-main.js
chmod +x ./tests/10-main.js
npm run dev ./tests/10-main.js
```

## [11. Iterator](11-createEmployeesObject.js)
```bash
touch 11-createEmployeesObject.js
chmod +x 11-createEmployeesObject.js
npm run lint 11-createEmployeesObject.js --fix

touch ./tests/11-main.js
chmod +x ./tests/11-main.js
npm run dev ./tests/11-main.js
```

## [12. Let's create a report object](12-createReportObject.js)
```bash
touch 12-createReportObject.js
chmod +x 12-createReportObject.js
npm run lint 12-createReportObject.js --fix

touch ./tests/12-main.js
chmod +x ./tests/12-main.js
npm run dev ./tests/12-main.js
```

## [13. Iterating through report objects ](100-createIteratorObject.js)
```bash
touch 100-createIteratorObject.js
chmod +x 100-createIteratorObject.js
npm run lint 100-createIteratorObject.js --fix

touch ./tests/100-main.js
chmod +x ./tests/100-main.js
npm run dev ./tests/100-main.js
```

## [14. Iterate through object](101-iterateThroughObject.js)
```bash
touch 101-iterateThroughObject.js
chmod +x 101-iterateThroughObject.js
npm run lint 101-iterateThroughObject.js --fix

touch ./tests/101-main.js
chmod +x ./tests/101-main.js
npm run dev ./tests/101-main.js
```

# :books: References
1. [Using Babel](https://babeljs.io/setup#installation)
1. [Getting Started with ESLint](https://eslint.org/docs/latest/user-guide/getting-started)
1. [npm vs npx — What’s the Difference?](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)
1. [Jestr Getting Started](https://jestjs.io/docs/27.x/getting-started)


# :man: Author and Credits.
This project was done by [SE. Moses Mwangi](https://github.com/MosesSoftEng). Feel free to get intouch with me;

:iphone: WhatsApp [+254115227963](https://wa.me/254115227963)

:email: Email [moses.soft.eng@gmail.com](mailto:moses.soft.eng@gmail.com)

:thumbsup: A lot of thanks to [ALX-Africa Software Engineering](https://www.alxafrica.com/) program for the project requirements.
