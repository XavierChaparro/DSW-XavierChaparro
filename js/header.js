let activate = true; // if yes the links are hidden
const mobile_links = document.getElementById('mobile_links');
const handleLinks = () => {
    activate ? mobile_links.classList.remove('hidden_links')
    : mobile_links.classList.add('hidden_links');
    activate = !activate;
}
const links_header = document.getElementById('mobile_links');

links_header.innerHTML = `
    <div class="father_link">
        <a class="principal_link" href="index.html">Inicio</a>
        </div>
        <div class="father_link">
        <a class="principal_link" href="github.html">Conceptos</a>
        <ul class="child_links">
            <li>
                <a href="github.html">Github</a>
            </li>
            <li>
                <a href="Unad.html">Unad</a>
            </li>
        </ul>
        </div>
        <div class="father_link">
        <a class="principal_link" href="index.html">Recursos</a>
        <ul class="child_links">
            <li>
                <a href="Recurso1.html">Recurso 1</a>
            </li>
            <li>
                <a href="Recurso2.html">Recurso 2</a>
            </li>
        </ul>
        </div>
        <div class="father_link">
        <a class="principal_link" href="#">AutoEvaluación</a>
        <ul class="child_links">
            <li>
                <a href="Assessment1.html">AutoEvaluación 1</a>
            </li>
            <li>
                <a href="Assessment2.html">AutoEvaluación 2</a>
            </li>
        </ul>
        </div>
        <div class="father_link">
        <a class="principal_link" href="Author.html">Autor</a>
    </div>
`;