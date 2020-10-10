// content
var hello = document.getElementById("hello");
var seeking = document.getElementById("seeking");
var what = document.getElementById("what");
var draw = document.getElementById("draw");
// submenus
var seekingMenu = document.getElementById("seekingMenu");
var whatMenu = document.getElementById("whatMenu");
// checkboxes
var multiplicityCheckbox = document.querySelector('input[value="checkMultiplicity"]');
var multiplicityMoreCheckbox = document.querySelector('input[value="checkMultiplicityMore"]');
var frictionCheckbox = document.querySelector('input[value="checkFriction"]');
var frictionMoreCheckbox = document.querySelector('input[value="checkFrictionMore"]');
var interactionCheckbox = document.querySelector('input[value="checkInteraction"]');
var interactionMoreCheckbox = document.querySelector('input[value="checkInteractionMore"]');
var truthsCheckbox = document.querySelector('input[value="checkTruths"]');
var powerCheckbox = document.querySelector('input[value="checkPower"]');
var connectCheckbox = document.querySelector('input[value="checkConnect"]');
// text
var multiplicity = document.getElementById("multiplicity");
var multiplicityMore = document.getElementById("multiplicityMore");
var friction = document.getElementById("friction");
var frictionMore = document.getElementById("frictionMore");
var interaction = document.getElementById("interaction");
var interactionMore = document.getElementById("interactionMore");
var truths = document.getElementById("truths");
var power = document.getElementById("power");
var connect = document.getElementById("connect");


function callHelloOnClick() {

  if (hello.style.visibility === "hidden") {
    hello.style.visibility = "visible";
    seeking.style.visibility = "hidden";
    what.style.visibility = "hidden";
    draw.style.visibility = "hidden";
    seekingMenu.style.visibility = "hidden";
    whatMenu.style.visibility = "hidden";
    multiplicityCheckbox.checked = false;
    multiplicity.style.visibility = "hidden";
    multiplicityMoreCheckbox.checked = false;
    multiplicityMore.style.visibility = "hidden";
    frictionCheckbox.checked = false;
    friction.style.visibility = "hidden";
    frictionMoreCheckbox.checked = false;
    frictionMore.style.visibility = "hidden";
    interactionCheckbox.checked = false;
    interaction.style.visibility = "hidden";
    interactionMoreCheckbox.checked = false;
    interactionMore.style.visibility = "hidden";
    truthsCheckbox.checked = false;
    truths.style.visibility = "hidden";
    powerCheckbox.checked = false;
    power.style.visibility = "hidden";
    connectCheckbox.checked = false;
    connect.style.visibility = "hidden";
  } else {
    hello.style.visibility = "visible";
    seeking.style.visibility = "hidden";
    what.style.visibility = "hidden";
    draw.style.visibility = "hidden";
    seekingMenu.style.visibility = "hidden";
    whatMenu.style.visibility = "hidden";
    multiplicityCheckbox.checked = false;
    multiplicity.style.visibility = "hidden";
    multiplicityMoreCheckbox.checked = false;
    multiplicityMore.style.visibility = "hidden";
    frictionCheckbox.checked = false;
    friction.style.visibility = "hidden";
    frictionMoreCheckbox.checked = false;
    frictionMore.style.visibility = "hidden";
    interactionCheckbox.checked = false;
    interaction.style.visibility = "hidden";
    interactionMoreCheckbox.checked = false;
    interactionMore.style.visibility = "hidden";
    truthsCheckbox.checked = false;
    truths.style.visibility = "hidden";
    powerCheckbox.checked = false;
    power.style.visibility = "hidden";
    connectCheckbox.checked = false;
    connect.style.visibility = "hidden";
  }
}

function callSeekingOnClick() {
  if (seeking.style.visibility === "hidden") {
    seeking.style.visibility = "visible";
    hello.style.visibility = "hidden";
    what.style.visibility = "hidden";
    draw.style.visibility = "hidden";
    seekingMenu.style.visibility = "visible";
    whatMenu.style.visibility = "hidden";
    truthsCheckbox.checked = false;
    truths.style.visibility = "hidden";
    powerCheckbox.checked = false;
    power.style.visibility = "hidden";
    connectCheckbox.checked = false;
    connect.style.visibility = "hidden";
  } else {
    seeking.style.visibility = "visible";
    hello.style.visibility = "hidden";
    what.style.visibility = "hidden";
    draw.style.visibility = "hidden";
    seekingMenu.style.visibility = "visible";
    whatMenu.style.visibility = "hidden";
    truthsCheckbox.checked = false;
    truths.style.visibility = "hidden";
    powerCheckbox.checked = false;
    power.style.visibility = "hidden";
    connectCheckbox.checked = false;
    connect.style.visibility = "hidden";
  }
}

function callWhatOnClick() {
  if (what.style.visibility === "hidden") {
    what.style.visibility = "visible";
    hello.style.visibility = "hidden";
    draw.style.visibility = "hidden";
    seeking.style.visibility = "hidden";
    seekingMenu.style.visibility = "hidden";
    whatMenu.style.visibility = "visible";
    multiplicityCheckbox.checked = false;
    multiplicity.style.visibility = "hidden";
    multiplicityMoreCheckbox.checked = false;
    multiplicityMore.style.visibility = "hidden";
    frictionCheckbox.checked = false;
    friction.style.visibility = "hidden";
    frictionMoreCheckbox.checked = false;
    frictionMore.style.visibility = "hidden";
    interactionCheckbox.checked = false;
    interaction.style.visibility = "hidden";
    interactionMoreCheckbox.checked = false;
    interactionMore.style.visibility = "hidden";
  } else {
    what.style.visibility = "visible";
    hello.style.visibility = "hidden";
    draw.style.visibility = "hidden";
    seeking.style.visibility = "hidden";
    seekingMenu.style.visibility = "hidden";
    whatMenu.style.visibility = "visible";
    multiplicityCheckbox.checked = false;
    multiplicity.style.visibility = "hidden";
    multiplicityMoreCheckbox.checked = false;
    multiplicityMore.style.visibility = "hidden";
    frictionCheckbox.checked = false;
    friction.style.visibility = "hidden";
    frictionMoreCheckbox.checked = false;
    frictionMore.style.visibility = "hidden";
    interactionCheckbox.checked = false;
    interaction.style.visibility = "hidden";
    interactionMoreCheckbox.checked = false;
    interactionMore.style.visibility = "hidden";
  }
}

function callDrawOnClick() {

  if (draw.style.visibility === "hidden") {
    draw.style.visibility = "visible";
    hello.style.visibility = "hidden";
    seeking.style.visibility = "hidden";
    what.style.visibility = "hidden";
    seekingMenu.style.visibility = "hidden";
    whatMenu.style.visibility = "hidden";
    multiplicityCheckbox.checked = false;
    multiplicity.style.visibility = "hidden";
    multiplicityMoreCheckbox.checked = false;
    multiplicityMore.style.visibility = "hidden";
    frictionCheckbox.checked = false;
    friction.style.visibility = "hidden";
    frictionMoreCheckbox.checked = false;
    frictionMore.style.visibility = "hidden";
    interactionCheckbox.checked = false;
    interaction.style.visibility = "hidden";
    interactionMoreCheckbox.checked = false;
    interactionMore.style.visibility = "hidden";
    truthsCheckbox.checked = false;
    truths.style.visibility = "hidden";
    powerCheckbox.checked = false;
    power.style.visibility = "hidden";
    connectCheckbox.checked = false;
    connect.style.visibility = "hidden";
  } else {
    draw.style.visibility = "visible";
    hello.style.visibility = "hidden";
    seeking.style.visibility = "hidden";
    what.style.visibility = "hidden";
    seekingMenu.style.visibility = "hidden";
    whatMenu.style.visibility = "hidden";
    multiplicityCheckbox.checked = false;
    multiplicity.style.visibility = "hidden";
    multiplicityMoreCheckbox.checked = false;
    multiplicityMore.style.visibility = "hidden";
    frictionCheckbox.checked = false;
    friction.style.visibility = "hidden";
    frictionMoreCheckbox.checked = false;
    frictionMore.style.visibility = "hidden";
    interactionCheckbox.checked = false;
    interaction.style.visibility = "hidden";
    interactionMoreCheckbox.checked = false;
    interactionMore.style.visibility = "hidden";
    truthsCheckbox.checked = false;
    truths.style.visibility = "hidden";
    powerCheckbox.checked = false;
    power.style.visibility = "hidden";
    connectCheckbox.checked = false;
    connect.style.visibility = "hidden";
  }
}

window.onload = function() {

  multiplicityCheckbox.addEventListener('change', () => {
    if(multiplicityCheckbox.checked) {
      multiplicity.style.visibility = 'visible';
    } else {
      multiplicity.style.visibility = 'hidden';
    }
  });
  
  multiplicityMoreCheckbox.addEventListener('change', () => {
    if(multiplicityMoreCheckbox.checked) {
      multiplicityMore.style.visibility = 'visible';
    } else {
      multiplicityMore.style.visibility = 'hidden';
    }
  });

  frictionCheckbox.addEventListener('change', () => {
    if(frictionCheckbox.checked) {
      friction.style.visibility = 'visible';
    } else {
      friction.style.visibility = 'hidden';
    }
  });

  frictionMoreCheckbox.addEventListener('change', () => {
    if(frictionMoreCheckbox.checked) {
      frictionMore.style.visibility = 'visible';
    } else {
      frictionMore.style.visibility = 'hidden';
    }
  });

  interactionCheckbox.addEventListener('change', () => {
    if(interactionCheckbox.checked) {
      interaction.style.visibility = 'visible';
    } else {
      interaction.style.visibility = 'hidden';
    }
  });

interactionMoreCheckbox.addEventListener('change', () => {
    if(interactionMoreCheckbox.checked) {
      interactionMore.style.visibility = 'visible';
    } else {
      interactionMore.style.visibility = 'hidden';
    }
  });
  
  truthsCheckbox.addEventListener('change', () => {
    if(truthsCheckbox.checked) {
      truths.style.visibility = 'visible';
    } else {
      truths.style.visibility = 'hidden';
    }
  });

  powerCheckbox.addEventListener('change', () => {
    if(powerCheckbox.checked) {
      power.style.visibility = 'visible';
    } else {
      power.style.visibility = 'hidden';
    }
  });

  connectCheckbox.addEventListener('change', () => {
    if(connectCheckbox.checked) {
      connect.style.visibility = 'visible';
    } else {
      connect.style.visibility = 'hidden';
    }
  });



  function doDate()
  {
      var str = "";
      var now = new Date();

      str += "The time is " + now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'}) + ".";
      document.getElementById("time").innerHTML = str;
  }

  setInterval(doDate, 1000);
}
