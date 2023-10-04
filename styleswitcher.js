
const styleSwitcher = document.getElementById('style-switcher');
const stylesheet = document.getElementById('stylesheet');


let selectedStylesheet = localStorage.getItem('selectedStylesheet') || 'main.css';
stylesheet.href = selectedStylesheet;


function toggleStylesheet() {
    selectedStylesheet = selectedStylesheet === 'main.css' ? 'alternate.css' : 'main.css';
    stylesheet.href = selectedStylesheet;
    
    
    localStorage.setItem('selectedStylesheet', selectedStylesheet);
}


styleSwitcher.addEventListener('click', toggleStylesheet);
