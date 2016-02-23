var staCt=0;
function writesection()
{
	var id= forms[0].stanza.id;
	var val= forms[0].stanza.value;
	var nam= forms[0].stanza.name;
	alert (id + val + nam);
}
function rs()
{
	staCt+=1;
	var id= document.getElementById('stanza').id;
	var val= document.getElementById('stanza').value;
	var nam= document.getElementById('stanza').name;
	document.getElementById('songText').value +="\n<ol start=''" + staCt + "''><li>\nStanza " + staCt + " here ... \n</li></ol>";
	document.getElementById('stanza').value="Stanza " + (staCt+1);
}
function rs1()
{
	var id= document.getElementById('chorus').id;
	var val= document.getElementById('chorus').value;
	var nam= document.getElementById('chorus').name;
	document.getElementById('songText').value +="<div><h3>Chorus</h3><em><b>\nChorus Here ... \n</b></em></div>";
}
function writesection(part)
{
	if (part=='intro')
	{
		document.getElementById('songText').value +="\n<div><h3>Intro</h3><em>\nIntro Here ... \n</em></div>";
	}
	else if (part == 'ending')
	{
		document.getElementById('songText').value +="\n<div><h3>Ending</h3><em>\nEnding Here ... \n</em></div>";
	}
}
function getsong(song_id)
{
	document.getElementById('songContent').innerHTML = "<div class='box notice-box'>Loading song, please wait ... </div>";
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('songContent');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	var song_id = song_id;
	var queryString = "?song_id=" + song_id ;
	ajaxRequest.open("GET", "actions/writesong.php" +
		queryString, true);
	ajaxRequest.send(null);
}
function writesong()
{
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('success');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	var category = document.getElementById('category').value;
	var choir = document.getElementById('choir').value;
	var album = document.getElementById('album').value;
	var composer = document.getElementById('composer').value;
	var song_title = document.getElementById('songTitle').value;
	var song_text = document.getElementById('songText').value;
	var queryString = "?category=" + category + "&choir=" + choir + "&album=" + album + "&composer=" + composer + "&song_title=" + song_title + "&song_text=" + song_text;
	ajaxRequest.open("GET", "actions/readsong.php" +
		queryString, true);
	ajaxRequest.send(null);
	document.getElementById('songTitle').value="";
	document.getElementById('songText').value="";
	loadControls();
	loadControls1();
	loadControls2();
	document.getElementById('albumSelect').innerHTML = "<label>Album<select tabindex='3' name='album' id='album' class='my-drop'><option value='1'>Unknown</option></select></label>";
	staCt=0;
	document.getElementById('stanza').value="Stanza " + 1;
}
function clearsessions()
{
	alert ('close?');
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			
		}
	}
	ajaxRequest.open("GET", "actions/logout.php", true);
	ajaxRequest.send(null);
}
function searchSong()
{
	document.getElementById('songList').innerHTML = "<div class='box notice-box'>Loading song, please wait ... </div>";
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('songList');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	var searchTerm = document.getElementById('searchTerm').value;
	var queryString = "?searchTerm=" + searchTerm;
	ajaxRequest.open("GET", "actions/searchsong.php" +
		queryString, true);
	ajaxRequest.send(null);
}
function loadControls()
{
	document.getElementById('composerSelect').innerHTML = "<div class='box notice-box'>Loading composers, please wait ... </div>";
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('composerSelect');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	ajaxRequest.open("GET", "actions/fillcontrols.php", true);
	ajaxRequest.send(null);
	
}
function readalbums()
{
	document.getElementById('albumSelect').innerHTML = "<div class='box notice-box'>Select a choir </div>";
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
		
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('albumSelect');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	var choir = document.getElementById('choir').value;
	var queryString = "?choir_id=" + choir;
	ajaxRequest.open("GET", "actions/selectalbum.php" + queryString, true);
	ajaxRequest.send(null);
}
function loadControls1()
{
	document.getElementById('choirSelect').innerHTML = "<div class='box notice-box'>Loading choirs</div>";
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('choirSelect');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	ajaxRequest.open("GET", "actions/readchoirs.php", true);
	ajaxRequest.send(null);
}
function loadControls2()
{
	document.getElementById('categorySelect').innerHTML = "<div class='box notice-box'>Loading categories, wait please</div>";
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('categorySelect');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	ajaxRequest.open("GET", "actions/readcategories.php", true);
	ajaxRequest.send(null);
}
function checkUser()
{
	
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('userLog');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	var uname = document.getElementById('uname').value;
	var queryString = "?uname=" + uname;
	ajaxRequest.open("GET", "actions/login.php" + queryString, true);
	ajaxRequest.send(null);
}
function logOut1()
{
	var ajaxRequest;  // The variable that makes Ajax possible!
		try{
		// Opera 8.0+, Firefox, Safari
			ajaxRequest = new XMLHttpRequest();
		}
		catch (e){
			// Internet Explorer Browsers
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e){
				// Something went wrong
					alert("Your browser broke!");
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
				var ajaxDisplay = document.getElementById('sess');
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
			}
		}
		ajaxRequest.open("GET", "actions/logout.php", true);
		ajaxRequest.send(null);
}
function logOut()
{
	if (document.getElementById('valida').value==2)
	{
		var ajaxRequest;  // The variable that makes Ajax possible!
		try{
		// Opera 8.0+, Firefox, Safari
			ajaxRequest = new XMLHttpRequest();
		}
		catch (e){
			// Internet Explorer Browsers
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e){
				// Something went wrong
					alert("Your browser broke!");
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
				var ajaxDisplay = document.getElementById('userLog');
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
			}
		}
		// Now get the value from user and pass it to
		// server script.
		ajaxRequest.open("GET", "actions/logout.php", true);
		ajaxRequest.send(null);
		
		location.href='index.php';
	}
}
function checkSession()
{
	var ajaxRequest;  // The variable that makes Ajax possible!
		try{
		// Opera 8.0+, Firefox, Safari
			ajaxRequest = new XMLHttpRequest();
		}
		catch (e){
			// Internet Explorer Browsers
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e){
				// Something went wrong
					alert("Your browser broke!");
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
				var ajaxDisplay = document.getElementById('sess');
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
			}
		}
		// Now get the value from user and pass it to
		// server script.
		ajaxRequest.open("GET", "actions/checksession.php", true);
		ajaxRequest.send(null);
}
function registrarAct()
{
	if(document.getElementById('memberName').value == ''||document.getElementById('gender').value == ''||document.getElementById('memberEmail').value == ''||document.getElementById('memberUserName').value == ''||document.getElementById('memberPwd').value == '')
	{
		document.getElementById('registrarSuccess').innerHTML = "<div class='box error-box'>Fields marked with * are mandatory.</div>";
	}
	else
	{
	if(document.getElementById('memberPwd').value != document.getElementById('memberCPwd').value)
	{
		document.getElementById('registrarSuccess').innerHTML = "<div class='box error-box'>The passwords you entered are not the same.</div>";
	}
	else
	{
	document.getElementById('registrarSuccess').innerHTML = "<div class='box info-box'>We are trying to register you ... please wait</div>";
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('registrarSuccess');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
	var full_name = document.getElementById('memberName').value;
	var email = document.getElementById('memberEmail').value;
	var gender = document.getElementById('gender').value;
	var username = document.getElementById('memberUserName').value;
	var password = document.getElementById('memberPwd').value;
	var queryString = "?full_name=" + full_name + "&email=" + email + "&gender=" + gender + "&username=" + username + "&password=" + password;
	ajaxRequest.open("GET", "actions/registrar.php" +
		queryString, true);
	ajaxRequest.send(null);
	document.getElementById('memberName').value="";
	document.getElementById('memberEmail').value="";
	document.getElementById('gender').value=0;
	document.getElementById('memberUserName').value="";
	document.getElementById('memberPwd').value="";
	document.getElementById('memberCPwd').value="";
	}
	}
}
function logInNow()
{
	if(document.getElementById('innerUserName').value==""||document.getElementById('innerPwd').value=="")
	{
		document.getElementById('success1').innerHTML = "<div class='box error-box'>Please provide your username and password </div>";
	}
	else
	{
		document.getElementById('success1').innerHTML = "<div class='box info-box'>Trying to log you in, please wait ... </div>";
		var ajaxRequest;  // The variable that makes Ajax possible!
		try{
		// Opera 8.0+, Firefox, Safari
			ajaxRequest = new XMLHttpRequest();
		}
		catch (e){
			// Internet Explorer Browsers
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e){
				// Something went wrong
					alert("Your browser broke!");
					return false;
				}
			}
		}
		// Create a function that will receive data
		// sent from the server and will update
		// div section in the same page.
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
				var ajaxDisplay = document.getElementById('sess');
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
			}
		}
		// Now get the value from user and pass it to
		// server script.
		var user = document.getElementById('innerUserName').value;
		var pass = document.getElementById('innerPwd').value;
		ajaxRequest.open("GET", "actions/login.php?user=" + user + "&pass=" + pass, true);
		ajaxRequest.send(null);
	}
}
function logMeInY()
{
	document.getElementById('sess').innerHTML="<div class='row uniform'><div class='4u 12u$(xsmall)'><input type='text' placeholder='Username' id='innerUserName' name='innerUserName' class='f-input' autofocus/></div><div class='4u 12u$(xsmall)'><input type='password' placeholder='Password' id='innerPwd' name='innerPwd' class='f-input'/></div><div class='4u$ 12u$(xsmall)'><input type='button' id='innerLogin' name='innerLogin' class='f-input' value='Login' onclick='logInNow()' /></div></div><div id='success1'></div><br />";
	document.getElementById('success').innerHTML="";
	}
function validateSubmit()
{
	if (document.getElementById('chk').value=='in')
	{
		alert('Yes submit');
	}
	else if (document.getElementById('chk')=='out')
	{
		alert('No submit');
	}
	else 
	{
		alert ('Th');
	}
}
function hideDiv()
{document.getElementById('success').innerHTML="";}
function createCat()
{
  document.getElementById('catAddP').innerHTML = "<p><div class='row uniform'><div class='8u 12u$(x-small)'><input type='text' placeholder='Category name here' id='catInAdd' name='catInAdd' /></div><div class='3u$ 12u$(x-small)'><input type='button' value='Add' id='catSuAdd' name='catSuAdd' onclick='newCategory()' /></div></div></p>";
}
function newCategory()
{
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('catAddP');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
					var cat = document.getElementById('catInAdd').value;
	ajaxRequest.open("GET", "actions/addcategory.php?category_name=" + cat, true);
	ajaxRequest.send(null);
			  loadControls2();
			}
			function createChoir()
			{
			  document.getElementById('choirAddP').innerHTML = "<p><div class='row uniform'><div class='8u 12u$(x-small)'><input type='text' placeholder='Choir name here' id='choirInAdd' name='choirInAdd' /></div><div class='3u$ 12u$(x-small)'><input type='button' value='Add' id='choirSuAdd' name='choirSuAdd' onclick='newChoir()' /></div></div></p>";
			}
			function newChoir()
			{
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browser
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('choirAddP');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
					var cat = document.getElementById('choirInAdd').value;
	ajaxRequest.open("GET", "actions/addchoir.php?choir_name=" + cat, true);
	ajaxRequest.send(null);
			  loadControls1();
			}
			function createAlb()
			{
			  document.getElementById('albAddP').innerHTML = "<p><div class='row uniform'><div class='8u 12u$(x-small)'><input type='text' placeholder='Album name here' id='albInAdd' name='albInAdd' /></div><div class='3u$ 12u$(x-small)'><input type='button' value='Add' id='albSuAdd' name='albSuAdd' onclick='newAlbum()' /></div></div></p>";
			}
			function newAlbum()
			{
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('albAddP');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
					var cat = document.getElementById('albInAdd').value;
					var choir_id = document.getElementById('choir').value;
	ajaxRequest.open("GET", "actions/addalbum.php?album_name=" + cat + "&choir_id=" + choir_id, true);
	ajaxRequest.send(null);
			  readalbums();
			}
			function createComp()
			{
			  document.getElementById('compAddP').innerHTML = "<p><div class='row uniform'><div class='8u 12u$(x-small)'><input type='text' placeholder='Composer name here' id='compInAdd' name='compInAdd' /></div><div class='3u$ 12u$(x-small)'><input type='button' value='Add' id='compSuAdd' name='compSuAdd' onclick='newComposer()' /></div></div></p>";
			}
			function newComposer()
			{
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
	// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
			// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data
	// sent from the server and will update
	// div section in the same page.
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('compAddP');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	// Now get the value from user and pass it to
	// server script.
		var cat = document.getElementById('compInAdd').value;
		ajaxRequest.open("GET", "actions/addcomposer.php?composer_name=" + cat, true);
		ajaxRequest.send(null);
		loadControls();
	}