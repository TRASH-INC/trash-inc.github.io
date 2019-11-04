function iOScheck() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    return true;
  }
    return false;
}

isiOS = iOScheck();
isSafari = navigator.userAgent.indexOf("Safari") > -1;

if (isiOS && isSafari) {
    // remove the download from app store button if this is in iOS
    // because there will be a smart banner
    document.getElementById("appstore1").remove();

    // add download link in footer incase the
    // smart banner was dismissed
    var footer = document.getElementById("menu");
    var dlLink = document.createElement('h4');
    footer.prepend(dlLink);
    dlLink.outerHTML = '<h4><a href="https://apps.apple.com/us/app/trash-you-shoot-we-edit/id1412091383?ls=1" >DOWNLOAD APP</a></h4><br>';

}
