// universal-login-inject.js
import modal from "./modal.html";

const universalHTMLInject = {
  htmlContent: modal,
  cssContent: ``,
  scriptContent: `
		function closeModal() {
				document.getElementById('modal-information').style.display = 'none';
		}

		document.addEventListener('click', function(event) {
				var modal = document.getElementById('modal-information');

				var isClickOutside = event.target.classList.contains('modal-background');
				
				if (isClickOutside) {
						modal.style.display = 'none';
				}
		});
	`,
	openModal: function () {
        this.injectContent();
		document.getElementById('modal-information').style.display = 'flex';
	},
  injectContent: function () {
    // const container = document.getElementById(containerId);
    // if (container) {
    //   container.innerHTML = this.htmlContent;

    //   const style = document.createElement("style");
    //   style.textContent = this.cssContent;
    //   document.head.appendChild(style);

    //   const script = document.createElement("script");
    //   script.textContent = this.scriptContent;
    //   document.head.appendChild(script);
    // } else {
    //   console.error(`Container with id "${containerId}" not found.`);
    // }

		const container = document.body;

    if (container) {
      const modalContainer = document.createElement('div');
      modalContainer.innerHTML = this.htmlContent;
      container.appendChild(modalContainer);

      const style = document.createElement("style");
      style.textContent = this.cssContent;
      document.head.appendChild(style);

      const script = document.createElement("script");
      script.textContent = this.scriptContent;
      document.body.appendChild(script);
    } else {
      console.error(`Container not found.`);
    }
  },
};

export default universalHTMLInject;
