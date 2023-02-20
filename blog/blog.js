const list_items = [
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl.",
  // "Ac condimentum arcu massa bibendum.",
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum.",
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et.",
  // "Nibh hac et integer nunc sapien.",
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor.",
  {
    text: "Hellow World!",
    href: "../posts/post_1/post_1.html",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl.",
    href: "https://ru.stackoverflow.com/questions/742388/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl.",
    href: "https://ru.stackoverflow.com/questions/742388/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl.",
    href: "https://ru.stackoverflow.com/questions/742388/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl.",
    href: "https://ru.stackoverflow.com/questions/742388/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl.",
    href: "https://ru.stackoverflow.com/questions/742388/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl.",
    href: "https://ru.stackoverflow.com/questions/742388/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0",
  },
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 6;

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let item_element = document.createElement("a");
    item_element.classList.add("item");

    item_element.innerText = item.text;
    item_element.href = item.href;
    wrapper.appendChild(item_element);
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
