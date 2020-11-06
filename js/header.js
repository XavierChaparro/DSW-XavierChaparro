let activate = true; // if yes the links are hidden
const mobile_links = document.getElementById('mobile_links');
const handleLinks = () => {
    activate ? mobile_links.classList.remove('hidden_links')
    : mobile_links.classList.add('hidden_links');
    activate = !activate;
}
