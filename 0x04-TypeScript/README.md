# :computer: Tasks.
## [0. Creating an interface for a student](task_0/js/main.ts)
### :page_with_curl: Task requirements.

### :wrench: Task setup.
```bash
# Create task file and set execute permission.
mkdir -p task_0/js/
touch ./task_0/js/main.ts
chmod +x ./task_0/js/main.ts

# Create a new node project
touch task_0/package.json

echo '{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}' >> task_0/package.json

# Configure eslint.
touch task_0/.eslintrc.js

echo 'module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};' >> task_0/.eslintrc.js

# Configure typescript.
touch task_0/tsconfig.json

echo '{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}' >> task_0/tsconfig.json

# Configure webpack.
touch task_0/webpack.config.js

echo 'const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
' >> task_0/webpack.config.js

# Change directory to task folder.
cd ./task_0

# Install node packages.
npm i

# Run project.
npm run start-dev
```

### :heavy_check_mark: Solution
> [:point_right: task_0](task_0)

## [1. Let's build a Teacher interface](task_1)
### :page_with_curl: Task requirements.
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

  * firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
  *  fullTimeEmployee(boolean) this attribute should always be defined
  *  yearsOfExperience(number) this attribute is optional
  *  location(string) this attribute should always be defined
  *  Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

Example:
```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```

### :wrench: Task setup.
```bash
# Create task files and set execute permission.
cp -r task_0 task_1
```

### :heavy_check_mark: Solution
> [:point_right: task_1](task_1)

## [2. Extending the Teacher class](task_2)
### :page_with_curl: Task requirements.
Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

Example:
```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```

### :wrench: Task setup.
```bash
# Create task file and set execute permission.
cp -r task_1 task_2

# Run project
npm run start-dev
```

### :heavy_check_mark: Solution
> [:point_right: task_2](task_2)

## [3. Printing teachers](task_3)
### :page_with_curl: Task requirements.
Write a function printTeacher:

  *  It accepts two arguments firstName and lastName
  *  It returns the first letter of the firstName and the full lastName
  *  Example: printTeacher("John", "Doe") -> J. Doe

Write an interface for the function named printTeacherFunction.

### :wrench: Task setup.
```bash
# Create task file and set execute permission.
cp -r task_2 task_3

# Run project
cd task_3
npm run start-dev
```

### :heavy_check_mark: Solution
> [:point_right: task_3](task_3)

## [4. Writing a class](task_4)
### Task requirements
Write a Class named StudentClass:

  *  The constructor accepts firstName(string) and lastName(string) arguments
  *  The class has a method named workOnHomework that return the string Currently working
    The class has a method named displayName. It returns the firstName of the student
  *  The constructor of the class should be described through an Interface
  *  The class should be described through an Interface

Requirements:

  *  You can reuse the Webpack configuration from the previous exercise to compile the code.
  *  When running npm run build, no TypeScript error should be displayed.
  *  Every variable should use TypeScript when possible.

### Task setup
```bash
# Create task file and set execute permission.
cp -r task_3 task_4

# Run project
cd task_4
npm run start-dev
```

### :heavy_check_mark: Solution
> [:point_right: task_4](task_4)

## [5. Advanced types Part 1 (task_5)
### :page_with_curl: Task requirements.
Create the DirectorInterface interface with the 3 expected methods:

  *  workFromHome() returning a string
  *  getCoffeeBreak() returning a string
  *  workDirectorTasks() returning a string

Create the TeacherInterface interface with the 3 expected methods:

  *  workFromHome() returning a string
  *  getCoffeeBreak() returning a string
  *  workTeacherTasks() returning a string

Create a class Director that will implement DirectorInterface

  *  workFromHome should return the string Working from home
  *  getToWork should return the string Getting a coffee break
  *  workDirectorTasks should return the string Getting to director tasks

Create a class Teacher that will implement TeacherInterface

  *  workFromHome should return the string Cannot work from home
  *  getCoffeeBreak should return the string Cannot have a break
  *  workTeacherTasks should return the string Getting to work

Create a function createEmployee with the following requirements:

  *  It can return either a Director or a Teacher instance
  *  It accepts 1 arguments:
        salary(either number or string)
  *  if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

### :wrench: Task setup.
```bash
# Create task file and set execute permission.
cp -r task_4 task_5

# Run project
cd task_5
npm run start-dev
```

### :heavy_check_mark: Solution
> [:point_right: task_5](task_5)
## [6. Creating functions specific to employees](task_6)
### Task requirements
Write a function isDirector:

  *  it accepts employee as an argument
  *  it will be used as a type predicate and if the employee is a director

Write a function executeWork:

  *  it accepts employee as an argument
  *  if the employee is a Director, it will call workDirectorTasks
  *  if the employee is a Teacher, it will call workTeacherTasks

Expected result:
```
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
```

### Task setup
```bash
# Create task file and set execute permission.
cp -r task_5 task_6

# Run project
cd task_6
npm run start-dev
```

### :heavy_check_mark: Solution
> [:point_right: task_6](task_6)
