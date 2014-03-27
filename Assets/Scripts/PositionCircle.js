#pragma strict

function Start () {

}

function Update () {

	if (transform.position.z > 55) transform.position.z -= 23.24;
	if (transform.position.z < -55) transform.position.z += 23.24;

}