import pool from "../configs/connectDB"

let getAllUsers = async (req, res) => {
    //http
    //404 501 
    //json => object
    const [rows, fields] = await pool.execute(`SELECT * FROM users`);

    return res.status(200).json({
        message: "Bao",
        data: rows
    })
}

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;

    if(!firstName || !lastName || !email || !address){
        return res.status(200).json({
            message: 'missing'
        })
    }

    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;

    if(!firstName || !lastName || !email || !address || !id){
        return res.status(200).json({
            message: 'missing'
        })
    }

    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
        [firstName, lastName, email, address, id]);

    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async (req, res) => {

    let userID = req.params.id;

    if(!userID){
        return res.status(200).json({
            message: 'missing'
        })
    }

    await pool.execute('delete from users where id = ?', [userID]);

    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser, 
    deleteUser
}