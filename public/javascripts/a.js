$(function() {
    $("#submit").click(function() {
        var data = {
            name: $("#name").val(),
            id: $("#id").val()
        };
        $.ajax({
            type: 'POST',
            data: data,
            url: 'http://localhost:3000/ajax/deal',
            dataType: 'json',
            cache: false,
            timeout: 5000,
            success: function(data) {
                console.log(data)
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error ' + textStatus + ' ' + errorThrown);
            }
        });
    });
});
