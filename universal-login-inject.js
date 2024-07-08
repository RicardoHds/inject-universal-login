// universal-login-inject.js
const myLibrary = {
    htmlContent: `
        <div class="my-class">
            <h2>Contenido Inyectado</h2>
            <p>Este es un párrafo dentro del contenido inyectado.</p>
            <button id="myButton">Click Me</button>
        </div>
    `,
    cssContent: `
        .my-class {
            color: blue;
            border: 1px solid black;
            padding: 10px;
        }
    `,
    scriptContent: `
        document.getElementById('myButton').addEventListener('click', function() {
            alert('Button inside injected HTML clicked!');
        });
        console.log('Script dentro del contenido inyectado ejecutado.');
    `,
    injectContent: function(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            // Inyectar HTML
            container.innerHTML = this.htmlContent;
            // Inyectar CSS
            const style = document.createElement('style');
            style.textContent = this.cssContent;
            document.head.appendChild(style);
            // Ejecutar Scripts
            const script = document.createElement('script');
            script.textContent = this.scriptContent;
            document.head.appendChild(script);
        } else {
            console.error(`Container with id "${containerId}" not found.`);
        }
    }
};

export default myLibrary;
