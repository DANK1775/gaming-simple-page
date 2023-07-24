let nombre = $("#nombre").val()
let apellidos = $("#apellido").val()
let correo = $("#ipcorreo").val()
let telefono = $("#iptelefono").val()


// input nombre
$("#nombre").blur(function () {
    if (!$(this).val()) {
        $(this).addClass("inputError");
        $("#namelabel1").addClass("labelError");
    } else {
        $(this).removeClass("inputError");
        $("#namelabel1").removeClass("labelError");
    }
});

$("#nombre").focus(function() {
    $(this).removeClass("inputError");
    $(this).removeClass("inputcheck");
    $("#namelabel1").removeClass("labelError");
    $("#namelabel1").removeClass("labelcheck");
});

$("#nombre").change(function() {
    if ($(this).val()) {
        $(this).addClass("inputcheck");
        $("#namelabel1").addClass("labelcheck");
    }
});

// input apellido 
$("#apellido").blur(function () {
    if (!$(this).val()) {
        $(this).addClass("inputError");
        $("#apellidolabel").addClass("labelError");
    } else {
        $(this).removeClass("inputError");
        $("#apellidolabel").removeClass("labelError");
    }
});

$("#apellido").focus(function() {
    $(this).removeClass("inputError");
    $(this).removeClass("inputcheck");
    $("#apellidolabel").removeClass("labelError");
    $("#apellidolabel").removeClass("labelcheck");
});

$("#apellido").change(function() {
    if ($(this).val()) {
        $(this).addClass("inputcheck");
        $("#apellidolabel").addClass("labelcheck");
    }
});

// imput correo
$("#ipcorreo").blur(function () {
    if (!$(this).val()) {
        $(this).addClass("inputError1");
        $("#lbcorreol").addClass("labelError");
    } else {
        $(this).removeClass("inputError1");
        $("#lbcorreo").removeClass("labelError");
    }
});

$("#ipcorreo").focus(function() {
    $(this).removeClass("inputError1");
    $(this).removeClass("inputcheck");
    $("#lbcorreo").removeClass("labelError");
    $("#lbcorreo").removeClass("labelcheck");
});

$("#ipcorreo").change(function() {
    if ($(this).val()) {
        $(this).addClass("inputcheck");
        $("#lbcorreo").addClass("labelcheck");
    }
});

// input numero
$("#iptelefono").blur(function () {
    if (!$(this).val()) {
        $(this).addClass("inputError");
        $("#lbtelefono").addClass("labelError");
    } else {
        $(this).removeClass("inputError");
        $("#lbtelefono").removeClass("labelError");
    }
});

$("#iptelefono").focus(function() {
    $(this).removeClass("inputError");
    $(this).removeClass("inputcheck");
    $("#lbtelefono").removeClass("labelError");
    $("#lbtelefono").removeClass("labelcheck");
});

$("#iptelefono").change(function() {
    if ($(this).val()) {
        $(this).addClass("inputcheck");
        $("#lbtelefono").addClass("labelcheck");
    }
});


// form 
$(".form1").submit(function() {

    if ($("#nombre").val().length == 0) {
        swal("error", "no has llenado el espacio con tu nombre", "error");
    } else if ($("#apellido").val().length == 0) {
        swal("error", "no has llenado el espacio con tu apellido", "error");
    } else if ($("#ipcorreo").val().length == 0) {
        swal("error", "no has llenado el espacio con tu correo", "error");
    } else if ($("#iptelefono").val().length == 0) {
        swal("error", "no has llenado el espacio con tu comentario", "error");
    } else {
        swal("bien hecho", "todos los formularios fueron completados", "success");
    }

    event.preventDefault();
})