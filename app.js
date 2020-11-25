

function Submission() {
    let getMarks = document.getElementById("num1").value;
    let outOfMarks = document.getElementById("num2").value;

    getMarks = parseInt(getMarks);
    outOfMarks = parseInt(outOfMarks);

    const percentage = (getMarks / outOfMarks) * 100;
    document.getElementById("passing-marks-result").innerText = getMarks
    document.getElementById("total-marks-result").innerText = outOfMarks
    document.getElementById("percentage-result").innerText = percentage + "%"


    if (percentage <= 30) {
        document.getElementById("grade-result").innerText = "Fail";

    }
    else if (percentage < 40) {
        document.getElementById("grade-result").innerText = "E";

    } else if (percentage < 50) {
        document.getElementById("grade-result").innerText = "D";

    } else if (percentage < 60) {

        document.getElementById("grade-result").innerText = "C";

    } else if (percentage < 70) {

        document.getElementById("grade-result").innerText = "B";

    } else if (percentage < 80) {

        document.getElementById("grade-result").innerText = "A";

    } else if (percentage < 90) {

        document.getElementById("grade-result").innerText = "A1";

    } else {

        document.getElementById("grade-result").innerText = "A1+"

    }



}