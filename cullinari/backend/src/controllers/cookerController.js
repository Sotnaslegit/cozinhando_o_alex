import { db } from "../config/db"

export const createCooker = async (req, res) => {
    try {
        const { body } = req;
        const [results] = await pool.query(
            "INSERT INTO cooker (username, email, password_user) VALUES (?, ?, ?)",
            [body.username, body.email, body.password_user]
        );

        const [createdCooker] = await pool.query(
            "SELECT * FROM cooker WHERE id=?",
            results.insertId
        );

        return res.status(201).json(createCooker);
    } catch (error) {
        console.log(error)
    }
}

export const listCooker = async (req, res) => {
    try {
        const [results] = await db.query(
            'SELECT * FROM cooker'
        )
        res.status(200).send(results)
    } catch (error) {
        console.log(error)
    }
}

export const listCookerById = async (req, res) => {
    try {
        const { id } = req.params
        const [results] = await db.query(
            'SELECT * FROM cooker WHERE id_cooker = ?', id
        )
        res.status(200).send(results)
    } catch (error) {
        console.log(error)
    }
}

export const updateCooker = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const [results] = await db.query(
            "UPDATE cooker SET `username` = ?, `email` = ?, `password_user` = ? WHERE id = ?; ",
            [body.username, body.email, body.password_user, id]
        );
        res.status(200).send("Updated cooker!", results);
    } catch (error) {
        console.log(error)
    }
}

export const deleteCooker = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await db.query(
            "DELETE FROM cooker WHERE id=?",
            id
        );
        res.status(200).send("Deleted cooker!", results);
    } catch (error) {
        console.log(error)
    }
}