function adjustHeight() {
    document.body.style.height = `${window.innerHeight}px`;
}

window.addEventListener('resize', adjustHeight);
window.addEventListener('load', adjustHeight);
