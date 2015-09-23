'use strict';

var Rule = require('../models').Rule;

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Rule.bulkCreate([{
      title: 'Little Man',
      description: 'There is a little man on the rim of everyone\'s beverages. Before any player drinks, they must \n        remove the little man. Afterwards, they must put him back. If a player forgets either step, they must drink again.'
    }, {
      title: 'The Viking Captain',
      description: 'You are the captain of a Viking ship and everyone else is your crew. At any point during the game, \n        command your crew to paddle by placing your fists to your head with index fingers extended to appear as horns. \n        All other players must then begin paddling. The last player to join in must drink.'
    }, {
      title: 'Dancing with the Drunks',
      description: 'Tonight, you dance the night away. Before a player drinks, they must perform a celebratory \n        dance. If a player does not dance, they must drink again.'
    }, {
      title: 'The Majestic Plural',
      description: 'Things just got a bit more elegant. All players must speak in the Majestic Plural, which is \n        done by speaking in third person rather than first, and pluralized. For example, if you need a beer you would \n        say <i>We need a beer.</i> If a player fails to use the Majestic Plural, they must drink.'
    }, {
      title: 'The Thumb Master',
      description: 'All hail the leader of thumbs. At any point during the game, if you place your thumb on the \n        playing surface all other players must race to do the same. The loser must drink.'
    }, {
      title: 'Ke$ha',
      description: 'Ke$ha\'s way of singing has been adopted as your way of speaking. After a player is done speaking, \n        they must repeat their last word once more. For example, <i>I\'m talking about everybody getting crunk, crunk. \n        Boys trying to touch my junk, junk.</i> If a player does not do so, they must drink.'
    }, {
      title: 'The Pterodactyl',
      description: 'A classic prehistoric winged predator. At any point during the game, if you begin screeching and \n        waving your arms in a flying fashion, all other players must race to do the same. The loser must drink.'
    }, {
      title: 'All Aboard the Choo Choo Train',
      description: 'There are a lot of train enthusiasts in the room. If a player is laughing, they also be pumping \n        their arms in a choo choo fashion. If a player is caught laughing without also choo chooing, they must drink.'
    }, {
      title: 'The Neanderthals',
      description: 'You clumsy oaves need to read more. All players must speak only in sentences of three words \n        or less. If a player is caught speaking in four words or more, they must drink.'
    }, {
      title: 'The Psychics',
      description: 'It\'s time to stretch out the old paranormal powers. After a player draws a card, they must predict \n        the card\'s suit before turning it over. If a player makes a wrongful prediction, they must drink.'
    }, {
      title: 'The Forehead Master',
      description: 'You\'ve become the meaner, grouchier brother of the Thumb Master. At any point during the game, \n        if you place your forehead onto the playing surface all other players must race to do the same. The loser \n        must drink.'
    }, {
      title: 'Incognito',
      description: 'You\'re a bunch of fugitives on the run making up aliases for one another. Each player makes up \n        a new name for the player to their left, which becomes that player\'s name. If a player uses another player\'s \n        actual name, they must drink.'
    }, {
      title: 'T-Rex Arms',
      description: 'Hopefully there are no t-rexes in the room to offend with this one. While a player is drinking, \n        their elbows must be locked to their side. If a player is caught without doing so, they must drink again.'
    }, {
      title: 'I\'ll Tell You What',
      description: 'You know what\'s what, and so does everyone else. All players must incorporate the phrase \n        <i>I\'ll tell you what</i> into whatever they say. If a player is caught without doing so, they must drink.'
    }, {
      title: 'Robert Paulson',
      description: 'You\'ve all become great fans of the Fight Club character, \n        <a href="http://fightclub.wikia.com/wiki/Robert_Paulson>Robert Paulson</a>. As such, all players are now named \n        Robert Paulson. If a player uses another player\'s actual name, they must drink.'
    }, {
      title: 'The Non-Staring Contest',
      description: 'You\'ve all lost interest in making any eye contact with one another. If two players do make eye\n        contact, both players must drink.'
    }, {
      title: 'High Fives All Around',
      description: 'The flipside of the Non-Staring Contest. If two players make eye contact, they must promptly \n        high five. If they do not high five, both players must drink.'
    }, {
      title: 'The Minister of Foreign Affairs',
      description: 'You have been elected into great leadership. With this new authority, only you may converse with anyone \n        outside of the game. If another player needs to communicate with an outsider, they may only ask you to speak in their \n        honor. If a player besides you speaks to a non-player, they must drink.'
    }, {
      title: 'I\'m Not Wearing Hockey Pants',
      description: 'It\'s time to pay tribute to one of cinema\'s finest. All players must use Christian Bale\'s Batman  \n        voice while speaking. If a player speaks without doing so, they must drink.'
    }, {
      title: 'The Ambidextrous',
      description: 'It\'s time to work out that other arm. All players must drink using their non-dominant hand. If a \n        player is caught using their dominant hand, they must drink again.'
    }, {
      title: 'The Royals',
      description: '<i>And we\'ll never be royals (royals). It don\'t run in our blood.</i> But tonight it does. All \n        players must place a bottle cap on their head, which will serve as their crown. If a player\'s crown falls, \n        they must drink.'
    }, {
      title: 'A Toast to the Booze',
      description: 'It\'s time to drink <i>for</i> something. Before a player drinks, they must make a toast. If a player \n        does not do so, they must drink.'
    }, {
      title: 'Dude, Bro, Like and Homie',
      description: 'Forget the fillers. The words <i>dude</i>, <i>bro</i>, <i>like</i> and <i>homie</i> are now \n        banned. If a player is caught using any of them, they must drink.'
    }, {
      title: 'Tough Love',
      description: 'Life isn\'t easy, and it\'s time someone heard the ugly truth. Before any player drinks, they must \n        insult another player. If a player drinks without dishing it out, they must drink again.'
    }, {
      title: 'Drink/Drank/Drunk',
      description: 'It\'s time everyone got a little more creative with their word choice. The word <i>drink</i> and all \n        variations are now banned. If a player is caught using one, they must drink.'
    }, {
      title: 'The Online Entrepreneurs',
      description: 'It\'s time to work on that startup idea. After a player is done speaking, they must say <i>dot com</i>. \n        If a player does not do so, they must drink.'
    }, {
      title: 'Pirates of the Beer-ibbean',
      description: 'It\'s been a while since you called someone a codfish. All players are now pirates and must \n        speak like one. If a player doesn\'t speak like a pirate, they must drink.'
    }, {
      title: 'Lifestyles of the Drunk and the Tipsy',
      description: 'Your famous celebrity impression without the worry of the paparazzi. Each player picks a \n        celebrity and puts on their persona for the duration of the game. If a player is caught acting out of \n        character, they must drink.'
    }, {
      title: 'The One That Gets Around',
      description: 'No one has to say they don\'t have a date anymore. Pick another player to be everyone\'s date. \n        Anytime any player has to drink, so does that player.'
    }, {
      title: 'The Great Time Travelers',
      description: 'You\'ve discovered a way to travel time and get to your destination twice as fast. After any player drinks, \n        they must drink once more.'
    }, {
      title: 'The Accusation',
      description: 'Everyone is tired of everyone pointing fingers. Pointing is now prohibited. If a player is \n        caught pointing at anything, including other players, they must drink.'
    }, {
      title: 'The Family Reunion',
      description: 'The night has exceeded its quota on swear words for the night. Any form of \n        <a href="https://www.youtube.com/watch?v=JF28BO3N-_Q">swearing</a> is now banned. If a player uses a swear \n        word, they must drink.'
    }, {
      title: 'Drinking Sexy Back',
      description: 'It\'s time to put all those sexy words in your head to use. All players must talk dirty to their \n        drink before drinking. If a player does not, they must drink again.'
    }, {
      title: 'The Chairman',
      description: 'You\'ve been entrusted with a great responsibility. Before any player can leave the playing area, \n        including to go to the restroom, they must first ask you for permission. If a player does not ask or chooses to defy \n        your authority, they must drink.'
    }, {
      title: 'The Guilty Smirk',
      description: 'There\'s too many yellow teeth in the room. Showing teeth while laughing is now banned. \n        If a player shows teeth while laughing, they must drink.'
    }, {
      title: 'Born in a Barn',
      description: 'Moo. Meow. Woof. After a player drinks, they must make an animal noise. If a player does not \n        make an animal noise, they must drink.'
    }, {
      title: 'Covert Operation',
      description: 'Everyone needs to be a bit more clear when they\'re done talking. After a player is finished speaking, \n        they must say <i>over and out</i>. If a player does not do so, they must drink.'
    }, {
      title: 'Together Forever',
      description: 'Everyone is on their phones too much and never really in the moment. If a player is caught using \n        their phone, they must drink.'
    }, {
      title: 'The Hairy Situation',
      description: 'You have lovely hair, but we are tired of you touching it. Female players are now banned from \n        touching their hair, and male players are now banned from touching their facial hair. If a player is caught \n        doing so, they must drink.'
    }, {
      title: 'The Wink Master',
      description: 'You have become the Wink Master, you charmer. At any point during the game, if you wink at another \n        player and that player sees it, they must drink.'
    }, {
      title: 'The Prophecy',
      description: 'Everything you say is suddenly sacred. After a player is finished speaking, \n        they must say a fake chapter and verse as if it were from the Bible. For example, <i>Can you get me another \n        beer? Intoxicated 2:18</i>.  If a player does not say a chapter and verse, they must drink.'
    }, {
      title: 'The Falsetto',
      description: 'Needs to be a bit more melodic in here. All players must speak only in \n        <a href="http://dictionary.reference.com/browse/falsetto">falsetto</a>. If a player speaks not in \n        falsetto, they must drink.'
    }, {
      title: 'The Yodeling',
      description: 'Show off those smooth sexy vocals. At any point during the game, if you yodel all \n        other players must appluad. The last player to appluad must drink.'
    }, {
      title: 'The Dictator',
      description: 'With great power, come careless impulsive abuse of it. Lick a card, and stick it to your \n        forehead. As long as that card is stuck to your head, you may absolish and create any number of rules \n        you want. However, once the card falls, the rules are reverted back to how they were before you drew it.'
    }, {
      title: 'The Shunned',
      description: 'As the tribe elder, you must make an example out of someone. Pick another player to be shunned. \n        If any player acknowledges that person, whether by speaking to them or even looking at them, that player must \n        drink and they are shunned instead.'
    }, {
      title: 'The Floor Is Lava',
      description: 'The floor is lava! The floor is lava! The floor is lava! Touching the floor is now banned. \n        If a player is caught touching the floor, they must drink.'
    }, {
      title: 'Pinkies Out',
      description: 'When in doubt, <a href="http://26.media.tumblr.com/tumblr_l6wc8g7fPF1qc20yqo1_500.jpg">\n        pinky out.</a> All players must always have their pinkies visibly extended. If a player is caught \n        without their pinky extended, they must drink.'
    }, {
      title: 'Manners',
      description: 'You can\'t just tell people what to do, you ignoramus. Before any player deals another \n        player a drink, they must look lovingly into their eyes, provide a compliment and politely ask them \n        to drink. If a player doesn\'t do so, they must drink instead of the chosen player.'
    }, {
      title: 'The Freestyle',
      description: 'Time to practice up your skills before you face Eminem. While a player is speaking, they must\n        rhyme with themselves at least once. If a player speaks without rhyming, they must drunk'
    }, {
      title: 'The Kamikaze',
      description: 'If you\'re going down, you\'re taking someone else down with you. At any point during the game, \n        you may tell another player to drink. That player must drink, but so do you.'
    }, {
      title: 'Mathematician',
      description: 'This ain\'t no numbers game. Saying any number is now banned. If a player is caught saying \n        a number, they must drink.'
    }, {
      title: 'The Name of Thrones',
      description: 'Everyone descended from kingship at one point or another. All players must now be referred to in \n        terms of royalty - King Dave, Queen Jenny, Prince Dave, Princess Kaitlyn, etc. If a player refers to another \n        player without a royal title, they must drink.'
    }]);
  },

  down: function down(queryInterface, Sequelize) {
    return Rule.destroy({ truncate: true });
  }
};