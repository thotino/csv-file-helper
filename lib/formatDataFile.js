/**
 * project JSDoc description
 * @module {Object} module name
 * @version 1.0.0
 * @author Thotino GOBIN-GANSOU
 * @requires fast-csv/parse
 * @requires fs-extra
 */

'use strict'

//= ===============================================================================
// dependencies
//= ===============================================================================
const parser = require('@fast-csv/parse')
const fs = require('fs-extra')

//= ===============================================================================
// config
//= ===============================================================================
/** import here configurations */

//= ===============================================================================
// aliases
//= ===============================================================================
/** declare here local variables aliasing some of often used imports / conf options */

//= ===============================================================================
// module
//= ===============================================================================
/**
 * @function parseFile
 * @description Read a file as a stream, parse and returns an array of objects
 * @param {String} fileAbsolutePath
 * @param {String} columnsSeparator
 * @returns {*} - a promise of array of objects
 */
const parseFile = async (fileAbsolutePath, columnsSeparator = ';') => {
  try {
    const allRows = []
    const fileStream = fs.createReadStream(fileAbsolutePath)
    parser.parseStream(fileStream, { headers: true, delimiter: columnsSeparator })
      .on('error', (error) => { throw error })
      .on('data', (row) => {
        fileStream.pause()
        allRows.push(row)
        fileStream.resume()
      })
      .on('end', () => {
        return allRows
      })
  } catch (error) {

  }
}
module.exports = { parseFile }
