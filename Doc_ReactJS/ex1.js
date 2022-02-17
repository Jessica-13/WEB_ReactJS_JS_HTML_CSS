var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Modules ES
//import ReactDOMServer from 'react-dom/server';
// CommonJS
//var ReactDOMServer = require('react-dom/server');


/*const element = <h1>Bonjour, monde</h1>;

const title = response.potentiallyMaliciousInput;
// Ceci est sans risque :
const element = <h1>{title}</h1>;
*/
var divStyle = {
    WebkitTransition: 'all', // notez le 'W' majuscule ici
    msTransition: 'all' // 'ms' est le seul préfixe fournisseur en minuscules
};

function ComponentWithTransition() {
    return React.createElement(
        'div',
        { style: divStyle },
        '\xC7a devrait fonctionner dans tous les navigateurs'
    );
}

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

    // Pour définir un composant React avec une classe,
    function Clock(props) {
        _classCallCheck(this, Clock);

        // affecter une valeur / ailleurs "this.setState()"
        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }
    // méthodes de cycle de vie


    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // C’est ici que vous devriez placer les initialisations qui requièrent l’existence de nœuds du DOM. Si vous avez besoin de charger des données depuis un point d’accès distant, c’est aussi le bon endroit pour déclencher votre requête réseau.
            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // Utilisation classique (pensez bien à comparer les props) :
            if (this.props.userID !== prevProps.userID) {
                // condition pour eviter une boucle infinie
                this.fetchData(this.props.userID);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Mettez-y tout nettoyage nécessaire, tel que l’invalidation de minuteurs, l’annulation de requêtes réseau, ou la résiliation d’abonnements effectués dans componentDidMount()
            clearInterval(this.timerID);
        }
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
/*
function Welcome(props) {
    return <h1>Bonjour, {props.name}</h1>;
}
// composant
const element_Name = <Welcome name="Sara" />; ReactDOM.render(
    element_Name,
    document.getElementById('root')
);

function App() {
    return (
        <div>
        <Welcome name="Sara" />      
        <Welcome name="Cahal" />      
        <Welcome name="Edite" />    
        </div>
    );
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
);


function Avatar(props) {
    return (
        <img className="Avatar"      
            src={props.user.avatarUrl}      
            alt={props.user.name}    
        />  
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">      
            <Avatar user={props.user} />      
            <div className="UserInfo-name">        
                {props.user.name}     
            </div>    
        </div>  
    );
}




function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />      
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
*/
// Tout composant React doit agir comme une fonction pure vis-à-vis de ses props.


// getSnapshotBeforeUpdate()
/*
class ScrollingList extends React.Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // Sommes-nous en train d’ajouter de nouveaux éléments à la liste ?
      // Sauvegardons la position de défilement pour la recaler plus tard.
      if (prevProps.list.length < this.props.list.length) {
        const list = this.listRef.current;
        return list.scrollHeight - list.scrollTop;
      }
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // Si nous avons une valeur sauvegardée, c’est que nous venons d’ajouter des
      // éléments. Ajustons le défilement pour que ces nouveaux éléments ne
      // décalent pas les anciens hors du champ de vision. (ici `snapshot` est la
      // valeur renvoyée par getSnapshotBeforeUpdate.)
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
    render() {
      return (
        <div ref={this.listRef}>{/* ...contenu... */
//}
//</div>
//);
//}
//}


var ErrorBoundary = function (_React$Component2) {
    _inherits(ErrorBoundary, _React$Component2);

    function ErrorBoundary(props) {
        _classCallCheck(this, ErrorBoundary);

        var _this3 = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

        _this3.state = { hasError: false };
        return _this3;
    }

    _createClass(ErrorBoundary, [{
        key: 'render',
        value: function render() {
            if (this.state.hasError) {
                // Vous pouvez afficher ici n’importe quelle UI de secours      
                return React.createElement(
                    'h1',
                    null,
                    '\xC7a sent le br\xFBl\xE9.'
                );
            }

            return this.props.children;
        }
    }], [{
        key: 'getDerivedStateFromError',
        value: function getDerivedStateFromError(error) {
            // On met à jour l’état afin que le prochain rendu affiche    
            // l’UI de remplacement.    
            return { hasError: true };
        }
    }]);

    return ErrorBoundary;
}(React.Component);