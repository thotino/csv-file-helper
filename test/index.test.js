'use strict'

const parsingModule = require('../index').parseFile
const path = require('path')

const fileAbsolutepath = path.resolve(__dirname, 'data/TechCrunchcontinentalUSA.csv')

describe('[unit] test support domain', () => {
  test('Everything fine here', async () => {
    await expect(parsingModule.parseFile(null)).rejects.toThrow('ERR_NO_FILE_PATH_PROVIDED')
  })
  test.only('Everything fine here', async () => {
    const data = await parsingModule.parseFile(fileAbsolutepath, ',')
    expect(data).not.toBeNull()
    expect(data).toBeInstanceOf(Array)
    expect(data).toHaveLength(1460)
  })
})
