
// alert the selected text
export function listAlert() {
    document.getElementById("btn").addEventListener("click", function () {
        const opt = document.querySelector('input[name="what"]:checked').value;
        alert(opt);
    });
}

// call the function 
document.addEventListener('DOMContentLoaded', function () {
    listAlert();
});