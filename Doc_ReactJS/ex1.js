var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*const element = <h1>Bonjour, monde</h1>;

const title = response.potentiallyMaliciousInput;
// Ceci est sans risque :
const element = <h1>{title}</h1>;
*/

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

var user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

var element = React.createElement(
    'h1',
    null,
    'Hello, ',
    formatName(user),
    '!'
); //balise

ReactDOM.render(element, document.getElementById('root')); // Pour faire le rendu d’un élément React dans un nœud DOM racine


/*
function tick() {
    const element_Tick = (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element_Tick, document.getElementById('root'));}
  
setInterval(tick, 1000);
*/

// Composant isolé
// -> Le composant Clock est maintenant défini comme une classe au lieu d’une fonction.

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }
    // méthodes de cycle de vie


    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello, world!'
                ),
                React.createElement(
                    'h2',
                    null,
                    'It is ',
                    this.state.date.toLocaleTimeString(),
                    '.'
                )
            );
        }
    }]);

    return Clock;
}(React.Component);

function tick() {
    ReactDOM.render(React.createElement(Clock, null), document.getElementById('root'));
}

/*
class Welcome extends React.Component {
    render() {
        return <h1>Bonjour class, {this.props.name}</h1>;
    }
}
*/
function Welcome(props) {
    return React.createElement(
        'h1',
        null,
        'Bonjour, ',
        props.name
    );
}
// composant
var element_Name = React.createElement(Welcome, { name: 'Sara' });ReactDOM.render(element_Name, document.getElementById('root'));

function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(Welcome, { name: 'Sara' }),
        React.createElement(Welcome, { name: 'Cahal' }),
        React.createElement(Welcome, { name: 'Edite' })
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

function Avatar(props) {
    return React.createElement('img', { className: 'Avatar',
        src: props.user.avatarUrl,
        alt: props.user.name
    });
}

function UserInfo(props) {
    return React.createElement(
        'div',
        { className: 'UserInfo' },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(
            'div',
            { className: 'UserInfo-name' },
            props.user.name
        )
    );
}

function Comment(props) {
    return React.createElement(
        'div',
        { className: 'Comment' },
        React.createElement(UserInfo, { user: props.author }),
        React.createElement(
            'div',
            { className: 'Comment-text' },
            props.text
        ),
        React.createElement(
            'div',
            { className: 'Comment-date' },
            formatDate(props.date)
        )
    );
}

// Tout composant React doit agir comme une fonction pure vis-à-vis de ses props.