$(document).ready(function() {

    $('#botao-cancelar').click(function(e) {
        e.preventDefault();
        $('input').val('');
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('input').val();
        const novoItem = $('<li></li>');
        $(`<div>
            ${novaTarefa}
            <img src="./images/icone-check.png" alt="Ícone de checado" />
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');    
        $('input').val('');

        $('div').click(function() {
            $(this).css("text-decoration", "line-through");
            $(this).children('img').show();
        })
        
    }) 
    
})