function iOScheck() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    return true;
  }
    return false;
}

isiOS = iOScheck();
isiOSChrome = navigator.userAgent.match('CriOS');

if (isiOS && !navigator.userAgent.match('CriOS')) {
    // remove the download from app store button if this is in iOS
    // because there will be a smart banner
    document.getElementById("appstore1").remove();

    // add download link in footer incase the
    // smart banner was dismissed
    var footer = document.getElementById("menu");
    var dlLink = document.createElement('h4');
    footer.prepend(dlLink);
    dlLink.outerHTML = '<h4><a href="https://apps.apple.com/app/id1412091383" >DOWNLOAD APP</a></h4><br>';

}
