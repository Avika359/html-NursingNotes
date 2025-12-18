for(var i = 0;i<document.querySelectorAll(".sem").length;i++){
    document.querySelectorAll(".sem")[i].addEventListener("click",function(){
        alert("hello");
        switch (this.innerHTML) {
            case "em-1":
                document.querySelector(".sem1").classList.add("click");
                break;
            case "sem-2":
                document.querySelector(".sem2").classList.add("click");
                break;
            case "sem-3":
                document.querySelector(".sem3").classList.add("click");
                break;
            case "sem-4":
                document.querySelector(".sem4").classList.add("click");
                break;
            case "sem-5":
                document.querySelector(".sem5").classList.add("click");
                break;
            case "sem-6":
                document.querySelector(".sem6").classList.add("click");
                break;
            case "sem-7":
                document.querySelector(".sem7").classList.add("click");
                break;
            case "sem-8":
                document.querySelector(".sem8").classList.add("click");
                break;
            default:
                break;
        }
    });
}