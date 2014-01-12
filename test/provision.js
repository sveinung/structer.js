var structer = require('..');

structer({
    host: 'localhost',
    port: 2222,
    username: 'vagrant',
    password: 'vagrant',
    setup: function(file, user) {
        file({
            name: '/home/vagrant/hei.txt'
        });

        file({
            name: '/home/vagrant/executable_file',
            mode: '0755'
        });

        user({
            name: 'ola'
        });
    }
});
