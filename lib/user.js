module.exports = function(commands) {
    return function user(options) {
        var name = options.name;

        commands.push('useradd ' + name);
    }
};