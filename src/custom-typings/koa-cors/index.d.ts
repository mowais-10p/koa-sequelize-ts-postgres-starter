declare module 'koa-cors' {
    import { Context, Request, Response, Middleware } from 'koa';
  
    function cors(options?: any): Middleware;
    namespace cors { }
    export = cors;
  
  }
  