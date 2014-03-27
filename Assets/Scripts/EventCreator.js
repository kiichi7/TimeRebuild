#pragma strict
var eventPrefab : GameObject[];
var createdEvents : GameObject[];
var eventIfCreate : boolean[];
var thePositions : Transform[];

var firstFlour : GameObject[];
var flours : GameObject[];
var createdFlours : GameObject[];
var floursPosition : Vector3[];
var floursRotation : Quaternion[];

var theCNumber : int;

function Start () {

	for (var i=0; i<6; i++) {
		createdFlours[i] = firstFlour[i];
		floursPosition[i] = firstFlour[i].transform.position;
		floursRotation[i] = firstFlour[i].transform.rotation;	
	}

}

function Update () {



	if (eventIfCreate[0]) {
		createdEvents[theCNumber] = Instantiate(eventPrefab[0],thePositions[0].position,Quaternion.identity);
		theCNumber ++;
		eventIfCreate[0] = false;
	}
	if (eventIfCreate[1]) {
		createdEvents[theCNumber] = Instantiate(eventPrefab[1],thePositions[1].position,Quaternion.identity);
		theCNumber++;
		eventIfCreate[1] = false;
	}
	/*if (eventIfCreate[1]) {
		for (var i=0; i<6; i++) {
			createdFlours[i].GetComponent(Rigidbody).useGravity = true;
			createdFlours[i].GetComponent(MeshCollider).enabled = true;
		}
		eventIfCreate[1] = false;
	}*/
	if (eventIfCreate[2]) {
		createdEvents[theCNumber] = Instantiate(eventPrefab[2],thePositions[2].position,Quaternion.identity);
		theCNumber++;
		eventIfCreate[2] = false;
	}

}

function Clear () {

	for (theCNumber=0; theCNumber<10; theCNumber++) {
		if (createdEvents[theCNumber]) Destroy(createdEvents[theCNumber]);
	}
	theCNumber = 0;
	/*	for (var i=0; i<6; i++) {
			createdFlours[i] = Instantiate(flours[i],floursPosition[i],floursRotation[i]);
		}	*/


}