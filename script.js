let turn = new Audio('./Drop.mp3')
let currTurn = "x"
let winner = false
let count = 1
let yesWon = false
let Xwin = 0
let Owin = 0

function changeTurn() {

    return currTurn === "x" ? "o" : "x"

}

function checkWin() {





    let box1 = document.querySelector('.block-1').innerHTML
    let box2 = document.querySelector('.block-2').innerHTML
    let box3 = document.querySelector('.block-3').innerHTML
    let box4 = document.querySelector('.block-4').innerHTML
    let box5 = document.querySelector('.block-5').innerHTML
    let box6 = document.querySelector('.block-6').innerHTML
    let box7 = document.querySelector('.block-7').innerHTML
    let box8 = document.querySelector('.block-8').innerHTML
    let box9 = document.querySelector('.block-9').innerHTML




    if ((box1 === box2) && (box2 === box3) && box2 !== "") {
        yesWon = true
        winner = true
        document.querySelector('.turn').innerHTML = (box1).toUpperCase() + " -" + " W O N"
        update(box1)
        document.querySelector('.h-4').classList.remove('dn')


    }
    else if ((box4 === box5) && (box5 === box6) && box5 !== "") {
        yesWon = true
        winner = true
        document.querySelector('.turn').innerHTML = (box5).toUpperCase() + " -" + " W O N"
        update(box4)
        document.querySelector('.h-5').classList.remove('dn')

    }
    else if ((box7 === box8) && (box8 === box9) && box7 !== "") {
        yesWon = true
        winner = true
        document.querySelector('.turn').innerHTML = (box8).toUpperCase() + " -" + " W O N"
        update(box7)
        document.querySelector('.h-5').classList.remove('dn')

    }
    else if ((box1 === box4) && (box4 === box7) && box1 !== "") {
        yesWon = true
        winner = true
        document.querySelector('.turn').innerHTML = (box4).toUpperCase() + " -" + " W O N"
        update(box1)
        document.querySelector('.v-1').classList.remove('dn')

    }

    else if ((box2 === box5) && (box5 === box8) && box5 !== "") {
        yesWon = true
        winner = true
        document.querySelector('.turn').innerHTML = (box5).toUpperCase() + " -" + " W O N"
        update(box2)
        document.querySelector('.v-2').classList.remove('dn')

    }
    else if ((box3 === box6) && (box6 === box9) && box3 !== "") {
        yesWon = true
        winner = true
        document.querySelector('.turn').innerHTML = (box6).toUpperCase() + " -" + " W O N"
        update(box3)
        document.querySelector('.v-3').classList.remove('dn')

    }


    else if ((box1 === box5) && (box5 === box9) && box5 !== "") {
        yesWon = true
        winner = true
        document.querySelector('.turn').innerHTML = (box5).toUpperCase() + " -" + " W O N"
        update(box1)
        document.querySelector('.d-7').classList.remove('dn')

    }
    else if ((box3 === box5) && (box5 === box7) && box5 !== "") {
        yesWon = true
        winner = true
        document.querySelector('.turn').innerHTML = (box5).toUpperCase() + " -" + " W O N"
        update(box3)
        document.querySelector('.d-8').classList.remove('dn')

    }




}

let box = document.getElementsByClassName('everyblock')



Array.from(box).forEach((ele) => {
    if (yesWon === true) {
        return
    }


    ele.addEventListener('click', (e) => {
        count++
        if (count == 10) {
            document.querySelector('.turn').innerHTML = "Game Over"
        }

        if (yesWon === true) {
            return
        }




        if (ele.innerHTML === "x" || ele.innerHTML === "o") {
            return
        }


        ele.classList.add("red")
        ele.innerHTML = currTurn
        currTurn === 'x' ? ele.classList.add('red') : ele.classList.add('blue')
        turn.play()
        checkWin()
        currTurn = changeTurn()
        if (winner == false) {


            document.querySelector('.turn').innerHTML = currTurn.toUpperCase() + "'s" + " Turn"
        }
        
    })


})

function reset() {
    let boxes = document.querySelectorAll('.everyblock');
    Array.from(boxes).forEach(ele => {
        ele.classList.remove('red')
        ele.classList.remove('blue')
        ele.innerHTML = ""
    })
    
    let lines = document.querySelectorAll('.alllines');
    Array.from(lines).forEach(ele => {
        ele.classList.remove('dn')
        ele.classList.add('dn')
        ele.innerHTML = ""
    })
    winner = false
    yesWon = false
    currTurn = "x"
    document.querySelector('.turn').innerHTML = currTurn.toUpperCase() + "'s" + " Turn"
    document.querySelector('.fire').classList.add('dn')
    
}
function update(box) {
    document.querySelector('.fire').classList.remove('dn')
    if (box === "x") {
        Xwin++
        document.querySelector('.xscore').innerHTML = Xwin
    }
    else {
        Owin++
        document.querySelector('.oscore').innerHTML = Owin
    }



}