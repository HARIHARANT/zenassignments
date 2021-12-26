var request=new XMLHttpRequest();
request.open('Get','https://jsonplaceholder.typicode.com/posts');
request.send();
request.onload=function(){   
    var data = JSON.parse(this.response);
    for(let i in data){
        console.log(data[i].id);
    } 
}