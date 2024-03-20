const githubURL = "https://github.com/Yuritrecha/"
const linkedinURL = "https://www.linkedin.com/in/yuri-trecha/"
const url = ''
const botaoGithub = document.querySelector('#github_button');
const botaoLinkedin = document.querySelector('#linkedin_button');

function redirecionar_github(){
        const novaJanela = window.open(githubURL,'_blank');
        novaJanela.focus();
}

function redirecionar_linkedin(){
        const novaJanela = window.open(linkedinURL,'_blank');
        novaJanela.focus();
}

