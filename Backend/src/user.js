const mysql = require('mysql')
const Promise = require('bluebird')
Promise.promisifyAll(require('mysql/lib/Connection').prototype)

const dbinfo = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'userinfo',
}

const selectAllUser = async () => {
  const connection = mysql.createConnection(dbinfo)

  await connection.connectAsync()

  let sql = `SELECT * FROM userinfo`
  // let sql = `SELECT * FROM user ORDER BY ID DESC`;
  // let sql = `SELECT * FROM user WHERE ID=?`;
  const list = await connection.queryAsync(sql)

  await connection.endAsync()
  return list
}

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo)

  await connection.connectAsync()

  let sql = `INSERT INTO userinfo (profile,email, password) values (?, ?, ?)`
  connection.queryAsync(sql, [user.profile, user.email, user.password])
  console.log('Record Added!')

  await connection.endAsync()
}

// user = {
//   profile: 'self',
//   email: 'Shubham30898@gmail.com',
//   password: 'jhdcsdhbcj',
// }

// addUser(user)

module.exports = { selectAllUser, addUser }
