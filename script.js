function sendCredentials(username) {
    nomeAcc.textContent = ` ${username}`;    
    // console.log(userPage.firstElementChild.textContent);
    // userPage.firstElementChild.textContent.replace("NOME", username);
  }
  
  function saveCredentials(user, pass) {
    window.localStorage.setItem("username", user);
    window.localStorage.setItem("password", pass);
  }
  
  function loadCredentials(key) {
    return window.localStorage.getItem(key);
  }


  const nomeAcc = document.querySelector(".nomeP")
  const userPage = document.querySelector(".userPage");
  const modalEl = document.querySelector(".modal");
  const userInputEl = document.querySelector("#user");
  const passInputEl = document.querySelector("#pass");
  const btnSendEl = document.querySelector("#btnSend");
  
  const user = {
    username: "",
    password: "",
  };

// Local Storage

  sendCredentials(loadCredentials("username"));

btnSendEl.addEventListener("click", (evt) => {
  user.username = userInputEl.value;
  user.password = passInputEl.value;

  saveCredentials(user.username, user.password);

  const userStorage = window.localStorage.getItem("username");

  sendCredentials(userStorage);
});
