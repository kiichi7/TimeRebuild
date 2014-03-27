#pragma strict
var thePerson : Transform;
var distance : float;

function Start () {

}

function Update () {
	
	distance = Vector3.Distance(thePerson.position, transform.position);

}