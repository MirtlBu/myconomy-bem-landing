var bemer = require('bemer');

bemer
    .match('section', {
        js: false
    })
    .match('page', {
        tag: 'html', js: false, bem: false,
        attrs: {
            xmlns: 'http://www.w3.org/1999/xhtml',
            'xml:lang': 'en',
            lang: 'en'
        },
        content: function(content) {
            return [
                {
                    tag: 'head', js: false, bem: false,
                    content: [
                        {
                            tag: 'title', js: false, bem: false,
                            content: this.bemjson.title
                        },
                        {
                            tag: 'meta', js: false, bem: false,
                            attrs: {'http-equiv': 'content-type', content: 'text/html; charset=utf-8'}
                        },
                        {
                            tag: 'link', js: false, bem: false,
                            attrs: {rel: 'stylesheet', type: 'text/css', href: 'style.css'}
                        }
                    ]
                },
                {
                    tag: 'body', js: false, bem: false,
                    content: content
                }
            ]
        }
    });












//-------------------------------------------------------------------

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var input = '';

rl.on('line', function(line) {
    input += line;
}).on('close', function() {
    console.log('<!DOCTYPE html>' + bemer(eval(input)));
});
