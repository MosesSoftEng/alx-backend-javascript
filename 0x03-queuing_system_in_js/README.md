# :book: 0x05. 0x03. Queuing System in JS.
## :page_with_curl: Topics Covered.
This project involves how to use Redis and implementing Kue as a queue system. The learning objectives include;
1. Running a Redis server.
2. Using a Redis client for basic operations and with Node JS.
3. Storing hash values in Redis.
4. Dealing with async operations.
5. Building a basic Express app interacting with a Redis server.
6. Building a basic Express app interacting with a Redis server and queue.

# :computer: Tasks.
<!---->
## [0. Install a redis instance](1-redis_op.js)
### :page_with_curl: Task requirements.
Download, extract, and compile the latest stable Redis version (higher than 5.0.7 - [https://redis.io/download/](/rltoken/v6VB9ZwmVfppL0OmzbmVWQ "https://redis.io/download/")):
```
    $ wget http://download.redis.io/releases/redis-6.0.10.tar.gz
    $ tar xzf redis-6.0.10.tar.gz
    $ cd redis-6.0.10
    $ make
```

* Start Redis in the background with `src/redis-server`
```
    $ src/redis-server &
```

* Make sure that the server is working with a ping `src/redis-cli ping`
```
    PONG
```

* Using the Redis client again, set the value `School` for the key `Holberton`
```
    127.0.0.1:[Port]> set Holberton School
    OK
    127.0.0.1:[Port]> get Holberton
    "School"
```

* Kill the server with the process id of the redis-server (hint: use `ps` and `grep`)
```
    $ kill [PID_OF_Redis_Server]
```

Copy the `dump.rdb` from the `redis-5.0.7` directory into the root of the Queuing project.

Requirements:

* Running `get Holberton` in the client, should return `School`

**Repo:**

* GitHub repository: `alx-backend`
* Directory: `0x03-queuing_system_in_js`
* File: `README.md, dump.rdb`

### :wrench: Task setup.
```bash
wget http://download.redis.io/releases/redis-6.0.10.tar.gz
tar xzf redis-6.0.10.tar.gz
cd redis-6.0.10
make

# Start Redis.
cd /root/redis-6.0.10
src/redis-server &

# ping redis server.
src/redis-cli ping

# Enter Redis client.
redis-cli

# Kill redis server
redis-cli shutdown # or using process id

ps aux | grep redis-server
kill <PID>
```

### :heavy_check_mark: Solution
> [:point_right: README.md](README.md), [dump.rdb](dump.rdb)
<!---->

<!---->
## [1. Node Redis Client](0-redis_client.js)
### :page_with_curl: Task requirements.
Install [node_redis](/rltoken/mRftfl67BrNvl-RM5JQfUA "node_redis") using npm

Using Babel and ES6, write a script named `0-redis_client.js`. It should connect to the Redis server running on your machine:

* It should log to the console the message `Redis client connected to the server` when the connection to Redis works correctly
* It should log to the console the message `Redis client not connected to the server: ERROR_MESSAGE` when the connection to Redis does not work

**Requirements:**

* To import the library, you need to use the keyword `import`
```
    bob@dylan:~$ ps ax | grep redis-server
     2070 pts/1    S+     0:00 grep --color=auto redis-server
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 0-redis_client.js 
    
    > queuing_system_in_js@1.0.0 dev /root
    > nodemon --exec babel-node --presets @babel/preset-env "0-redis_client.js"
    
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node --presets @babel/preset-env 0-redis_client.js`
    Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
    Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
    Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
    ^C
    bob@dylan:~$ 
    bob@dylan:~$ ./src/redis-server > /dev/null 2>&1 &
    [1] 2073
    bob@dylan:~$ ps ax | grep redis-server
     2073 pts/0    Sl     0:00 ./src/redis-server *:6379
     2078 pts/1    S+     0:00 grep --color=auto redis-server
    bob@dylan:~$
    bob@dylan:~$ npm run dev 0-redis_client.js 
    
    > queuing_system_in_js@1.0.0 dev /root
    > nodemon --exec babel-node --presets @babel/preset-env "0-redis_client.js"
    
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node --presets @babel/preset-env 0-redis_client.js`
    Redis client connected to the server
    ^C
    bob@dylan:~$
```

**Repo:**

* GitHub repository: `alx-backend`
* Directory: `0x03-queuing_system_in_js`
* File: `0-redis_client.js`


### :wrench: Task setup.
```bash
# Create solution file.
touch 0-redis_client.js
chmod +x 0-redis_client.js

# Lint.
npm run lint 0-redis_client.js --fix

# Test.
npm run dev 0-redis_client.js
```

### :heavy_check_mark: Solution
> [:point_right: 0-redis_client.js](0-redis_client.js)
<!---->

## [2. Node Redis client and basic operations](1-redis_op.js)
### :page_with_curl: Task requirements.
In a file `1-redis_op.js`, copy the code you previously wrote (`0-redis_client.js`).

Add two functions:

* `setNewSchool`:
    * It accepts two arguments `schoolName`, and `value`.
    * It should set in Redis the value for the key `schoolName`
    * It should display a confirmation message using `redis.print`
* `displaySchoolValue`:
    * It accepts one argument `schoolName`.
    * It should log to the console the value for the key passed as argument

At the end of the file, call:

* `displaySchoolValue('Holberton');`
* `setNewSchool('HolbertonSanFrancisco', '100');`
* `displaySchoolValue('HolbertonSanFrancisco');`

**Requirements:**

* Use callbacks for any of the operation, we will look at async operations later
```
    bob@dylan:~$ npm run dev 1-redis_op.js 
    
    > queuing_system_in_js@1.0.0 dev /root
    > nodemon --exec babel-node --presets @babel/preset-env "1-redis_op.js"
    
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node --presets @babel/preset-env 1-redis_op.js`
    Redis client connected to the server
    School
    Reply: OK
    100
    ^C
    
    bob@dylan:~$
```

**Repo:**

* GitHub repository: `alx-backend`
* Directory: `0x03-queuing_system_in_js`
* File: `1-redis_op.js`


### :wrench: Task setup.
```bash
# Create solution file.
touch 1-redis_op.js
chmod +x 1-redis_op.js

# Lint.
npm run lint 1-redis_op.js --fix

# Test.
npm run dev 1-redis_op.js
```

### :heavy_check_mark: Solution
> [:point_right: 1-redis_op.js](1-redis_op.js)


## [3. Node Redis client and async operations](2-redis_op_async.js)
### :page_with_curl: Task requirements.
In a file `1-redis_op.js`, copy the code you previously wrote (`0-redis_client.js`).

Add two functions:

* `setNewSchool`:
    * It accepts two arguments `schoolName`, and `value`.
    * It should set in Redis the value for the key `schoolName`
    * It should display a confirmation message using `redis.print`
* `displaySchoolValue`:
    * It accepts one argument `schoolName`.
    * It should log to the console the value for the key passed as argument

At the end of the file, call:

* `displaySchoolValue('Holberton');`
* `setNewSchool('HolbertonSanFrancisco', '100');`
* `displaySchoolValue('HolbertonSanFrancisco');`

**Requirements:**

* Use callbacks for any of the operation, we will look at async operations later
```
    bob@dylan:~$ npm run dev 1-redis_op.js 
    
    > queuing_system_in_js@1.0.0 dev /root
    > nodemon --exec babel-node --presets @babel/preset-env "1-redis_op.js"
    
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node --presets @babel/preset-env 1-redis_op.js`
    Redis client connected to the server
    School
    Reply: OK
    100
    ^C
    
    bob@dylan:~$
```

**Repo:**

* GitHub repository: `alx-backend`
* Directory: `0x03-queuing_system_in_js`
* File: `1-redis_op.js`

### :wrench: Task setup.
```bash
# Create solution file.
touch 2-redis_op_async.js
chmod +x 2-redis_op_async.js

# Lint.
npm run lint 2-redis_op_async.js --fix

# Test.
npm run dev 2-redis_op_async.js
```

### :heavy_check_mark: Solution
> [:point_right: 2-redis_op_async.js](2-redis_op_async.js)


## [4. Node Redis client and advanced operations](4-redis_advanced_op.js)
### :page_with_curl: Task requirements.
In a file named `4-redis_advanced_op.js`, let’s use the client to store a hash value

#### Create Hash:

Using `hset`, let’s store the following:

* The key of the hash should be `HolbertonSchools`
* It should have a value for:
    * `Portland=50`
    * `Seattle=80`
    * `New York=20`
    * `Bogota=20`
    * `Cali=40`
    * `Paris=2`
* Make sure you use `redis.print` for each `hset`

#### Display Hash:

Using `hgetall`, display the object stored in Redis. It should return the following:

**Requirements:**

* Use callbacks for any of the operation, we will look at async operations later
```
    bob@dylan:~$ npm run dev 4-redis_advanced_op.js 
    
    > queuing_system_in_js@1.0.0 dev /root
    > nodemon --exec babel-node --presets @babel/preset-env "4-redis_advanced_op.js"
    
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node --presets @babel/preset-env 4-redis_advanced_op.js`
    Redis client connected to the server
    Reply: 1
    Reply: 1
    Reply: 1
    Reply: 1
    Reply: 1
    Reply: 1
    {
      Portland: '50',
      Seattle: '80',
      'New York': '20',
      Bogota: '20',
      Cali: '40',
      Paris: '2'
    }
    ^C
    bob@dylan:~$
```

**Repo:**

* GitHub repository: `alx-backend`
* Directory: `0x03-queuing_system_in_js`
* File: `4-redis_advanced_op.js`


### :wrench: Task setup.
```bash
# Create solution file.
touch 4-redis_advanced_op.js
chmod +x 4-redis_advanced_op.js

# Lint.
npm run lint 4-redis_advanced_op.js --fix

# Test.
npm run dev 4-redis_advanced_op.js
```

### :heavy_check_mark: Solution
> [:point_right: api/v1/auth/auth.py](api/v1/app.py)

## [5. Node Redis client publisher and subscriber](5-subscriber.js)
### :page_with_curl: Task requirements.
In a file named `5-subscriber.js`, create a redis client:

* On connect, it should log the message `Redis client connected to the server`
* On error, it should log the message `Redis client not connected to the server: ERROR MESSAGE`
* It should subscribe to the channel `holberton school channel`
* When it receives message on the channel `holberton school channel`, it should log the message to the console
* When the message is `KILL_SERVER`, it should unsubscribe and quit

In a file named `5-publisher.js`, create a redis client:

* On connect, it should log the message `Redis client connected to the server`
* On error, it should log the message `Redis client not connected to the server: ERROR MESSAGE`
* Write a function named `publishMessage`:
    * It will take two arguments: `message` (string), and `time` (integer - in ms)
    * After `time` millisecond:
        * The function should log to the console `About to send MESSAGE`
        * The function should publish to the channel `holberton school channel`, the message passed in argument after the time passed in arguments
* At the end of the file, call:
```
    publishMessage("Holberton Student #1 starts course", 100);
    publishMessage("Holberton Student #2 starts course", 200);
    publishMessage("KILL_SERVER", 300);
    publishMessage("Holberton Student #3 starts course", 400);
```

**Requirements:**

* You only need one Redis server to execute the program
* You will need to have two node processes to run each script at the same time

**Terminal 1:**
```
    bob@dylan:~$ npm run dev 5-subscriber.js 
    
    > queuing_system_in_js@1.0.0 dev /root
    > nodemon --exec babel-node --presets @babel/preset-env "5-subscriber.js"
    
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node --presets @babel/preset-env 5-subscriber.js`
    Redis client connected to the server
```
**Terminal 2:**
```
    bob@dylan:~$ npm run dev 5-publisher.js 
    
    > queuing_system_in_js@1.0.0 dev /root
    > nodemon --exec babel-node --presets @babel/preset-env "5-publisher.js"
    
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node --presets @babel/preset-env 5-publisher.js`
    Redis client connected to the server
    About to send Holberton Student #1 starts course
    About to send Holberton Student #2 starts course
    About to send KILL_SERVER
    About to send Holberton Student #3 starts course
    ^C
    bob@dylan:~$ 
```

**And in the same time in Terminal 1:**
```
    Redis client connected to the server
    Holberton Student #1 starts course
    Holberton Student #2 starts course
    KILL_SERVER
    [nodemon] clean exit - waiting for changes before restart
    ^C
    bob@dylan:~$ 
```

Now you have a basic Redis-based queuing system where you have a process to generate job and a second one to process it. These 2 processes can be in 2 different servers, which we also call “background workers”.

**Repo:**

* GitHub repository: `alx-backend`
* Directory: `0x03-queuing_system_in_js`
* File: `5-subscriber.js, 5-publisher.js`

### :wrench: Task setup.
```bash
# Create solution file.
touch 5-subscriber.js 5-publisher.js
chmod +x 5-subscriber.js 5-publisher.js

# Lint.
npm run lint 5-subscriber.js
npm run lint 5-publisher.js

# Test.
npm run dev 5-subscriber.js
npm run dev 5-publisher.js 
```

### :heavy_check_mark: Solution
> [:point_right: 5-subscriber.js](5-subscriber.js), [:point_right: 5-publisher.js](5-publisher.js)

<!---->
## [6. Use Session ID for identifying a User](api/v1/app.py)
### :page_with_curl: Task requirements.
Score: 0.0% (Checks completed: 0.0%)

Update `SessionAuth` class:

Create an instance method `def current_user(self, request=None):` (overload) that returns a `User` instance based on a cookie value:

* You must use `self.session_cookie(...)` and `self.user_id_for_session_id(...)` to return the User ID based on the cookie `_my_session_id`
* By using this User ID, you will be able to retrieve a `User` instance from the database - you can use `User.get(...)` for retrieving a `User` from the database.

Now, you will be able to get a User based on his session ID.

In the first terminal:
```
    bob@dylan:~$ cat main_4.py
    #!/usr/bin/env python3
    """ Main 4
    """
    from flask import Flask, request
    from api.v1.auth.session_auth import SessionAuth
    from models.user import User
    
    """ Create a user test """
    user_email = "bobsession@hbtn.io"
    user_clear_pwd = "fake pwd"
    
    user = User()
    user.email = user_email
    user.password = user_clear_pwd
    user.save()
    
    """ Create a session ID """
    sa = SessionAuth()
    session_id = sa.create_session(user.id)
    print("User with ID: {} has a Session ID: {}".format(user.id, session_id))
    
    """ Create a Flask app """
    app = Flask(__name__)
    
    @app.route('/', methods=['GET'], strict_slashes=False)
    def root_path():
        """ Root path
        """
        request_user = sa.current_user(request)
        if request_user is None:
            return "No user found\n"
        return "User found: {}\n".format(request_user.id)
    
    if __name__ == "__main__":
        app.run(host="0.0.0.0", port="5000")
    
    bob@dylan:~$
    bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=session_auth SESSION_NAME=_my_session_id ./main_4.py
    User with ID: cf3ddee1-ff24-49e4-a40b-2540333fe992 has a Session ID: 9d1648aa-da79-4692-8236-5f9d7f9e9485
     * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
    ....
```

In a second terminal:
```
    bob@dylan:~$ curl "http://0.0.0.0:5000/"
    No user found
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/" --cookie "_my_session_id=Holberton"
    No user found
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/" --cookie "_my_session_id=9d1648aa-da79-4692-8236-5f9d7f9e9485"
    User found: cf3ddee1-ff24-49e4-a40b-2540333fe992
    bob@dylan:~$
```

### :wrench: Task setup.
```bash
```

### :heavy_check_mark: Solution
> [:point_right: api/v1/auth/session_auth.py](api/v1/auth/session_auth.py)
<!---->


<!---->
## [7. New view for Session Authentication](api/v1/views/session_auth.py)
### :page_with_curl: Task requirements.
Score: 0.0% (Checks completed: 0.0%)

Create a new Flask view that handles all routes for the Session authentication.

In the file `api/v1/views/session_auth.py`, create a route `POST /auth_session/login` (= `POST /api/v1/auth_session/login`):

* Slash tolerant (`/auth_session/login` == `/auth_session/login/`)
* You must use `request.form.get()` to retrieve `email` and `password` parameters
* If `email` is missing or empty, return the JSON `{ "error": "email missing" }` with the status code `400`
* If `password` is missing or empty, return the JSON `{ "error": "password missing" }` with the status code `400`
* Retrieve the `User` instance based on the `email` \- you must use the class method `search` of `User` (same as the one used for the `BasicAuth`)
    * If no `User` found, return the JSON `{ "error": "no user found for this email" }` with the status code `404`
    * If the `password` is not the one of the `User` found, return the JSON `{ "error": "wrong password" }` with the status code `401` \- you must use `is_valid_password` from the `User` instance
    * Otherwise, create a Session ID for the `User` ID:
        * You must use `from api.v1.app import auth` \- **WARNING: please import it only where you need it** \- not on top of the file (can generate circular import - and break first tasks of this project)
        * You must use `auth.create_session(..)` for creating a Session ID
        * Return the dictionary representation of the `User` \- you must use `to_json()` method from User
        * You must set the cookie to the response - you must use the value of the environment variable `SESSION_NAME` as cookie name - [tip](/rltoken/3WDlzYbVvdJJAf70IjWK6g "tip")

In the file `api/v1/views/__init__.py`, you must add this new view at the end of the file.

In the first terminal:
```
    bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=session_auth SESSION_NAME=_my_session_id python3 -m api.v1.app
     * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
    ....
```

In a second terminal:
```
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XGET
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
    <title>405 Method Not Allowed</title>
    <h1>Method Not Allowed</h1>
    <p>The method is not allowed for the requested URL.</p>
    bob@dylan:~$
    bob@dylan:~$  curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST
    {
      "error": "email missing"
    }
    bob@dylan:~$ 
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST -d "email=guillaume@hbtn.io"
    {
      "error": "password missing"
    }
    bob@dylan:~$ 
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST -d "email=guillaume@hbtn.io" -d "password=test"
    {
      "error": "no user found for this email"
    }
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST -d "email=bobsession@hbtn.io" -d "password=test"
    {
      "error": "wrong password"
    }
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST -d "email=bobsession@hbtn.io" -d "password=fake pwd"
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST -d "email=bobsession@hbtn.io" -d "password=fake pwd" -vvv
    Note: Unnecessary use of -X or --request, POST is already inferred.
    *   Trying 0.0.0.0...
    * TCP_NODELAY set
    * Connected to 0.0.0.0 (127.0.0.1) port 5000 (#0)
    > POST /api/v1/auth_session/login HTTP/1.1
    > Host: 0.0.0.0:5000
    > User-Agent: curl/7.54.0
    > Accept: */*
    > Content-Length: 42
    > Content-Type: application/x-www-form-urlencoded
    > 
    * upload completely sent off: 42 out of 42 bytes
    * HTTP 1.0, assume close after body
    < HTTP/1.0 200 OK
    < Content-Type: application/json
    < Set-Cookie: _my_session_id=df05b4e1-d117-444c-a0cc-ba0d167889c4; Path=/
    < Access-Control-Allow-Origin: *
    < Content-Length: 210
    < Server: Werkzeug/0.12.1 Python/3.4.3
    < Date: Mon, 16 Oct 2017 04:57:08 GMT
    < 
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    * Closing connection 0
    bob@dylan:~$ 
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=df05b4e1-d117-444c-a0cc-ba0d167889c4"
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    bob@dylan:~$
```

Now you have an authentication based on a Session ID stored in cookie, perfect for a website (browsers love cookies).

### :wrench: Task setup.
```bash
```

### :heavy_check_mark: Solution
> [:point_right: api/v1/views/session_auth.py](api/v1/views/session_auth.py), [:point_right: api/v1/views/__init__.py](api/v1/views/__init__.py)
<!---->


<!---->
## [8. Logout](api/v1/auth/session_auth.py)
### :page_with_curl: Task requirements.
Score: 0.0% (Checks completed: 0.0%)

Update the class `SessionAuth` by adding a new method `def destroy_session(self, request=None):` that deletes the user session / logout:

* If the `request` is equal to `None`, return `False`
* If the `request` doesn’t contain the Session ID cookie, return `False` \- you must use `self.session_cookie(request)`
* If the Session ID of the request is not linked to any User ID, return `False` \- you must use `self.user_id_for_session_id(...)`
* Otherwise, delete in `self.user_id_by_session_id` the Session ID (as key of this dictionary) and return `True`

Update the file `api/v1/views/session_auth.py`, by adding a new route `DELETE /api/v1/auth_session/logout`:

* Slash tolerant
* You must use `from api.v1.app import auth`
* You must use `auth.destroy_session(request)` for deleting the Session ID contains in the request as cookie:
    * If `destroy_session` returns `False`, `abort(404)`
    * Otherwise, return an empty JSON dictionary with the status code 200

In the first terminal:
```
    bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=session_auth SESSION_NAME=_my_session_id python3 -m api.v1.app
     * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
    ....
```

In a second terminal:
```
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST -d "email=bobsession@hbtn.io" -d "password=fake pwd" -vvv
    Note: Unnecessary use of -X or --request, POST is already inferred.
    *   Trying 0.0.0.0...
    * TCP_NODELAY set
    * Connected to 0.0.0.0 (127.0.0.1) port 5000 (#0)
    > POST /api/v1/auth_session/login HTTP/1.1
    > Host: 0.0.0.0:5000
    > User-Agent: curl/7.54.0
    > Accept: */*
    > Content-Length: 42
    > Content-Type: application/x-www-form-urlencoded
    > 
    * upload completely sent off: 42 out of 42 bytes
    * HTTP 1.0, assume close after body
    < HTTP/1.0 200 OK
    < Content-Type: application/json
    < Set-Cookie: _my_session_id=e173cb79-d3fc-4e3a-9e6f-bcd345b24721; Path=/
    < Access-Control-Allow-Origin: *
    < Content-Length: 210
    < Server: Werkzeug/0.12.1 Python/3.4.3
    < Date: Mon, 16 Oct 2017 04:57:08 GMT
    < 
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    * Closing connection 0
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=e173cb79-d3fc-4e3a-9e6f-bcd345b24721"
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/logout" --cookie "_my_session_id=e173cb79-d3fc-4e3a-9e6f-bcd345b24721"
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
    <title>405 Method Not Allowed</title>
    <h1>Method Not Allowed</h1>
    <p>The method is not allowed for the requested URL.</p>
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/logout" --cookie "_my_session_id=e173cb79-d3fc-4e3a-9e6f-bcd345b24721" -XDELETE
    {}
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=e173cb79-d3fc-4e3a-9e6f-bcd345b24721"
    {
      "error": "Forbidden"
    }
    bob@dylan:~$
```

Login, logout… what’s else?

Now, after getting a Session ID, you can request all protected API routes by using this Session ID, no need anymore to send User email and password every time.

### :wrench: Task setup.
```bash
```

### :heavy_check_mark: Solution
> [:point_right: api/v1/app.py](api/v1/app.py), [:point_right: api/v1/auth/basic_auth.py](api/v1/auth/basic_auth.py)
<!---->


<!---->
## [9. Expiration?](api/v1/auth/session_exp_auth.py)
### :page_with_curl: Task requirements.
Score: 0.0% (Checks completed: 0.0%)

Actually you have 2 authentication systems:

* Basic authentication
* Session authentication

Now you will add an expiration date to a Session ID.

Create a class `SessionExpAuth` that inherits from `SessionAuth` in the file `api/v1/auth/session_exp_auth.py`:

* Overload `def __init__(self):` method:
    * Assign an instance attribute `session_duration`:
        * To the environment variable `SESSION_DURATION` casts to an integer
        * If this environment variable doesn’t exist or can’t be parse to an integer, assign to 0
* Overload `def create_session(self, user_id=None):`
    * Create a Session ID by calling `super()` \- `super()` will call the `create_session()` method of `SessionAuth`
    * Return `None` if `super()` can’t create a Session ID
    * Use this Session ID as key of the dictionary `user_id_by_session_id` \- the value for this key must be a dictionary (called “session dictionary”):
        * The key `user_id` must be set to the variable `user_id`
        * The key `created_at` must be set to the current datetime - you must use `datetime.now()`
    * Return the Session ID created
* Overload `def user_id_for_session_id(self, session_id=None):`
    * Return `None` if `session_id` is `None`
    * Return `None` if `user_id_by_session_id` doesn’t contain any key equals to `session_id`
    * Return the `user_id` key from the session dictionary if `self.session_duration` is equal or under 0
    * Return `None` if session dictionary doesn’t contain a key `created_at`
    * Return `None` if the `created_at` \+ `session_duration` seconds are before the current datetime. [datetime - timedelta](/rltoken/mwc3EnlWLNJ2rvzvgZT8eA "datetime - timedelta")
    * Otherwise, return `user_id` from the session dictionary

Update `api/v1/app.py` to instantiate auth with `SessionExpAuth` if the environment variable `AUTH_TYPE` is equal to `session_exp_auth`.

In the first terminal:
```
    bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=session_exp_auth SESSION_NAME=_my_session_id SESSION_DURATION=60 python3 -m api.v1.app
     * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
    ....
```

In a second terminal:
```
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST -d "email=bobsession@hbtn.io" -d "password=fake pwd" -vvv
    Note: Unnecessary use of -X or --request, POST is already inferred.
    *   Trying 0.0.0.0...
    * TCP_NODELAY set
    * Connected to 0.0.0.0 (127.0.0.1) port 5000 (#0)
    > POST /api/v1/auth_session/login HTTP/1.1
    > Host: 0.0.0.0:5000
    > User-Agent: curl/7.54.0
    > Accept: */*
    > Content-Length: 42
    > Content-Type: application/x-www-form-urlencoded
    > 
    * upload completely sent off: 42 out of 42 bytes
    * HTTP 1.0, assume close after body
    < HTTP/1.0 200 OK
    < Content-Type: application/json
    < Set-Cookie: _my_session_id=eea5d963-8dd2-46f0-9e43-fd05029ae63f; Path=/
    < Access-Control-Allow-Origin: *
    < Content-Length: 210
    < Server: Werkzeug/0.12.1 Python/3.4.3
    < Date: Mon, 16 Oct 2017 04:57:08 GMT
    < 
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    * Closing connection 0
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=eea5d963-8dd2-46f0-9e43-fd05029ae63f"
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    bob@dylan:~$
    bob@dylan:~$ sleep 10
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=eea5d963-8dd2-46f0-9e43-fd05029ae63f"
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    bob@dylan:~$ 
    bob@dylan:~$ sleep 51 # 10 + 51 > 60
    bob@dylan:~$ 
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=eea5d963-8dd2-46f0-9e43-fd05029ae63f"
    {
      "error": "Forbidden"
    }
    bob@dylan:~$
```
### :wrench: Task setup.
```bash
```

### :heavy_check_mark: Solution
> [:point_right: api/v1/auth/session_exp_auth.py](api/v1/auth/session_exp_auth.py), [:point_right: api/v1/app.py](api/v1/app.py)
<!---->

<!---->
## [10. Sessions in database](api/v1/auth/session_db_auth.py)
### :page_with_curl: Task requirements.
Score: 0.0% (Checks completed: 0.0%)

Since the beginning, all Session IDs are stored in memory. It means, if your application stops, all Session IDs are lost.

For avoid that, you will create a new authentication system, based on Session ID stored in database (for us, it will be in a file, like `User`).

Create a new model `UserSession` in `models/user_session.py` that inherits from `Base`:

* Implement the `def __init__(self, *args: list, **kwargs: dict):` like in `User` but for these 2 attributes:
    * `user_id`: string
    * `session_id`: string

Create a new authentication class `SessionDBAuth` in `api/v1/auth/session_db_auth.py` that inherits from `SessionExpAuth`:

* Overload `def create_session(self, user_id=None):` that creates and stores new instance of `UserSession` and returns the Session ID
* Overload `def user_id_for_session_id(self, session_id=None):` that returns the User ID by requesting `UserSession` in the database based on `session_id`
* Overload `def destroy_session(self, request=None):` that destroys the `UserSession` based on the Session ID from the request cookie

Update `api/v1/app.py` to instantiate `auth` with `SessionDBAuth` if the environment variable `AUTH_TYPE` is equal to `session_db_auth`.

In the first terminal:
```
    bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=session_db_auth SESSION_NAME=_my_session_id SESSION_DURATION=60 python3 -m api.v1.app
     * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
    ....
```

In a second terminal:
```
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST -d "email=bobsession@hbtn.io" -d "password=fake pwd" -vvv
    Note: Unnecessary use of -X or --request, POST is already inferred.
    *   Trying 0.0.0.0...
    * TCP_NODELAY set
    * Connected to 0.0.0.0 (127.0.0.1) port 5000 (#0)
    > POST /api/v1/auth_session/login HTTP/1.1
    > Host: 0.0.0.0:5000
    > User-Agent: curl/7.54.0
    > Accept: */*
    > Content-Length: 42
    > Content-Type: application/x-www-form-urlencoded
    > 
    * upload completely sent off: 42 out of 42 bytes
    * HTTP 1.0, assume close after body
    < HTTP/1.0 200 OK
    < Content-Type: application/json
    < Set-Cookie: _my_session_id=bacadfad-3c3b-4830-b1b2-3d77dfb9ad13; Path=/
    < Access-Control-Allow-Origin: *
    < Content-Length: 210
    < Server: Werkzeug/0.12.1 Python/3.4.3
    < Date: Mon, 16 Oct 2017 04:57:08 GMT
    < 
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    * Closing connection 0
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=bacadfad-3c3b-4830-b1b2-3d77dfb9ad13"
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    bob@dylan:~$
    bob@dylan:~$ sleep 10
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=bacadfad-3c3b-4830-b1b2-3d77dfb9ad13"
    {
      "created_at": "2017-10-16 04:23:04", 
      "email": "bobsession@hbtn.io", 
      "first_name": null, 
      "id": "cf3ddee1-ff24-49e4-a40b-2540333fe992", 
      "last_name": null, 
      "updated_at": "2017-10-16 04:23:04"
    }
    bob@dylan:~$
    bob@dylan:~$ sleep 60
    bob@dylan:~$
    bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=bacadfad-3c3b-4830-b1b2-3d77dfb9ad13"
    {
      "error": "Forbidden"
    }
    bob@dylan:~$
```
### :wrench: Task setup.
```bash
```

### :heavy_check_mark: Solution
> [:point_right: [:point_right: api/v1/auth/session_db_auth.py](api/v1/auth/session_db_auth.py), [:point_right: api/v1/app.py](api/v1/app.py), [:point_right: models/user_session.py](models/user_session.py)
<!---->

### :heavy_check_mark: Solution
> [:point_right: [:point_right: api/v1/auth/basic_auth.py](api/v1/auth/basic_auth.py)
<!---->

# :man: Author and Credits.
This project was done by [SE. Moses Mwangi](https://github.com/MosesSoftEng). Feel free to get intouch with me;

:iphone: WhatsApp [+254115227963](https://wa.me/254115227963)

:email: Email [moses.soft.eng@gmail.com](mailto:moses.soft.eng@gmail.com)

:thumbsup: A lot of thanks to [ALX-Africa Software Engineering](https://www.alxafrica.com/) program for the project requirements.
