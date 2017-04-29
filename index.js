const Nightmare = require('nightmare');
const nightmare = Nightmare({show: false});
const confFile = require('./conf.json');

const LOGIN_PAGE = 'https://stackoverflow.com/users/login';

nightmare
    .goto(LOGIN_PAGE)
    .wait('#login-form')
    .type('#email', confFile.email)
    .type('#password', confFile.password)
    .click('#submit-button')
    .wait('a.my-profile')
    .click('a.my-profile')
    .wait('#top-cards')
    .evaluate(() => {
        const el = document.querySelector('#top-cards .next span.count');
        return el ? el.innerText : 'null';
    })
    .end()
    .then(progressText => {
        console.log(progressText);
    })
    .catch(function (error) {
        console.error('Failed', error);
    });