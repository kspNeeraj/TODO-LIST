// List item container consists of all the tasks which are added in the list
var itemcontainer = document.getElementsByClassName('input-fields');


for (let item of itemcontainer){

    let catItem=item.getElementsByTagName('div')[2];    
    let catItemText="";

    //Getting the category text for each list item to determin the color coding
     catItemText =catItem.getElementsByTagName('div')[0].innerHTML;
    
     if(catItemText.trim()=='choose category'){
        
        catItemText.innerHTML=""
        catItem.setAttribute("style", "background-color: white; border:none");
    
    }
   
   else if(catItemText.trim()=='Personal'){
        
        catItem.setAttribute("style", "background-color: #3C6CB8;");
    
    }
    else if(catItemText.trim()=='Work'){
        catItem.setAttribute("style", "background-color: #9C00AF;");
    }
    else if(catItemText.trim()=='Cleaning'){
        catItem.setAttribute("style", "background-color: green;");
    }
    else if(catItemText.trim()=='School'){
        catItem.setAttribute("style", "background-color: #F2A700;");
    }
    else if(catItemText.trim()=='Others'){
        catItem.setAttribute("style", "background-color: violet;");
    }

}
