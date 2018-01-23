# README #

Please read these instructions for getting the project started and troubleshooting any problems that may arise.

### How do I get set up? ###

1. Run this command to get started ```npm install```
2. Run this command to start the server ```npm run start``` 
    * If this does not successfully run, try running this command below. 
    * ```npm install -g nodemon``` 
3. Once it successfully runs, you should be able to visit the site at [http://localhost:3000](http://localhost:3000) 
    * This script only runs the SASS and EJS compiler. If you need to compile JavaScript run this command next. 
4. For JavaScript run ```npm run watch``` 
    * If you have issues running this command try running this command below. 
    * ```npm install -g webpack``` 
    
### NPM Commands ###
1. ```npm run start```
    * This command will start the local server, it compiles your SCSS and EJS files.
2. ```npm run watch```
    * This command will run the webpack bundler, it compiles your JS files in the 'app/' folder and produces a 'bundle.js' and 'vendor.js' file.
3. ```npm run build```
    * This command will run webpack and build all the JS files for production. It minifies and mangles the source so that it produces the smallest file possible.
4. ```npm run compile``` (Not Implemented)
    * This command will compile EJS into HTML files.

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact