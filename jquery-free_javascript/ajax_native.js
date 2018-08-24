const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Ajax Get...


// JavaScript native Get request...

function getGitHubInfo(userName){
    const url = "https://api.github.com/users/"
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url+userName, true)
        xhr.onload = () => res(xhr.responseText)
        xhr.onerror = () => rej(xhr.statusText)
        xhr.send()
    }).then(dt => console.log(dt))
      .catch(er => console.log('some errr', er))
}


getGitHubInfo('google')


// Post would work the same .. just use the open but with a 'POST' instead...