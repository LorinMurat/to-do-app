const textbox = document.getElementById("entered");
const listContainer = document.getElementById("listCont");

function addTask() {
  if (textbox.value === '') {
    alert("Write something");
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = textbox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span);
  }
  textbox.value = ""; // input girildikten sonra textboxı temizliyo
}
