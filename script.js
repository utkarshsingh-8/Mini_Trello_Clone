function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event, targetId) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    
    // Append the dragged element to the appropriate stage
    var dropZone = document.getElementById(targetId + '-container');
    dropZone.insertBefore(draggedElement, dropZone.lastChild);
  }
  
  function addCard(stageId) {
    var stageContainer = document.getElementById(stageId + '-container');
    
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.setAttribute('contenteditable', 'true');
    newCard.textContent = 'New Task';
    newCard.draggable = true;
    newCard.id = 'new-task-' + Math.random();
    newCard.addEventListener('dragstart', drag);
    
    stageContainer.insertBefore(newCard, stageContainer.lastChild);
  }
  