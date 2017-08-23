const _ = require('lodash')
const propsLabel = require('./text/labels')
const formatter = require('./text/formatter')
const { printTable } = require('./text/print')

const supportedProps = [
  'bundleSize', 'totalCount', 'totalDepth', 'messageSize', 'timecost'
]

function compareReports (reports) {
  if (Array.isArray(reports)) {
    const summary = []
    reports.forEach(report => {
      const chosenSummary = _.pick(report.summary, supportedProps)
      const readable = {}
      for (const prop in chosenSummary) {
        const { label, type } = propsLabel[prop]
        readable[label] = formatter(type, chosenSummary[prop])
      }
      summary.push(readable)
    })
    printTable(summary)

    // const table = [supportedProps.map(n => propsLabel[n].label)]
    //   .concat(reports.map(report => {
    //     const chosenSummary = _.pick(report.summary, supportedProps)
    //     const readable = []
    //     for (const prop in chosenSummary) {
    //       const { label, type } = propsLabel[prop]
    //       readable.push(formatter(type, chosenSummary[prop]))
    //     }
    //     return readable
    //   }))
    // const result = _.unzip(table)
    // printTable(result)
  }
}

module.exports = compareReports