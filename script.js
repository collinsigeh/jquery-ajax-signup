
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        $('#submitButton').click(function(){
            var errorMessage = "";
            var emptyFieldMessage = "";

            if($('#email').val() == "")
            {
                emptyFieldMessage+="<li>Email</li>";
            }

            if($('#phone').val() == "")
            {
                emptyFieldMessage+="<li>Phone</li>";
            }

            if($('#password').val() == "")
            {
                emptyFieldMessage+="<li>Password</li>";
            }

            if($('#confirmPassword').val() == "")
            {
                emptyFieldMessage+="<li>Confirm Password</li>";
            }

            if(emptyFieldMessage != "")
            {
                errorMessage = "<p>The following fields are missing:<ul>" + emptyFieldMessage + "</ul></p>";
            }

            if(isEmail($('#email').val()) == false)
            {
                errorMessage+="<p>Invalid email address</p>";
            }

            if($.isNumeric($('#phone').val()) == false)
            {
                errorMessage+="<p>Invalid phone number</p>";
            }

            if($('#password').val() != $('#confirmPassword').val())
            {
                errorMessage+="<p>Passwords do NOT match</p>";
            }
            
            if(errorMessage != "")
            {
                $('#errorMessage').html(errorMessage).show();
                $('#successMessage').hide();
            }
            else
            {
                $('#errorMessage').hide();
                $('#successMessage').show();
            }
        });