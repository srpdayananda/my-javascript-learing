function total() {
    let sub1 = parseInt(document.getElementById("sci").value);
    let sub2 = parseInt(document.getElementById("mat").value);
    let sub3 = parseInt(document.getElementById("com").value);
    let sub4 = parseInt(document.getElementById("eng").value);
    let sub5 = parseInt(document.getElementById("sin").value);

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Please Enter Markes In Rance Of 100");
    } else {
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "science marks:" + sub1 + "<br> mathes marks:" + sub2 + "<br> computer marks:" + sub3 + "<br> english marks:" + sub4 + "<br> sinhala marks:" + sub5 + "<br>       total marks:" + total;
    }

}
const totalButton = document.getElementById("totalButton");
totalButton.addEventListener("click", total);


function average() {
    let sub1 = parseInt(document.getElementById("sci").value);
    let sub2 = parseInt(document.getElementById("mat").value);
    let sub3 = parseInt(document.getElementById("com").value);
    let sub4 = parseInt(document.getElementById("eng").value);
    let sub5 = parseInt(document.getElementById("sin").value);
    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Please Enter Markes In Rance Of 100");
    } else {
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        let average = total / 5;
        document.getElementById("average").innerHTML = "your average marks is:" + average;
    }

}
const averageButton = document.getElementById("averageButton");
averageButton.addEventListener("click", average);

function grade() {
    let sub1 = parseInt(document.getElementById("sci").value);
    let sub2 = parseInt(document.getElementById("mat").value);
    let sub3 = parseInt(document.getElementById("com").value);
    let sub4 = parseInt(document.getElementById("eng").value);
    let sub5 = parseInt(document.getElementById("sin").value);
    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Please Enter Markes In Rance Of 100");
    } else {
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        let average = total / 5;
        if (average >= 75 && average <= 100) {
            document.getElementById("grade").innerHTML = "your grade is A";
        }
        else if (average >= 65 && average <= 74) {
            document.getElementById("grade").innerHTML = "your grade is B";
        }
        else if (average >= 50 && average <= 64) {
            document.getElementById("grade").innerHTML = "your grade is C";
        }
        else if (average >= 35 && average <= 49) {
            document.getElementById("grade").innerHTML = "your grade is S";
        }
        else { document.getElementById("grade").innerHTML = "you fail the exam" }

    }

}
const gradeButton = document.getElementById("gradeButton");
gradeButton.addEventListener("click", grade);
