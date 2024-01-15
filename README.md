
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Folder Structure
src/
|-- config/                 # Configuration files
|-- user/                   # User module
    |-- dto/                # Data Transfer Objects
        |-- create-user.dto.ts
    |-- entities/           # Database entities
        |-- user.entity.ts
    |-- services/           # Business logic
        |-- user.service.ts
    |-- controllers/        # Route controllers
        |-- user.controller.ts
|-- auth/                   # Authentication module
|-- common/                 # Common utilities, middleware, etc.
|-- app.module.ts           # Main application module
|-- main.ts                 # Application entry point
