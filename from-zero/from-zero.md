# Some notes here



The project is a practice project started from an empty project.

a create-react-app project.



**Env**

* start with an empty folder

* open with IDE

* init package.json with:

  ```shell
   npm init --
  ```

* install webpack

  ```bash
  npm install --save-dev webpack@4.17.2
  ```

* install

  * run webpack from command line: webpack-cli@3.1.2
  * webpack-dev-server

  ```bash
  npm install --save-dev webpack-cli@3.1.2 webpack-dev-server@3.1.7
  ```

  

* install babel

  ```bash
  npm install --save-dev @babel/core@7.0.0
  ```

  ```bash
  npm install --save-dev @babel/node@7.0.0
  ```

  ```bash
  npm install --save-dev @babel/preset-env@7.0.0
  ```

  ```bash
  npm install --save-dev @babel/preset-react@7.0.0
  ```

  ```bash
  npm install --save-dev @babel/register@7.0.0
  ```

* finally we got:

  ```json
  {
    "name": "from-zero",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "@babel/core": "^7.0.0",
      "@babel/node": "^7.0.0",
      "@babel/preset-env": "^7.0.0",
      "@babel/preset-react": "^7.0.0",
      "@babel/register": "^7.0.0",
      "webpack": "^4.17.2",
      "webpack-cli": "^3.1.2",
      "webpack-dev-server": "^3.1.7"
    }
  }
  ```

  

* create .babelrc file

  ```json
  {
    "presets": [
      ["@babel/preset-env",{
        "targets":{
          "node":"current"
        }
      }],
      "@babel/preset-react"
    ]
  }
  ```

  "node":"current", what kind of target is transpiled.

  jsx to js using preset-react

* write webpack.config.js

  

  



