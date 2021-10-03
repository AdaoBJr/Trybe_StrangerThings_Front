import React from 'react';
import CharactersService from '../services/charactersAPI';
import Table from './Table';
import Modal from './Modal/Modal';

const getRealityClass = (hereIsTheUpsideDownWorld) => (
  hereIsTheUpsideDownWorld ? 'upside-down' : 'stranger-things'
);

const strangerThingsConfig = {
  url: process.env.REACT_APP_HAWKINS_URL || 'http://localhost:3002',
  timeout: process.env.REACT_APP_HAWKINS_TIMEOUT,
};

const upsideDownConfig = {
  url: process.env.REACT_APP_UPSIDEDOWN_URL || 'http://localhost:3003',
  timeout: process.env.REACT_APP_UPSIDEDOWN_TIMEOUT,
};

const charactersService = new CharactersService(strangerThingsConfig);
const charactersUpsideDownService = new CharactersService(upsideDownConfig);

class StrangerThings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hereIsTheUpsideDownWorld: false,
      characterName: '',
      characters: [],
      page: 1,
      isModalVisible: true,
    };

    this.handleInput = this.handleInput.bind(this);
    this.changeRealityClick = this.changeRealityClick.bind(this);

    this.searchClick = this.searchClick.bind(this);
    this.searchCharacter = this.searchCharacter.bind(this);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.developmentMode = this.developmentMode.bind(this);
    this.enableModal = this.enableModal.bind(this);
    this.callModal = this.callModal.bind(this);
  }

  componentDidMount() {
    const limitTime = 5000;

    setTimeout(
      () => this.enableModal(),
      limitTime,
    );
  }

  enableModal() {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible });
  }

  handleInput(event) {
    this.setState({
      characterName: event.target.value,
    });
  }

  changeRealityClick() {
    const { hereIsTheUpsideDownWorld } = this.state;
    this.setState({
      hereIsTheUpsideDownWorld: !hereIsTheUpsideDownWorld,
      characters: [],
    });
  }

  searchClick() {
    this.setState(
      {
        page: 1,
      },
      this.searchCharacter(1),
    );
  }

  searchCharacter(pages) {
    const { characterName, hereIsTheUpsideDownWorld, page } = this.state;
    const service = hereIsTheUpsideDownWorld
      ? charactersUpsideDownService
      : charactersService;

    const numberOfPages = 10;
    service
      .getCharacters(characterName, pages || page, numberOfPages)
      .then(({ data: characters }) => {
        this.setState({
          characters,
        });
      });
  }

  nextPage() {
    const { page, characters } = this.state;

    if (!characters.length) return;
    this.setState(
      {
        page: page + 1,
      },
      () => this.searchCharacter(),
    );
  }

  previousPage() {
    const { page } = this.state;
    if (page <= 1) return;

    this.setState(
      {
        page: page - 1,
      },
      () => this.searchCharacter(),
    );
  }

  developmentMode() {
    const serverEnv = process.env.REACT_APP_DEVELOPMENT === 'true';

    return (
      <div className={ serverEnv ? 'react-status-active' : 'react-status-inactive' }>
        <span>
          Em desenvolvimento
        </span>
      </div>
    );
  }

  callModal() {
    return (
      <Modal onClose={ this.enableModal }>
        <p>Você está no ambiente de desenvolvimento</p>
      </Modal>
    );
  }

  render() {
    const {
      hereIsTheUpsideDownWorld, characterName, characters, page, isModalVisible,
    } = this.state;
    return (
      <div className="container-app">
        {isModalVisible ? this.callModal() : this.developmentMode()}
        <div
          className={ `reality ${getRealityClass(
            hereIsTheUpsideDownWorld,
          )}` }
        >
          <div className="content strangerfy">
            <div className="change-reality">
              <button type="button" onClick={ this.changeRealityClick }>
                {' '}
                Mudar de Realidade
              </button>
            </div>

            <div>
              <input
                placeholder="Nome do Personagem"
                onChange={ this.handleInput }
                value={ characterName }
              />
              <button type="button" onClick={ this.searchClick }>Pesquisar</button>
            </div>

            <div>
              <Table characters={ characters } />
            </div>

            <div>
              <p>
                Página atual:
                {page}
              </p>
            </div>
            <div>
              <button type="button" onClick={ this.previousPage }>Anterior</button>
              <button type="button" onClick={ this.nextPage }>Próximo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StrangerThings;
