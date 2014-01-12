var _ = require('underscore');

module.exports = function(commands) {
    return function file(options) {
        var name = options.name;
        var mode = options.mode;

        commands.push('touch ' + name);

        if (!_.isUndefined(mode)) {
            commands.push('chmod ' + mode + ' ' + name);
        }
    };
};
