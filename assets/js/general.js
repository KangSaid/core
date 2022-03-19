function base_url() {
    var pathparts = window.location.pathname.split('/');
    if (location.host == 'localhost:8090'||location.host=='localhost') {
        return window.location.origin + '/' + pathparts[1].trim('/') + '/'; // http://localhost/myproject/controller or folder
    } else {
        return window.location.origin + '/'; // http://stackoverflow.com/
    }
}

$(document).on('keyup','.input-validate',function(){
    $(this).removeClass('is-invalid');
    $(this).closest('div.form-group').find('.invalid-feedback').text('');
});

$(document).on('change','.select2-validate',function(){
    $(this).removeClass('is-invalid');
    $(this).closest('div.form-group').find('.invalid-feedback').text('');
});

$('form:not(.notForm)').on('submit', function () {
    disabledButton($('.btn'));
});

function disabledButton(selector)
{
    selector.prop('disabled', true);
}

function readOnlyInput()
{
    $( ":input" ).attr("readonly", true);
}

function enabledReadOnlyInput(){
    $( ":input" ).removeAttr('readonly');
}

function disabledInput()
{
    $( ":input" ).attr("disabled", true);
}

function enabledInput()
{
    $( ":input" ).removeAttr('disabled');
}

function enabledButton(selector)
{
    selector.prop('disabled', false);
}

function loadingButton(selector)
{
    selector.html('<i class="fas fa-spinner fa-spin"></i> loading');
}

function alertErrorTimer(text)
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: text,
        timer: 2000
    });
}

function alertErrorWithoutIcon(text)
{
    Swal.fire({
        title: 'Oops...',
        html: text,
    });
}

function inputDate() {
    $('.inputDateTimeFrom').datetimepicker({
        icons: {
            time: 'fas fa-clock',
            date: 'fas fa-calendar',
            up: 'fas fa-arrow-up',
            down: 'fas fa-arrow-down',
            previous: 'fas fa-arrow-circle-left',
            next: 'fas fa-arrow-circle-right',
            today: 'far fa-calendar-check-o',
            clear: 'fas fa-trash',
            close: 'far fa-times'
        },
        format: 'YYYY-MM-DD HH:mm:ss'
    });

    $('.inputDateTimeTo').datetimepicker({
        useCurrent: false,
        icons: {
            time: 'fas fa-clock',
            date: 'fas fa-calendar',
            up: 'fas fa-arrow-up',
            down: 'fas fa-arrow-down',
            previous: 'fas fa-arrow-circle-left',
            next: 'fas fa-arrow-circle-right',
            today: 'far fa-calendar-check-o',
            clear: 'fas fa-trash',
            close: 'far fa-times'
        },
        format: 'YYYY-MM-DD HH:mm:ss'
    });

    $('.inputDateTimeFrom').on("change.datetimepicker", function (e) {
        $('.inputDateTimeTo').datetimepicker('minDate', e.date);
    });
    $('.inputDateTimeTo').on("change.datetimepicker", function (e) {
        $('.inputDateTimeFrom').datetimepicker('maxDate', e.date);
    });
}

function select2(){
    $('.inputSelect2').select2({
        placeholder: "Please Select",
    });
}

function currency(){
    $('.input-integer').inputmask({
        alias: 'decimal',
        digits: 0,
        groupSeparator: '.',
        radixPoint: ',',
        autoGroup: true,
        removeMaskOnSubmit: true,
        rightAlign: true
    });
}

var maximumCounterListID = [];
function getMaximumCounter() {
    while (true) {
        var uuid = Math.floor((Math.random() * 100000000) + 1);
        ;
        if (maximumCounterListID.indexOf(uuid) === -1) {
            maximumCounterListID.push(uuid);
            return uuid;
        }
    }
}

function replaceAll(string, find, stringReplace, ignoreCase) {
    if (stringReplace != undefined) {
        stringReplace = stringReplace.toString();
        stringReplace = stringReplace.replace("'", "`");
    }
    return string.toString().replace(new RegExp(find.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignoreCase ? "gi" : "g")), (typeof (stringReplace) === "string") ? stringReplace.replace(/\$/g, "$$$$") : stringReplace);
}


function ajaxChained(target,url,pid){
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        data: { id : pid },
        success: function(txt){
            //no action on success, its done in the next part
        }
    }).done(function(data){
        
        //generate <options from JSON
        var list_html = '<option></option>';
        $.each(data, function(i, item) {
            list_html += '<option value='+data[i].id+'>'+data[i].name+'</option>';
        });
        //replace <select2 with new options
        $(target).html(list_html);
        //change placeholder text
        $(target).select2({placeholder: 'Please Select'});

    });
}

function ajax(url,data){
    // params callback : status and msg 
    var callback;
    $.ajax({
        url:url,
        async: false,
        method:"POST",
        dataType:"JSON",
        data:{data : data},
        beforeSend:function(){
           
        },
        success:function(response){
            callback = response;
        },
        error:function(jqXHR,textStatus,errorThrown){
            alert('ajax error');
        }
    });

    return callback;

}

function firstCapital(str){
    var string = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    return string;
}

function in_array(needle, haystack) {
    var jml = 0;
    for(var i in haystack) {
        if(haystack[i] == needle){
            jml = jml + 1;
        }
    }
    if(jml == 0 || jml == 1){
        return false;
    }else{
        return true;
    }
}
