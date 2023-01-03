# :computer: Tasks.
## [0. Basic list of objects ](0-get_list_students.js)
```bash
# Create task file and set execute permission.
touch ./0-get_list_students.js
chmod +x ./0-get_list_students.js
npm run lint 0-get_list_students.js --fix

# Create test file
touch ./tests/0-main.js
chmod +x ./tests/0-main.js
npm run dev ./tests/0-main.js 
```

## [1. More mapping ](1-get_list_student_ids.js)
### Task requirements
Create a function getListStudentIds that returns an array of ids from a list of object.

### Task setup
```bash
# Create task file and set execute permission.
touch ./1-get_list_student_ids.js
chmod +x ./1-get_list_student_ids.js
npm run lint 1-get_list_student_ids.js --fix

# Create test file
touch ./tests/1-main.js
chmod +x ./tests/1-main.js
npm run dev ./tests/1-main.js 
```

## [2. Filter](2-get_students_by_loc.js)
### Task requirements.

### Task setup.
```bash
# Create task file and set execute permission.
touch ./2-get_students_by_loc.js
chmod +x ./2-get_students_by_loc.js
npm run lint 2-get_students_by_loc.js --fix

# Create an executable task test file.
touch ./tests/2-main.js
chmod +x ./tests/2-main.js
npm run dev ./tests/2-main.js 
```

## [3. Reduce](3-get_ids_sum.js)
### Task requirements.
Create a function getStudentIdsSum that returns the sum of all the student ids.

### Task setup.
```bash
# Create an executable task file.
touch ./3-get_ids_sum.js
chmod +x ./3-get_ids_sum.js
npm run lint 3-get_ids_sum.js --fix

# Create an executable task test file.
touch ./tests/3-main.js
chmod +x ./tests/3-main.js
npm run dev ./tests/3-main.js
```

## [4. Combine](4-update_grade_by_city.js)
### Task requirements
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade.

### Task setup
```bash
# Create an executable task file.
touch ./4-update_grade_by_city.js
chmod +x ./4-update_grade_by_city.js
npm run lint 4-update_grade_by_city.js --fix

# Create an executable task test file.
touch ./tests/4-main.js
chmod +x ./tests/4-main.js
npm run dev ./tests/4-main.js 
```

## [5. Typed Arrays](5-typed_arrays.js)
### Task requirements.
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

### Task setup.
```bash
# Create an executable task file.
touch ./5-typed_arrays.js
chmod +x ./5-typed_arrays.js
npm run lint 5-typed_arrays.js --fix

# Create an executable task test file.
touch ./tests/5-main.js
chmod +x ./tests/5-main.js
npm run dev ./tests/5-main.js 
```

## [6. Set data structure](6-set.js)
### Task requirements
Create a function named setFromArray that returns a Set from an array.

### Task setup
```bash
# Create an executable task file.
touch ./6-set.js
chmod +x ./6-set.js
npm run lint 6-set.js --fix

# Create an executable task test file.
touch ./tests/6-main.js
chmod +x ./tests/6-main.js
npm run dev ./tests/6-main.js
```

## [7. More set data structure](7-has_array_values.js)
### Task requirements.
Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.

### Task setup
```bash
# Create an executable task file.
touch ./7-has_array_values.js
chmod +x ./7-has_array_values.js
npm run lint 7-has_array_values.js --fix

# Create an executable task test file.
touch ./tests/7-main.js
chmod +x ./tests/7-main.js
npm run dev ./tests/7-main.js 
```

## [8. Clean set](8-clean_set.js)
### Task requirements
Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).

### Task setup
```bash
# Create an executable task file.
touch ./8-clean_set.js
chmod +x ./8-clean_set.js
npm run lint 8-clean_set.js --fix

# Create an executable task test file.
touch ./tests/8-main.js
chmod +x ./tests/8-main.js
npm run dev ./tests/8-main.js 
```

## [9. Map data structure](9-groceries_list.js)
### Task requirements.
Create a function named groceriesList that returns a map of groceries with the following items (name, quantity):
```
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
```

## [10. More map data structure](10-update_uniq_items.js)
### Task requirements

### Task setup
```bash
# Create an executable task file.
touch ./10-update_uniq_items.js
chmod +x ./10-update_uniq_items.js
npm run lint 10-update_uniq_items.js --fix

# Create an executable task test file.
touch ./tests/10-main.js
chmod +x ./tests/10-main.js
npm run dev ./tests/10-main.js 
```
## [11. Weak link data structure](100-weak.js)
### Task requirements.
Export a const instance of WeakMap and name it weakMap.

Export a new function named queryAPI. It should accept an endpoint argument like so:
```
  {
    protocol: 'http',
    name: 'getUsers',
  }
```
Track within the weakMap the number of times queryAPI is called for each endpoint.

When the number of queries is >= 5 throw an error with the message Endpoint load is high.
### Task setup.
```bash
# Create an executable task file.
touch ./100-weak.js
chmod +x ./100-weak.js
npm run lint 100-weak.js --fix

# Create an executable task test file.
touch ./tests/100-main.js
chmod +x ./tests/100-main.js
npm run dev ./tests/100-main.js 
```
