const accordionItems = document.querySelectorAll("#accordion-item-header");
accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener("click", e => {
        var activeAccordionItem = document.querySelector("#accordion-item-header.active");
        if (!activeAccordionItem) {
            accordionItem.classList.add("active");
        } else if (activeAccordionItem === accordionItem) {
            activeAccordionItem.classList.toggle("active");
        } else {
            activeAccordionItem.classList.remove("active");
            accordionItem.classList.add("active");
        }
    });
});


