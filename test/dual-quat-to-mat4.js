var test = require('tape')

var mat4ToDualQuat = require('mat4-to-dual-quat')

var dualQuatToMat4 = require('../')

test('Convert a dual quaternion to a 4x4 matrix and then back to dual quat', function (t) {
  // Use a dual quaternion that came from an identity matrix
  var expectedOriginalDualQuat = [0, 0, 0, 1, 0, 0, 0, 0]

  var convertedMatrix = dualQuatToMat4(
    expectedOriginalDualQuat
  )
  var convertedDualQuat = mat4ToDualQuat(convertedMatrix)

  t.deepEqual(convertedDualQuat, expectedOriginalDualQuat)

  t.end()
})

// Just testing something that isn't an identity matrix
test('Convert a messier dual quaternion into mat4 and back', function (t) {
  // Use a messier dual quat that I know is a valid rigid transformation (grabbed it from Blender)
  var expectedOriginalDualQuat = [-0.27447058422968623, -0.016130971701251967, 0.05674661681750636, 0.9597840903036474, -0.0017457254491423332, -0.12487046113525742, -0.011375334994009861, -0.0019253500880238306]

  var convertedMatrix = dualQuatToMat4(
    expectedOriginalDualQuat
  )
  var convertedDualQuat = mat4ToDualQuat(convertedMatrix)

  // Get rid of small rounding errors in our test by truncating to 5 decimal places
  expectedOriginalDualQuat = expectedOriginalDualQuat.map(function (element) {
    return element.toFixed(5)
  })
  convertedDualQuat = convertedDualQuat.map(function (element) {
    return element.toFixed(5)
  })

  t.deepEqual(convertedDualQuat, expectedOriginalDualQuat)

  t.end()
})
