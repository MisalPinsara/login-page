function myFunction(){
const element1 = document.getElementById("userInt");
const element2 = document.getElementById("passInt");
if (element1.value.trim() === "" && element2.value.trim() === "") {
    alert("Please fill in both the username and password fields.");
} else {
    alert("Logged in successfully!");
}
}