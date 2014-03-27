#pragma strict
//各个事件的状态判断
var eventState : boolean[];
var theEventCreator : GameObject;

function Start () {

	for (var i=0; i<eventState.length; i++) {
		eventState[i] = false;
	}

}

function Update () {

	for (var i=0; i<eventState.length; i++) {
		if (eventState[i] == true) {
			GetLive(i);
			eventState[i] = false;
		}	
	}

}

//激活运动
function GetLive (theValue : int) {

	switch (theValue) {
		case 0: 
			theEventCreator.GetComponent(EventCreator).eventIfCreate[0] = true;
		break;
		case 1:
			theEventCreator.GetComponent(EventCreator).eventIfCreate[1] = true;
		break;
		case 2: 
			theEventCreator.GetComponent(EventCreator).eventIfCreate[2] = true;
		break;
	}

}

function SetEventTrue (theValue : int) {

	eventState[theValue] = true;

}