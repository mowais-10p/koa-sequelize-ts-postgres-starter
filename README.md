## `Koa, Sequelize and Postgres Starter`

### Prerequisites:

- NodeJS (=8.5.0)
- NPM (=5.3.0)
- Docker
- Postgres

**Note** Make sure the docker is running without sudo. To run docker without sudo, Follow this link: (docker-without-sudo)[https://github.com/sindresorhus/guides/blob/master/docker-without-sudo.md]

### Configuration

- Please set `env` variable when working with docker to `env/dev`
- Sequelize migration and configuration can be found at 'database/config.json'
- For new tables addition on Sequelize context, add table file in models and set their path to models/index.ts. Please check role.ts for as an example

### Installing

- Install all NPM Packages
```
npm install
```

- To create database
```
npm run sqlz:createdb
```

- To migrate
```
npm run sqlz:migrate
```
### Scripts

- `npm start` - simply starts the server
- `npm test` - execute all unit tests
- `npm run lint` - lints all the files in `src/` folder
- `npm run lint:fix` - fixes all the possible linting errors
- `npm run watch` - starts the server with hot-reloading
- `npm run sqlz:createdb` - create database if not existing for the config found at database/config.json
- `npm run sqlz:migrate` - run migration from script found at database/migration
- `npm run sqlz:new` - create new migration file
- `npm run sqlz:undo` - undo migration by name

**Suggestion:** To turn on debug messages, set `DEBUG` environment variable to `kickstarter:*`

### Docker

`Dockerfile` for the project has been packaged. Running instructions are standard and can be found below:

#### Build
```bash
λ docker build -t
```

```bash
λ docker-compose up -d --build
```

#### Run
```bash
# you can set the DEBUG environment variable through -e DEBUG={value} 
λ docker run -dp 4000:4000 koa-sequelize-ts-postgres-starter
```
or simply
```bash
λ docker-compose up
```

```bash
λ npm start
```
