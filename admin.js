// Logout
document.getElementById("logout").addEventListener("click",()=>{window.location.href="index.html";});

// Carregar usuários
let users=JSON.parse(localStorage.getItem("users"))||[];
const userTableBody=document.querySelector("#userTable tbody");
const totalUsers=document.getElementById("totalUsers");

function renderUsers(){
    userTableBody.innerHTML="";
    users.forEach((userObj,index)=>{
        const tr=document.createElement("tr");
        const tdUser=document.createElement("td"); tdUser.textContent=userObj.user;
        const tdPass=document.createElement("td"); tdPass.textContent=userObj.pass;
        const tdAction=document.createElement("td");
        const deleteBtn=document.createElement("button"); deleteBtn.textContent="Excluir"; deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click",()=>{
            if(confirm(`Deseja excluir "${userObj.user}"?`)){
                users.splice(index,1);
                localStorage.setItem("users",JSON.stringify(users));
                renderUsers();
            }
        });
        tdAction.appendChild(deleteBtn);
        tr.appendChild(tdUser); tr.appendChild(tdPass); tr.appendChild(tdAction);
        userTableBody.appendChild(tr);
    });
    totalUsers.textContent=`Total de usuários: ${users.length}`;
}

renderUsers();
