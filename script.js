function getFormvalue(event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

    alert(firstName + " " + lastName);
}
