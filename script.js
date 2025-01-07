class AppHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.loadHeader(shadow);
  }

  async loadHeader(shadow) {
    const response = await fetch("header.html");
    const headerHTML = await response.text();
    shadow.innerHTML = headerHTML;


    this.updateAuthState();
  }

  updateAuthState() {
    const authLink = this.shadowRoot.getElementById("auth-link");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (authLink) {
      if (loggedInUser) {
        authLink.setAttribute("href", "profile.html");
        authLink.textContent = "Кабінет";
      } else {
        authLink.setAttribute("href", "authentication.html");
        authLink.textContent = "Вхід";
      }
    }
  }
}
customElements.define("app-header", AppHeader);


class AppFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.loadHeader(shadow);
  }

  async loadHeader(shadow) {
    const response = await fetch("footer.html");
    const headerHTML = await response.text();
    shadow.innerHTML = headerHTML;
  }
}
customElements.define("app-footer", AppFooter);


function goToCourses() {
  window.location.href = "courses.html";
}




function saveUserData(username, password) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Дані збережено!");
}
