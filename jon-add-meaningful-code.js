let gitlab = require('../api/util/github')

let user = {
  githubApiUrl: 'https://api.github.com/users/joncodo',
  githubAccessToken: process.env.TOKEN
}

let main = async ()=>{
  try {
    let results = await gitlab.getProjectListFromGithub(user, 10, 1)
    console.log('INFO: Script Done');
    console.log(results.map(x=>x.full_name))
  } catch (error) {
    console.log(error)
  }
}

main()

let gitlab = require('../api/util/github')

let user = {
  githubApiUrl: 'https://api.github.com/users/joncodo',
  githubAccessToken: process.env.TOKEN
}

let main2 = async ()=>{
  try {
    let results = await gitlab.getProjectListFromGithub(user, 10, 1)
    console.log('INFO: Script Done');
    console.log(results.map(x=>x.full_name))
  } catch (error) {
    console.log(error)
  }
}

main2()

