module.exports = convertDualQuatToMatrix

// Convert a dual quaternion into a 4x4 matrix
//  recommended reading: https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf
function convertDualQuatToMatrix (dq) {
  // dq[0] dq[1] dq[2] dq[3] are our rotation quaternion elements
  // dq[4] dq[5] dq[6] dq[7] are our translation quaternion elements (the dual quaternion's imaginary component)
  return [
    1.0 - (2.0 * dq[1] * dq[1]) - (2.0 * dq[2] * dq[2]),
    (2.0 * dq[0] * dq[1]) + (2.0 * dq[3] * dq[2]),
    (2.0 * dq[0] * dq[2]) - (2.0 * dq[3] * dq[1]),
    0,
    (2.0 * dq[0] * dq[1]) - (2.0 * dq[3] * dq[2]),
    1.0 - (2.0 * dq[0] * dq[0]) - (2.0 * dq[2] * dq[2]),
    (2.0 * dq[1] * dq[2]) + (2.0 * dq[3] * dq[0]),
    0,
    (2.0 * dq[0] * dq[2]) + (2.0 * dq[3] * dq[1]),
    (2.0 * dq[1] * dq[2]) - (2.0 * dq[3] * dq[0]),
    1.0 - (2.0 * dq[0] * dq[0]) - (2.0 * dq[1] * dq[1]),
    0,
    2.0 * (-dq[7] * dq[0] + dq[4] * dq[3] - dq[5] * dq[2] + dq[6] * dq[1]),
    2.0 * (-dq[7] * dq[1] + dq[4] * dq[2] + dq[5] * dq[3] - dq[6] * dq[0]),
    2.0 * (-dq[7] * dq[2] - dq[4] * dq[1] + dq[5] * dq[0] + dq[6] * dq[3]),
    1
  ]
}
