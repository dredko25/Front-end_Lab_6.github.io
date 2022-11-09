function createNode(description, info) {
    const Content = document.querySelector(".content");
    let listInfo = document.createElement('ul');
    listInfo.classList.add('info');
    listInfo.style.padding = '10px';
    listInfo.style.margin = '0px';
    listInfo.style.width = '20%';
    listInfo.style.border = '2px solid #FFFFFF';
    listInfo.style.lineHeight = '30px';
    for(let i = 0; i < info.length; i++){
        let listItem = document.createElement('li');
        listItem.style.listStyleType = 'none';
        if(i == 0){
            let img = document.createElement('img');
            img.style.display = 'block';
            img.style.marginLeft = 'auto';
            img.style.marginRight = 'auto';
            img.style.width = '80%';
            img.src = info[0];
            listItem.appendChild(img);
        }
        else{
            listItem.textContent = description[i]+info[i];
        }
        listInfo.appendChild(listItem);
        Content.appendChild(listInfo);
    }
}
let button = document.querySelector('.button');
button.onclick = function () {
    fetch('https://randomuser.me/api')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const Picture = data.results[0].picture.large;
        const Country = data.results[0].location.country;
        const Postcode = data.results[0].location.postcode;
        const Phone = data.results[0].phone;
        const Name = (`${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`);
        const arrData = [Picture,  Country, Postcode, Phone, Name];
        const arrDataDesc = ['Pic - ', 'Country - ', ' Postcode - ', 'Phone - ', 'Name - '];
        createNode(arrDataDesc, arrData);
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    });
};
