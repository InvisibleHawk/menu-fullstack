const express = require('express')
const multer = require('multer')
const router = express.Router()
const Database = require('better-sqlite3')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage: storage })

const db = new Database('./db/MenuDB.sqlite', {
  verbose: console.log,
  fileMustExist: true,
})

router.get('/', (req, res) => {
  const allMenu = db
    .prepare(
      `SELECT * FROM Dish JOIN
       Category on Dish.id = Category.dish_id;`,
    )
    .all()
  res.status(200).json(allMenu)
})

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params
    const findedDish = db
      .prepare(
        `SELECT Dish.id, Dish.title, Dish.img, Dish.description,
       Category.spicy, Category.country, Category.vegetable
       FROM Dish JOIN Category ON Category.dish_id = Dish.id
       AND Dish.id = ?`,
      )
      .get(id)
    res.status(200).send(findedDish)
  } catch (error) {
    res.status(404).send(error)
  }
})

router.post('/', upload.single('img'), (req, res) => {
  try {
    let img = null
    if (req.file) {
      img = `http://localhost:5001/${req.file.filename}`
    } else {
      img = `http://localhost:5001/default.png`
    }
    const { title, price, description, country, vegetable, spicy } = req.body
    const addDish = db
      .prepare(
        `INSERT INTO Dish (title, price, img, description) VALUES (?, ?, ?, ?);`,
      )
      .run(title, price, img, description)

    const foreignKey = addDish.lastInsertRowid

    db.prepare(
      `INSERT INTO Category (dish_id, country, vegetable, spicy) VALUES (?, ?, ?, ?)`,
    ).run(foreignKey, country, vegetable, spicy)

    res.status(200).send(addDish)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
