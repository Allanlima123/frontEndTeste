const btnRegisterUser = document.querySelector(".btn-register-user");

const getAllUsers = async () => {
  const usersList = document.querySelector("#table-users-list");

  try {
    const response = await fetch("http://localhost/backend/crud_user/get.php");
    const data = await response.json();

    usersList.innerHTML = "";

    usersList.innerHTML += data
      .map((user) => {
        return `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button type="button" class="update" onclick='openUpdateModal(${JSON.stringify(
                          user
                        )})'>Update</button>
                        <button type="button" class="delete" onclick="deleteUser(${
                          user.id
                        })">Delete</button>
                    </td>
                </tr>
        `;
      })
      .join("");
  } catch (error) {
    console.error("Error when fetching data:", error);
  }
};

const deleteUser = async (userId) => {
  try {
    const confirmDelete = confirm(
      `Are you sure you want to delete the user ID ${userId}?`
    );
    if (confirmDelete) {
      const response = await fetch(
        "http://localhost/backend/crud_user/delete.php",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userId }),
        }
      );

      const result = await response.json();
      console.log("User successfully deleted", result);

      getAllUsers();
    }
  } catch (error) {
    console.error("Error when deleting user", error);
  }
};

const openUpdateModal = (user) => {
  const modalBox = document.querySelector(".modal-box");

  modalBox.classList.add("modal");

  const cancelButton = modalBox.querySelector(".cancel");
  cancelButton.addEventListener("click", () =>
    modalBox.classList.remove("modal")
  );

  const updateForm = modalBox.querySelector("#updateForm");
  updateForm.querySelector("#id").value = user.id;
  updateForm.querySelector("#name").value = user.name;
  updateForm.querySelector("#email").value = user.email;

  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const updateData = new FormData(updateForm);

    try {
      const response = await fetch(
        "http://localhost/backend/crud_user/update.php",
        {
          method: "PUT",
          body: updateData,
        }
      );

      const result = await response.json();

      console.log("User successfully updated", result);
      setTimeout(() => {
        document.body.removeChild(modalContainer);
        getAllUsers();
      }, 2000);
    } catch (error) {
      console.error("Error when updating user", error);
    }
  });
};

btnRegisterUser.addEventListener("click", () => {
  window.location.href = "../src/cadastroUsuario/index.html";
});

document.addEventListener("DOMContentLoaded", getAllUsers);
