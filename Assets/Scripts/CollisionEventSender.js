#pragma strict
var theGameController : GameObject;
var isRecording : boolean = true;
var positionLock : boolean = false;

function Start () {

}

function Update () {
	
	if (!positionLock) {
		if (transform.position.y < -100) theGameController.GetComponent(GameController).gotDied = true;
		positionLock = true;
	}
	if (transform.position.y > -100) positionLock = false;

}

function OnTriggerEnter (other : Collider) {
	
	if ((other.name == "Brick")||(other.name == "Roof")) theGameController.GetComponent(GameController).gotDied = true;
	
	if (isRecording) {
    	if (other.name == "TheDoor") theGameController.GetComponent(GameController).gotAcross = true;
    	isRecording = false;
    }
    
}