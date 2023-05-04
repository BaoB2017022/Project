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

let deleteUser = async (req, res) => {
    let userID = req.body.userID;
    await pool.execute('delete from users where id = ?', [userID]);

    return res.redirect('/')
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`Select * from users where id = ?`, [id]);

    return res.render('update.ejs', { dataUser: user[0] }); 
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;

    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
        [firstName, lastName, email, address, id]);

    console.log('check request: ', req.body)
    return res.redirect('/')
}

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser, 
    getEditPage,
    postUpdateUser
}