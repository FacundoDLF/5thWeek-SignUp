window.onload = function (){
    // username Title
    var userName = document.getElementById("input1");

    userName.addEventListener('keyup', nickName);

    function nickName(fn) {
    document.getElementById('hi-username').innerHTML = '<h3>Hi!, ' +fn.target.value+'</h3>';
    };

    // input FULL NAME

    var itemInput = document.getElementById('input1');

    itemInput.addEventListener('focus', inputName);
    itemInput.addEventListener('blur', validateName);

    function inputName(n){
        console.log('EVENT TYPE: '+n.type);
        document.getElementById('error1').style.display = 'none';
    }
    function validateName(vn){
        console.log('EVENT TYPE: '+vn.type);
        if ( input1.value.length < 6) {
            document.getElementById('error1').style.display = 'flex';
            document.getElementById('error1').innerHTML = '*At least 6 characters.';
        }   else{
            document.getElementById('error1').style.display = 'none';
            }
    }

    //input EMAIL

    var itemInput2 = document.getElementById('input2');

    itemInput2.addEventListener('focus', inputEmail);
    itemInput2.addEventListener('blur', validateEmail);


    function inputEmail(e){
        console.log('EVENT TYPE: '+e.type);
        document.getElementById('error2').style.display = 'none';
    }


    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function validateE(ve) {
        const result = ('result');
        const email = ('input2').value();
        result.text("");
      
        if (validateE(va)) {
          result.text(va + ' is valid :)');
          result.css('color', 'green');
        }   else {
            result.text(va + ' is not valid :(');
            result.css('color', 'red');
            document.getElementById('error2').style.display = 'flex';
            document.getElementById('error1').innerHTML = '*At least 6 characters.';
            }
      }


    //input PASS

    var itemInput3 = document.getElementById('input3');

    itemInput3.addEventListener('focus', inputPass);
    itemInput3.addEventListener('blur', outPutPass);

    function inputPass(p){
        console.log('EVENT TYPE: '+p.type);
        document.getElementById('error3').style.display = 'none';
    }
    function outPutPass(pw){
        console.log('EVENT TYPE: '+pw.type);
        if (itemInput3.value.length < 8) {
            document.getElementById('error3').style.display = 'flex';
            document.getElementById('error3').innerHTML = '*At least 8 digits/characters.';
        }   else {
            document.getElementById('error3').style.display = 'none';

            }
    }

    //input VERIFY PASS

    var itemInput4 = document.getElementById('input4');
    var itemInput3 = document.getElementById('input3');

    itemInput4.addEventListener('focus', vPassIn);
    itemInput4.addEventListener('blur', vPassOut);

    function vPassIn(vpIn) {
        console.log('EVENT TYPE: '+vpIn.type);
        document.getElementById('error4').style.display = 'none';
    }

    function vPassOut(vpOut) {
        console.log('EVENT TYP: '+vpOut.type);

        if (itemInput3.value === itemInput4.value) {
            document.getElementById('error4').style.display = 'flex';
            document.getElementById('error4').style.color = 'rgb(0, 250, 0)';
            document.getElementById('error4').innerHTML = 'Verified!'
        }   else {
            document.getElementById('error4').style.display = 'flex';
            document.getElementById('error4').style.color = 'rgb(250, 0, 0)';
            document.getElementById('error4').innerHTML = '*Passwords are different.'
            }
    }

    // input AGE

    var itemInput5 = document.getElementById('input5');








}

