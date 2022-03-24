//Cách 1: Không dùng biểu thức chính quy

//Cách 2: Dùng biểu thức chính quy

// // let userID = document.querySelector("#txtUserID") 
// statusOfUserID = document.getElementById("statusOfUserID")

// userID.addEventListener('focus', function(){
//     // userID.style.backgroundColor = "yellow"
//     this.style.border = "2px solid green" 
// })

// userID.addEventListener("focusout", leaveUserID)

// function leaveUserID() {
//     // Cách 1: Không dùng chính quy
//     // if(userID.value.length >=5 && userID.value.length <=12){
//     //     statusOfUserID.textContent = "UserID hợp lệ"
//     //     statusOfUserID.style.color = "blue"
//     // }
//     // else{
//     //     statusOfUserID.textContent = "Không hợp lệ"
//     //     statusOfUserID.style.color = "red"
//     // }

//     // Cách 2: Dùng chính quy
//     var userIDRegex = /^[a-zA-Z0-9]{5,12}+$/;
//     if(userIDRegex.test(userID.value)){
//         statusOfUserID.textContent = "UserID hợp lệ"
//         statusOfUserID.style.color = "blue"
//     }
//     else{
//         statusOfUserID.textContent = "Không hợp lệ"
//         statusOfUserID.style.color = "red"
//     }

// }

// userID.onchange = function(){
//     alert("Bạn vừa thay đổi userID và thoát khaori userID")
// }

// Cách 2: Xử lí khi nhấp vào Submit
function checkUserID() {
    let userID = document.getElementById("txtUserID") 
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if(userIDRegex.test(userID.value)){
        return true
    }
    return false
}

function checkPassword() {
    let password = document.getElementById("txtpassword") 
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if(passwordRegex.test(password.value)){
        return true
    }
    return false
}

function checkName() {
    let name = document.getElementById("txtName") 
    var nameRegex = /^[A-Za-z]+$/ig;
    if(nameRegex.test(name.value)){
        return true
    }
    return false
}

function checkAddress() {
    let address = document.getElementById("txtAddress") 
    var addressRegex = /^(?:\w+\.?,?\s?){1,60}$/igm;
    if(addressRegex.test(address.value)){
        return true
    }
    return false
}

function requiredCountry() {
    let required = document.getElementById("txtSelect")
    let countryselect = required.options[required.selectedIndex].text
    if(countryselect === "(Please select a country)"){
        return true
    }
    return false
}

function checkZipCode() {
    let ZipCode = document.getElementById("txtZipCode") 
    var ZipCodeRegex = /[0-9]/g;
    if(ZipCodeRegex.test(ZipCode.value)){
        return true
    }
    return false
}

function checkEmail() {
    let email = document.getElementById("txtEmail") 
    var emailRegex = /[A-Z0-9._%+-]+@gmail\.com/igm;
    if(emailRegex.test(email.value)){
        return true
    }
    return false
}

function checkGender() {
    let gender = document.querySelectorAll("#txtGender")
    if(gender[0].checked === true || gender[1].checked === true){
        return true
    }
    return false
}

function checkLanguage(){
    let language = document.querySelectorAll(".txtLanguage")
    if(language[0].checked === true || language[1].checked === true){
        return true
    }
    return false;
}

function othersLanguage(){
    let otherLanguages = document.getElementById("txtCheckbox")
    let language = otherLanguages.options[otherLanguages.selectedIndex].text
    if(language === "(Other Language)"){
        return true
    }
    return false
}


function checkAbout() {
    let about = document.getElementById("txtAbout") 
    var aboutRegex = /^(?:\w+\.?,?\s?){1,60}$/igm;
    if(aboutRegex.test(about.value)){
        return true
    }
    return false
}


let register = document.getElementById("btnRegister")

register.addEventListener("click", function(e){
    e.preventDefault()

    let statusOfUserID = document.getElementById("statusOfUserID")
    let statusOfPassword = document.getElementById("statusOfPassword")
    let statusOfSelectcountry = document.getElementById("statusOfSelectcountry")


    // User_ID
    if(checkUserID() == true){
        statusOfUserID.textContent = "Hợp lệ"
        statusOfUserID.style.color = "green"
    }
    else{
        statusOfUserID.textContent = "Không hợp lệ - Mời nhập lại"
        statusOfUserID.style.color = "red"
    }

    // Password
    if(checkPassword() == true){
        statusOfPassword.textContent = "Hợp lệ"
        statusOfPassword.style.color = "green"
    }
    else{ 
        statusOfPassword.textContent = "Không hợp lệ - Mời nhập lại"
        statusOfPassword.style.color = "red"
    }

    // Name
    if(checkName() == true){
        statusOfName.textContent = "Hợp lệ"
        statusOfName.style.color = "green"
    }
    else{
        statusOfName.textContent = "Không hợp lệ - Mời nhập lại"
        statusOfName.style.color = "red"
    }

    // Address
    let statusOfAddress = document.getElementById("statusOfAddress")
     
    if( checkAddress() == true){
        statusOfAddress.textContent = " "
    }
    else{
        statusOfAddress.textContent = "Không bắt buộc"
        statusOfAddress.style.color = "red"
    }

    //Country
    if(requiredCountry() == true){
        statusOfSelectcountry.textContent = "Hãy chọn quốc gia"
        statusOfSelectcountry.style.color = "red"
    }
    else{
        statusOfSelectcountry.textContent = "Hợp lệ"
        statusOfSelectcountry.style.color = "green"
    }

    // ZIP Code
    let statusOfZipCode = document.getElementById("statusOfZipCode")

    if(checkZipCode() == true){
        statusOfZipCode.textContent = "Hợp lệ"
        statusOfZipCode.style.color = "green"
    }
    else{
        statusOfZipCode.textContent = "Không hợp lệ - Mời nhập lại"
        statusOfZipCode.style.color = "red"
    }

    //Email
    let statusOfEmail = document.getElementById("statusOfEmail")
    if(checkEmail() == true){
        statusOfEmail.textContent = "Hợp lệ"
        statusOfEmail.style.color = "green"
    }
    else{
        statusOfEmail.textContent = "Không hợp lệ - Mời nhập lại"
        statusOfEmail.style.color = "red"
    }

    // Gender
    let statusOfRadio = document.getElementById("statusOfRadio")

    if(checkGender() == true){
        statusOfRadio.textContent = "Hợp lệ"
        statusOfRadio.style.color = "green"
    }
    else{
        statusOfRadio.textContent = "Hãy chọn giới tính của bạn"
        statusOfRadio.style.color = "red"
    }

    // Language
    let statusOfCheckbox = document.getElementById("statusOfCheckbox")
    if(othersLanguage() == true){
        statusOfCheckbox.textContent = "Hãy chọn ngôn ngữ của bạn"
        statusOfCheckbox.style.color = "red"
    }
    else{
        statusOfCheckbox.textContent = "Hợp lệ"
        statusOfCheckbox.style.color = "green"
    }


    if(checkLanguage() == true || othersLanguage() == false){
        statusOfCheckbox.textContent = "Hợp lệ"
        statusOfCheckbox.style.color = "green"
    }
    else{
        statusOfCheckbox.textContent = "Hãy chọn ngôn ngữ của bạn"
        statusOfCheckbox.style.color = "red"
    }

    // About
    let statusOfAbout = document.getElementById("statusOfAbout")
     
    if(checkAbout() == true){
        statusOfAbout.textContent = " "
    }
    else{
        statusOfAbout.textContent = "Không bắt buộc"
        statusOfAbout.style.color = "red"
    }
})

