function M_saad() {
    let nameValue = document.querySelector('.in').value.trim();
    let rollValue = document.querySelector('.inp').value.trim();
    let cnicValue = document.querySelector('.ipn').value.trim();

    let result = document.getElementById('resultBox');

    // Har field ki validity check karein
    let isNameMissing = (nameValue === "");
    let isRollMissing = (rollValue === "" || rollValue.length < 6);
    let isCnicMissing = (cnicValue === "" || cnicValue.length < 13);

    // Agar koi bhi cheez missing ya invalid hai
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

        // Alert ke bajaye ab yeh message resultBox mein show hoga
        result.innerHTML = `<p style="color: black; font-weight: bold;">Please enter your: ${missingFields.join(", ")}!</p>`;
        result.style.backgroundColor = "#ffe6e6"; // Error ke liye halka red background
        alert("Please enter your: " + missingFields.join(", ") + "!");
        return;
          
          
    }

    // Agar sabhi details bilkul theek hain
    console.log("Sabhi details theek hain, result generate ho raha hai...");
    result.innerHTML = "<h1>Moe Moe</h1>";
    result.style.backgroundColor = "white";
}
