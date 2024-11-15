import express from 'express'
import puppeteer from 'puppeteer'

const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res, next) => {
  try {
    const browser = await puppeteer.launch({
      executablePath:
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      headless: false,
      slowMo: 10,
    })
    const page = await browser.newPage()
    await page.goto('https://lilt.com/app/home', { waitUntil: 'networkidle2' })
    const username = 'essammuhammad123@gmail.com'
    const password = 'Eh20162020@#'
    await page.type('#Email', username)

    await page.type('#Password', password)

    await page.click('[data-testid="signin-button"]')

    const gmailPage = await browser.newPage()
    

    res.send('done')
  } catch (err) {
    res.send('done with error')
  }
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
