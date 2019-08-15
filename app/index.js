var os = require('os');
var OSinfo = require('../modules/osModule');
var TimeConv = require('../modules/timecon');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
	var uptime = TimeConv.conv(os.uptime());
        switch(instruction) {
                case '/exit':
                    process.stdout.write('Quitting app!\n');
                    process.exit();
                break;
                case '/sayhello':
                    process.stdout.write('hello!\n');
                break;
                case '/getOSinfo':
                    OSinfo.print();
                break;
                case '/getCPUinfo':
                    var cpu = os.cpus()[0].model;
                    console.log('CPU model:', cpu);
                break;
                case '/getUptimeinfo':
         
                    console.log('Uptime: ~', uptime);
                break;
                default:
                    process.stderr.write('Wrong instruction!\n');
        };
    }
});
