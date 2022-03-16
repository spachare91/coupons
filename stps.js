// install required files 

// install sequelize-cli globally.. and initialize it .....modify config file for development 

// create db using cli and check in psql 

// create model using cli..npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

// make some changes in data model and craete connection with db in sever file

// sequelize.sync will create table for models if not created... change table name if you want

// imp : if you make cahnges make sure to sync changes....

// install express to have multiple endpoints

// now connect sever with database so that we can manage data from sever....

// set sequelize.auth to check db connection..

// set bodyparser to get data and bring models from models folder

// add uuid in model....

// SINCE EVERY TIME  WE MAKE CAHNGES IN TABLE ITS GETS DROPED 

// SO WE USED MIGRATIONS TABLE ...MKAE changs in migration model and drop previous table..and make new database

// remove sync ..after removing this we need other means to generate tables...so run migrations...

// this will create tables

// use toJSON to oveeride and hide some data ...

// create model using cli..npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
// to generate posts...

// to add assocaition ...bring model in function ,a dd foregin key in one of the table





// if you want to add validation apply them in model....

// use seeder...allows dummy daata in out tables...remove default tables name...add users