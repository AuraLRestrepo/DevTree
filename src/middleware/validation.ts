import type { Request, Response } from "express";
import { validationResult } from 'express-validator';

export const handlerInputErrors = (req: Request, res: Response, next: Function) => {
    // Manejar errores
    let errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next();
}