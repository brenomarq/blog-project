const openCreate = $("#create");
const closeCreate = $("#close");
const modal = $("#modal");
const fade = $("#fade");

const toggleModal = () => {
    [modal, fade].forEach((elem) => {
        elem.toggleClass("hide");
    });
};

[openCreate, closeCreate].forEach((elem) => {
    elem.click(() => toggleModal());
});
