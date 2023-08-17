let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('Get', './data/message.txt', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            console.log(data);
            displayTextData(data);
        }

    }
});

let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
}

let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./data/message.json', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            let message = JSON.parse(data);
            displayJSONData(message);
        }
    };
});

let displayJSONData = (message) => {
    let htmlTemplate = '';
    htmlTemplate = `<ul>
                        <li>ID : ${message.id}</li>
                        <li>HEAD : ${message.head}</li>
                        <li>BODY : ${message.body}</li>
                    </ul>`;

    document.querySelector('#json-card').innerHTML = htmlTemplate;
};

