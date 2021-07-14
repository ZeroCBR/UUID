import { getLongestIncreasingSubsequence } from ".."
import * as assert from 'assert'
import { str1,str10,str11,str2, str3, str4, str5, str6, str7, str8, str9 } from "./test-cases"

describe('#getLongestIncreasingSubsequence', () => {
  it('Test case 1', () => {
    const result = getLongestIncreasingSubsequence(str1)
    assert.deepStrictEqual(result, [1,5,9])
  })

  it('Test case 2', () => {
    const result = getLongestIncreasingSubsequence(str2)
    assert.deepStrictEqual(result, [1710,2461,9288,10195,10431,12485])
  })

  it('Test case 3', () => {
    const result = getLongestIncreasingSubsequence(str3)
    assert.deepStrictEqual(result, [10298,10897,12291,15037,18446,23435,25333,27266])
  })

  it('Test case 4', () => {
    const result = getLongestIncreasingSubsequence(str4)
    assert.deepStrictEqual(result, [3862,16353,22813,28735])
  })

  it('Test case 5', () => {
    const result = getLongestIncreasingSubsequence(str5)
    assert.deepStrictEqual(result, [11084,11970,24975,30922])
  })

  it('Test case 6', () => {
    const result = getLongestIncreasingSubsequence(str6)
    assert.deepStrictEqual(result, [3808,3908,10386,19306])
  })

  it('Test case 7', () => {
    const result = getLongestIncreasingSubsequence(str7)
    assert.deepStrictEqual(result, [125,1841,5882,18464,28317,31497])
  })

  it('Test case 8', () => {
    const result = getLongestIncreasingSubsequence(str8)
    assert.deepStrictEqual(result, [9139,17687,25106,26202,27592,30937])
  })

  it('Test case 9', () => {
    const result = getLongestIncreasingSubsequence(str9)
    assert.deepStrictEqual(result, [918,1089,5133,7725,18035,24605,26716,27095])
  })

  it('Test case 10', () => {
    const result = getLongestIncreasingSubsequence(str10)
    assert.deepStrictEqual(result, [2,4,6])
  })

  it('Test case 11', () => {
    const result = getLongestIncreasingSubsequence(str11)
    assert.deepStrictEqual(result, [1,5,9])
  })
})
