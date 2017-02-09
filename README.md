dual-quat-to-mat4 [![npm version](https://badge.fury.io/js/dual-quat-to-mat4.svg)](http://badge.fury.io/js/dual-quat-to-mat4) [![Build Status](https://travis-ci.org/chinedufn/dual-quat-to-mat4.svg?branch=master)](https://travis-ci.org/chinedufn/dual-quat-to-mat4)
===============

> Convert a 4x4 matrix into a dual quaternion. Useful for skeletal animation

## Background / Initial Motivation

`dual-quat-to-mat4`'s initial motivation was to be used to convert a bone's dual quaternion into a matrix in order to use it to position a model relative to your bone.

For example, let's say you have an armature that you blended between two keyframes using [skeletal-animation-system](https://github.com/chinedufn/skeletal-animation-system).
You now want to render a baseball in your armature's hand

1. Start with some dual quaternion bone data from your character's armature
2. Grab the dual quaternion for the right hand bone
3. Convert the right hand bone's dual quaternion into a 4x4 matrix using `dual-quat-to-mat4`
4. Use this 4x4 matrix to transform a baseball model view matrix.
5. Your baseball will now be rendered with it's origin at your right hand bone
  - (Or at some offset from that bone if you factor that into your model view matrix)

## To Install

```sh
$ npm install --save dual-quat-to-mat4
```

## Usage

```js
var dualQuatToMat4 = require('dual-quat-to-mat4')

var dualQuat = dualQuatToMat4([0, 0, 0, 1, 0, 0, 0, 0])

console.log(dualQuat)
// [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
```

## API

### `dualQuatToMat4(matrix)` -> `Array[16]`

#### dual quaternion

*Requred*

Type: `Array[8]`

The dual quaternion that you want to convert into a 4x4 matrix

## See Also

- [skeletal-animation-system](https://github.com/chinedufn/skeletal-animation-system)
- [mat4-to-dual-quat](https://github.com/chinedufn/mat4-to-dual-quat)

## References

- [Dual Quaternion Linear Blending](https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf)

## License

MIT
