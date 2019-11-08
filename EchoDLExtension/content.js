function getURL(){
    var finalurl = ""
    for (var i = 0; i < document.scripts.length; i ++){
        var x = document.scripts[i].innerHTML;
        var regex = /https.+?content.+?mp4/g;
        var url = x.match(regex);
        var fixurl;

        if (url != null) {
            fixurl = url[1];
        } else{
            regex = /https.+?content.+?m3u8/g;
            url = x.match(regex);
            if (url != null){
                fixurl = url[1];
                fixurl = fixurl.slice(0, fixurl.length - 9);
                fixurl = fixurl.concat("hd1.mp4");
            }
        }

        if (fixurl != null){
            for (var i = 0; i < fixurl.length; i++) {
              if (fixurl.charAt(i) != "\\"){
                finalurl += fixurl.charAt(i)
              }
            }
        break;
        }
    }
    var finalurl2 = finalurl.slice(0, finalurl.length - 5)
    finalurl2 = finalurl2.concat("2.mp4")
    urls = [finalurl, finalurl2];

    console.log(finalurl);
    console.log(finalurl2);

    chrome.runtime.sendMessage({urls: urls});
    };
getURL()