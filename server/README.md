## App

Server for event management application based on nestjs + postgresql

## Application launch algorithm.

Clone the repository.
 Create a postgresql database.
  Create at root derictory an .env file like this: 
     DB_HOST="localhost"
     DB_PORT=5432
     DB_USER="user"
     DB_PASSWORD="password"
     DB_NAME="name"
     

     Than install the packages and after running the "npm run start:dev" command, the server will be ready to accept requests on localhost port 3001.☻

## Scheme

@PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  title: string;

  @Column()
  date: Date;

  @Column("double precision")
  latitude: number;

  @Column("double precision")
  longitude: number;

  @Column({
    type: "enum",
    enum: Category,
    default: Category.CATEGORY1,
  })
  category: Category;

  @Column()
  description: string;


## EndPoints

Get BaseURL + /event = Array of all events;
Get BaseURL + /event/id = Event + Array of recomendations;
Post BaseURL + /event = Ecent;
Put BaseURL + /event = Obj( {
                               "generatedMaps": [],
                               "raw": [],
                               "affected": 1
                            })
Delete BaseURL + /event = status;

## Description
     

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
