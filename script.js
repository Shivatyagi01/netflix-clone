document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
        const parent = item.parentNode;
        const siblings = Array.from(parent.children).filter((child) => child !== item);
        siblings.forEach((sibling) => sibling.classList.remove("open"));
        item.classList.toggle("open");
    });
});
