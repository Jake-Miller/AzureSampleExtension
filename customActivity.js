define([
    'fuel-jquery',
    'js/postmonger'
], function(
    $,
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();

    $(window).ready(function() {
        connection.trigger('ready');
    })

    connection.on('requestPayload', function() {
        var payload = {};
        payload.options = {
            option1: $('#option1').attr('value'),
            option2: $('#option2').attr('value'),
            option3: $('#option3').attr('value')
        };
        payload.flowDisplayName = $('#option1').attr('value') + ' - ' + $('#option2').attr('value') + ' - ' + $('#option3').attr('value');
        connection.trigger('getPayload', payload);
    });

    connection.on('populateFields', function(payload) {
        if (payload.option1) {
            $('#option1').attr('value', payload.option1);
        }
        if (payload.option2) {
            $('#option2').attr('value', payload.option2);
        }
        if (payload.option3) {
            $('#option3').attr('value', payload.option3);
        }
    });

});
