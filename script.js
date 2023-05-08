    function generatePassword(length) {
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]:;<>,.?/~`";
        var password = "";
        for (var i = 0; i < length; i++) {
          var randomIndex = Math.floor(Math.random() * charset.length);
          password += charset[randomIndex];
        }
        return password;
      }

      var generateButton = document.getElementById("generate-button");
      generateButton.addEventListener("click", function() {
        var passwordLength = document.getElementById("password-length").value;
        var passwordDisplay = document.getElementById("password-display");
        passwordDisplay.innerHTML = generatePassword(passwordLength);
      });
   