let roll = document.querySelector('.roll')

roll.addEventListener('click', () => {
    let son1 = +prompt('sonni kiriting');
    let son2 = +prompt('sonni kiriting');

    function roll(a, b) {
        return a + b
    }
    alert(roll(son2, son2))
})

let card = document.querySelector('.card')

card.addEventListener('click', () => {
    let son1 = +prompt('sonni kiriting');
    let son2 = +prompt('sonni kiriting');

    function card(a, b) {
        return a / b
    }
    alert(card(son1, son2))
})

let bag = document.querySelector('.bag')

bag.addEventListener('click', () => {
    let son1 = +prompt('sonni kiriting');
    let son2 = +prompt('sonni kiriting');

    function bag(a, b) {
        return a * b
    }
    alert(bag(son1, son2))
})

let call = document.querySelector('.call')

call.addEventListener('click', () => {
    let son1 = +prompt('sonni kiriting');
    let son2 = +prompt('sonni kiriting');

    function call(a, b) {
        return a - b
    }
    alert(call(son1, son2))
})