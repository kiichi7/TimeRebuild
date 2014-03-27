#pragma strict
var theTimeController : GameObject;
var thePersonController : GameObject;
var thePerson : GameObject;
var timeChooserState : boolean[];
var timeChooser : int;
var gotAcross : boolean;
var gotDied : boolean;
var theEventCreator : GameObject;
//游戏状态, 0是失败状态, 1是游戏状态, 2是通关状态
var thePlayState : int;
var scoreTimer : float;

function Start () {
scoreTimer = 0;
	thePlayState = 1;
	for (var i=0; i<timeChooserState.length; i++) {
		timeChooserState[i] = false;
	}
	timeChooser = 0;
	SetTimeChooser(timeChooser);
	SetTheStyle(1);

}

function Update () {

	if (thePlayState == 1)	scoreTimer += Time.deltaTime;

	if (thePlayState == 0) {
		scoreTimer = 0;
		if (Input.anyKeyDown) {
			theEventCreator.GetComponent(EventCreator).Clear();
			thePerson.GetComponent(CharacterMotor).enabled = true;
			thePerson.GetComponent(FPSInputController).enabled = true;
			SetTimeChooser(timeChooser);
			SetTheStyle(1);
			thePersonController.GetComponent(PersonHistoryRecord).playingState = 0;
			thePlayState = 1;
			//Application.LoadLevel(Application.loadedLevel);
		}
	}
	if (thePlayState == 2) {
		if (Input.anyKeyDown) {
			Application.LoadLevel(Application.loadedLevel);
		}
	}
	if (gotAcross) {
		theEventCreator.GetComponent(EventCreator).Clear();
		thePlayState = 1;
		timeChooserState[timeChooser] = true;	
		if (timeChooser == 2) timeChooser = 0;
		else timeChooser ++;
		SetTimeChooser(timeChooser);
		SetTheStyle(2);
		gotAcross = false;
	}
	if (gotDied) {
		SetTheStyle(1);
		thePerson.GetComponent(CharacterMotor).enabled = false;
		thePerson.GetComponent(FPSInputController).enabled = false;
		for (var i=0; i<timeChooserState.length; i++) {
			timeChooserState[i] = false;
		}
		thePlayState = 0;
		gotDied = false;
	}
	if ((timeChooserState[0]==true)&&(timeChooserState[1]==true)&&(timeChooserState[2]==true)) {
		thePlayState = 2;
	}

}

/*function DoNext () {

	theEventCreator.GetComponent(EventCreator).Clear();
	thePlayState = 1;
	if (timeChooser == 2) timeChooser = 0;
	else timeChooser ++;
	SetTimeChooser(timeChooser);
	SetTheStyle(2);

}*/

function SetTimeChooser (theValue : int) {

	theTimeController.GetComponent(TimeController).StartTime(theValue);

}

function SetTheStyle (theValue : int) {

	thePersonController.GetComponent(PersonHistoryRecord).SetStyle(theValue);
	thePersonController.GetComponent(PersonHistoryRecord).timePoint = 0;

}
