const wrap = document.getElementsByClassName('wrap')[0]
const text = document.getElementsByClassName('inner')[0]

const inBtn = document.getElementsByClassName('in')[0]
const outBtn = document.getElementsByClassName('out')[0]
const btns = document.getElementsByClassName('btns')[0]

function opsText(e) {
    e.target.classList.remove('choosed')
    wrap.classList.toggle('checked')
    if(e.target === inBtn) {
        outBtn.classList.add('choosed')
    }
    if(e.target === outBtn) {
        inBtn.classList.add('choosed')
    }
}

btns.addEventListener('click', opsText, false)