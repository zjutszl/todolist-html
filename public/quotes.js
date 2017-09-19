var quotes = [{
  "quote":"Confidence is quiet. Insecurity is loud. ",
  "author":" nobody"
},
{
  "quote":"Beware the fury of a patient man. ",
  "author":" John Dryden"
},
{
  "quote":"The smallest coffins are the heaviest."
},
{
  "quote":"History is a set of lies agreed upon. ",
  "author":" Napoleon"
},
{
  "quote":"And now that you don’t have to be perfect, you can be good. ",
  "author":" John Steinbeck"
},
{
  "quote":"There was a day when your parents put you down and never picked you up again."
},
{
  "quote":"Years of love have been forgot, in the hatred of a minute. ",
  "author":" Edgar Allan Poe"
},
{
  "quote":"A ship is safe in harbor, but that’s not what ships are for. ",
  "author":" William G.T. Shedd"
},
{
  "quote":"You can’t conquer a free man; the most you can do is kill him. ",
  "author":" Robert A. Heinlein"
},
{
  "quote":"The master has failed more times than the beginner has even tried. ",
  "author":" Stephen McCranie"
},
{
  "quote":"There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man. ",
  "author":" Patrick Rothfuss"
},
{
  "quote":"The hour of departure has arrived, and we go our ways. I to die, and you to live. Which is better God only knows. ",
  "author":" Socrates"
},
{
  "quote":"Forgive others, not because they deserve forgiveness, but because you deserve peace. ",
  "author":" Jonathan Lockwood Huie"
},
{
  "quote":"Holding onto anger is like drinking poison and expecting the other person to die. ",
  "author":" Gautama Buddha"
},
{
  "quote":"He who fights with monsters should be careful lest he thereby become a monster. And if thou gaze long into an abyss, the abyss will also gaze into thee. ",
  "author":" Nietzsche"
},
{
  "quote":"The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently. ",
  "author":" Friedrich Nietzsche"
},
{
  "quote":"After the game, the king and the pawn go into the same box. ",
  "author":" Italian Proverb"
},
{
  "quote":"A society grows great when old men plant trees whose shade they know they shall never sit in. ",
  "author":" Greek Proverb"
},
{
  "quote":"When you’re good at something, you’ll tell everyone. When you’re great at something, they’ll tell you. ",
  "author":" Walter Payton"
},
{
  "quote":"Alive we thought beyond our lives to give our bodies as a book for you to read."
},
{
  "quote":"But who prays for Satan? Who, in eighteen centuries, has had the common humanity to pray for the one sinner that needed it most? ",
  "author":" Mark Twain"
},
{
  "quote":"When the axe came into the woods, many of the trees said, “At least the handle is one of us.” ",
  "author":" Turkish proverb"
},
{
  "quote":"Stand amongst the ashes of a trillion dead souls and ask the ghosts if honor matters. ",
  "author":" Javik from Mass Effect 3"
},
{
  "quote":"I don’t count my sit-ups. I only start counting when it starts hurting. That is when I start counting, because then it really counts. That’s what makes you a champion. ",
  "author":" Muhammad Ali"
},
{
  "quote":"When I was a child, my mother said to me, ‘If you become a soldier, you’ll be a general. If you become a monk, you’ll end up as the Pope.’ Instead, I became a painter and wound up as Picasso. ",
  "author":" Pablo Picasso"
},
{
  "quote":"She was the third beer. Not the first one, which the throat receives with almost tearful gratitude; nor the second, that confirms and extends the pleasure of the first. But the third, the one you drink because it’s there, because it can’t hurt, and because what difference does it make? ",
  "author":" Toni Morrison"
},
{
  "quote":"We knew the world would not be the same. Few people laughed, few people cried, most people were silent. I remembered the line from the Hindu scripture, the Bhagavad-Gita. Vishnu is trying to persuade the Prince that he should do his duty and to impress him takes on his multi-armed form and says, “Now I am become Death, the destroyer of worlds.” I suppose we all thought that, one way or another.",
  "author":"J. Robert Oppenheimer"
}];
var quotes_one = {};
(function(){
  for(var i=0;i<quotes.length;i++){
  if (!quotes[i].author){
    quotes[i].author = "nobody";
  }
};
})();
/*
 * quotes 情况下的筛选

var quoteLength = quotes.length;
var randomNumber_before = quoteLength * Math.random();
var randomNumber = Math.round(randomNumber_before);
var que = [];
que.push(quotes[randomNumber]);
quotes = que;

*/

/*
 *直接显示单个文件 
 */

 (function(){
  var quoteLength = quotes.length;
  var randomNumber_before = quoteLength * Math.random();
  var randomNumber = Math.round(randomNumber_before);
  quotes_one = quotes[randomNumber];
 })();
