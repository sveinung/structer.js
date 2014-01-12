var _ = require('underscore');

module.exports = function(commands) {
    return function file(options) {
        var name = options.name;

        commands.push('touch ' + name);

        if (!_.isUndefined(options.mode)) {
            commands.push('chmod ' + options.mode + ' ' + name);
        }
    };
};
