function findMatching(driversArray, string) {
  return driversArray.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(driversArray, string) {
  return driversArray.filter(driver => driver.substring(0, string.length) === string)
}

function matchName(driversArray, string) {
  return driversArray.filter(driverObj => driverObj.name === string)
}