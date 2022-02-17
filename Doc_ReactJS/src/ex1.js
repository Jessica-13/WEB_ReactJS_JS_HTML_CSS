/*const element = <h1>Bonjour, monde</h1>;

const title = response.potentiallyMaliciousInput;
// Ceci est sans risque :
const element = <h1>{title}</h1>;
*/

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
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};  
    }
    // méthodes de cycle de vie
    componentDidMount() {  
        this.timerID = setInterval(      
            () => this.tick(),     
            1000    
        );
    }
    componentWillUnmount() {  

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

// Tout composant React doit agir comme une fonction pure vis-à-vis de ses props.