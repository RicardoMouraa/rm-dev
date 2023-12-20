document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("VX_4NleGiqCWjgyH8");

    var myForm = document.getElementById('my-form');
    
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        emailjs.sendForm('service_wk97sla', 'template_8eunazl', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                myForm.reset(); 
            }, function(error) {
                alert('Erro ao enviar a mensagem: ', error);
            });
    });
});
