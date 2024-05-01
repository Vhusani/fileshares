function generateNonce() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function setCSPWithNonce() {
  var cspMetaTag = document.createElement('meta');
  cspMetaTag.setAttribute('http-equiv', 'Content-Security-Policy');
  cspMetaTag.setAttribute('content', "default-src 'self'; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; script-src 'self' 'nonce-" + generateNonce() + "' https://tympanus.net https://ajax.googleapis.com https://cdn.jsdelivr.net https://ajax.googleapis.com;  connect-src 'self' http://localhost:8090 https://localhost:8090 https://dev.shop.cashcrusaders.co.za https://localhost:7154 https://analytics.google.com https://testidentity.cashcrusaders.co.za https://idsvr4.azurewebsites.net https://in.hotjar.com https://www.google-analytics.com https://stats.g.doubleclick.net wss://ws12.hotjar.com https://ws12.hotjar.com https://vc.hotjar.io; form-action 'self' *.twitter.com *.google.com *.facebook.com connect.facebook.net localhost:8090 idsvr4.azurewebsites.net testidentity.cashcrusaders.co.za; img-src 'self' www.googletagmanager.com https://www.google-analytics.com https://www.google.co.za https://www.google.com https://www.facebook.com http://t.co https://googleads.g.doubleclick.net; frame-src 'self' https://www.google.com/");
  document.head.appendChild(cspMetaTag);

  // Check if the element exists before manipulating it
  var goBackLink = document.getElementById("goBackLink");
  if (goBackLink) {
    goBackLink.removeAttribute("onclick");
    goBackLink.addEventListener("click", function() {
      window.history.back();
    });
  } else {
    //console.error("Element with id 'goBackLink' not found.");
  }
}

window.addEventListener('DOMContentLoaded', setCSPWithNonce);
