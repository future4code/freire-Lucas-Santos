import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Lucas" 
          descricao="Oi, eu sou o Lucas. Sou aluno da Labenu. Odeio receber e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/318/318491.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1654640918~hmac=5ebc3d1d072ef13e73930da1a0fe5a24" 
          nome="Email" 
          descricao="lucasmonsan@gmail.com"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178137.png?token=exp=1654640910~hmac=3496ab26f6bc35e35b092221e34a12a1" 
          nome="Endereço" 
          descricao="Rua Nilo Peçanha"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
