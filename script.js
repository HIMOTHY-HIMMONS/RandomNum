function guess() {
    var randomnumber = Math.round(Math.random() * 11)
    var submit = document.getElementById("input").value;

    if(submit == randomnumber){
        document.getElementById("changedtext").innerText = "You Got It!"
    }
    else if(submit < randomnumber){
        document.getElementById("changedtext").innerText = "Too low. Try Again."
    }
    else if(submit > randomnumber){
        document.getElementById("changedtext").innerText = "Too high. Try Again."
    }

    console.log(randomnumber)
}