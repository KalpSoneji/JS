function showForm() {
    const container = document.getElementById("formContainer");
    const existingForm = document.getElementById("userForm");

    // Check if the form already exists, if so, remove it
    if (existingForm) {
        container.removeChild(existingForm);
        return;
    }

    const form = document.createElement("form");
    form.id = "userForm";
    form.style.marginTop = "10px";
    form.style.marginBottom = "10px";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    form.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;
    nameInput.style.marginLeft = "10px";
    nameInput.style.marginBottom = "5px";
    form.appendChild(nameInput);

    form.appendChild(document.createElement("br"));

    const ageLabel = document.createElement("label");
    ageLabel.textContent = "Age:";
    form.appendChild(ageLabel);

    const ageInput = document.createElement("input");
    ageInput.type = "number";
    ageInput.id = "age";
    ageInput.name = "age";
    ageInput.required = true;
    ageInput.style.marginLeft = "24px";
    ageInput.style.marginBottom = "5px";
    form.appendChild(ageInput);

    form.appendChild(document.createElement("br"));

    const genderLabel = document.createElement("label");
    genderLabel.textContent = "Gender:";
    form.appendChild(genderLabel);

    const genderInput = document.createElement("input");
    genderInput.type = "text";
    genderInput.id = "gender";
    genderInput.name = "gender";
    genderInput.required = true;
    genderInput.style.marginLeft = "8px";
    genderInput.style.marginBottom = "5px";
    form.appendChild(genderInput);

    form.appendChild(document.createElement("br"));

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.style.marginTop = "10px";
    form.appendChild(submitButton);

    container.appendChild(form);

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = nameInput.value;
        const age = ageInput.value;
        const gender = genderInput.value;

        const resultContainer = document.getElementById("resultContainer") || document.createElement("div");
        resultContainer.id = "resultContainer";
        resultContainer.style.position = "absolute";
        resultContainer.style.right = "20px";
        resultContainer.style.top = "50px";
        resultContainer.style.width = "200px";
        resultContainer.style.padding = "10px";
        resultContainer.style.border = "1px solid #ccc";
        resultContainer.style.backgroundColor = "#f9f9f9";

        const resultTable = document.createElement("table");
        resultTable.style.width = "100%";
        resultTable.style.marginBottom = "10px";

        const tableBody = document.createElement("tbody");

        const nameRow = document.createElement("tr");
        const nameCell1 = document.createElement("th");
        nameCell1.textContent = "Name";
        const nameCell2 = document.createElement("td");
        nameCell2.textContent = name;
        nameRow.appendChild(nameCell1);
        nameRow.appendChild(nameCell2);
        tableBody.appendChild(nameRow);

        const ageRow = document.createElement("tr");
        const ageCell1 = document.createElement("th");
        ageCell1.textContent = "Age";
        const ageCell2 = document.createElement("td");
        ageCell2.textContent = age;
        ageRow.appendChild(ageCell1);
        ageRow.appendChild(ageCell2);
        tableBody.appendChild(ageRow);

        const genderRow = document.createElement("tr");
        const genderCell1 = document.createElement("th");
        genderCell1.textContent = "Gender";
        const genderCell2 = document.createElement("td");
        genderCell2.textContent = gender;
        genderRow.appendChild(genderCell1);
        genderRow.appendChild(genderCell2);
        tableBody.appendChild(genderRow);

        resultTable.appendChild(tableBody);
        resultContainer.appendChild(resultTable);

        document.body.appendChild(resultContainer);

        // Remove the form after submission
        form.remove();
    });
}
