
$(function() {
    //Initialize filterizr with default options
    $('.filtr-container').filterizr();
});

        $(document).ready(function() {
            $('.nav ul a').smoothScroll();

            function saveTextAsFile() {
                var textToWrite = document.getElementById("less:ohover").innerHTML;
                var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
                var fileNameToSaveAs = "ohover.css";
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "My Hidden Link";
                window.URL = window.URL || window.webkitURL;
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
                downloadLink.click();
            }

            function destroyClickedElement(event)
            {
                document.body.removeChild(event.target);
            }

            $('#submit-btn').on("click", function(){

                var circlefigure;
                if ( $("#circle-figure").is(":checked") == true ){
                    circlefigure = "50%";
                } else {
                    circlefigure = "0";
                }

                less.modifyVars({
                                    '@color-themes' : $("#color-themes").val(),
                                    '@color-line'  : $("#color-line").val(),
                                    '@heading-color' : $("#heading-color").val(),
                                    '@description-color' : $("#description-color").val(),
                                    '@border-weight' : $("#border-weight").val() + "px",
                                    '@circle-figure' : circlefigure,
                                    '@width-line' : $("#width-line").val(),
                                    '@spacing-header' : $("#spacing-header").val(),
                                    '@spacing-line' : $("#spacing-line").val(),
                                    '@spacing-text' : $("#spacing-text").val(),
                                    '@spacing-social' : $("#spacing-social").val()
                });
            });

            $('#save-btn').on("click", function(){
                saveTextAsFile();
            });

        });

        $(document).ready(function() {
            $('.nav ul a').smoothScroll();

            function saveTextAsFile() {
                var textToWrite = document.getElementById("less:ohover").innerHTML;
                var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
                var fileNameToSaveAs = "ohover.css";
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "My Hidden Link";
                window.URL = window.URL || window.webkitURL;
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
                downloadLink.click();
            }

            function destroyClickedElement(event)
            {
                document.body.removeChild(event.target);
            }

            $('#submit-btn').on("click", function(){

                var circlefigure;
                if ( $("#circle-figure").is(":checked") == true ){
                    circlefigure = "50%";
                } else {
                    circlefigure = "0";
                }

                less.modifyVars({
                                    '@color-themes' : $("#color-themes").val(),
                                    '@color-line'  : $("#color-line").val(),
                                    '@heading-color' : $("#heading-color").val(),
                                    '@description-color' : $("#description-color").val(),
                                    '@border-weight' : $("#border-weight").val() + "px",
                                    '@circle-figure' : circlefigure,
                                    '@width-line' : $("#width-line").val(),
                                    '@spacing-header' : $("#spacing-header").val(),
                                    '@spacing-line' : $("#spacing-line").val(),
                                    '@spacing-text' : $("#spacing-text").val(),
                                    '@spacing-social' : $("#spacing-social").val()
                });
            });

            $('#save-btn').on("click", function(){
                saveTextAsFile();
            });

        });
