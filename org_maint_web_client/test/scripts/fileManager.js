// The thought is the usage of the 'a download' contruct 
// will need to capture  the following events 
// start download
// download progress (show  in progress bar..)
// complete downoad 
//
//loading the files. We assume the files exist under te 'downloadMaterial' folder
// circle around and simulate an add file later
var folder = 'downloadMaterial';
var fileNames = ['test1.txt', 'test2.txt', 'test3.txt'];
var downloadDiv = document.getElementById('downloads');//.innerHTML = s;
var allDownloadBtn = document.getElementById('allDownloadBtn');//.innerHTML = s;
allDownloadBtn.addEventListener("click",download)
fileNames.forEach(function (fileName) {
    var div = document.createElement('div')
    div.id = fileName + '_container';
    
    var a = document.createElement('a');
    a.href = folder + '/' + fileName;
    a.download =   fileName;
    var atext = document.createTextNode(fileName);
    a.appendChild(atext);
    div.appendChild(a);
    progressBar = document.createElement('progress');
    progressBar.value = 0;
    progressBar.max = 100;
    div.appendChild(progressBar);
    downloadDiv.appendChild(div);
});

function download() {
    var hrefs = downloadDiv.getElementsByTagName("a");
    var progressBars = downloadDiv.getElementsByTagName("progress");
    for (var i = 0 ; i < hrefs.length; i++) {
        hrefs[i].click();
        progressBars[i].value = 100;
    }
}
function downloadWithContent(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

  function handleFileSelect(evt) {
      var fileToLoad = document.getElementById("files").files[0];

      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
          var textFromFileLoaded = fileLoadedEvent.target.result;
          var textToWrite = textFromFileLoaded; //document.getElementById("inputTextToSave").value;
          var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
          var fileNameToSaveAs = fileToLoad.name;
          var downloadLink = document.createElement("a");
          downloadLink.download = fileNameToSaveAs;
          downloadLink.href = fileNameToSaveAs;
        //  downloadLink.innerHTML = "Download File";
          var div = document.createElement('div')
          div.id = fileNameToSaveAs + '_container';

          
          var atext = document.createTextNode(fileNameToSaveAs);
          downloadLink.appendChild(atext);
          div.appendChild(downloadLink);
          progressBar = document.createElement('progress');
          progressBar.value = 0;
          progressBar.max = 100;
          div.appendChild(progressBar);
          downloadDiv.appendChild(div);
      };
      fileReader.readAsText(fileToLoad, "UTF-8");
  }
 
document.getElementById('files').addEventListener('change', handleFileSelect, false);
