// javascript basics

joe = function (hobby) {
	this.hobby = hobby;

	this.secretHobby = function secretHobby() {
		console.log('i have a secret hobby')
	}

	var moreSecretHobby = function () {
		console.log('i am a more secret hobby');
	}

	this.runMoreSecretHobby = function () {
		moreSecretHobby();
	} 

}

joe.prototype.whine = function () {
	console.log ('i am whining');
}

joemama = new joe('painting');

console.log(joemama.hobby);
joemama.whine();

joemama.secretHobby();
joemama.runMoreSecretHobby();

nakedFunc = joe.secretHobby;

console.log('nf',nakedFunc);