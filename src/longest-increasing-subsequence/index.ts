export function getLongestIncreasingSubsequence(arr: number[]): number[]{
  const count = computeLongestIncreasingCount(arr)
  const {index, length} = getFirstLongestIncreasingSubsequenceIndexAndCount(count)

  return arr.slice(index,index+length)
}

function computeLongestIncreasingCount(arr: number[]): number[]{
  const count = new Array(arr.length).fill(1)

  for(let i = 0; i<arr.length;i++){
    for(let j= i+1; j<arr.length;j++){
      if(arr[i]<arr[j] && arr[j]>arr[j-1]){
        count[i]+=1
      }else{
        break
      }
    }
  }

  return count;
}

function getFirstLongestIncreasingSubsequenceIndexAndCount(count: number[]): IndexAndLength{
  const length = Math.max(...count)
  const index = count.findIndex(i=>i ===length)

  return {length, index}
}

interface IndexAndLength{
  index: number;
  length: number;
}