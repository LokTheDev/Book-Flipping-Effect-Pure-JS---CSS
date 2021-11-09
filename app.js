//Dom
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const startBtn = document.querySelector("#start-btn");
const scriptText = document.querySelector(".scriptContent");
const scriptPic = document.querySelector(".scriptPic")


//Logic Brain
let currentPage = 0;



//function
const start=()=>{
    startBtn.style.display = "none"
    prevBtn.style.opacity = 1
    nextBtn.style.opacity = 1
    document.querySelector("#p0").style.marginLeft = "70vw"
    document.querySelector(`#p${currentPage}`).style.transform = "scale(0.8)";
    document.querySelector("#b1").style.backgroundColor = "black"
    currentPage++
    scriptText.innerHTML = script[1]
    document.querySelector("#clicker").innerHTML=""
}

const nextPage=()=>{
    if(currentPage < 10){
        document.querySelector(`#p${currentPage}`).style.marginLeft = "70vw"
        document.querySelector(`#p${currentPage}`).style.transform = "scale(0.7)";
        document.querySelector(`#b${currentPage+1}`).style.backgroundColor = "black"
        currentPage++
        scriptText.innerHTML = script[currentPage]

    }else{
        currentPage=10
    }
}

const prevPage=()=>{
    if(currentPage > 0){
        document.querySelector(`#p${currentPage-1}`).style.transform = "scale(1.0)";
        //document.querySelector(`#p${currentPage-1}`).style.marginRight = "0vw"
        document.querySelector(`#p${currentPage-1}`).style.marginLeft = "0vw"
        document.querySelector(`#b${currentPage}`).style.backgroundColor = "white"

        currentPage--
        scriptText.innerHTML = script[currentPage]
        pageNum.innerHTML = `Page : ${currentPage}/10`
    }else{
        currentPage=0
    }
}


//EventListener
startBtn.addEventListener("click", start)
nextBtn.addEventListener("click", nextPage)
prevBtn.addEventListener("click", prevPage)




//Script
const script = [
    [`<h1>Inferno</h1>`],
    [`Midway upon the journey of our life
    I found myself within a forest dark,
    For the straightforward pathway had been lost.`],
    [`Ah me! how hard a thing it is to say
    What was this forest savage, rough, and stern,
    Which in the very thought renews the fear.`],
    [`So bitter is it, death is little more;
    But of the good to treat, which there I found,
    Speak will I of the other things I saw there.`],
    [`I cannot well repeat how there I entered,
    So full was I of slumber at the moment
    In which I had abandoned the true way.`],
    [`But after I had reached a mountain's foot,
    At that point where the valley terminated,
    Which had with consternation pierced my heart,`],
    [`Upward I looked, and I beheld its shoulders,
    Vested already with that planet's rays
    Which leadeth others right by every road.
    `],
    [`Then was the fear a little quieted
    That in my heart's lake had endured throughout
    The night, which I had passed so piteously.`],
    [`And even as he, who, with distressful breath,
    Forth issued from the sea upon the shore,
    Turns to the water perilous and gazes;`],
    [`So did my soul, that still was fleeing onward,
    Turn itself back to re-behold the pass
    Which never yet a living person left.`],
    [`End`],
]


function test(){
    document.querySelector("#p0").width = "1%"
}