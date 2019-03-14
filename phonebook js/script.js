
$(".navigation").click(function(){
	console.log("this");
	$(this).toggleClass("back");
	if($(this).text()=="ADD"){	
		$("#contact-list").fadeToggle('fast',function(){
			$(".navigation").text("BACK");
			$("#add-contact").fadeToggle('fast');	
		});
	}
	else{
		$("#add-contact").fadeToggle('fast',function(){
			$("#contact-list").fadeToggle('fast');	
			$('.navigation').text("ADD");
		});
	}

});

$(".phone-input").keypress(function(event){
	var key = event.which;
	// console.log(key);
	if(!((key > 47 && key < 58)||key == 8)){
		console.log(key);
		event.preventDefault();
	}
	else{

		$(".error").eq(1).hide();
	}
});

$(".phone-input").keyup(function(){
	$("#phone").text("Phone: "+$(".phone-input").val());
});

$(".name-input").keyup(function(){
	$(".error").eq(0).hide();
	$("#name").text("Name :"+$(this).val());
});

$(".add").click(function(){

	var addflag=1;
	if($(".name-input").val().length == 0){
		console.log("fsf")
		$(".error").eq(0).show();
		addFlag = 0;
	}
	
	if($(".phone-input").val().length == 0){
		$(".error").eq(1).show();
		addFlag = 0;
	}
	else{
		addFlag = 1;
	}

	if(addFlag == 1){
		addContact();
	}
});


function addContact(){
	console.log("add");
	$('.navigation').toggleClass("back");
		if($('.navigation').text()=="ADD")
			$('.navigation').text("BACK");
		else
			$('.navigation').text("ADD");


		var contact = $("<div class='contact-container'><div class='contact-data contact-name'></div><div class='contact-data contact-phone'></div><div class='contact-data contact-actions'><button class='delete'>DELETE</button></div></div>");

		contact.children().eq(0).text($(".name-input").val());
		contact.children().eq(1).text($(".phone-input").val());

		$("#contact-list").append(contact);

		console.log(contact.children().eq(0).text());


		$(".error").hide();
		$("#add-contact").fadeToggle('fast', function(){
		$("#contact-list").fadeToggle('fast');
		});
		$('input').val("");
		$("#name").text("Name: ");
		$("#phone").text("Phone: ");
}

$("#contact-list").on("click",".delete",function(){

	$(this).parent().parent().fadeOut("fast",function(){
		$(this).remove();
	});
})

// $("#phone").hide();