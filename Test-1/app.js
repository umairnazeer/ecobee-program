const testResults = require('../files/test_results.json');

//console.log(testResults)


/*1) For each test suite:
x Test suite name
x Print out the total number of tests that passed and their details
x Print out the total number of tests that failed and their details
x Print out the total number of test that are blocked
x Print out the total number of test that took more than 10 seconds to execute*/

//console.log('Test Suite Name: ', testResults.test_suies;

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