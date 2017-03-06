/*
$('.cats-list-item').click(function() {
	var id = $(this).find('.catpicture').attr('title');
	var name = $(this).find('.catpicture').attr('name');
	var catpic = $(this).find('.catpicture').clone();

	var catpos = findCats(id);

	if (catpos.length === 0) { //catpos = ["not found", "found"]
		var newcatobj = cats(id, name); //no match in the array
		countCats(newcatobj);
		$('.mainkitty-text').css('display', 'block');
		catsInfo($('.mainkitty-text'), ".catcount", newcatobj.count);
		catsInfo($('.mainkitty-text'), ".catname", newcatobj.name);
		$('.mainkitty-img').html(catpic);
	} else {
		countCats(catpos[0]);
		$('.mainkitty-text').css('display', 'block');
		catsInfo($('.mainkitty-text'), ".catcount", catpos[0].count);
		catsInfo($('.mainkitty-text'), ".catname", catpos[0].name);
		$('.mainkitty-img').html(catpic);
	}
});
*/



var allcats = [{catid: "104", name: "missy", count: 12}];
function catsInfo(input, element, data) {
	input.children().find(element).html(data);
}

$('.cats-list-item').click(function() {
	var catpic = $(this).find('.catpicture').clone();
	$('.mainkitty-img').html(catpic);
	var id = $(this).find('.catpicture').attr('title');

	var catpos = findCats(id);
	if (catpos.length === 0) { //no match in the array
		var name = $(this).find('.catpicture').attr('name');
		var newcatobj = cats(id, name);
		$('.mainkitty-text').css('display', 'block');
		catsInfo($('.mainkitty-text'), ".catcount", newcatobj.count);
		catsInfo($('.mainkitty-text'), ".catname", newcatobj.name);
	} else {
		$('.mainkitty-text').css('display', 'block');
		catsInfo($('.mainkitty-text'), ".catcount", catpos[0].count);
		catsInfo($('.mainkitty-text'), ".catname", catpos[0].name);
	}
});


$('.mainkitty-img').click(function() {
	var id = $(this).attr('title');

	for(var i=0; i < allcats.length; i++) {
		if (allcats[i].id === id) {
			countCats(allcats[i]);
			catsInfo($('.mainkitty-text'), ".catcount", allcats[i].count);
		}
	}
});



function countCats(catobj) {
	catobj.count += 1;
}

function cats(id, name) {
	var newcat = {
		catid: id,
		name: name,
		count: 0
	};
	allcats.push(newcat);
	return newcat;
}

function findCats(catid) {
	var catposition = [];
	for(var i=0; i < allcats.length; i++) {
		if (allcats[i].catid === catid) {
			catposition.push(allcats[i]);
		}
	}
	return catposition;
}