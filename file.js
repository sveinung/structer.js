module.exports = function(commands) {
    return function file(options) {
        commands.push('touch ' + options.name);
    };
};
