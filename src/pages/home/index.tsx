import React from 'react';
import { useHistory } from 'react-router-dom';


const Home: React.FC = () => {

  const history = useHistory();

  const [text, settext] = React.useState('');
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    if (text.length > 0) {
      setloading(true)
    }
    setTimeout(() => {
      setloading(false)
    }, 1000)
  }, [text]);


  const singout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // O mais certo e ja ter uma regra para nao mostrar a home senao logado, mas por momento vamos dar um reload, uqe ja voltara para login
    window.location.reload();
  }


  return (
    <>
      <p>Home</p>
      <input name="testo01" placeholder="digite um texto" value={text}
        onChange={e => settext(e.target.value)} />
      <p>{loading ? 'carregando....' : ''} {text}</p>

      <button onClick={() => history.push('profile')}>Ir pra perfil</button>

      <br />
      <br />
      <br />

      <button onClick={singout}>Deslogar</button>

    </>
  );
}

export default Home;