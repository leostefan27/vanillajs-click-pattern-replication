let boxes = Array.from(document.getElementsByClassName("box"));
let boxOrder = [];
let startButton = document.getElementById('startButton');

// CHECK AND UNCHECK THE BOXES
// THIS FUNCTION ADDS THE BOXES IN THE QUEUE
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", (e) => {
        if (e.target.style.backgroundColor != "green") {
            boxOrder.push(boxes[i]);
            e.target.style.backgroundColor = "green";
        } else {
            boxOrder = boxOrder.filter((b) => b != boxes[i]);
            e.target.style.backgroundColor = "white";
        }
        
        console.log(boxOrder);
    });
}

    // Start the queue
    startButton.addEventListener("click", () => {
        console.log("Function START works");
        // console.log(boxes);
        for(let i = 0; i<boxes.length; i++) {
            boxes[i].style.backgroundColor='white';
        }
        
        if(boxOrder.length>1) {
            const interval = setInterval(() => {
            boxOrder[0].style.backgroundColor='green';
            boxOrder.shift()
            console.log(boxOrder.length)
            if(boxOrder.length == 0) {
                clearInterval(interval);
                }
        }, 500);
        }
    });

    // RESET THE QUEUE
    resetButton.addEventListener("click", () => {
        for(let i = 0; i<boxes.length; i++) {
            boxes[i].style.backgroundColor='white';
        }
        boxOrder = [];
    })

