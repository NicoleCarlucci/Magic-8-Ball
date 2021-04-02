$ (document).ready(function() {

var magic8ball = {};

magic8ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Of course!", "Yes – definitely", "You may rely on it", "As I see it is a yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "No", "In your dreams"];

$("#answer").hide();
$ ("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

magic8ball.askAQuestion = function(question)
{
	var randomNumber = Math.random();

	var randomNumberArray = randomNumber * this.listOfAnswers.length;

	var randomIndex = Math.floor(randomNumberArray);

	var answer = this.listOfAnswers[randomIndex];

	$ ("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$ ("#answer").text( answer );
	$ ("#answer").fadeIn(4000);

	console.log (question);
	console.log (answer);
};

$("#answer").hide();

var onClick = function() {
		var question = setTimeout(prompt("Ask a yes/no question!"), 500);
	    magic8ball.askAQuestion(question);
	    $("#8ball").effect( "shake" );
};

$ ("#questionButton").click( onClick );

});
