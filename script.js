const loginForm=document.getElementById("loginForm");
const registerForm=document.getElementById("registerForm");

let users=[];
try{users=JSON.parse(localStorage.getItem("users"))||[];}catch(e){users=[];localStorage.setItem("users",JSON.stringify(users));}

// Alternar forms
document.getElementById("goRegister").addEventListener("click",()=>{loginForm.classList.add("hidden");registerForm.classList.remove("hidden");});
document.getElementById("goLogin").addEventListener("click",()=>{registerForm.classList.add("hidden");loginForm.classList.remove("hidden");});

// Cadastro
registerForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const user=document.getElementById("registerUser").value.trim();
    const pass=document.getElementById("registerPass").value.trim();
    if(!user||!pass){alert("⚠️ Preencha usuário e senha!");return;}
    if(user==="Deus"){alert("⚠️ Este usuário é reservado para o administrador!");return;}
    if(users.find(u=>u.user===user)){alert("⚠️ Usuário já existe!");return;}
    users.push({user,pass});
    localStorage.setItem("users",JSON.stringify(users));
    alert("✅ Cadastro realizado!");
    registerForm.reset();
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Login
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const user=document.getElementById("loginUser").value.trim();
    const pass=document.getElementById("loginPass").value.trim();
    if(user==="Deus"&&pass==="god123"){alert("👑 Bem-vindo, Admin!");window.location.href="admin.html";return;}
    const validUser=users.find(u=>u.user===user&&u.pass===pass);
    if(validUser){alert("✅ Login realizado!");window.location.href="home.html";}
    else{alert("❌ Usuário ou senha inválidos!");}
});
