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
        console.log('EVENT TYPE: '+e.target.value);
        document.getElementById('error2').style.display = 'none';
    }


    function validateEmail(vemail) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(vemail).toLowerCase());
        function validateEmail(ve) {
            const result = ('result');
            const email = ('email').value();
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

    itemInput5.addEventListener('focus', ageIn);
    itemInput5.addEventListener('blur', ageOut);


    function ageIn(a) {
        console.log('Focus Type: '+a.target.value);
        document.getElementById('error5').style.display = 'none';
    };

    function ageOut(aOut){
        console.log('EVENT TYPE: '+aOut.target.value);
        if ( input5.value.length <= 2 ) {
            document.getElementById('error5').style.display = 'none'
        }else{
            document.getElementById('error5').style.display = 'flex';
            document.getElementById('error5').innerHTML = '*Invalid Age.';
            }
    };

    // input PHONE NUMBER

    var itemInput6 = document.getElementById('input6');

    itemInput6.addEventListener('focus', phoneIn);
    itemInput6.addEventListener('blur', phoneOut);

    function phoneIn(phIn){
        console.log('EVENT TYPE: '+phIn.target.value);
        document.getElementById('error6').style.display = 'none';
    }
    function phoneOut(phOut){
        console.log('EVENT TYPE: '+phOut.target.value);
        if ( input6.value.length >= 7 ) {
            document.getElementById('error6').style.display = 'none';
        }else{
            document.getElementById('error6').style.display = 'flex';
            document.getElementById('error6').innerHTML = '*At least 7 digits.';
            }
    };

    // input ADDRESS

    var itemInput7 = document.getElementById('input7');

    itemInput7.addEventListener('focus', addressIn);
    itemInput7.addEventListener('blur', addressOut);

    function addressIn(adIn){
        console.log('EVENT TYPE: '+adIn.target.value);
        document.getElementById('error7').style.display = 'none';
    };

    function addressOut(adOut){
        if (input7.value.length += ' ' >= 5) {
            document.getElementById('error7').style.display = 'none';
        } else {
            document.getElementById('error7').style.display = 'flex';
            document.getElementById('error7').innerHTML = '*Invalid Address.';
        }
    };

    // input CITY

    var itemInput8 = document.getElementById('input8');

    itemInput8.addEventListener('focus', ctIn);
    itemInput8.addEventListener('blur', ctOut);

    function ctIn(ctI) {
        console.log(ctI);
        document.getElementById('error8').style.display = 'none';
    }

    function ctOut(ctO) {
        console.log(ctO);
        if (input8.value.length < 3) {
            document.getElementById('error8').style.display = 'flex';
            document.getElementById('error8').innerHTML = '*At least 3 chars.';
        }
    };

    // input CP
    var itemInput9 = document.getElementById('input9');

    itemInput9.addEventListener('focus', cpIn);
    itemInput9.addEventListener('blur', cpOut);

    function cpIn(cpI) {
        console.log(cpI);
        document.getElementById('error9').style.display = 'none';
    }

    function cpOut(cpO) {
        if (input9.value.length < 3) {
            document.getElementById('error9').style.display = 'flex';
            document.getElementById('error9').innerHTML = '*At least 3 chars.';
        }
    };

    // input DNI

    var itemInput10 = document.getElementById('input10');

    itemInput10.addEventListener('focus', dniOn);
    itemInput10.addEventListener('blur', dniOut);

    function dniOn(dni) {
        console.log(dni.target.value);
        document.getElementById('error10').style.display = 'none';
    }

    function dniOut(dniO) {
        console.log(dniO.target.value)
        if (( typeof dniO !== 'number') || (input10.length < 7) || (dniO.target.value.length > 8)) {
            document.getElementById('error10').style.display = 'flex';
            document.getElementById('error10').innerHTML = '*In between 7 or 8 digits.';
        }
    };

    // SUBMIT

    var submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', send);

    function send(snd) {
        alert('THANKS FOR SUBSCRIBE!');
    };












}

