// Create post modal
const openCreate = $("#create");
const closeCreate = $("#close-create");
const createModal = $("#modal");
const fade = $("#fade");

const toggleModal = (modal, fade) => {
    [modal, fade].forEach((elem) => {
        elem.toggleClass("hide");
    });
};

[openCreate, closeCreate].forEach((elem) => {
    elem.click(() => toggleModal(createModal, fade));
});

// Update post modal
const openUpdate = $("#edit");
const closeUpdate = $("#close-update");
const updateModal = $("#upd-modal");

[openUpdate, closeUpdate].forEach((elem) => {
    elem.click(() => toggleModal(updateModal, fade));
});

// Delete post modal
const openDelete = $("#delete");
const closeDelete = $("#cancel");
const deleteModal = $("#del-modal");

[openDelete, closeDelete].forEach((elem) => {
    elem.click(() => toggleModal(deleteModal, fade));
});
