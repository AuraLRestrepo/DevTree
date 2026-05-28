import type { Request, Response } from "express";
// import  { Request, Response } from "express";
import slug from "slug";
import User from "../models/User";
import { hashPassword, comparePassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";

export const createAccount = async (req: Request, res: Response) => {
  // Evitar usuarios duplicados
  const { email, password, handle } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("El usuario ya está registrado");
    return res.status(400).json({ error: error.message });
  }

  const handleSlug = slug(req.body.handle, "");
  const handleExist = await User.findOne({ handle });
  if (handleExist) {
    const error = new Error("Nombre de usuario ya registrado");
    return res.status(400).json({ error: error.message });
  }

  // instanciando el modelo
  const hashedPassword = await hashPassword(password);
  const user = new User({
    ...req.body,
    handle: handleSlug,
    password: hashedPassword,
  });

  console.log(slug(handle, ""));

  await user.save();
  // Con mongo
  // await User.create(...req.body);
  // res.send('Registro creado correctamente');
  res.status(201).json("Registro creado correctamente");
};

export const login = async (req: Request, res: Response) => {
  // console.log('desde login...')
  const { email, password } = req.body;
  // Revisar si el usuario existe
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ error: error.message });
  }

  // comprobar el password
  const match = await comparePassword(password, user.password);
  if (!match) {
    const error = new Error("La contraseña es incorrecta");
    return res.status(401).json({ error: error.message });
  }

  const token = generateJWT({ id: user._id });
  res.send(token);
};

export const getUser = async (req: Request, res: Response) => {
  //   Cada vez que se tenga un codigo que se repira es bueno pasarlo a un middleware, en este caso el codigo de validacion del token se puede pasar a un middleware de autenticacion, asi se puede reutilizar en otras rutas que requieran autenticacion y se mantiene el codigo mas limpio y organizado.
  res.json(req.user);
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;

    const handle= slug(req.body.handle, "");
    const handleExist = await User.findOne({ handle });
    if (handleExist && handleExist.email !== req.user.email) {
      const error = new Error("Nombre de usuario ya registrado");
      return res.status(400).json({ error: error.message });
    }

    // Actualizar el perfil del usuario
    req.user.description = description || req.user.description;
    req.user.handle = handle || req.user.handle;
    await req.user.save();
    res.send("Perfil actualizado correctamente");

  } catch (err) {
    const error = new Error("Error al actualizar el perfil");
    res.status(500).json({ error: error.message });
  }
};
