
// Movies from https://developers.themoviedb.org/3/movies/get-now-playing (1st page)

exports.seed = (knex) => {
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert(movies);
    });
};

const movies = [
   {
    "poster_path": "https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
    "title": "Jumanji: The Next Level",
    "overview": "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
    "release_date": "2019-12-04"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
    "title": "Ad Astra",
    "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
    "release_date": "2019-09-17"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
    "title": "Frozen II",
    "overview": "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    "release_date": "2019-11-20"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//eFw5YSorHidsajLTayo1noueIxI.jpg",
    "title": "6 Underground",
    "overview": "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
    "release_date": "2019-12-13"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//pZekG6xabTmZxjmYw10wN84Hp8d.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//4PCO7tewIGnE6ySjVf2DbJ3pjqq.jpg",
    "title": "Marriage Story",
    "overview": "A stage director and an actress struggle through a grueling, coast-to-coast divorce that pushes them to their personal extremes.",
    "release_date": "2019-11-06"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//ww5aGS5H2tUtckxFFNOJE2790S7.jpg",
    "title": "The Irishman",
    "overview": "Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.",
    "release_date": "2019-11-01"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//8moTOzunF7p40oR5XhlDvJckOSW.jpg",
    "title": "It Chapter Two",
    "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    "release_date": "2019-09-04"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg",
    "title": "Knives Out",
    "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
    "release_date": "2019-11-27"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//mSQjVoZJaZkaHpdLIahh04bfGDr.jpg",
    "title": "Hustlers",
    "overview": "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
    "release_date": "2019-09-12"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//vOl6shtL0wknjaIs6JdKCpcHvg8.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//j8uPZSPjKYzHlN2B4NhPQVWWZ5x.jpg",
    "title": "Ready or Not",
    "overview": "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
    "release_date": "2019-08-21"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//20djTLqppfBx5WYA67Y300S6aPD.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//tLCDKsXo6D84IVFanoElosSEKdp.jpg",
    "title": "Abominable",
    "overview": "A group of misfits encounter a young Yeti named Everest, and they set off to reunite the magical creature with his family on the mountain of his namesake.",
    "release_date": "2019-09-19"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
    "title": "One Piece: Stampede",
    "overview": "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
    "release_date": "2019-08-09"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//riTANvQ8GKmQbgtC1ps3OfkU43A.jpg",
    "title": "Terminator: Dark Fate",
    "overview": "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
    "release_date": "2019-10-23"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    "title": "Parasite",
    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    "release_date": "2019-05-30"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//1nm0sk8UUx9jHCTHuMKe2jkt4Pn.jpg",
    "title": "Doctor Sleep",
    "overview": "A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to \"shine.\" He tries to protect her from the True Knot, a cult whose goal is to feed off of people like them in order to remain immortal.  Doctor Sleep is a sequel to Stephen King's 1977 novel \"The Shining\". Doctor Sleep is set several decades after the events of the original novel.",
    "release_date": "2019-10-30"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//4I0CQfnMy6sRR7QhgqsXR16TmIs.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//sxPycUAaLJJGq2lhhgzR96ePaO0.jpg",
    "title": "Ellipse",
    "overview": "A man and his dog are stranded on a volatile, oval-shaped planet and are forced to adapt and escape before time destroys them both.",
    "release_date": "2019-12-12"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//MBiKqTsouYqAACLYNDadsjhhC0.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//bga3i5jcejBekr2FCGJga1fYCh.jpg",
    "title": "Red Shoes and the Seven Dwarfs",
    "overview": "Princes who have been turned into Dwarfs seek the red shoes of a lady in order to break the spell, although it will not be easy.",
    "release_date": "2019-07-25"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//84Xz2Jh60tC3ICO1CY27wc0zwgC.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//wlnDNMQlnwl5ETlVY6n9CEtR5s0.jpg",
    "title": "Code 8",
    "overview": "In Lincoln City, some inhabitants have extraordinary abilities. Most live below the poverty line, under the close surveillance of a heavily militarized police force. Connor, a construction worker with powers, involves with a criminal gang to help his ailing mother. (Based on the short film “Code 8,” 2016.)",
    "release_date": "2019-12-06"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//iMBlUzqwpz9ffbeLsYjyHPp8tn8.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//2UUhiWbwkEKEAXvrqEZhjJZDrDN.jpg",
    "title": "Black Christmas",
    "overview": "Hawthorne College is quieting down for the holidays. One by one, sorority girls on campus are being killed by an unknown stalker. But the killer is about to discover that this generation’s young women aren’t willing to become hapless victims as they mount a fight to the finish.",
    "release_date": "2019-12-11"
  },
  {
    "poster_path": "https://image.tmdb.org/t/p/original//6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//mn9k8zapebAbCqsiKf24juhXjjx.jpg",
    "title": "Ford v Ferrari",
    "overview": "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
    "release_date": "2019-11-13"
  }  
]
