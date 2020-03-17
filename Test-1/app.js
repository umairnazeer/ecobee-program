const testResults = require('../files/test_results.json');

const getTestResultSummary = () => {
  testResults.test_suites.forEach(testSuite => {
    console.log(`Suite Name: ${testSuite.suite_name}`)
    let totalPassed = 0, totalFailed = 0, totalBlocked = 0, totalLong = 0
    let passedDetails = []
    let failedDetails = []
    testSuite.results.forEach(testResult => {
      if (testResult.status === 'pass') {
        totalPassed++
        passedDetails.push(testResult)
      } else if (testResult.status === 'fail') {
        totalFailed++
        failedDetails.push(testResult)
      } else if  (testResult.status === 'blocked') {
        totalBlocked++
      }

      if (Number.parseFloat(testResult.time) > 10) {
        totalLong++
      }
    })
  console.log(`\tTotal Tests Passed: ${totalPassed}`)
  passedDetails.sort(sortTestDetails).forEach(testDetails => {
    console.log(`\t\t${JSON.stringify(testDetails)}`)
  })
  console.log(`\tTotal Tests Failed: ${totalFailed}`)
  failedDetails.sort(sortTestDetails).forEach(testDetails => {
    console.log(`\t\t${JSON.stringify(testDetails)}`)
  })
  console.log(`\tTotal Tests Blocked: ${totalBlocked}`)
  console.log(`\tTotal Tests Longer than 10 seconds: ${totalLong}`)
  })
}

const sortTestDetails = (testDetailsA, testDetailsB) => testDetailsA.test_name.localeCompare(testDetailsB.test_name)

getTestResultSummary()