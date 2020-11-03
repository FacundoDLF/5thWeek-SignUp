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


    //input PASS

    var itemInput3 = document.getElementById('input3');

    itemInput3.addEventListener('focus', inputPass);
    itemInput3.addEventListener('blur', outPutPass);

    function inputPass(pw){
        console.log('EVENT TYPE: '+p.type);
        document.getElementById('error3').style.display = 'none';
    }
    function outPutPass(pw){
        console.log('EVENT TYPE: '+pw.type);
        if (itemInput3) {
            document.getElementById('error3').style.display = 'none';
        } else {
            document.getElementById('error3').style.display = 'flex';
            document.getElementById('error3').innerHTML = '*.';
        }
    }







}

