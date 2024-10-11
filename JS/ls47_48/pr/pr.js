const formButton = document.querySelector('input[type="submit"]');

formButton.onclick = (event) => {
    const divForData = document.getElementById('formData');

    const { l_name, f_name, age } = document.forms.myForm;

    const user = {
        l_name: l_name.value,
        f_name: f_name.value,
        age: age.value
    }
    console.log(user);
    divForData.innerText = `Hello, My LAST name is: ${l_name.value}, and my FIRST name ${f_name.value}. I am ${age.value}`

    event.preventDefault();
}