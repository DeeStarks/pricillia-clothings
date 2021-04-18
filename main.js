window.onload = function(){
    document.querySelector('.insta_accounts').setAttribute("style", "display: none;")
}

document.querySelector('.insta_btn').onclick = function(){
    if(document.querySelector(".insta_accounts").style.display == "none"){
        document.querySelector('.insta_accounts').setAttribute("style", "display: block;")
    } else {
        document.querySelector('.insta_accounts').setAttribute("style", "display: none;")
    }
}