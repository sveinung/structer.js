var structer = require('..');

structer({
    host: 'localhost',
    port: 2222,
    username: 'vagrant',
    password: 'vagrant',
    setup: function(file) {
        file({
            name: '/home/vagrant/hei.txt'
        });
    }
});
