/**
 * 1. morgan for http logger, it logs info of sever for debug if u get error.
 * 2. nodemon for dev tool debug.
 * 3. express handlebars makes template engine for config structure.
 * 4. node sass for style node-sass.
 * 5. localhost3000 => url like that, its mean GET METHOD is used.
 * 6.defaul behavior form. In search chrome its always GET METHOD, if u want set others not GET METHOD u have to 
 * set action=POST first.
 * 7. app.use(express.urlencoded({extended: true})); for form data, app.use(express.json()); for javascript.
 * 8. MCV, install mongoose to connect data base by Model (Course).
 * 
 * 
 * Structure note
 * from index.js directory structure to views/resources => app.set('views', path.join(__dirname, './resources/views'));
 * app.use(express.static(path.join(__dirname, 'public'))); => its config localhost 3000 at public folder.
 * jquery not work with es6.
 * input[name="courseIds[] syntax of jquery to count checkbox array inside.
 */