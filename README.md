<h1 align="center">LOOKAPP - Aplicativo de Gerenciamento e Compras Online</h1>

<h2>🛠️ Descrição do Projeto</h2>
<p>
  <strong>LOOKAPP</strong> é um aplicativo mobile desenvolvido em <strong>React Native</strong> com <strong>JavaScript</strong>, projetado para simular uma plataforma de e-commerce funcional. Ele oferece funcionalidades essenciais para um ambiente de compras online, como:
</p>
<ul>
  <li><strong>Login e cadastro de usuários;</strong></li>
  <li><strong>Listagem de produtos e categorias;</strong></li>
  <li><strong>Carrinho de compras;</strong></li>
  <li><strong>Área de pedidos;</strong></li>
  <li><strong>Validação de cartões de crédito.</strong></li>
</ul>
<p>
  Para simular dados dinâmicos, o aplicativo utiliza uma <strong>API fake</strong> criada com <code>json-server</code>, e a validação de cartões de crédito foi implementada com a biblioteca <code>card-validator</code>. Este projeto destaca habilidades em <strong>desenvolvimento mobile</strong>, <strong>integração com APIs</strong> e <strong>design intuitivo de interfaces</strong>.
</p>

<h2>🚀 Tecnologias Utilizadas</h2>
<ul>
  <li><strong>React Native</strong> (JavaScript)</li>
  <li><strong>Expo</strong> (para aceleração do desenvolvimento)</li>
  <li><strong>React Navigation</strong> (navegação entre telas)</li>
  <li><strong>Context API</strong> (gerenciamento de estado)</li>
  <li><strong>json-server</strong> (API fake para consumo de dados)</li>
  <li><strong>card-validator</strong> (validação de cartões de crédito)</li>
</ul>

<h2>🌟 Funcionalidades Principais</h2>
<ul>
  <li>🔑 <strong>Login e Cadastro de Usuários:</strong> Interface simples e intuitiva para autenticação.</li>
  <li>📋 <strong>Listagem de Produtos e Categorias:</strong> Explore produtos organizados por categorias com navegação amigável.</li>
  <li>🛍️ <strong>Carrinho de Compras:</strong> Adicione, edite ou remova produtos antes da finalização da compra.</li>
  <li>📦 <strong>Área de Pedidos (Orders):</strong> Visualize o histórico de pedidos, incluindo detalhes de produtos e status.</li>
  <li>💳 <strong>Validação de Cartões de Crédito:</strong> Verifique dados de cartão para garantir segurança na compra.</li>
  <li>🌐 <strong>Consumo de API Fake:</strong> Simula interações de dados reais para fins de teste e desenvolvimento.</li>
</ul>

<h2>📂 Estrutura do Projeto</h2>
<pre>
LOOKAPP/
├── assets/         # Imagens e outros recursos estáticos
├── components/     # Componentes reutilizáveis (inputs, botões, etc.)
├── screens/        # Telas principais (Login, Cadastro, Produtos, Carrinho, Pedidos, etc.)
├── data/           # Arquivos JSON utilizados pela API fake
├── App.js          # Ponto de entrada do aplicativo
├── server.js       # Configuração do json-server para API fake
└── README.md       # Documentação do projeto
</pre>

<h2>🖼️ Descrição Visual</h2>
<p>
  O <strong>LOOKAPP</strong> apresenta uma interface moderna e organizada, com telas desenvolvidas para otimizar a experiência do usuário. Confira algumas das principais telas:
</p>
<ul>
  <li><strong>Login e Cadastro:</strong> Permite que o usuário acesse ou crie uma conta com facilidade.</li>
  <li><strong>Feed de Produtos e Posts:</strong> Apresenta os produtos de forma visual e organizada.</li>
  <li><strong>Detalhes do Produto:</strong> Exibe informações completas sobre cada item, com opção de adicionar ao carrinho.</li>
  <li><strong>Carrinho de Compras:</strong> Mostra os itens selecionados e permite ajustes antes da compra.</li>
  <li><strong>Área de Pedidos:</strong> Histórico detalhado dos pedidos realizados.</li>
</ul>
<br>

<br>
<h2 >📷 Telas do Projeto</h3>
<br>
<br>
<br>
<p align="center">
  <img src="https://github.com/pablomartinsti/LOOKAPP/blob/main/assets/screen-2.png" alt="Tela principal do Projeto LOOKAPP" style="max-width: 100%; height: auto;">
</p>
<p align="center">
  <img src="https://github.com/pablomartinsti/LOOKAPP/blob/main/assets/screen-1.png" alt="Tela de Login do Projeto LOOKAPP" style="max-width: 100%; height: auto;">
</p>

<h2>⚙️ Como Executar o Projeto</h2>
<ol>
  <li>Certifique-se de ter o <strong>Node.js</strong> e o <strong>Expo CLI</strong> instalados.</li>
  <li>Clone o repositório:
    <pre>
git clone https://github.com/pablomartinsti/LOOKAPP.git
    </pre>
  </li>
  <li>Instale as dependências:
    <pre>
npm install
    </pre>
  </li>
  <li>Inicie a API fake:
    <pre>
npx json-server --watch data/db.json --port 3001
    </pre>
  </li>
  <li>Inicie o aplicativo:
    <pre>
expo start
    </pre>
  </li>
  <li>Use o aplicativo <strong>Expo Go</strong> no seu dispositivo móvel para testar o projeto.</li>
</ol>

<h2>🎯 Objetivo do Projeto</h2>
<p>
  O <strong>LOOKAPP</strong> foi recriado por <strong>Pablo Ferreira Martins</strong> como parte dos estudos no curso <strong>DevClub</strong>. O objetivo foi consolidar habilidades em <strong>desenvolvimento mobile com React Native</strong>, incluindo consumo de APIs, validação de dados sensíveis e criação de interfaces intuitivas. Este projeto é ideal para simular um ambiente de compras online simples e funcional.
</p>

<h2>🧑‍💻 Autor</h2>
<p>
  Este projeto foi recriado por <strong>Pablo Ferreira Martins</strong> como parte do curso <strong>DevClub</strong>. Estou à disposição para colaborações e novas oportunidades na área de <strong>desenvolvimento mobile</strong>.
</p>
<p>
  Entre em contato pelo meu <a href="https://www.linkedin.com/in/pablo-martins-dev/" target="_blank"><strong>LinkedIn</strong></a> ou confira mais projetos no meu <a href="https://github.com/pablomartinsti" target="_blank"><strong>GitHub</strong></a>.
</p>

<h2>📜 Licença</h2>
<p>
  Este projeto está licenciado sob a <strong>MIT License</strong>. Consulte o arquivo <a href="./LICENSE"><strong>LICENSE</strong></a> para mais detalhes.
</p>
