 var textarea = document.getElementById("myTextarea");
    var counter = document.getElementById("charCount");
    var warning = document.getElementById("warning");
    var maxChars = 200;

    textarea.addEventListener("input",function(){
      let len = textarea.value.length;

      if (len >= maxChars) {
        warning.textContent = "You have reached the maximum character limit!";
        textarea.value = textarea.value.slice(0, maxChars); 
        len = maxChars;
      } else {
        warning.textContent = "";
      }

      counter.textContent = len + "/" + maxChars + " characters";
    }) 