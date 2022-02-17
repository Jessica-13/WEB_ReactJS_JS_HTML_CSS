// Modules ES
//import ReactDOMServer from 'react-dom/server';
// CommonJS
//var ReactDOMServer = require('react-dom/server');



/*const element = <h1>Bonjour, monde</h1>;

const title = response.potentiallyMaliciousInput;
// Ceci est sans risque :
const element = <h1>{title}</h1>;
*/
const divStyle = {
    WebkitTransition: 'all', // notez le 'W' majuscule ici
    msTransition: 'all' // 'ms' est le seul préfixe fournisseur en minuscules
  };
  
  function ComponentWithTransition() {
    return <div style={divStyle}>Ça devrait fonctionner dans tous les navigateurs</div>;
  }


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1>Hello, {formatName(user)}!</h1>;    //balise

ReactDOM.render(element, document.getElementById('root'));  // Pour faire le rendu d’un élément React dans un nœud DOM racine




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
class Clock extends React.Component {   // Pour définir un composant React avec une classe,
    constructor(props) {
        super(props);   // affecter une valeur / ailleurs "this.setState()"
        this.state = {date: new Date()};  
    }
    // méthodes de cycle de vie
    componentDidMount() {  // C’est ici que vous devriez placer les initialisations qui requièrent l’existence de nœuds du DOM. Si vous avez besoin de charger des données depuis un point d’accès distant, c’est aussi le bon endroit pour déclencher votre requête réseau.
        this.timerID = setInterval(      
            () => this.tick(),     
            1000    
        );
    }

    componentDidUpdate(prevProps) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.userID !== prevProps.userID) {   // condition pour eviter une boucle infinie
            this.fetchData(this.props.userID);
        }
    }

    componentWillUnmount() {  // Mettez-y tout nettoyage nécessaire, tel que l’invalidation de minuteurs, l’annulation de requêtes réseau, ou la résiliation d’abonnements effectués dans componentDidMount()
        clearInterval(this.timerID);
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  function tick() {
    ReactDOM.render(
      <Clock />,
      document.getElementById('root')
    );
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



  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {    
        // On met à jour l’état afin que le prochain rendu affiche    
        // l’UI de remplacement.    
        return { hasError: true };  
    }
    render() {
        if (this.state.hasError) {      
            // Vous pouvez afficher ici n’importe quelle UI de secours      
            return <h1>Ça sent le brûlé.</h1>;    
        }

        return this.props.children;
  }
}