function clickSubmitButton(event){
    event.preventDefault();
    const username= document.getElementById("username").value;
    const welcome=document.getElementById("welcome");
    welcome.textContent= 'Hello '+username+'!';
    welcome.style.display=('block');
}
