var $avgtemp = $('#avgtemp');
var $dr = $('#dr');
var $maxtemp = $('#maxtemp');
var $kevap = $('#kevap');
var $rce = $('#rce');
var $cloud = $('#cloud');
var $grf = $('#grf');
var $mintemp = $('#mintemp');
var $wdf = $('#wdf');
var $vp = $('#vp');

function uavgtempValid() {
    return $avgtemp.val()>0;
}
function udrValid() {
    return $dr.val()>0;
}
function umaxtempValid() {
    return $maxtemp.val()>0;
}
function ukevapValid() {
    return $kevap.val()>0;
}
function urceValid() {
    return $rce.val()>0;
}
function ucloudValid() {
    return $cloud.val()>0;
}
function ugrfValid() {
    return $grf.val()>0;
}
function umintempValid() {
    return $mintemp.val()>0;
}
function uwdfValid() {
    return $wdf.val()>0;
}
function uvpValid() {
    return $vp.val()>0;
}

function uavgtemp(){
	if(uavgtempValid()) {
		$avgtemp.siblings('.valid').show();
		$avgtemp.siblings('.invalid').hide();
		$avgtemp.parent().removeClass('findInvalid');
	} else {
		$avgtemp.siblings('.valid').hide();
		$avgtemp.siblings('.invalid').show();
		$avgtemp.parent().addClass('findInvalid');
	}
}

function udr(){
	if(udrValid()) {
		$dr.siblings('.valid').show();
		$dr.siblings('.invalid').hide();
		$dr.parent().removeClass('findInvalid');
	} else {
		$dr.siblings('.valid').hide();
		$dr.siblings('.invalid').show();
		$dr.parent().addClass('findInvalid');
	}
}

function umaxtemp(){
	if(umaxtempValid()) {
		$maxtemp.siblings('.valid').show();
		$maxtemp.siblings('.invalid').hide();
		$maxtemp.parent().removeClass('findInvalid');
	} else {
		$maxtemp.siblings('.valid').hide();
		$maxtemp.siblings('.invalid').show();
		$maxtemp.parent().addClass('findInvalid');
	}
}

function ukevap(){
	if(ukevapValid()) {
		$kevap.siblings('.valid').show();
		$kevap.siblings('.invalid').hide();
		$kevap.parent().removeClass('findInvalid');
	} else {
		$kevap.siblings('.valid').hide();
		$kevap.siblings('.invalid').show();
		$kevap.parent().addClass('findInvalid');
	}
}

function urce(){
	if(urceValid()) {
		$rce.siblings('.valid').show();
		$rce.siblings('.invalid').hide();
		$rce.parent().removeClass('findInvalid');
	} else {
		$rce.siblings('.valid').hide();
		$rce.siblings('.invalid').show();
		$rce.parent().addClass('findInvalid');
	}
}

function ucloud(){
	if(ucloudValid()) {
		$cloud.siblings('.valid').show();
		$cloud.siblings('.invalid').hide();
		$cloud.parent().removeClass('findInvalid');
	} else {
		$cloud.siblings('.valid').hide();
		$cloud.siblings('.invalid').show();
		$cloud.parent().addClass('findInvalid');
	}
}

function ugrf(){
	if(ugrfValid()) {
		$grf.siblings('.valid').show();
		$grf.siblings('.invalid').hide();
		$grf.parent().removeClass('findInvalid');
	} else {
		$grf.siblings('.valid').hide();
		$grf.siblings('.invalid').show();
		$grf.parent().addClass('findInvalid');
	}
}

function umintemp(){
	if(umintempValid()) {
		$mintemp.siblings('.valid').show();
		$mintemp.siblings('.invalid').hide();
		$mintemp.parent().removeClass('findInvalid');
	} else {
		$mintemp.siblings('.valid').hide();
		$mintemp.siblings('.invalid').show();
		$mintemp.parent().addClass('findInvalid');
	}
}

function uwdf(){
	if(uwdfValid()) {
		$wdf.siblings('.valid').show();
		$wdf.siblings('.invalid').hide();
		$wdf.parent().removeClass('findInvalid');
	} else {
		$wdf.siblings('.valid').hide();
		$wdf.siblings('.invalid').show();
		$wdf.parent().addClass('findInvalid');
	}
}

function uvp(){
	if(uvpValid()) {
		$vp.siblings('.valid').show();
		$vp.siblings('.invalid').hide();
		$vp.parent().removeClass('findInvalid');
	} else {
		$vp.siblings('.valid').hide();
		$vp.siblings('.invalid').show();
		$vp.parent().addClass('findInvalid');
	}
}

$avgtemp.keyup(uavgtemp).blur(uavgtemp);
$dr.keyup(udr).blur(udr);
$maxtemp.keyup(umaxtemp).blur(umaxtemp);
$kevap.keyup(ukevap).blur(ukevap);
$rce.keyup(urce).blur(urce);
$cloud.keyup(ucloud).blur(ucloud);
$grf.keyup(ugrf).blur(ugrf);
$mintemp.keyup(umintemp).blur(umintemp);
$wdf.keyup(uwdf).blur(uwdf);
$vp.keyup(uvp).blur(uvp);

function validSubmit(){
	return uavgtempValid() && udrValid() && umaxtempValid() && ukevapValid() && urceValid() && ucloudValid()
	 && ugrfValid() && umintempValid() && uwdfValid() && uvpValid();
}

function showHelper(){
	$('.findInvalid').next().show();
	$('.findInvalid').children('.invalid').show();
}

var showCircle = function(){
	$('.svg-check').show();
	$('.circle').show();
}

var showCheck = function() {
	$('.check').show();
}

function hideForm(){
	$('.form-elements').addClass('hide');
}

function post(){
	var avgtemp = $("#avgtemp").val();
	var dr = $("#dr").val();
	var maxtemp = $("#maxtemp").val();
	var kevap = $("#kevap").val();
	var rce = $("#rce").val();
	var cloud = $("#cloud").val();
	var grf = $("#grf").val();
	var mintemp = $("#mintemp").val();
	var wdf = $("#wdf").val();
	var vp = $("#vp").val();
	var month = $("#month").val();
	var payload={
            avgtemp:avgtemp,
            dr:dr,
            maxtemp:maxtemp,
            kevap:kevap,
            rce:rce,
            cloud:cloud,
            grf:grf,
            mintemp:mintemp,
            wdf:wdf,
            vp:vp,
            month:month
        };
        console.log(payload);
        xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        xmlhttp.open("POST", "/predict");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status===200) {
            	var res=JSON.parse(xmlhttp.response)
                console.log('response')
              //  var jsonResponse = req.response;
                console.log(res[0]);
                var num=parseFloat(res[0])
                num=Math.round(num * 100) / 100
                hideForm();
				setTimeout(showCircle, 1000);
				setTimeout(showCheck, 1600);
				setTimeout(function(){
					document.getElementById("res").innerHTML = num;
					document.getElementById("answer_in_big").innerHTML = num;
						var msg = new SpeechSynthesisUtterance(num);
window.speechSynthesis.speak(msg);
					$("#result").show();
				},1000)	
            }
        }
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(payload));
}

function buttonEvent(){
	if(validSubmit()) {
		console.log('here');
		post();
		
	} else {
		showHelper();
	}
}

$('#submitForm').click(buttonEvent);