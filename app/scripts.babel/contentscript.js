'use strict';

var content = document.getElementById('content')
var link = decodeURIComponent(document.location.href.replace(/https:\/\/.*\/away\.php\?to=/, ''))
var button = document.createElement('a')
var p = document.createElement('p')
button.href = link
button.innerHTML =  'Continue anyway >>'

p.appendChild(button)
content.appendChild(p)

