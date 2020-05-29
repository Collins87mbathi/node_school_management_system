let loginMail = $('#loginMail'),
    loginPwd = $('#loginPwd'),
    loginBtn = $('#loginBtn'),
    loginChk = $('#loginCheck');


function check_empty($field){
    if($field.val() != ""){
      return $field.val();
    }
    return false;
}

loginMail.on('change keyup', function(){
    if(check_empty($(this))){
        $('.errorLogin').hide();
    } else {
        $('.errorLogin').show();
    }
});

loginPwd.on('change keyup', function(){
    if(check_empty($(this))){
        $('.errorPwd').hide();
    } else {
        $('.errorPwd').show();
    }
});

loginBtn.on('click',function(){
    if(check_empty(loginMail) && check_empty(loginPwd)){
        $('.errorLogin').hide();
        $('.errorPwd').hide();
    } else {
        $('.errorLogin').show();
        $('.errorPwd').show();
    }
})