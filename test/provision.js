var structer = require('..');

var infrastructure = structer({
    host: 'localhost',
    port: 2222,
    username: 'vagrant',
    password: 'vagrant'
});

infrastructure.build();

