var context = require.context('./_test_/', true, /.spec\.js$/);
context.keys().forEach(context);
