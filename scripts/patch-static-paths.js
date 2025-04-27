const fs = require('fs')
const path = require('path')

const OUT_DIR = path.join(__dirname, '../out')

// Replace all `/_next/static/` references with `/next-static/`
fs.readdirSync(OUT_DIR).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(OUT_DIR, file)
    let content = fs.readFileSync(filePath, 'utf8')
    content = content.replace(/_next\/static/g, 'next-static')
    fs.writeFileSync(filePath, content)
  }
})