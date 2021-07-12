const headerNav = document.getElementById('header-nav');
const btnUnmuted = document.getElementById('btnUnmuted');
const btnMuted = document.getElementById('btnMuted');
const vid = document.getElementById("bgvid");

const modifyHeader = (event) => {

}

// falta fazer função modifyHeader

headerNav.addEventListener('scroll', modifyHeader);


const enableMute = (event) => {
    vid.muted = true;
    btnMuted.classList.remove('btnNone');
    btnUnmuted.classList.add('btnNone');
}
const disableMute = (event) => {
    vid.muted = false;
    btnUnmuted.classList.remove('btnNone');
    btnMuted.classList.add('btnNone');
}

btnMuted.addEventListener('click', disableMute);
btnUnmuted.addEventListener('click', enableMute);


window.addEventListener('resize', () => {
    if (innerWidth > 768){
        vid.muted = true;
        btnMuted.classList.remove('btnNone');
        btnUnmuted.classList.add('btnNone');
    }
})

