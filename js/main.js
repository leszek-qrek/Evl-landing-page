$(document).ready(function(){
    
    changeContent();
    clearStorage();

});

storageInput = () => {

    if(!localStorage.load){
        localStorage.load = 1;
    }else{
        let l = localStorage.load;
        l++;
        localStorage.load = l;
        return l;
    };
      
};

changeContent = () => {   

    let s = storageInput();    
    let cont = $('#content');
    
    if(s > 10){
        cont.html('Metallica');
    }
    
};

clearStorage = () => {
    $('#clear').on('click',function(){
        localStorage.clear();
    });
}