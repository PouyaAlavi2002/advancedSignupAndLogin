let _li = document.querySelectorAll('ul li')
let _h = document.querySelectorAll('h2')
let _article = document.querySelectorAll('article')
let _button = document.querySelectorAll('button')
let _input = document.querySelectorAll("input")
let second = document.getElementById('second')


_input.forEach((val) => {
    val.addEventListener('focus', () => {
        val.classList.add("border-green-700")

    })
    val.addEventListener('blur', () => {
        val.classList.remove("border-green-700")

    })
})

_li.forEach((value) => {
    value.addEventListener('click', () => {
        let _check = value.getAttribute("data-check")
        _li.forEach((val) => {
            val.classList.remove('bg-green-700')
            val.classList.add('hover:bg-green-700', 'bg-gray-400')
        })
        checkArticle(_check, _li)
        checkHeader(_check, _li)
        checkButton(_check, _li)

    })
})

function checkArticle(check, li) {
        _article.forEach((val) => {
            let data1 = val.getAttribute('data-data')
            if (data1 == check) {
                val.classList.remove('hidden')

            } else {
                val.classList.add('hidden')
            }
        })
    }
function checkButton(check, li) {
        _button.forEach((val) => {
            let data2 = val.getAttribute('data-data')
            if (data2 == check) {
                val.classList.remove('hidden')
                val.classList.add('flex')
            } else {
                val.classList.add('hidden')
            }
        })
    }
function checkHeader(check, li) {
        _h.forEach((val) => {
            let data3 = val.getAttribute('data-data')
            if (data3 == check) {
                val.classList.remove('hidden')
            } else {
                val.classList.add('hidden')
            }
        })
    }

let passErr = document.getElementById("passErr")
let myErr = 0

if (myErr > 0) {
    e.preventDefault()
}
function checkPass(e) {
    let passScore = 0
    if ((e.target.value.search(/[!@#$%&.()*]/)) >= 0) {
        passScore++
    }
    if ((e.target.value.search(/[0-9]/)) >= 0) {
        passScore++
    }
    if ((e.target.value.search(/[a-z]/)) >= 0) {
        passScore++
    }
    if ((e.target.value.search(/[A-Z]/)) >= 0) {
        passScore++
    }
    if (e.target.value.length >= 8) {
        passScore++
    }
    switch (passScore) {
        case 0: passErr.innerHTML = " "; myErr++; break;
        case 1: passErr.innerHTML = "Very Weak"; myErr++; passErr.style.color = "darkred"; break;
        case 2: passErr.innerHTML = "Weak"; myErr++; passErr.style.color = "red"; break;
        case 3: passErr.innerHTML = "Moderate"; passErr.style.color = "orange"; break;
        case 4: passErr.innerHTML = "Strong"; passErr.style.color = "green"; break;
        case 5: passErr.innerHTML = "Very Strong"; passErr.style.color = "darkgreen"; break;

    }
}
