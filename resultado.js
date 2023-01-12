const query = new URLSearchParams(window.location.search);

const selectTitle = document.querySelector(".selectedtitle");

selectTitle.innerHTML = `You selected ${query.get("ranting")} out of 5`;
