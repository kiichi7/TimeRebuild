#pragma strict
var ifFullScreen : boolean = false;
var ifShowCursor : boolean = true;
var ifLockCursor : boolean = false;
var ifRunInBackground : boolean = false;

function Start () {

	if((ifFullScreen)&&(!Application.isWebPlayer)) Screen.SetResolution(Screen.resolutions[Screen.resolutions.Length-1].width,Screen.resolutions[Screen.resolutions.Length-1].height,ifFullScreen);
	Screen.showCursor = ifShowCursor;
	Screen.lockCursor = ifLockCursor;
	Application.runInBackground = ifRunInBackground;

}
