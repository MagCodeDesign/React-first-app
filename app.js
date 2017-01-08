var logoReact = React.createElement('img', {src: 'img/react.png'});
var helloTitle = React.createElement('h1', null, 'Hello, World!');
var textFrom = React.createElement('h3', null, 'from...');

var wrapHello = React.createElement('section', { className: 'wrap-hello' }, helloTitle, textFrom, logoReact);

ReactDOM.render(wrapHello, document.getElementById('context'));