/*global $ */
$(document).ready(function(){
    showMessages();
})

function showMessages() {
    $.get( "/messages", function( data ) {
        var html = ''
        data.forEach(function(message) {
            html = html + '<li><p>Id Mesaj: '+message.id+'</p> '
                               +'<p> Creat De: '+message.createdBy+'</p>'
                               +'<p>Mesaj: '+message.text+'</p>'
                          +' </li>'
        })
        // style="font-size: 25px; text-decoration: none"
        $('#messages').html(html)
    });
}