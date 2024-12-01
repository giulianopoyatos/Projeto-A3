// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBANwt0ApCKzf1yL4is8KKOeaLNj24EDP8",
    authDomain: "a3-sistemas-distribuidos.firebaseapp.com",
    projectId: "a3-sistemas-distribuidos",
    storageBucket: "a3-sistemas-distribuidos.firebasestorage.app",
    messagingSenderId: "743663161797",
    appId: "1:743663161797:web:d4379d1b7f176df24c7bac"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

// Função de login
function logar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(function (user) {
            alert("Login realizado com sucesso!");
            // Redirecionar para o dashboard
            window.location.href = 'dashboard.html';
        })
        .catch(function (error) {
            alert("Erro no login: " + error.message);
        });
}

// Função de cadastro
function cadastrar() {
    const email = document.getElementById("emailCadastro").value;
    const senha = document.getElementById("senhaCadastro").value;

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(function (user) {
            alert("Cadastro realizado com sucesso!");
            // Redirecionar para o dashboard
            window.location.href = 'dashboard.html';
        })
        .catch(function (error) {
            alert("Erro ao cadastrar: " + error.message);
        });
}

// Função para mostrar o formulário de login
function mostrarLogin() {
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Função para mostrar o formulário de cadastro
function mostrarCadastro() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
}


// Função para mostrar o formulário de "Esqueci a Senha"
function mostrarEsqueciSenha() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "block";
}

// Função para enviar o link de recuperação de senha
function enviarLink() {
    const email = document.getElementById("emailEsqueci").value;
    
    firebase.auth().sendPasswordResetEmail(email)
        .then(function () {
            alert("Link de recuperação enviado para o e-mail.");
            mostrarLogin();
        })
        .catch(function (error) {
            alert("Erro ao enviar o link de recuperação: " + error.message);
        });
}