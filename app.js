const menu = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-menu');

function menuToggle() {
    menu.classList.toggle("fa-times");
    mobileMenu.classList.toggle("show-mobile-menu");
}

menu.addEventListener('click', menuToggle);



// Form submission 

const form = document.getElementById("my-form");
    
    async function handleSubmit(e) {
      e.preventDefault();
      const status = document.getElementById("my-form-status");
      const data = new FormData(e.target);
      fetch(e.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your message!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)