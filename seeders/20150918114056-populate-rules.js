'use strict';

var Rule = require('../models').Rule

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Rule.bulkCreate([
      {
        title: 'Little Green Man',
        description: 'Before anyone takes a drink, an invisible little green man must be removed from the rim of their beverage. Afterwards, the little green man must be returned. Forget either and drink again.',
        image: 'http://placehold.it/200x200'
      },
      {
        title: 'Viking',
        description: 'You are the captain of a Viking ship and everyone else is your crew. At any point during the game, place your hands like horns on your head, signalling the other players to begin paddling. The last player to start paddling must drink.'
      },
      {
        title: 'Dancing Queen',
        description: 'Whenever you have to drink, perform a celebratory dance before you begin drinking. Skip the dance and drink again.'
      },
      {
        title: 'Majestic Plural',
        description: 'When referring to yourself, use the <a href="https://en.wikipedia.org/wiki/Royal_we">Majestic Plural</a>. Example - if you need another beer, say "<i>We</i> must get another beer" instead of "<i>I</i> must get another beer." Drink if you mess up.'
      },
      {
        title: 'Thumb Master',
        description: 'At any point during the game, you may place your thumb on the playing surface and the other players must do the same. The last person to do so must drink.'
      },
      {
        title: 'Ke$ha',
        description: 'Whenever anyone finishes speaking, they must repeat their last word at least once.'
      },
      {
        title: 'Pterodactyl',
        description: 'At any point during the game, you may begin screeching and waving your arms like a bird and all other players must do the same. The last one to do so must drink.'
      },
      {
        title: 'Choo Choo',
        description: 'All players must pump their arms back and forth whenever they begin laughing and continue pumping their arms until they finish laughing. If you laugh without pumping, drink.'
      },
      {
        title: 'Neanderthal',
        description: 'Everyone must speak in sentences of three words or less. Use more than that and you must drink.'
      },
      {
        title: 'Psychic',
        description: 'Whenever a player draws a card, they must guess the card\'s suit before turning it over. Guess wrong and they drink.'
      },
      {
        title: 'Forehead Master',
        description: 'At any point during the game, you may place your forehead onto the playing surface and the other players must do the same. The last to do so must drink.'
      },
      {
        title: 'Alias',
        description: 'Each player makes up a nickname for the player to their left. That player must only be referred to by their nickname. Mess up and drink.'
      },
      {
        title: 'T-Rex',
        description: 'All players must lock their elbows at their sides whenever they drink. Forget and drink again.'
      },
      {
        title: 'Great Teller',
        description: 'All players must include "I\'ll tell you what" whenever they are speaking. Forget and drink.'
      },
      {
        title: 'Robert Paulson',
        description: 'Everyone\'s name is now Robert Paulson. Anyone who messes up drinks.'
      },
      {
        title: 'Self-Conscious',
        description: 'If any two players make eye contact, they both must drink.'
      },
      {
        title: 'Friends',
        description: 'If any player makes eye contact with another player, they must high five. Mess up and drink.'
      },
      {
        title: 'Minister of Foreign Affairs',
        description: 'Only you may speak to anyone who is not playing. Other players may pass messages to non-players only through you. If another player speaks to an outsider, they must drink.'
      },
      {
        title: 'Batman',
        description: 'All players must speak in Christian Bale\'s Batman voice. Failure to comply results in drinking.'
      },
      {
        title: 'Water Buffalo',
        description: 'For now on, all players must use their non-dominant and for drinking. If a player is caught using their dominant hand, they must finish their drink.'
      },
      {
        title: 'Royal Family',
        description: 'All players must place a bottle cap on their heads, which serves as their crown. If a crown falls, that player must drink.'
      },
      {
        title: 'Toast',
        description: 'Before any player drinks, they must make a toast. Forget a drink.'
      },
      {
        title: 'No Bro',
        description: 'The words "dude", "bro", and "homie" are now prohibited. If any player uses the word, they must drink.'
      },
      {
        title: 'Scapegoat',
        description: 'Pick another player to be insulted every time someone has to drink, including that player. Failure to insult and drink.'
      },
      {
        title: 'Drink/Drank/Drunk',
        description: 'The word "drink" and all variations are now banned. Any player who breaks this rule must drink.'
      },
      {
        title: 'Dot Com',
        description: 'Every player must end whatever they say with "dot com." Forget and drink.'
      },
      {
        title: 'Pirates',
        description: 'All players must speak like a pirate for the duration of the game. Speak like a landlover and drink.'
      },
      {
        title: 'Celebrities',
        description: 'Each players picks a celebrity and imitates their persona for the duration of the game. Mess up and drink.'
      },
      {
        title: 'Drunk',
        description: 'Pick another player. Anytime any player has to drink, so does that player.'
      },
      {
        title: 'Time Traveller',
        description: 'Every time a player drinks, they must drink again.'
      },
      {
        title: 'No Pointers',
        description: 'Pointing is prohibited. If a player is caught pointing at anything, including other players, they must drink.'
      },
      {
        title: 'Censorship',
        description: 'If a player swears, they must drink.'
      },
      {
        title: 'Dirty Bastard',
        description: 'Every player must talk dirty to their beverage before they drink. Failure to do so and drink again.'
      },
      {
        title: 'Chairman',
        description: 'Before any player can leave the playing area, they must first ask you for permission. This includes the restroom. Failure to abide and drink.'
      },
      {
        title: 'Kindness',
        description: 'Before any players drinks, they must say something nice to another player. Failure to demonstrate kindness and they must drink.'
      },
      {
        title: 'No Teeth',
        description: 'Showing teeth while laughing is now prohibited. Failure to abide and drink.'
      },
      {
        title: 'Barnyard',
        description: 'Every player must make an animal noise after drinking. Forget and drink.'
      },
      {
        title: 'Over and Out',
        description: 'All players must say "over and out" after speaking. Forget and drink.'
      }
    ])
    
  },

  down: function (queryInterface, Sequelize) {
    return Rule.destroy({ truncate: true })
  }
};
