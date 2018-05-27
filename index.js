const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

express()
  .use(express.static(path.join(__dirname, 'build/static')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('build/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
