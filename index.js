var shell = require('shelljs')


function initSSh(){
    try{
        console.log('starting execution')
          const { stdout, stderr, code } = shell.exec('ssh -R athulpi:22:localhost:22 serveo.net', { silent: true })
        console.log(stdout)
        console.log(stderr)
          console.log(code)
    }catch(e){
          console.log(e)
    }
    
    
}

initSSh()