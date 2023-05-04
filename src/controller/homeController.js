import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
    //Logic
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    //Truyen du lieu vao view
    //Thay doi tu kieu object ve string {key: value}
    return res.render("index.ejs", { dataUser: rows });       
}

let getDetailPage = async (req, res) => {
    let id = req.params.userID;
    let [user] = await pool.execute(`select * from users where id = ?`, [id])

    //console.log('check req params: ', user)
    return res.send(JSON.stringify(user))
}

let createNewUser = async (req, res) => {
    console.log('check req: ', req.body)
    let {firstName, lastName, email, address} = req.body;

    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.redirect('/')
}

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser
}