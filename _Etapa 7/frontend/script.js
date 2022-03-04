/************************************************************************************************
 SITE WEB
************************************************************************************************/


$(document).ready(() => {
   users.list();
});


var users = {

	// Ver mais sobre cols no Bootstrap em https://getbootstrap.com/docs/5.1/layout/columns/
	// Ver mais sobre formatação do texto no Bootstrap em https://getbootstrap.com/docs/5.1/utilities/text/
	// Ver mais sobre cores do texto no Bootstrap em https://getbootstrap.com/docs/5.1/utilities/colors/
	// Ver mais sobre espaçamento (margin & padding) do Bootstrap em https://getbootstrap.com/docs/5.1/utilities/spacing/
	// Ver mais sobre posicionamento do Bootstrap em https://getbootstrap.com/docs/5.1/utilities/position/
	// Ver mais sobre botões (button) do Bootstrap em https://getbootstrap.com/docs/5.1/components/buttons/

	list() {
	    $.ajax({
	        url: 'http://127.0.0.1:3000/users',
	        type: 'GET',
	        success: data => {
				var tx = '';
				tx += '<button type="button" class="btn btn-primary position-relative start-50" onclick="user.insert()">Inserir</button>';
				data.forEach(element => {
					tx += '<div class="row m-3 p-3 bg-dark bg-opacity-10">';
						tx += '<div class="col-9">' + element.title + '</div>';
						tx += '<div class="col-3">';
						tx += '<button class="btn btn-success me-2" onclick="user.update(' + element.userId + ',\'' + element.title + '\')">Editar</button>';
						tx += '<button class="btn btn-danger" onclick="user.delete(' + element.userId + ')">Excluir</button>';
						tx += '</div>';
					tx += '</div>';
				});
				$('#main').html(tx);
	        }
	    });
		
	}
	
};

var user = {

	insert() {
		var title = prompt('Digite o nome:');
		if (title) {
			if (title.trim() != '') {
				$.ajax({
					type: 'POST',
					url: 'http://127.0.0.1:3000/userinsert',
					data: {title: title},
				}).done(function () {
					users.list();
				}).fail(function (msg) {
					//console.log('FAIL');
				}).always(function (msg) {
					//console.log('ALWAYS');
				});
			}
		}
	},


	update(userId, oldTitle) {

		var title = prompt('Digite o novo nome:', oldTitle);
		if (title) {
			if (title.trim() != '') {
				$.ajax({
            		type: 'POST',
            		url: 'http://127.0.0.1:3000/userupdate',
					data: {title: title, userId: userId},
				}).done(function () {
					users.list();
				}).fail(function (msg) {
					//console.log('FAIL');
				}).always(function (msg) {
					//console.log('ALWAYS');
				});
			}
		}
	},

	delete(userId) {

		if (confirm('Confirma a exclusão?')) {
			$.ajax({
				type: 'POST',
				url: 'http://127.0.0.1:3000/userdelete',
				data: {userId: userId},
			}).done(function () {
				users.list();
			}).fail(function (msg) {
				//console.log('FAIL');
			}).always(function (msg) {
				//console.log('ALWAYS');
			});
		}
	},

}


