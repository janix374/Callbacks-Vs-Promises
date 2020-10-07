
export function formLogic(someData, displayFunction, idForm, idSelect){

    const form = document.getElementById(idForm);
    const selection = document.getElementById(idSelect);

    someData.map((item) =>{
        const newOptions = document.createElement('option');
        const optionText = document.createTextNode(item.userName);
        newOptions.appendChild(optionText);
        newOptions.setAttribute('value',item.id);
        selection.appendChild(newOptions);
    });

    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        let index = selection.selectedIndex;
        const selectedData = {
            userName: someData[index].userName,
            userEmail: someData[index].userEmail,
            userPassword: someData[index].userPassword,
            content: someData[index].userPosts
        }
        displayFunction(selectedData);
    });
}