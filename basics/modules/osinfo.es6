//require the node module "os" here
//the module offers functions such as platform(), freemem(),uptime(),...
const os = require('os');

module.exports = {
    printSystemInfo: () => {
        //let this function at least log the current platform and the currently available memory
        console.log(os.platform());
    }
}

//export the printSystemInfo-function
