const cookies = {
  setCookie: function (name, value) {
    var cookie = [
      name,
      "=",
      JSON.stringify(value),
      "; domain=.",
      window.location.host.toString(),
      "; path=/;",
    ].join("");
    document.cookie = cookie;
  },

  getCookie: function (name) {
    var result = document.cookie.match(new RegExp(name + "=([^;]+)"));
    result && (result = JSON.parse(result[1]));
    return result;
  },

  saveTodos: function (tasks) {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    this.showTodos();
  },

  loadTodos: function () {
    return JSON.parse(window.localStorage.getItem("task-list")) || [];
  },

  showTodos: () => {
    document.querySelector("#todo-list-root").innerHTML = "";
    const tasks = this.loadTodos();
    tasks.forEach((value) => {
      document.querySelector("#todo-list-root").innerHTML += `
            <li class="todo-list__item">
                <span>${value}</span>
                <i class="fa fa-trash delete"></i>
            </li>
        `;
    });
  },
};
