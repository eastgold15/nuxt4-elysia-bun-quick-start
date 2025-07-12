import Elysia from "elysia";

export default () => new Elysia() 
  .get('/hello', () => ({ message: 'Hello world!' })) 