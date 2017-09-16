var RESPONSES = ["It is certain",
"It is decidedly so",
"Without a doubt",
"Yes definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];


var EightBall = function (config) {
  if (!(this instanceof EightBall)) {
    return new EightBall(config);
  }
  var self = this;

  this.config = config;
  this.responses = config.responses || RESPONSES
  if (config.additionalResponses)
  {
    if (Array.isArray(config.additionalResponses))
    {
      Array.prototype.push.apply(this.responses, config.additionalResponses);
    }
    else {
      this.responses.push(config.additionalResponses);
    }
  }

  this.consult = () =>
  {
     return new Promise(function(resolve, reject)
     {
         resolve(self.responses[Math.floor(Math.random() * self.responses.length)]);
     });
  }
}

module.exports = EightBall
