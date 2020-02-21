console.log("Script file");

// Het GETten van nieuwe taken

const getNewTasks = async function() {
  const newTasksapiUrl =
    "https://wincacademydatabase.firebaseio.com/geeske/tasks.json";
  try {
    const result = await fetch(newTasksapiUrl, { method: "GET" });
    const resultJson = await result.json();
    //hushes verwijderen
    console.log("Before(the raw result):", resultJson);
    let tasks = Object.keys(resultJson).map(key => ({
      id: key,
      description: resultJson[key].description,
      done: resultJson[key].done
    }));
    console.log("After the tasks array", tasks);
    // einde hushes verwijderen

    const ul = document.getElementById("taskList");
    //description pakken ipv hele array
    tasks.forEach(task => {
      let listItem = document.createElement("li");
      ul.appendChild(
        listItem
      ).innerHTML = `${task.description} <img src="trashdeleteicon.jpg" class="prullenbakkie">`;
    });
  } catch (error) {
    console.log(error);
  }
};
getNewTasks();

// klikken op de AddButton zorgt voor:
// 1. informatie met POST doorgeven
// 2. nieuwe item toevoegen aan to do list

const getPostNewTasks = async function() {
  const updateapiUrl =
    "https://wincacademydatabase.firebaseio.com/geeske/tasks.json";
  try {
    const resultNewTasks = await fetch(updateapiUrl, {
      method: "POST",
      body: JSON.stringify({
        description: document.getElementById("nieuweTaskInvoer").value,
        done: "false"
      })
    });
  } catch (error) {
    console.log(error);
  }
};
document.getElementById("addButton").addEventListener("click", function() {
  getPostNewTasks(nieuweTaskInvoer);
});

// klikken op trashicon
// 1. item verdwijnt van lijst (event.target.id, item verwijderen die bij prullenbak hoort, niet allemaal)
// 2. item verwijderen/DELETEN uit database

const delteOldTasks = async function() {
  const deleteapiUrl =
    "https://wincacademydatabase.firebaseio.com/geeske/tasks/${id}.json";
  try {
    const resultDeleteTasks = await fetch(updateapiUrl, {
      method: "DELETE",
      body: JSON.stringify({
        id: document.getElementById("idNummer").value,
        done: "true"
      })
    });
  } catch (error) {
    console.log(error);
  }
};

document
  .getElementById("prullenbakkie")
  .addEventListener("click", function(event) {
    event.target.id = idNummer;
    deleteOldTasks(idNummer);
  });
