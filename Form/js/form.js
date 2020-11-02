window.onload = function (){
    // username Title
    var userName = document.getElementById("input1");

    userName.addEventListener('keyup', inputName);

    function inputName(fn) {
    document.getElementById('hi-username').innerHTML = '<h3>Hi!, ' +fn.target.value+'</h3>';
    };
    // input FULL NAME
    var itemInput = document.getElementById('input1');

    itemInput.addEventListener('focus', inputName);
    itemInput.addEventListener('blur', validName);

    function inputName(n){
        console.log('EVENT TYPE: '+n.type);
        document.getElementById('error1').style.display = 'none';
    }
    function validName(vn){
        console.log('EVENT TYPE: '+vn.type);
        if ( input1.value.length < 6) {
            document.getElementById('error1').style.display = 'flex';
            document.getElementById('error1').innerHTML = '*At least 6 characters.';
        } else{
            document.getElementById('error1').style.display = 'none';
        }
    }

    //input EMAIL
    var itemInput2 = document.querySelector('input[type="email"]');

    itemInput2.addEventListener('focus', inputEmail);
    itemInput2.addEventListener('blur', validEmail);

    function inputEmail(e){
        console.log('EVENT TYPE: '+e.type);
        document.getElementById('error2').style.display = 'none';
    }
    function validEmail(ve){
        console.log('EVENT TYPE: '+ve.type);
        if ( itemInput2.value.type === 'email') {
            document.getElementById('error2').style.display = 'none';
        } else{
            document.getElementById('error2').style.display = 'flex';
            document.getElementById('error2').innerHTML = '*Incorrect format.';
        }
    }






}

