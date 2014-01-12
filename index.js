var Connection = require('ssh2');
var _ = require('underscore');

var fileFactory = require('./lib/file');
var userFactory = require('./lib/user');

module.exports = function(options) {
    var setup = options.setup;
    var host = options.host;
    var port = options.port;
    var username = options.username;
    var password = options.password;

    var c = new Connection();

    var exec = function(command) {
        c.exec("sudo " + command, function(err, stream) {
            if (err) throw err;
            stream.on('data', function(data, extended) {
                console.log((extended === 'stderr' ? 'STDERR: ' : 'STDOUT: ')
                            + data);
            });
            stream.on('end', function() {
                console.log('Stream :: EOF');
            });
            stream.on('close', function() {
                console.log('Stream :: close');
            });
            stream.on('exit', function(code, signal) {
                console.log('Stream :: exit :: code: ' + code + ', signal: ' + signal);
                c.end();
            });
        });
    };

    c.on('connect', function() {
        console.log('Connection :: connect');
    });
    c.on('ready', function() {
        console.log('Connection :: ready');

        var commands = [];
        setup(
            fileFactory(commands),
            userFactory(commands));

        commands.reverse(); // HACK: Mitigate funky bug

        _.each(commands, function(command) {
            exec(command);
        });
    });
    c.on('error', function(err) {
        console.log('Connection :: error :: ' + err);
    });
    c.on('end', function() {
        console.log('Connection :: end');
    });
    c.on('close', function(had_error) {
        console.log('Connection :: close');
    });
    c.connect({
        host: host,
        port: port,
        username: username,
        password: password
    });
};
