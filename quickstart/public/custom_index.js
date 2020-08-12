$('#start-stream-btn').click(function(){
    var button = $(this);
    button.attr('disabled', 'disabled');
    setTimeout(function() {
        button.removeAttr('disabled');
    },60000);
});