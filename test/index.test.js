'use strict'

const parsingModule = require('../index')
const path = require('path')

const fileAbsolutepath = path.resolve(__dirname, 'data/TechCrunchcontinentalUSA.csv')

const data = await parsingModule.parseFile.parseFile(fileAbsolutepath)
console.log({ data })
