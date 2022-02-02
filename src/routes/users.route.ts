//Métodos a serem implementados

// get /users
// get /users/:uuid
// post /users
// post /users/:uuid 
// delete /users/:uuid 

import { Router, Response, Request, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users= [{ userName: 'Pedro' }];
    res.status(StatusCodes.OK).send({ users });
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});


export default usersRoute;