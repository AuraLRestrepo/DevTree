import { Router } from "express";
import { body } from "express-validator";
import { createAccount, login, getUser, updateProfile } from "./handlers";
import { handlerInputErrors } from "./middleware/validation";
import { authenticateToken } from "./middleware/auth";

const router = Router();

/** Autenticación y registro  */
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("El handle no puede ir vacio"),
  body("name").notEmpty().withMessage("El nombre no puede ir vacio"),
  body("email").isEmail().withMessage("E-mail no válido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("El password es muy corto, minimo 8 caracteres"),
  handlerInputErrors,
  createAccount,
);

router.post(
  "/auth/login",
  body("email").isEmail().withMessage("E-mail no válido"),
  body("password").notEmpty().withMessage("El password es obligatorio"),
  handlerInputErrors,
  login,
);

router.get("/user", authenticateToken, getUser);
router.patch(
  "/user",
  body("handle").notEmpty().withMessage("El handle no puede ir vacio"),  
  handlerInputErrors,
  authenticateToken,
  updateProfile,
);

// PUT crea o reemplaza un recurso completo
// PATCH actualiza parcialmente un recurso existente

export default router;
