
function addBlog() {
    blogs.forEach(function (object) {
        var newElementParent = document.getElementById(object.childOf);
        if (newElementParent) {
            var newElement = document.createElement(   object.type );
            newElement.setAttribute('style', "display:" + object.display);
            if (object.specialProperties) {
                for (var spI = 0; spI < object.specialProperties.length; spI++)
                {
                    newElement.setAttribute(object.specialProperties[spI].name, object.specialProperties[spI].value);
                }
            }
            if (object.content != '') {
                var textNode = document.createTextNode(object.content);
                newElement.appendChild(textNode);
            }
            // assuming three images per row

            newElementParent.appendChild(newElement);
        }
    })
}

addBlog();