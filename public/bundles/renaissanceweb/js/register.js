$(function(){
	$("#doRegister").click(function(e){
		var email_filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var pwd_reg = /^[\w]{6,12}$/;
		var email = $.trim($("#email").val());
		var password = $.trim($("#password").val());
		var username = $.trim($("#username").val());
		var confirm_password = $.trim($("#confirm_password").val());
		var validate_ok = false;
		if(email.length==0 || password.length == 0){
			throwError("邮箱或密码不能为空");
		}else if(username.length < 2){
			throwError("称呼不能少于2字符");
		}else if(!pwd_reg.test(password)){
			throwError("密码为6-12位，只能是字母、数字和下划线");
		}else if(password != confirm_password ){
			throwError("两次输入密码不一致");
		}else if(!email_filter.test(email)){
			throwError("邮箱格式错误");
		}else{
			$.ajax({
				url: "/register/validate",
				type: "post",
				data: "email="+email,
				dataType: "json",
				success:function(info){
					e.preventDefault();
					if(info.validate_info=="accept"){
						$.ajax({
							url : "/register/reg_user",
							type : "post",
							data :"email="+email+"&password="+password+"&username="+username,
							dataType:"json",
						});
						$("form").attr("action","https://localhost:8443/cas/login?isReg=true&service=http://localhost:8000");
						$("form").submit();
					}
					else{
						throwError("该邮箱已被注册");
					}
				}
			}
			);

			
		}
	});

	function throwError(message){
		$("#error_msg").html(message);
	}
});