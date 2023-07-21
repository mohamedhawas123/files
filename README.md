
to install node modules
npm i

to migrate database schema to target database
you will have to go to prisma/schema.prisma and change my config(like mysql username and mysql password and schema name) with your config


npx prisma db push
npx prisma generate

there are 3 endpoints

//POST http://localhost:3001/files/upload/ (send the file with it)
//GET http://localhost:3001/files/
// GET http://localhost:3001/files/1




