let Count = 0;
let CountBtn = document.getElementById("count_area")
let Save_Button = document.getElementById("save_btn")
let Saved_Value = document.getElementById("save_value")

function btn() {
    Count += 1
    CountBtn.innerHTML = Count;
}

function save() {
    let string = Count + " - "
    Saved_Value.textContent += string 
    CountBtn.textContent = 0;
    Count = 0
}

