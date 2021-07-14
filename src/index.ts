import{getLongestIncreasingSubsequence} from './longest-increasing-subsequence'
import * as readline from 'readline'

function createNumberArray(input: string): number[]{
  return input.split(' ').map(i=>+i)
}

function main(): void{
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Please provide numbers separated by single whitespace\n', (input) => {
    const numberArray = createNumberArray(input)
    const result = getLongestIncreasingSubsequence(numberArray)
    console.log(`This is the longest increasing subsequence upon your input: ${result}`)
    rl.close();
  });
}

main()