#pragma strict
var thePerson : Transform;
var theEye : Transform;
var theCamera : GameObject;
var theTimeController : GameObject;
var theGameController : GameObject;
var theCollision : GameObject;
var theTime  = new Array ();
var thePersonPosition  = new Array ();
var thePersonRotationY  = new Array ();
var theEyeRotationX  = new Array ();
//多余的,用以展示数据	
var theTime2 : float[];
var thePersonPosition2 : Vector3[];
var thePersonRotationY2 : float[];
var theEyeRotationX2 : float[];
//多余的,用以展示数据	
//是在主动游戏还是重放游戏行为, 0为复原, 1为录制, 2为播放
var playingState : int = 0;
//时间序列当前的点
var timePoint : int;
//读入的控制器的时间
var theTimer : float;
//下面是用以复原的各种数据
var startPersonPosition : Vector3;
var startPersonRotationY : float;
var startEyeRotationX : float;


function Start () {

	playingState = 1;
	startPersonPosition = thePerson.position;
	startPersonRotationY = thePerson.eulerAngles.y;
	startEyeRotationX = theEye.eulerAngles.x;

}

function Update () {

	theTimer += Time.deltaTime;

	if (playingState == 0) {
		BackToStart();
		playingState = 1;
	}
	else if (playingState == 1) {
		theCollision.GetComponent(CollisionEventSender).isRecording = true;
		theTime.Push(theTimer);
		thePersonPosition.Push(thePerson.position);
		thePersonRotationY.Push(thePerson.eulerAngles.y);
		theEyeRotationX.Push(theEye.eulerAngles.x);
	}
	else if (playingState == 2) {
			if (timePoint == (theTime.length - 1)) {
				theGameController.GetComponent(GameController).gotAcross = true;
				theTimer = 0;
				timePoint = 0;
		}	
		if (timePoint < theTime.length) {
			GetTheTimePoint(theTimer, timePoint);
			thePerson.position = thePersonPosition2[timePoint];
			thePerson.eulerAngles.y = thePersonRotationY2[timePoint];
			theEye.eulerAngles.x = theEyeRotationX2[timePoint];
		}	

	}
	theTime2 = theTime;
	thePersonPosition2 = thePersonPosition;
	thePersonRotationY2 = thePersonRotationY;
	theEyeRotationX2 = theEyeRotationX;
	
}

function GetTheTimePoint (theNowTime : float, theTimePoint : int) {

	if (timePoint < theTime.length - 1) {
		if (theTime2[theTimePoint]<theNowTime) {
			timePoint ++;
			GetTheTimePoint(theNowTime, timePoint);
		}
	}

}

function BackToStart () {

	thePerson.position = startPersonPosition;
	thePerson.eulerAngles.y = startPersonRotationY;
	theEye.eulerAngles.x = startEyeRotationX;
	theCamera.GetComponent(MouseLook).SetXBack();
	theTime.Clear();
	thePersonPosition.Clear();
	thePersonRotationY.Clear();
	theEyeRotationX.Clear();

}

function SetStyle (theValue : int) {

	theTimeController.GetComponent(TimeController).timer = 0;
	timePoint = 0;
	playingState = theValue;

}
