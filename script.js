 // Part 1: JavaScript Basics
        function checkVoting() {
            let age = document.getElementById('ageInput').value;
            let resultElement = document.getElementById('votingResult');
            
            if (age >= 18) {
                resultElement.innerHTML = "You can vote!";
            } else {
                resultElement.innerHTML = "You cannot vote yet.";
            }
        }

         // Part 2: JavaScript Functions
        function calculateArea() {
            let length = document.getElementById('lengthInput').value;
            let width = document.getElementById('widthInput').value;
            let area = length * width;
            
            document.getElementById('areaResult').innerHTML = "Area: " + area;
        }

         // Part 3: JavaScript Loops
        function showMultiplicationTable() {
            let number = document.getElementById('numberInput').value;
            let result = "";
            
            for (let i = 1; i <= 10; i++) {
                result += number + " × " + i + " = " + (number * i) + "<br>";
            }
            
            document.getElementById('tableResult').innerHTML = result;
        }

         // Part 4: DOM Manipulation
        function addItem() {
            let item = document.getElementById('itemInput').value;
            let listElement = document.getElementById('itemList');
            
            if (listElement.innerHTML === "No items yet") {
                listElement.innerHTML = "";
            }
            
            listElement.innerHTML += "• " + item + "<br>";
            document.getElementById('itemInput').value = "";
        }