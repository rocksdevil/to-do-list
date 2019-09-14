var toDo = {

    start: function () { // start function
        let info = toDo.getToDo();
        if (info !== "") {
            let taskNum = toDo.counter();
            toDo.structureTab(taskNum, info);
        } else {
            alert("Task can not be empty");
        }
    },
    
    // get data from input
    getToDo: function () { 
        let data;
        var getData = data => data = $("#todo-input").val();
        return getData(data);
    },
    
    base: 0, // base num to counter of tasks
    
    // couter
    counter: function () {
        var task_id = this.base++;
        return task_id;
    },
    
    // clear input file from used data
    clearInput: function () {
        let data;
        var goData = data => data = $("#todo-input").val("");
        goData(data);
    },

    // delete task
    deleteInput: function (num) {
        let last = num.length - 1;
        if (confirm('Are you sure that you want to delete it')) {
            $("#box" + num.charAt(last)).remove();
        }
    },

    // mark task as done or not
    markTask: function (name) {
        let last = name.length - 1;
        if ($("input[name='" + name + "']").is(":checked")) {
            $("#box" + name.charAt(last)).css("background-color", "lightgrey");
        } else
            $("#box" + name.charAt(last)).css("background-color", "");
    },
    
    // show checked inputs
    checkAtr: function (flow) {
        var input = $(flow).attr('name');
        let last = input.length - 1;
        $("#box" + input.charAt(last)).css("display", "none");
    },

    // show unchecked inputs
    uncheckAtr: function (inflow) {
        var input = $(inflow).attr('name');
        let last = input.length - 1;
        $("#box" + input.charAt(last)).css("display", "block");
    },

    // sort of inputs by checkbox param
    sortToDo: function (param) {
        switch (param) {
            case "finished":
                $("input[type=checkbox]").each(function () {
                    if (!$(this).is(':checked')) {
                        toDo.checkAtr(this);
                    } else {
                        toDo.uncheckAtr(this);
                    }
                });
                break;

            case "notFinished":
                $("input[type=checkbox]").each(function () {
                    if ($(this).is(':checked')) {
                        toDo.checkAtr(this);
                    } else {
                        toDo.uncheckAtr(this);
                    }
                });
                break;

            default:
                $("input[type=checkbox]").each(function () {
                    toDo.uncheckAtr(this);
                });
        }
    },

    // structure of task
    structureTab: function (itemId, content) {
        let object;
        var structure = object =>
            object = `<div class="panel panel-default add-todo-panel" id="box` + itemId + `">
                            <div class="delete-btn">
                                <input class="delete" type="button" id="btn` + itemId + `" onclick="toDo.deleteInput(this.id)" />
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-10">
                                        <div class="text">
                                            ` + content + `
                                        </div>
                                    </div>
                                    <div class="col-sm-2 finished-box">
                                        <div class="col task-finished">
                                            Finished
                                            <input type="checkbox" name="task` + itemId + `" id="todo-btn" class="myinput large" onclick="toDo.markTask(this.name)"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        $("#todo-list-root").append(structure(object));
        toDo.clearInput();
    },
}
