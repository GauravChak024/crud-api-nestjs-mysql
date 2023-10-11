import { Sequelize } from 'sequelize-typescript';

export const sequelize=new Sequelize({
    dialect: 'mssql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'crud_db',
    models: [ __dirname +'/../**/*.model.ts' ],
})

// export const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'your_mysql_username',
//   password: 'your_mysql_password',
//   database: 'nestjs_crud_db',
//   models: [__dirname + '/../**/*.model.ts'],
//   autoLoadModels: true,
// });
