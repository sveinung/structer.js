var _ = require('underscore');

module.exports = function(commands) {
    return function file(options) {
        var name = options.name;

        if (!_.isUndefined(options.mode)) {
            commands.push('chmod ' + options.mode + ' ' + name);
        }

        commands.push('touch ' + name);
    };
};
