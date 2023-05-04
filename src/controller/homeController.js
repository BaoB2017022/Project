import connection from "../configs/connectDB";

let getHomepage = (req, res) => {
    //Logic
    //Tao bien de gan cho data
    let data = [];
    //Thuc hien ket noi den database
    connection.query(
        'SELECT * FROM `users` ',
        function(err, results, fields) {
            console.log('>>>check mysql')
            console.log(results);
            //Gan du lieu vao bien data
            results.map((row) => { 
                data.push({
                    ID: row.ID,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    address: row.address
                })
            });

        //Truyen du lieu vao view
        //Thay doi tu kieu object ve string
        return res.render("index.ejs", { dataUser: JSON.stringify(data) });       

    })

    console.log('>>> check data: ', typeof(data), JSON.stringify(data))
    
}

module.exports = {
    getHomepage
}