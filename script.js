
// // Main function jo button click hone par chalega
// function M_saad() {
//     let isNameValid = checkName();
//     let isRollValid = checkRollNumber();
//     let isCnicValid = checkCnic();

//     // Yahan result ko select karna zaroori hai
//     let result = document.getElementById('resultBox');

//     // Agar teeno fields theek hain, tabhi agla process hoga
//     if (isNameValid && isRollValid && isCnicValid) {
//         console.log("Sabhi details theek hain, result generate ho raha hai...");
//         result.innerHTML = "<h1>Moe Moe</h1>";
//         result.style.backgroundColor = "white";
//     }
// }

// // 1. Pehla function: Name check karne ke liye
// function checkName() {
//     let nameValue = document.querySelector('.in').value.trim();
//     if (nameValue === "") {
//         alert("Please enter your correct and full name , roll number , CNIC number !");
//         return false; // Agar khaali hai toh aage process rok dega
//     }
//     // Yahan aap name se juda koi CSS ya logic bhi add kar sakte hain
//     return true;
// }

// // 2. Doosra function: Roll Number check karne ke liye (Laazmi 6 digits ka hona chahiye)
// function checkRollNumber() {
//     let rollValue = document.querySelector('.inp').value.trim();
//     if (rollValue === "") {
//         // alert("Please enter your roll number!");
//         return false;
//     }
    
//     // Roll number kam az kam 6 digits ka hona chahiye
//     if (rollValue.length < 6) {
//         alert("Your roll number should be 6 dight!");
//         return false;
//     }

//     return true;
// }

// // 3. Teesra function: CNIC number check karne ke liye
// function checkCnic() {
//     let cnicValue = document.querySelector('.ipn').value.trim();
//     if (cnicValue === "") {
//         // alert("Please enter your correct CNIC number!");
//         return false;
//     }
    
//     // Misal ke tor par: CNIC ki length check karne ki shart (jaise 13 digits hone chahiye)
//     if (cnicValue.length < 13) {
//         alert("Your CNIC number should be 13 dight!");
//         return false;
//     }

//     return true;
// }

// Main function jo button click hone par chalega
function M_saad() {
    let nameValue = document.querySelector('.in').value.trim();
    let rollValue = document.querySelector('.inp').value.trim();
    let cnicValue = document.querySelector('.ipn').value.trim();

    let result = document.getElementById('resultBox');

    // Har field ki validity check karein
    let isNameMissing = (nameValue === "");
    let isRollMissing = (rollValue === "" || rollValue.length < 6);
    let isCnicMissing = (cnicValue === "" || cnicValue.length < 13);

    // Agar koi bhi cheez missing ya invalid hai, toh batayein ke kya rehta hai
    if (isNameMissing || isRollMissing || isCnicMissing) {
        let missingFields = [];

        if (isNameMissing) {
            missingFields.push("Name");
        }
        if (isRollMissing) {
            missingFields.push("Roll Number should be (6 digits)");
        }
        if (isCnicMissing) {
            missingFields.push("CNIC Number should be (13 digits)");
        }

        // Jo-jo cheezein rehti hain, unhi ke naam ka alert ban jayega
        alert("Please enter your: " + missingFields.join(", ") + "!");
        return;
    }

    // Agar sabhi details bilkul theek hain
    console.log("Sabhi details theek hain, result generate ho raha hai...");
    result.innerHTML = "<h1>Moe Moe</h1>";
    result.style.backgroundColor = "white";
}
