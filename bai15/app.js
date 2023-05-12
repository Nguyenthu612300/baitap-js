const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Sử dụng middleware bodyParser để lấy dữ liệu từ body của request
app.use(bodyParser.urlencoded({ extended: false }))

// Route để trả về form
app.get('/', (req, res) => {
  res.send(`
    <form action="/create-user" method="POST">
      <input type="text" name="username">
      <button type="submit">Submit</button>
    </form>
  `)
})

// Route để tạo người dùng mới
app.post('/create-user', (req, res) => {
  const { username } = req.body // Lấy username từ body của request
  console.log(`Tạo người dùng mới: ${username}`)

  // Chuyển hướng đến route /users để hiển thị danh sách người dùng
  res.redirect('/users')
})

// Route để hiển thị danh sách người dùng
app.get('/users', (req, res) => {
  // Danh sách người dùng giả
  const users = ['User 1', 'User 2', 'User 3']

  // Tạo danh sách HTML từ mảng users
  const userList = users.map(user => `<li>${user}</li>`).join('')
  const html = `<ul>${userList}</ul>`

  res.send(html)
})

// Chạy server trên cổng 3000
app.listen(3000, () => console.log('Server started'))
