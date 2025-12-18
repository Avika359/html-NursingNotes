for(var i = 0;i<document.querySelectorAll(".sem").length;i++){
    document.querySelectorAll(".sem")[i].addEventListener("click",function(){
        switch (this.innerHTML) {
            case "Sem-1":
                document.querySelector(".sem1").classList.add("click");
                setTimeout(function(){
                    document.querySelector(".sem1").classList.remove("click");
                },500)
                break;
            case "Sem-2":
                document.querySelector(".sem2").classList.add("click");
                setTimeout(function(){
                    document.querySelector(".sem2").classList.remove("click");
                },500)
                break;
            case "Sem-3":
                document.querySelector(".sem3").classList.add("click");
                setTimeout(function(){
                    document.querySelector(".sem3").classList.remove("click");
                },500)
                break;
            case "Sem-4":
                document.querySelector(".sem4").classList.add("click");
                setTimeout(function(){
                    document.querySelector(".sem4").classList.remove("click");
                },500)
                break;
            case "Sem-5":
                document.querySelector(".sem5").classList.add("click");
                break;
            case "Sem-6":
                document.querySelector(".sem6").classList.add("click");
                setTimeout(function(){
                    document.querySelector(".sem6").classList.remove("click");
                },500)
                break;
            case "Sem-7":
                document.querySelector(".sem7").classList.add("click");
                setTimeout(function(){
                    document.querySelector(".sem7").classList.remove("click");
                },500)
                break;
            case "Sem-8":
                document.querySelector(".sem8").classList.add("click");
                setTimeout(function(){
                    document.querySelector(".sem8").classList.remove("click");
                },500)
                break;
            default:
                break;
        }
    });
}
