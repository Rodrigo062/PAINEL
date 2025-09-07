// Logout
document.getElementById("logout").addEventListener("click",()=>{window.location.href="index.html";});

// Anotações
const notes=document.getElementById("notes");
const savedNotes=localStorage.getItem("myNotes");
if(savedNotes) notes.value=savedNotes;
document.getElementById("saveNotes").addEventListener("click",()=>{localStorage.setItem("myNotes",notes.value);alert("✅ Anotações salvas!");});

// Lembretes
const reminderInput=document.getElementById("reminderInput");
const reminderList=document.getElementById("reminderList");
let reminders=JSON.parse(localStorage.getItem("reminders"))||[];
function renderReminders(){reminderList.innerHTML="";reminders.forEach((r,i)=>{const li=document.createElement("li");li.textContent=r;li.addEventListener("click",()=>{reminders.splice(i,1);localStorage.setItem("reminders",JSON.stringify(reminders));renderReminders();});reminderList.appendChild(li);});}
renderReminders();
document.getElementById("addReminder").addEventListener("click",()=>{if(reminderInput.value.trim()!==""){reminders.push(reminderInput.value);localStorage.setItem("reminders",JSON.stringify(reminders));renderReminders();reminderInput.value="";}});

// Planilha
document.getElementById("addRow").addEventListener("click",()=>{const table=document.getElementById("spreadsheet");const row=table.insertRow();for(let i=0;i<3;i++){const cell=row.insertCell(i);cell.contentEditable="true";}});

