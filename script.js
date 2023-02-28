
// <!-- MENU -->
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

NavMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.classList.remove('ativo');
    NavMenu.classList.remove('ativo');
  }
});


// TEMA
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});

//ICON TEMA
function mudarIcon() {
  var icon = document.querySelector("i");
  if(icon.classList.contains("bx-sun")) {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  } else {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  }
}

// Quem somos
function openModal(carregarModal) {
  let modal = document.getElementById(carregarModal);

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closedModal(fecharModal) {
  let modal = document.getElementById(fecharModal);

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

//ENVIAR MENSAGEM WHATSSAP
function finalizarPedido() {
  let mensagem;
  mensagem =
    "Olá gostaria de ter meu Web Site! ";
  window.open("https://wa.me/5519983064893?text=" + mensagem);
}

//Home 
ScrollReveal().reveal('.text-h4', { delay: 600, duration: 1000, origin: 'right', distance: '50px' });
ScrollReveal().reveal('.text-h1', { delay: 600, duration: 1000, origin: 'left', distance: '50px' });
ScrollReveal().reveal('.text-b', { delay: 600, duration: 1000, origin: 'right', distance: '50px' });

//about
//lazy loading
document.addEventListener("scroll", function() {
  var alturaTela = window.innerHeight;
  var posicao = document.querySelector(".about_img").getBoundingClientRect().top;
  if (posicao - alturaTela <= 0) {
    document.querySelector(".about").classList.add("mostrando");
  }
});

ScrollReveal().reveal('.about_img', { delay: 600, duration: 1000, origin: 'right', distance: '50px' });
ScrollReveal().reveal('.text-1-1', { delay: 600, duration: 1000, origin: 'right', distance: '50px' });


//incluso
//lazy loading
document.addEventListener("scroll", function() {
  var alturaTela = window.innerHeight;
  var posicao = document.querySelector(".incluso").getBoundingClientRect().top;
  if (posicao - alturaTela <= 0) {
    document.querySelector(".incluso").classList.add("mostrando");
  }
});

// Inicialize o ScrollReveal
ScrollReveal().reveal('.text-h', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.oi1', { delay: 400, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.oi2', { delay: 600, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.oi3', { delay: 800, duration: 1000, origin: 'bottom', distance: '50px' });

//banner
//lazy loading
document.addEventListener("scroll", function() {
  var alturaTela = window.innerHeight;
  var posicao = document.querySelector(".banner").getBoundingClientRect().top;
  if (posicao - alturaTela <= 0) {
    document.querySelector(".banner").classList.add("mostrando");
  }
});

//PERGUNTAS
const pergunta = document.querySelectorAll('.pergunta')
const resposta = document.querySelectorAll('.resposta')

for(let i = 0; i < pergunta.length; i++){
    pergunta[i].addEventListener('click', () => {
        if(pergunta[i].classList.contains('fechar')){
            pergunta[i].classList.toggle('fechar')
            resposta[i].classList.toggle('ativar')
        }else{
            pergunta[i].classList.add('fechar')
            resposta[i].classList.add('ativar')
        }
    })
}

//IDIOMA
let currentLanguage = 'pt';

function changeLanguage() {
  if (currentLanguage === 'pt') {
    currentLanguage = 'en';
    document.querySelector('#english-button').textContent = 'Portuguese';
    document.querySelector('.nav-item:nth-of-type(1) a').textContent = 'Home';
    document.querySelector('.nav-item:nth-of-type(2) a').textContent = 'FAQ';
    document.querySelector('.nav-item:nth-of-type(3) a').textContent = 'Contact';
    document.querySelector('.nav-item:nth-of-type(4) a').textContent = 'About Us';
    document.querySelector('.title-modal').textContent = 'About Us';
    document.querySelector('.p-modal:nth-of-type(1)').textContent = 'TeuWebSite is a company created by four study friends and a mentor who seek to acquire and share knowledge.';
    document.querySelector('.p-modal:nth-of-type(2)').textContent = 'We aim to develop websites, and offer hosting services,and in the future develop apps. We will use Web programming and Wordpress to develop the projects.';
    document.querySelector('.p-modal:nth-of-type(3)').textContent = 'Our mission is to offer our customers the possibility to expand their business in a simple and fast way.';
    document.querySelector('.btn-outline-success').textContent = 'Closed';
    document.querySelector('.text-h4').textContent = 'Welcome to TeuWebSite';
    document.querySelector('.text-h1').textContent = 'Professional websites for your business';
    document.querySelector('p b').textContent = 'We create modern and responsive websites that will help you stand out and grow your business';
    document.querySelector('.botao').textContent = 'I want a professional website!';
    document.querySelector('.about h1.text-h1').textContent = 'We take care of your website while you worry about your business.';
    document.querySelector('.about h1.text-1-1').textContent = 'ENSURE THE ONLINE PRESENCE OF YOUR COMPANY AND INCREASE VISIBILITY.';
    document.querySelector('.about .botao').textContent = 'I want a professional website!';
    document.querySelector('.incluso .text-h').textContent = 'WHAT IS INCLUDED IN YOUR PLAN';
    document.querySelector('.incluso .oi1 h4').textContent = 'HOSTING INCLUSA';
    document.querySelector('.incluso .oi1 p').textContent = 'Store all the content of your website that makes up your website';
    document.querySelector('.incluso .oi2 h4').textContent = 'PROFESSIONAL E-MAIL';
    document.querySelector('.incluso .oi2 p').textContent = 'Professional e-mail for prospecting new customers. (10 2GB mailboxes)';
    document.querySelector('.incluso .oi3 h4').textContent = 'RESPONSIVE WEBSITE';
    document.querySelector('.incluso .oi3 p').textContent = 'Your website adapted correctly on mobile devices.';
    document.querySelector('.incluso .botao').textContent = 'I want a professional website!';
    document.querySelector('.banner h3').textContent = 'ONLY R$ 54,90/MONTH';
    document.querySelector('.hospedagem .text-h2').textContent = 'TURBO PROFESSIONAL HOSTING';
    document.querySelector('.hospedagem .text-2').textContent = 'Included in the plan to track the growth of your business on the Internet';
    document.querySelector('.hospedagem .botao').textContent = 'I want a professional website!';
    document.querySelector('.missao .text-missao').textContent = 'MISSION';
    document.querySelector('.missao .oi1 p').textContent = 'Promote access to a website for everyone, regardless of their income or socioeconomic status. We believe that everyone deserves to have the opportunity to evolve and develop, and this can only be achieved through access to information and resources online.';
    document.querySelector('.missao .oi2 p').textContent = 'We are committed to providing a platform that is accessible and easy to use so that everyone can connect with the information and services they need to grow and thrive. We want to empower people to exploit their potential and achieve their goals, regardless of their circumstances.';
    document.querySelector('.missao .oi3 p').textContent = 'Our mission is driven by the desire to create a fairer and more equitable world where everyone has equal access to opportunities and resources. We believe that digital inclusion is a key part of this process and we are committed to doing our part to make it a reality.';
    document.querySelector('.faq-container .faq-titulo').textContent = 'FAQ';
    document.querySelector('.faq-container .pergunta1 h3').textContent = 'What do I need to do for my site?';
    document.querySelector('.faq-container .resposta1 .p1').textContent = 'Domain (www.nomedasuaempresa.com.br).';
    document.querySelector('.faq-container .resposta1 .p2').textContent = 'Creation of the Site itself.';
    document.querySelector('.faq-container .resposta1 .p3').textContent = 'Hosting and Maintenance of the Site.';
    document.querySelector('.faq-container .resposta1 .p4').textContent = 'With these 3 elements you can get your site on the air and we can take 100% care of everything you need.';
    document.querySelector('.faq-container .pergunta2 h3').textContent = 'What domain value?';
    document.querySelector('.faq-container .resposta2 .p1').textContent = 'The domain must be acquired in registro.br, a body that controls all domains with end .br. ';
    document.querySelector('.faq-container .resposta2 .p2').textContent = 'The value of each domain is R$ 40.00/year.';
    document.querySelector('.faq-container .pergunta3 h3').textContent = 'The mere fact of creating a website is a guarantee that it will go in google searches?';
    document.querySelector('.faq-container .resposta3').textContent = 'No, creating a website is the first step to start appearing on Google.';
    document.querySelector('.faq-container .pergunta4 h3').textContent = 'What do I need to do to appear on google?';
    document.querySelector('.faq-container .resposta4  .p1').textContent = 'After you create a Site, you ll have three alternatives to start appearing on Google:';
    document.querySelector('.faq-container .resposta4 .p2').textContent = '1: Google Ads - paid advertising on Google';
    document.querySelector('.faq-container .resposta4 .p3').textContent = '2: Google Organic - Free Google Results';
    document.querySelector('.faq-container .resposta4 .p4').textContent = '3: Both';
    document.querySelector('.faq-container .resposta4 .p5').textContent = 'Both Google Ads and Google Organic bring results, each with its own characteristics and speed.';
    document.querySelector('.faq-container .pergunta5 h3').textContent = 'What is the best way to get quick results on Google?';
    document.querySelector('.faq-container .resposta5 p').textContent = 'With absolute certainty the safest way to get results quickly on Google is to invest in Google Ads - Googles paid platform.';
    document.querySelector('.faq-container .pergunta6 h3').textContent = 'How much should I invest in Google Ads?';
    document.querySelector('.faq-container .resposta6 .p1').textContent = 'The investment required to achieve good results in Google Ads depends on some factors that need to be analyzed, such as: search volume, competition, click value.';
    document.querySelector('.faq-container .resposta6 .p2').textContent = 'A well-structured Google Ads campaign needs to consider a budget of at least 300 clicks.';
    document.querySelector('.faq-container .pergunta7 h3').textContent = 'Does the SEO Consulting service bring you quick results?';
    document.querySelector('.faq-container .resposta7').textContent = 'In general terms, an SEO Consulting job takes a few months to get an efficient result. Depending on the level of competition the terms may take 6 to 12 months for the first results to appear.';
    document.querySelector('.faq-container .pergunta8 h3').textContent = 'Do I have the right to take my Created Site to another server?';
    document.querySelector('.faq-container .resposta8 .p1').textContent = 'Yes! But the hosting server is directly linked to the loading speed of the site and this interferes with its organic positioning and the outcome of Google Ads campaigns.';
    document.querySelector('.faq-container .resposta8 .p2').textContent = 'Despite this, our client owns the purchased site and can take this content to the server you want - it is important to check the compatibility of the server with the high-level programming developed in WordPress.';
    document.querySelector('.faq-container .botao').textContent = 'I want a professional website!';
    document.querySelector('.footer-content p').textContent = 'Company focused on the development of web sites';
    document.querySelector('.fale-conosco .botao').textContent = 'I want a professional website!';
  } else {
    currentLanguage = 'pt';
    document.querySelector('#english-button').textContent = 'English';
    document.querySelector('.nav-item:nth-of-type(1) a').textContent = 'Home';
    document.querySelector('.nav-item:nth-of-type(2) a').textContent = 'Dúvidas';
    document.querySelector('.nav-item:nth-of-type(3) a').textContent = 'Contato';
    document.querySelector('.nav-item:nth-of-type(4) a').textContent = 'Quem somos';
    document.querySelector('.title-modal').textContent = 'Sobre Nós';
    document.querySelector('.p-modal:nth-of-type(1)').textContent = 'TeuWebSite é uma empresa criada por 4 Desenvolvedores, e 1 Mentor, que buscam promover o acesso a um site para todos,independentemente de sua renda ou status socioeconômico.';
    document.querySelector('.p-modal:nth-of-type(2)').textContent = 'Temos o objetivo de desenvolver sites, e oferecer serviços de hospedagens,e futuramente desenvolver apps. Utilizaremos programação Web e Wordpress para desenvolver os projetos.';
    document.querySelector('.p-modal:nth-of-type(3)').textContent = 'Nossa missão é oferecer aos nossos clientes a possibilidade de expandir seus negócios de forma simples e rápido.';
    document.querySelector('.btn-outline-success').textContent = 'Fechar';
    document.querySelector('.text-h4').textContent = 'Bem Vindo ao TeuWebSite';
    document.querySelector('.text-h1').textContent = 'Sites Profissionais para o seu negócio';
    document.querySelector('p b').textContent = 'Criamos sites modernos e responsivos que ajudarão você a se destacar e expandir seus negócios';
    document.querySelector('.botao').textContent = 'Quero um site profissional!';
    document.querySelector('.about h1.text-h1').textContent = 'Nós cuidamos do seu site enquanto você se preocupa com o seu negócio.';
    document.querySelector('.about h1.text-1-1').textContent = 'GARANTA A PRESENÇA ONLINE DE SUA EMPRESA E AMPLIE A VISIBILIDADE.';
    document.querySelector('.about .botao').textContent = 'Quero um site profissional!';
    document.querySelector('.incluso .text-h').textContent = 'O QUE ESTÁ INCLUSO NO SEU PLANO';
    document.querySelector('.incluso .oi1 h4').textContent = 'HOSPEDAGEM INCLUSA';
    document.querySelector('.incluso .oi1 p').textContent = 'Armazene todo o conteúdo do seu site que compõe a sua página na internet';
    document.querySelector('.incluso .oi2 h4').textContent = 'E-MAIL PROFISSIONAL';
    document.querySelector('.incluso .oi2 p').textContent = 'E-mail profissional para prospecção de novos clientes. (10 caixas de e-mails de 2GB)';
    document.querySelector('.incluso .oi3 h4').textContent = 'SITE RESPONSIVO';
    document.querySelector('.incluso .oi3 p').textContent = 'Seu site adaptado de forma correta em dispositivos móveis.';
    document.querySelector('.incluso .botao').textContent = 'Quero um site profissional!';
    document.querySelector('.banner h3').textContent = 'APENAS R$ 54,90/MÊS';
    document.querySelector('.hospedagem .text-h2').textContent = 'HOSPEDAGEM PROFISSIONAL TURBO';
    document.querySelector('.hospedagem .text-2').textContent = 'Incluso no plano para acompanhar o crescimento do seu negócio na internet';
    document.querySelector('.hospedagem .botao').textContent = 'Quero um site profissional!';
    document.querySelector('.missao .text-missao').textContent = 'MISSÃO';
    document.querySelector('.missao .oi1 p').textContent = 'Promover o acesso a um site para todos, independentemente de sua renda ou status socioeconômico. Acreditamos que todos merecem ter a oportunidade de evoluir e se desenvolver, e isso só pode ser alcançado através do acesso à informação e recursos on-line.';
    document.querySelector('.missao .oi2 p').textContent = 'Estamos comprometidos em fornecer uma plataforma que seja acessível e fácil de usar para que todos possam se conectar com as informações e serviços que precisam para crescer e prosperar. Queremos capacitar as pessoas a explorar seu potencial e alcançar seus objetivos, independentemente de suas circunstâncias.';
    document.querySelector('.missao .oi3 p').textContent = 'Nossa missão é impulsionada pelo desejo de criar um mundo mais justo e equitativo, onde todos tenham acesso igualitário às oportunidades e recursos. Acreditamos que a inclusão digital é uma peça fundamental nesse processo e estamos empenhados em fazer a nossa parte para tornar isso uma realidade.';
    document.querySelector('.faq-container .faq-titulo').textContent = 'Perguntas frequentes';
    document.querySelector('.faq-container .pergunta1 h3').textContent = 'O que preciso fazer para meu site?';
    document.querySelector('.faq-container .resposta1 .p1').textContent = 'Domínio (www.nomedasuaempresa.com.br).';
    document.querySelector('.faq-container .resposta1 .p2').textContent = 'Criação do Site propriamente dita.';
    document.querySelector('.faq-container .resposta1 .p3').textContent = 'Hospedagem e Manutenção do Site.';
    document.querySelector('.faq-container .resposta1 .p4').textContent = 'Com esses 3 elementos você consegue colocar seu site no ar e nós podemos cuidar 100% de tudo o que você precisa.';
    document.querySelector('.faq-container .pergunta2 h3').textContent = 'Qual valor do domínio?';
    document.querySelector('.faq-container .resposta2 .p1').textContent = 'O domínio deve ser adquirido no registro.br, órgão que controla todos os domínios com final .br.';
    document.querySelector('.faq-container .resposta2 .p2').textContent = 'Valor de cada domínio é de R$ 40,00/ano.';
    document.querySelector('.faq-container .pergunta3 h3').textContent = 'O simples fato de criar um site é garantia de que ele vai nas buscas do google?';
    document.querySelector('.faq-container .resposta3').textContent = 'Não, criar um site é o primeiro passo para começar a aparecer no Google.';
    document.querySelector('.faq-container .pergunta4 h3').textContent = 'O que eu preciso fazer para aparecer no google?';
    document.querySelector('.faq-container .resposta4 .p1').textContent = 'Depois que Criar um Site, você terá três alternativas para começar a aparecer no Google:';
    document.querySelector('.faq-container .resposta4 .p2').textContent = '1: Google Ads - publicidade paga no Google';
    document.querySelector('.faq-container .resposta4 .p3').textContent = '2: Google Orgânico - resultados gratuitos do Google';
    document.querySelector('.faq-container .resposta4 .p4').textContent = '3: Ambos ';
    document.querySelector('.faq-container .resposta4 .p5').textContent = 'Tanto o Google Ads, quanto o Google Orgânico trazem resultados, cada um com sua característica e velocidade.';
    document.querySelector('.faq-container .pergunta5 h3').textContent = 'Qual é o melhor caminho para conseguir resultados rápidos no Google?';
    document.querySelector('.faq-container .resposta5 p').textContent = 'Com absoluta certeza o caminho mais seguro se obter resultado de forma rápida no Google é investir no Google Ads - plataforma paga do Google.';
    document.querySelector('.faq-container .pergunta6 h3').textContent = 'Quanto devo investir no Google Ads?';
    document.querySelector('.faq-container .resposta6 .p1').textContent = 'O investimento necessário para conseguir bons resultados no Google Ads depende de alguns fatores que precisam ser analisados, como: volume de pesquisa, concorrência, valor do clique';
    document.querySelector('.faq-container .resposta6 .p2').textContent = 'Uma campanha bem estruturada do Google Ads precisa considerar um orçamento de pelo menos 300 cliques.';
    document.querySelector('.faq-container .pergunta7 h3').textContent = 'O serviço de Consultoria SEO traz resultados rápidos?';
    document.querySelector('.faq-container .resposta7').textContent = 'Em termos gerais um trabalho de Consultoria SEO leva alguns meses para surtir um resultado eficiente. Dependendo do nível de concorrência dos termos pode se levar de 6 a 12 meses para os primeiros resultados aparecerem.';
    document.querySelector('.faq-container .pergunta8 h3').textContent = 'Eu tenho direito de levar meu Site Criado para outro servidor?';
    document.querySelector('.faq-container .resposta8 .p1').textContent = 'Sim! Mas o servidor de hospedagem está diretamente ligado à velocidade de carregamento do site e isso interfere no seu posicionamento orgânico e resultado das campanhas de Google Ads.';
    document.querySelector('.faq-container .resposta8 .p2').textContent = 'Apesar disso, o nosso cliente é proprietário do site adquirido e pode levar esse conteúdo para o servidor que desejar - é importante verificar a compatibilidade do servidor com a programação de alto nível desenvolvida em WordPress.';
    document.querySelector('.faq-container .botao').textContent = 'Quero um site profissional!';
    document.querySelector('.footer-content p').textContent = 'Empresa voltada para o desenvolvimento de sites Web';
    document.querySelector('.fale-conosco .botao').textContent = 'Quero um site profissional!';
    
  }
}

