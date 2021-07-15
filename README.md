# UUID  

## How To Run

### Option 1 - Use Docker

1. In the root folder, `docker-compose up` to run the test  

### Option 2 - Run in CLI

1. Ensure you got node and npm installed. In the root folder, `npm ci` install all the dependencies

2. `npm run test` for running unit tests

3. `npm run lint` for checking linting

4. `npm run start` for running CLI tool and you will be asked to input your test case, e.g

> Please provide numbers separated by single whitespace
>     6 1 5 9 2
>     This is the longest increasing subsequence upon your input: 1,5,9