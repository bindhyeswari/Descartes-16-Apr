// console.log('firing ajax call ... ');

function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/calendar');
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.responseText).message);
        }
        // console.log(xhr.readyState);
    });
    xhr.send();
}

function postData(jsonObject, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/calendar');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            callback(xhr);
        }
        // console.log(xhr.readyState);
    });
    xhr.send(JSON.stringify(jsonObject));
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.forms.candidate;
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        postData({
            name: form.username.value,
            email: form.email.value
        }, function (xhr) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                console.log(response);
            }
        })
    })
});