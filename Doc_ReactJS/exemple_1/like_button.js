// code de démarrage

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {    // Ce code définit un composant appelé LikeButton
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

 // Affiche un bouton « J’aime »
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'J’aime'
    );
  }
}


// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });


/*
// Un seul : 
const domContainer = 
document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer); 
*/

/* Ces deux lignes de code vont remplacer le contenu de la <div> 
que nous avons ajoutée dans la première étape. Ainsi elles afficheront 
notre composant React sous forme de bouton « J’aime ». */



/*
// Affiche un bouton « J’aime » avec JSX
return (
  <button onClick={() => this.setState({ liked: true })}>
    J’aime
  </button>
);
*/