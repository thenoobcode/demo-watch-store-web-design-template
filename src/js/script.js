window.onscroll=(ev)=>{
    let menu=document.getElementById("menu");
    if(menu!=null){
        let opacity=window.scrollY / (window.innerHeight * 0.75);
        opacity= opacity>1 ? 1: opacity;
        menu.style.background=`rgb(11, 11, 11, ${opacity})`;
    }
}

function menuClick(target, ev){
    ev.preventDefault();
    let menu=document.getElementById("menu");
    let targetEl=document.getElementById(target);
    let top=target ? (window.pageYOffset + targetEl.getBoundingClientRect().top - menu.clientHeight) : 0;
    window.scrollTo({behavior: 'smooth',top: top});
}