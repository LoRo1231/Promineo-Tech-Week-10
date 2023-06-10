/* Code below will add production jobs to the table */

id = 0;
/* we need to start with a 0 ID # - this will keep track of our list items*/

document.getElementById('add').addEventListener('click', () =>{
    let table = document.getElementById('list');
    let row = table.insertRow(1); /* you want to start at the 2nd position (which has an index of 1) since your first row
    (row 0) is the headers*/
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML=document.getElementById('job-number').value;
    row.insertCell(1).innerHTML=document.getElementById('customer-name').value;
    row.insertCell(2).innerHTML=document.getElementById('description').value;
    row.insertCell(3).innerHTML= document.getElementById('print-by-date').value;
    row.insertCell(4).innerHTML= document.getElementById('deliver-by-date').value;
    let actions = row.insertCell(5);
    actions.appendChild(createCompleteButton(id++)); 
    document.getElementById('description').value= ''; /*sets entry back to blank for next entry - UX */
    document.getElementById('job-number').value= '';
    document.getElementById('customer-name').value= '';
    document.getElementById('print-by-date').value= '';
    document.getElementById('deliver-by-date').value= '';
});
/* the parameter 'add' is refering to our button. Meaning everytime the button is clicked, we want it to do something so
we add and event listener. Event listeners take in 2 parameters, and action & a function */

function createCompleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Complete';
    btn.onclick = () => {  /*binded a function to a buton so that ON CLICK somthing happens */
        console.log(`Completed row with id: item-${id}`);
        let elementToComplete = document.getElementById(`item-${id}`);
        elementToComplete.parentNode.removeChild(elementToComplete);
    };
    return btn; 
}