/************************************************************************************************
 SITE WEB
************************************************************************************************/


$(document).ready(() => {
   test();
});



function test() {

    $.ajax({
        url: 'http://127.0.0.1:3000/', //URL do endpoint do Node.js
        type: 'GET',
        success: data => {
			data = JSON.parse(data);
            console.log(data);
            $('#main').html(data.title);
        }
    });

}


