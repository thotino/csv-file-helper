'use strict'

const parsingModule = require('../index').parseFile
const path = require('path')

const fileAbsolutepath = path.resolve(__dirname, 'data/TechCrunchcontinentalUSA.csv')

describe('[unit] test support domain', () => {
  test('Everything fine here', async () => {
    const data = await parsingModule.parseFile(fileAbsolutepath, ',')
    console.log(data)
    expect(data).not.toBeNull()
    expect(data).toBeInstanceOf(Array)
  })
})
