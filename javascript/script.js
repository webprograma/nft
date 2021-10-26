const mainItem = [...document.querySelectorAll('.main__item')]
const topBlock = document.querySelectorAll('.top__block')
const followButton = [...document.querySelectorAll('.follow__button')]
const headerImg = document.querySelector('.header__img')
const headerAva = document.querySelector('.ava__text')

mainItem.forEach((el) =>{
    el.addEventListener('click', (e) => {
        let img = el.querySelector('img').getAttribute('src')
        headerImg.querySelector('img').setAttribute('src', img)
        
        let ava = el.querySelector('.ava-img').getAttribute('src')
        headerAva.setAttribute('src', ava)
    })
})

topBlock.forEach((el) =>{
    el.addEventListener('click', (e) => {
        let img = el.querySelector('img').getAttribute('src')
        headerImg.querySelector('img').setAttribute('src', img)
        
        let ava = el.querySelector('.ava-img').getAttribute('src')
        headerAva.setAttribute('src', ava)
    })
})

followButton.forEach((el) =>{
    el.addEventListener('click', (e) =>{
        if (el.innerHTML === 'Follow') {
            el.innerHTML = 'Unfollow'
            el.classList.add('red')
        } else if (el.innerHTML === 'Unfollow') {
            el.innerHTML = 'Follow'
            el.classList.remove('red')
        }
    })
})

