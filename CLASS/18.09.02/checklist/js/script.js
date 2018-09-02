var text = $(".text");
var button = $(".button");
var list = $(".list");
var row = "<div class='row'></div>";
var remove = "<div class='remove'>Удалить</div>"

/*
.value => val();
.innerHTML => html();
*/

list.html(localStorage.checklist);

button.on("click", function() {
	if(text.val() == "") return;
	list.append(row).find(".row").last().html(text.val()).append(remove);
	localStorage.checklist = list.html();
})

list.on("click", ".row", function() {
	$(this).css({"background": "green"});
	localStorage.checklist = list.html();
})

list.on("click", ".remove", function() {
	$(this).parent().remove();
	localStorage.checklist = list.html();
})