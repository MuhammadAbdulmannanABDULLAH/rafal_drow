const inp = document.getElementById("inp")
const sAll = document.getElementById("showItem")
const Show = document.getElementById("show")
const display = document.getElementById("display")
const givatry = document.getElementById("givatry")
const winer1 = document.getElementById("winer1")
const winer2 = document.getElementById("winer2")
const winer3 = document.getElementById("winer3")


const allNamesOfParticipat = []
inp.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        validAndShow()
    }
})
givatry.addEventListener('click', () => {
    if (allNamesOfParticipat.length == 0) {
        alert("their is no entry")
    } else {
        let safelName = safal(allNamesOfParticipat)
        // console.log(safelName);
        for (let i = 1; i < safelName.length; i++) {
            (function (i, count) {
                setTimeout(() => {
                    let rand = Math.floor(Math.random() * (safelName.length))
                    display.innerHTML = safelName[rand]
                    if (count == safelName.length - 1) {
                        if (!winer1.innerHTML) {
                            winer1.innerHTML = safelName[rand]
                            let ind = allNamesOfParticipat.indexOf(safelName[rand])
                            allNamesOfParticipat.splice(ind, 1)
                        } else if (!winer2.innerHTML) {
                            winer2.innerHTML = safelName[rand]
                            let ind = allNamesOfParticipat.indexOf(safelName[rand])
                            allNamesOfParticipat.splice(ind, 1)
                        } else if (!winer3.innerHTML) {
                            winer3.innerHTML = safelName[rand]
                            let ind = allNamesOfParticipat.indexOf(safelName[rand])
                            allNamesOfParticipat.splice(ind, 1)
                            givatry.disabled = true
                        } else {
                            alert("this is alrady over")
                        }
                    }
                }, i)
            })(i * 100, i)
        }
    }
})
Show.addEventListener('click', () => {
    validAndShow()
})
function li(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        sAll.appendChild(li)
        li.innerHTML = `<p>${arr[i]}</p>`
    }
}
function validAndShow() {
    if (inp.value == "" || inp.value == " ") {
        alert("plice input some value")
        inp.readOnly = false;
    } else {
        let val = inp.value.split(",")
        allNamesOfParticipat.push(...val)
        li(allNamesOfParticipat)
        inp.value = ""
        inp.readOnly = true;
    }
}
//this is shafele arr fisher algoridom
function safal(arr) {
    let safalArr = [...arr]
    for (let i = safalArr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = safalArr[rand]
        safalArr[rand] = safalArr[i]
        safalArr[i] = temp
    }
    return safalArr
}
// abdullah,abdulmannan,abdurrahman,abdullah1,abdulmannan1,abdurrahman,abdullah2,abdulmannan2,abdurrahman2,abdullah3,abdulmannan3,abdurrahman3