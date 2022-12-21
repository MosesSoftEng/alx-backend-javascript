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
