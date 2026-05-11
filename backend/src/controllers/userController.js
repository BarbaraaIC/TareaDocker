import { AppDataSource } from "../config/configDb.js";
import { User } from "../entities/user.entity.js";

const userRepository = AppDataSource.getRepository(User);

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Todos los campos son requeridos" });
        }

    
    const existingUser = await userRepository.findOne({ where: { email } });
        if (existingUser) {
        return res.status(400).json({ message: "El email ya está registrado" });
        }

        
    const newUser = userRepository.create({
        name,
        email,
        password, 
        });

        await userRepository.save(newUser);

        res.status(201).json({message: "Usuario creado exitosamente",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        },
        });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario", error: error.message });
    }
    };

