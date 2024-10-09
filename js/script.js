$(document).ready(function() {

    // Fade out icon when clicked
    $(".continue").click(function() {
        $(this).fadeOut(); // Fade out the clicked icon
        
        // Fade out another icon after 1.5 seconds (1500 milliseconds)
        setTimeout(function() {
            $(".img").fadeOut(); // Replace '.img' with the class of your second icon
        }, 1500);
    });

    $(".revise").click(function() {
        $(this).fadeOut(); // Fade out the clicked icon
        
        // Fade in the hidden container (assuming it's initially hidden with CSS)
        setTimeout(function() {
            $(".img-5").fadeIn(); // Replace '.img-5' with the class of your hidden container
        }, 1500);
    });

    const backButton = $("<img class='backButton' src='images/back.png' alt='Next' style=' cursor: pointer;' />");
    $("#buttonContainer-2").append(backButton);

    // Count of total draggables and the number dropped for Page 2
    const totalDraggablesPage2 = 4;
    let droppedCountPage2 = 0;

    // Create a button element and hide it initially
    const nextButton = $("<img id='nextButton' src='images/next.png' alt='Next' style='display: none; cursor: pointer;' />");
    $("#buttonContainer").append(nextButton);

    // Function to check if all draggables are dropped on Page 2
    function checkAllDroppedPage2() {
        if (droppedCountPage2 === totalDraggablesPage2) {
            alert("All items have been successfully placed on Page 2!");
            nextButton.fadeIn();
        }
    }

    // Make the elements draggable for Page 2
    $(".draggable1, .draggable2, .draggable3, .draggable4").draggable({
        revert: "invalid",
        start: function(event, ui) {
            console.log("Drag started: ", this);
        }
    });

    // Make the boxes droppable for Page 2
    for (let i = 1; i <= totalDraggablesPage2; i++) {
        $(`#droppable${i}`).droppable({
            accept: `.draggable${i}`,
            drop: function(event, ui) {
                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this)
                }).addClass('snapped');
                ui.draggable.draggable("disable");
                const tickCircle = $("<div class='tick-circle'><div class='tick-mark'>✔</div></div>");
                $(this).append(tickCircle);
                droppedCountPage2++;
                checkAllDroppedPage2();
            }
        });
    }

    // ---- PAGE 3: New Drag and Drop Logic ---- //
    const totalDraggablesPage3 = 4;
    let droppedCountPage3 = 0;

    const nextButton2 = $("<img id='nextButton2' src='images/next2.png' alt='Next' style='display: none; cursor: pointer;' />");
    $("#buttonContainer2").append(nextButton2);

    function checkAllDroppedPage3() {
        if (droppedCountPage3 === totalDraggablesPage3) {
            alert("All items have been successfully placed on Page 3!");
            nextButton2.fadeIn();
        }
    }

    $(".draggable5, .draggable6, .draggable7, .draggable8").draggable({
        revert: "invalid",
        start: function(event, ui) {
            console.log("Drag started: ", this);
        }
    });

    for (let i = 5; i <= 8; i++) {
        $(`#droppable${i}`).droppable({
            accept: `.draggable${i}`,
            drop: function(event, ui) {
                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this)
                }).addClass('snapped');
                ui.draggable.draggable("disable");
                const tickCircle = $("<div class='tick-circle'><div class='tick-mark'>✔</div></div>");
                $(this).append(tickCircle);
                droppedCountPage3++;
                checkAllDroppedPage3();
            }
        });
    }

    // ---- PAGE 4: Additional Drag and Drop Logic ---- //
    const totalDraggablesPage4 = 4;
    let droppedCountPage4 = 0;

    const nextButton3 = $("<img id='nextButton3' src='images/next3.png' alt='Next' style='display: none; cursor: pointer;' />");
    $("#buttonContainer3").append(nextButton3);

    function checkAllDroppedPage4() {
        if (droppedCountPage4 === totalDraggablesPage4) {
            alert("All items have been successfully placed on Page 4!");
            nextButton3.fadeIn();
        }
    }

    $(".draggable9, .draggable10, .draggable11, .draggable12").draggable({
        revert: "invalid",
        start: function(event, ui) {
            console.log("Drag started: ", this);
        }
    });

    for (let i = 9; i <= 12; i++) {
        $(`#droppable${i}`).droppable({
            accept: `.draggable${i}`,
            drop: function(event, ui) {
                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this)
                }).addClass('snapped');
                ui.draggable.draggable("disable");
                const tickCircle = $("<div class='tick-circle'><div class='tick-mark'>✔</div></div>");
                $(this).append(tickCircle);
                droppedCountPage4++;
                checkAllDroppedPage4();
            }
        });
    }

    // ---- Fading out buttons after click ---- //
    nextButton.click(function() {
        $(this).fadeOut();
        setTimeout(function() {
            $(".img-2").fadeOut();
        }, 1500);
    });

    nextButton2.click(function() {
        $(this).fadeOut();
        setTimeout(function() {
            $(".img-3").fadeOut();
        }, 1500);
    });

    nextButton3.click(function() {
        $(this).fadeOut();
        setTimeout(function() {
            $(".img-4").fadeOut();
            $(".img").fadeIn();
        }, 1500);
    });

    backButton.click(function() {
        $(this).fadeOut();
        setTimeout(function() {
            $(".img-5").fadeOut();
        }, 1500);
    });

});

