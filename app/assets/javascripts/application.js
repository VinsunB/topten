// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var num = 0;
function addContentForm() {

if (num >= 9) { 
alert("maxed out");
} else {

num++;

var li = document.createElement('li');
li.innerHTML = '<br> <input id="post_contents_attributes_'+num+'_image" name="post[contents_attributes]['+num+'][image]" type="file" /></li><br><label for="post_contents_attributes_'+num+'_title">Title</label><input id="post_contents_attributes_'+num+'_title" name="post[contents_attributes]['+num+'][title]" type="text" /><br><label for="post_contents_attributes_'+num+'_body">Body</label><input id="post_contents_attributes_'+num+'_body" name="post[contents_attributes]['+num+'][body]" type="text" />'

  document.getElementById('content').appendChild(li);

}
}

function removeContentForm() {
if (num > 0 ) {num--;
}

	var li = document.getElementsByTagName("li")[1];
var parent = li.parentNode;
parent.removeChild(li)


}