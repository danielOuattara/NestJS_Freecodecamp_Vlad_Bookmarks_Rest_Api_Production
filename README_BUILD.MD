# NestJs Course for Beginners - Create a REST API

Feb 22, 2022

NestJs production like project, building a CRUD REST API with
end-to-end tests using modern web development techniques.

NestJs is a rapidly growing node js framework that helps build
scalable and maintainable backend applications.

We build a bookmarks API from scratch using `nestJs`, `docker`,
`postgres`, `passport js`, `prisma`, `pactum` and `dotenv`.

💻 Code: <https://github.com/vladwulf/nestjs-ap>...

✏️ Course from Vladimir Agaev. Check out his YouTube channel:    / @codewithvlad  

⭐️ Contents ⭐

- [x] **(0:00:00) introduction**

- [x] **(0:01:15) What is NestJs**

- [x] **(0:02:35) Why using NestJs**

- [x] **(0:03:35) What we are building**

- [x] **(0:03:55) NestJs project setup**

- [x] **(0:05:55) Modules**
  
  `AuthModule`, `UserModule`, `BookMark`

- [x] **(0:15:30) Auth controller and service**

- [x] **(0:19:50) Dependency injection**

- [x] **(0:20:30) Auth controller**

- [x] **(0:26:50) Setting up postgres in docker**
  
  read and update if necessary `/src/docker-compose.yaml`

  run `docker compose up dev-db -d`
  
- [x] **(0:29:10) Setting up prisma**
  
  `npm install prisma typescript ts-node @types/node --save-dev`

  `npx prisma init`

- [x] **(0:32:10) User & bookmark models**
  
  complete the model for `User` and `Bookmark` in `project-root/prisma`
  
- [x] **(0:35:50) Running prisma migrations**
  
  `npx prisma migrate dev --name init`

- [x] **(0:40:10) Prisma module & Service**
  
  create database module: `nest g module database`  
  
  create database service: `nest g service database --no-spec`

- [x] **(0:52:10) Using auth dtos**

- [x] **(0:57:45) NestJs pipes**

- [x] **(0:59:10) NestJs global pipe**

- [x] **(1:02:50) Hashing user password with argon**

- [x] **(1:03:20) Sign up logic**

- [ ] **(1:13:13) Sign in logic**

- [ ] **(1:16:50) Automate postgres restart & prisma migrations**

- [ ] **(1:27:40) NestJs config module**

- [ ] **(1:34:40) Using passport js & jwt module with nestJs**

- [ ] **(1:55:10) Get current user with access token**

- [ ] **(1:57:00) NestJs Guards**

- [ ] **(2:12:10) NestJs custom param decorator**

- [ ] **(2:27:10) e2e tests with pactumJs**

- [ ] **(2:35:10) Setting up test database**

- [ ] **(2:36:10) Automate test database restart & migrations**

- [ ] **(2:37:10) Using dotenv cli with prisma**

- [ ] **(2:44:30) Prisma database teardown logic**

- [ ] **(2:53:10) Auth e2e tests**

- [ ] **(3:02:01) User e2e tests**

- [ ] **(3:13:20) Bookmarks e2e test**
