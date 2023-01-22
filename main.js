$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: false
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Precisamos do seu nome completo',
            email: 'Precisamos do seu e-mail',
            telefone: "Por favor, digite seu celular",
            endereco: 'Por favor, digite seu endereço completo',
            cep: 'Precisamos do seu CEP'
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})