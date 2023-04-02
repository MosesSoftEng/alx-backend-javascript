# :book: alx-backend-javascript
## :page_with_curl: Topics Covered
1. Introduction to JavaScript ES6 and Node.js.
3. ES6 Data strucutures.

# :computer: Projects
## [0x00. ES6 Basics](0x00-ES6_basic)
Introduction to Javascript ES6 (ECMAScript 2015). Setup and using: Babel, Eslint and Jest.

## [0x01. ES6 Promises](0x01-ES6_promise)
Introduction to JavaScript Asynchoronous Programming using Promises.

## [0x03-ES6_data_manipulation](0x03-ES6_data_manipulation)
Introduction to Javascript ES6 Data Strucutre Types and Data Manipulation.

> [:point_right: Go to project](0x03-ES6_data_manipulation)

## [0x04. Typescript](0x04-TypeScript)
Introduction to Typescript.

### :wrench: Project setup.
```bash
# Create project directory and readme.
mkdir ./0x04-TypeScript/
touch ./0x04-TypeScript/README.md
```

> [:point_right: Go to project](0x04-TypeScript)


<!---->
## [0x02. Session authentication](0x02-Session_authentication)
The project is about implementing a session authentication mechanism without installing any other module. The learning objectives of the project include;
* Understanding authentication, session authentication.
* Cookies, sending cookies, and parsing cookies.

### :wrench: Project setup.
```bash
# Create project directory and readme.
mkdir ./0x02-Session_authentication/
touch ./0x02-Session_authentication/README.md
cd 0x02-Session_authentication
```
> [:point_right: Go to project](0x02-Session_authentication)
<!---->


<!---->
## [0x05. NodeJS Basics](0x05-Node_JS_basic)
This project involves learning NodeJS basics concept covered;
1. Using NodeJS modules.
2. Reading files.
3. Creating HTTP servers.
4. Using Express JS.
5. Testing with Mocha.
6. Using Nodemon.

### :wrench: Project setup.
```bash
# Create project directory and readme.
mkdir ./0x05-Node_JS_basic/
touch ./0x05-Node_JS_basic/README.md
cd 0x05-Node_JS_basic

touch package.json database.csv babel.config.js .eslintrc.js

echo '{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
' >> package.json

echo "module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
" >> babel.config.js

echo "firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS" >> database.csv


echo "module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};" >> .eslintrc.js

# Install depedencies
npm install

```
> [:point_right: Go to project](0x05-Node_JS_basic)
<!---->


<!---->
## [0x03. Queuing System in JS](0x03-queuing_system_in_js)
This project involves how to use Redis and implementing Kue as a queue system. The learning objectives include;
1. Running a Redis server.
2. Using a Redis client for basic operations and with Node JS.
3. Storing hash values in Redis.
4. Dealing with async operations.
5. Building a basic Express app interacting with a Redis server.
6. Building a basic Express app interacting with a Redis server and queue.

### :wrench: Project setup.
```bash
# Create project directory and readme.
mkdir ./0x03-queuing_system_in_js/
touch ./0x03-queuing_system_in_js/README.md
cd 0x03-queuing_system_in_js

touch package.json .babelrc

echo '{
    "name": "queuing_system_in_js",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "lint": "./node_modules/.bin/eslint",
      "check-lint": "lint [0-9]*.js",
      "test": "./node_modules/.bin/mocha --require @babel/register --exit",
      "dev": "nodemon --exec babel-node --presets @babel/preset-env"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "chai-http": "^4.3.0",
      "express": "^4.17.1",
      "kue": "^0.11.6",
      "redis": "^2.8.0"
    },
    "devDependencies": {
      "@babel/cli": "^7.8.0",
      "@babel/core": "^7.8.0",
      "@babel/node": "^7.8.0",
      "@babel/preset-env": "^7.8.2",
      "@babel/register": "^7.8.0",
      "eslint": "^6.4.0",
      "eslint-config-airbnb-base": "^14.0.0",
      "eslint-plugin-import": "^2.18.2",
      "eslint-plugin-jest": "^22.17.0",
      "nodemon": "^2.0.2",
      "chai": "^4.2.0",
      "mocha": "^6.2.2",
      "request": "^2.88.0",
      "sinon": "^7.5.0"
    }
  }
' >> package.json

echo '{
  "presets": [
    "@babel/preset-env"
  ]
}
' >> .babelrc

# Install depedencies.
npm install

```
> [:point_right: Go to project](0x05-Node_JS_basic)
<!---->

# :man: Author and Credits.
This project was done by [SE. Moses Mwangi](https://github.com/MosesSoftEng). Feel free to get intouch with me;

:iphone: WhatsApp [+254115227963](https://wa.me/254115227963)

:email: Email [moses.soft.eng@gmail.com](mailto:moses.soft.eng@gmail.com)

:thumbsup: A lot of thanks to [ALX-Africa Software Engineering](https://www.alxafrica.com/) program for the project requirements.
