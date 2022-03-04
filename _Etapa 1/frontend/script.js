/************************************************************************************************
 SITE WEB
************************************************************************************************/


$(document).ready(() => {
   test();
});



function test() {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1', //JSON Placeholder é um site com endpoints fakes para testes
        type: 'GET',
        success: data => {
            console.log(data);
            $('#main').html(data.title);
        }
    });

}


