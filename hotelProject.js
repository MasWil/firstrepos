    function roomOneGuest(){
    var roomLength =document.getElementsByClassName('r1list')[0].getElementsByTagName('li');
      if (roomLength.length<3) {
      var inputText = document.getElementById('firstRoom').value;
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(inputText);
      newListItem.appendChild(newText);
      var position = document.getElementsByClassName('r1list')[0];
      position.appendChild(newListItem);
      }
      
      else{
        return
      }
    }
      function roomOneRemove(){
        var list =document.getElementById("list");
        var select = document.getElementById('firstRoomRemove').value;
        list.removeChild(list.childNodes[select-1]);
    }

    function roomTwoGuest(){
    var roomLength =document.getElementsByClassName('r2list')[0].getElementsByTagName('li');
      if (roomLength.length<3) {
      var inputText = document.getElementById('secondRoom').value;
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(inputText);
      newListItem.appendChild(newText);
      var position = document.getElementsByClassName('r2list')[0];
      position.appendChild(newListItem);
      }
      else{
        return
      }
    }
      function roomTwoRemove(){
        var list =document.getElementById("secondlist");
        var select = document.getElementById('secondRoomRemove').value;
        list.removeChild(list.childNodes[select-1]);
    }

    function roomThreeGuest(){
    var roomLength =document.getElementsByClassName('r3list')[0].getElementsByTagName('li');
      if (roomLength.length<3) {
      var inputText = document.getElementById('thirdRoom').value;
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(inputText);
      newListItem.appendChild(newText);
      var position = document.getElementsByClassName('r3list')[0];
      position.appendChild(newListItem);
      }
      else{
        return
      }
    }
      function roomThreeRemove(){
        var list =document.getElementById("thirdlist");
        var select = document.getElementById('thirdRoomRemove').value;
        list.removeChild(list.childNodes[select-1]);
    }
    
        function roomFourGuest(){
    var roomLength =document.getElementsByClassName('r4list')[0].getElementsByTagName('li');
      if (roomLength.length<3) {
      var inputText = document.getElementById('fourthRoom').value;
      var newListItem = document.createElement('li');
      var newText = document.createTextNode(inputText);
      newListItem.appendChild(newText);
      var position = document.getElementsByClassName('r4list')[0];
      position.appendChild(newListItem);
      }
      else{
        return
      }
    }
      function roomFourRemove(){
        var list =document.getElementById("fourthlist");
        var select = document.getElementById('fourthRoomRemove').value;
        list.removeChild(list.childNodes[select-1]);
    }