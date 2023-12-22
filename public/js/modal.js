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
