$(document).ready(
      
     function () {
         var dataLoaded = false;
         var refreshCount = 0;
         $('#getWordPressPost').click(function () {
             if (!dataLoaded) {
                 dataLoaded = true;
                 loadPosts();
                
             }
         });
         $('#refheshWordPressPost').click(function () {
             refreshCount++;
             alert('refresh count' + refreshCount );
             loadPosts();

         });
         function loadPosts() {
             $.get("https://public-api.wordpress.com/rest/v1/sites/idcdistro.wordpress.com/posts", function (data, status) {
                 alert("Data: " + data.keys + "\nStatus: " + status);
                 var tableData = '<table><tr><td>Links</td></tr>';
                 for (var i = 0; i < data.posts.length; i++) {
                     tableData += '<tr><td><a href="' + data.posts[i].URL + '" target=_blank>' + data.posts[i].title + '</a></td></tr>'
                 }
                 tableData += '</table>';
                 $('#posts').html(tableData);

             });
         }
     }


);