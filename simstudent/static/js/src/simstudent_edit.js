/* Javascript for simstudentXBlock. */
function simstudentXBlock(runtime, element) {

    function paellaSaved(result) {
        $('.server', element).text();
        $('.video_id', element).text(result.video_id);
        $('.display_name', element).text(result.display_name);
    }

    $(element).find('.cancel-button').bind('click', function() {
        runtime.notify('cancel', {});
    });

    $(element).find('.save-button').bind('click', function() {
        var data = {
            'display_name': $(edit_display_name).context.value,
            'href':$(edit_href).context.value
        };

        $('.xblock-editor-error-message', element).html();
        $('.xblock-editor-error-message', element).css('display', 'none');
        var handlerUrl = runtime.handlerUrl(element, 'save_simstudent');
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
            if (response.result === 'success') {
                window.location.reload(false);
            } else {
                $('.xblock-editor-error-message', element).html('Error: '+response.message);
                $('.xblock-editor-error-message', element).css('display', 'block');
            }
        });
    });

    $(element).find('#drive-button').bind('click', function() {
        $.getScript("https://apis.google.com/js/api.js?onload=loadPicker");
        runtime.notify('cancel', {});
    });
    
    $(function loadPicker() {
        runtime.notify('cancel', {});
    });
    
    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}
