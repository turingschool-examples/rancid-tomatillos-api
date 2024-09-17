const movieDetails = [
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 278,
    "original_language": "en",
    "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "popularity": 141.642,
    "poster_path": "https://image.tmdb.org/t/p/original//9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "release_date": "1994-09-23",
    "title": "The Shawshank Redemption",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 238,
    "original_language": "en",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 123.833,
    "poster_path": "https://image.tmdb.org/t/p/original//3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "release_date": "1972-03-14",
    "title": "The Godfather",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//kGzFbGhp99zva6oZODW5atUtnqi.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 240,
    "original_language": "en",
    "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    "popularity": 90.769,
    "poster_path": "https://image.tmdb.org/t/p/original//hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    "release_date": "1974-12-20",
    "title": "The Godfather Part II",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
    "genre_ids": [
      18,
      36,
      10752
    ],
    "id": 424,
    "original_language": "en",
    "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    "popularity": 80.955,
    "poster_path": "https://image.tmdb.org/t/p/original//sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "release_date": "1993-12-15",
    "title": "Schindler's List",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    "genre_ids": [
      18
    ],
    "id": 389,
    "original_language": "en",
    "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    "popularity": 52.003,
    "poster_path": "https://image.tmdb.org/t/p/original//ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    "release_date": "1957-04-10",
    "title": "12 Angry Men",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg",
    "genre_ids": [
      16,
      10751,
      14
    ],
    "id": 129,
    "original_language": "ja",
    "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    "popularity": 86.023,
    "poster_path": "https://image.tmdb.org/t/p/original//39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "release_date": "2001-07-20",
    "title": "Spirited Away",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 19404,
    "original_language": "hi",
    "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    "popularity": 41.774,
    "poster_path": "https://image.tmdb.org/t/p/original//lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
    "release_date": "1995-10-20",
    "title": "Dilwale Dulhania Le Jayenge",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    "genre_ids": [
      18,
      28,
      80,
      53
    ],
    "id": 155,
    "original_language": "en",
    "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "popularity": 145.213,
    "poster_path": "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "release_date": "2008-07-16",
    "title": "The Dark Knight",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//8eihUxjQsJ7WvGySkVMC0EwbPAD.jpg",
    "genre_ids": [
      35,
      53,
      18
    ],
    "id": 496243,
    "original_language": "ko",
    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    "popularity": 84.057,
    "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "release_date": "2019-05-30",
    "title": "Parasite",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
    "genre_ids": [
      14,
      18,
      80
    ],
    "id": 497,
    "original_language": "en",
    "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    "popularity": 74.081,
    "poster_path": "https://image.tmdb.org/t/p/original//8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    "release_date": "1999-12-10",
    "title": "The Green Mile",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    "genre_ids": [
      53,
      80
    ],
    "id": 680,
    "original_language": "en",
    "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    "popularity": 92.708,
    "poster_path": "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "release_date": "1994-09-10",
    "title": "Pulp Fiction",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    "genre_ids": [
      16,
      10749,
      18
    ],
    "id": 372058,
    "original_language": "ja",
    "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    "popularity": 79.4,
    "poster_path": "https://image.tmdb.org/t/p/original//vfJFJPepRKapMd5G2ro7klIRysq.jpg",
    "release_date": "2016-08-26",
    "title": "Your Name.",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    "genre_ids": [
      12,
      14,
      28
    ],
    "id": 122,
    "original_language": "en",
    "overview": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
    "popularity": 175.351,
    "poster_path": "https://image.tmdb.org/t/p/original//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "release_date": "2003-12-17",
    "title": "The Lord of the Rings: The Return of the King",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//ghgfzbEV7kbpbi1O8eIILKVXEA8.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 13,
    "original_language": "en",
    "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    "popularity": 94.464,
    "poster_path": "https://image.tmdb.org/t/p/original//arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    "release_date": "1994-06-23",
    "title": "Forrest Gump",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//bxSBOAD8AuMHYMdW3jso9npAkgt.jpg",
    "genre_ids": [
      10751,
      18
    ],
    "id": 667257,
    "original_language": "es",
    "overview": "After the death of her abusive husband, Matilde finds her new best friend in Miguel, her young, insecure, and disoriented neighbor.",
    "popularity": 17.304,
    "poster_path": "https://image.tmdb.org/t/p/original//t2Ew8NZ8Ci2kqmoecZUNQUFDJnQ.jpg",
    "release_date": "2021-06-17",
    "title": "Impossible Things",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//7TF4p86ZafnxFuNqWdhpHXFO244.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 769,
    "original_language": "en",
    "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    "popularity": 78.267,
    "poster_path": "https://image.tmdb.org/t/p/original//aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    "release_date": "1990-09-12",
    "title": "GoodFellas",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//Adrip2Jqzw56KeuV2nAxucKMNXA.jpg",
    "genre_ids": [
      37
    ],
    "id": 429,
    "original_language": "it",
    "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    "popularity": 86.734,
    "poster_path": "https://image.tmdb.org/t/p/original//bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    "release_date": "1966-12-22",
    "title": "The Good, the Bad and the Ugly",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//sJNNMCc6B7KZIY3LH3JMYJJNH5j.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 346,
    "original_language": "ja",
    "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
    "popularity": 38.664,
    "poster_path": "https://image.tmdb.org/t/p/original//8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
    "release_date": "1954-04-26",
    "title": "Seven Samurai",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
    "genre_ids": [
      16,
      18,
      10752
    ],
    "id": 12477,
    "original_language": "ja",
    "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
    "popularity": 0.08,
    "poster_path": "https://image.tmdb.org/t/p/original//k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
    "release_date": "1988-04-16",
    "title": "Grave of the Fireflies",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//7lyq8hK0MhPHpUXdnqbFvZYSfkk.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "id": 11216,
    "original_language": "it",
    "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    "popularity": 28.94,
    "poster_path": "https://image.tmdb.org/t/p/original//gCI2AeMV4IHSewhJkzsur5MEp6R.jpg",
    "release_date": "1988-11-17",
    "title": "Cinema Paradiso",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//9l1eZiJHmhr5jIlthMdJN5WYoff.jpg",
    "genre_ids": [
      28,
      35,
      878
    ],
    "id": 533535,
    "original_language": "en",
    "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    "popularity": 2838.675,
    "poster_path": "https://image.tmdb.org/t/p/original//8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    "release_date": "2024-07-24",
    "title": "Deadpool & Wolverine",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//mKOBdgaEFguADkJhfFslY7TYxIh.jpg",
    "genre_ids": [
      28,
      878,
      35,
      12,
      53
    ],
    "id": 365177,
    "original_language": "en",
    "overview": "Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.",
    "popularity": 2135.844,
    "poster_path": "https://image.tmdb.org/t/p/original//865DntZzOdX6rLMd405R0nFkLmL.jpg",
    "release_date": "2024-08-07",
    "title": "Borderlands",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
    "genre_ids": [
      16,
      10751,
      12,
      35,
      14
    ],
    "id": 1022789,
    "original_language": "en",
    "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    "popularity": 1655.922,
    "poster_path": "https://image.tmdb.org/t/p/original//vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "release_date": "2024-06-11",
    "title": "Inside Out 2",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//cyKH7pDFlxIXluqRyNoHHEpxSDX.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "id": 646097,
    "original_language": "en",
    "overview": "A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.",
    "popularity": 1686.017,
    "poster_path": "https://image.tmdb.org/t/p/original//xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg",
    "release_date": "2024-08-27",
    "title": "Rebel Ridge",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
    "genre_ids": [
      16,
      10751,
      35,
      28
    ],
    "id": 519182,
    "original_language": "en",
    "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
    "popularity": 1500.852,
    "poster_path": "https://image.tmdb.org/t/p/original//wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    "release_date": "2024-06-20",
    "title": "Despicable Me 4",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg",
    "genre_ids": [
      35,
      14
    ],
    "id": 917496,
    "original_language": "en",
    "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
    "popularity": 1480.847,
    "poster_path": "https://image.tmdb.org/t/p/original//kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
    "release_date": "2024-09-04",
    "title": "Beetlejuice Beetlejuice",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//rwakNepsh0dXVcTtWKUVbDsSYYZ.jpg",
    "genre_ids": [
      28,
      80,
      53,
      35
    ],
    "id": 573435,
    "original_language": "en",
    "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
    "popularity": 1207.613,
    "poster_path": "https://image.tmdb.org/t/p/original//oGythE98MYleE6mZlGs5oBGkux1.jpg",
    "release_date": "2024-06-05",
    "title": "Bad Boys: Ride or Die",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//yRKyJJYIzfeiVDHBe4LXguPQCvD.jpg",
    "genre_ids": [
      14,
      35
    ],
    "id": 4011,
    "original_language": "en",
    "overview": "A newly dead New England couple seeks help from a deranged demon exorcist to scare an affluent New York family out of their home.",
    "popularity": 873.489,
    "poster_path": "https://image.tmdb.org/t/p/original//nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
    "release_date": "1988-03-30",
    "title": "Beetlejuice",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//tCQfubckzzcuCbsGugkpLhfjS5z.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 970347,
    "original_language": "en",
    "overview": "Zee is a feared contract killer known as \"the Queen of the Dead,\" but when she refuses to murder a young blind woman, she finds herself hunted both by criminal colleagues and a determined police detective.",
    "popularity": 800.631,
    "poster_path": "https://image.tmdb.org/t/p/original//6PCnxKZZIVRanWb710pNpYVkCSw.jpg",
    "release_date": "2024-08-22",
    "title": "The Killer",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//7aPrv2HFssWcOtpig5G3HEVk3uS.jpg",
    "genre_ids": [
      28,
      12,
      53
    ],
    "id": 718821,
    "original_language": "en",
    "overview": "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.",
    "popularity": 860.395,
    "poster_path": "https://image.tmdb.org/t/p/original//pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
    "release_date": "2024-07-10",
    "title": "Twisters",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//9juRmk8QjcsUcbrevVu5t8VZy5G.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "id": 923667,
    "original_language": "cn",
    "overview": "Set in the 1980s, troubled youth Chan Lok-kwun accidentally enters the Walled City, discovers the order amidst its chaos, and learns important life lessons along the way. In the Walled City, he becomes close friends with Shin, Twelfth Master and AV. Under the leadership of Cyclone, they resist against the invasion of villain Mr. Big in a series of fierce battles. Together, they vow to protect the safe haven that is Kowloon Walled City.",
    "popularity": 839.806,
    "poster_path": "https://image.tmdb.org/t/p/original//PywbVPeIhBFc33QXktnhMaysmL.jpg",
    "release_date": "2024-04-23",
    "title": "Twilight of the Warriors: Walled In",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//9BQqngPfwpeAfK7c2H3cwIFWIVR.jpg",
    "genre_ids": [
      10749,
      18
    ],
    "id": 1079091,
    "original_language": "en",
    "overview": "When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.",
    "popularity": 723.278,
    "poster_path": "https://image.tmdb.org/t/p/original//4TzwDWpLmb9bWJjlN3iBUdvgarw.jpg",
    "release_date": "2024-08-07",
    "title": "It Ends with Us",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    "genre_ids": [
      27,
      878,
      28
    ],
    "id": 945961,
    "original_language": "en",
    "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
    "popularity": 712.621,
    "poster_path": "https://image.tmdb.org/t/p/original//b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    "release_date": "2024-08-13",
    "title": "Alien: Romulus",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//hdFIdXwS8FSN2wIsuotjW1mshI0.jpg",
    "genre_ids": [
      16,
      35,
      12,
      10751
    ],
    "id": 831815,
    "original_language": "en",
    "overview": "When Bikini Bottom is scooped from the ocean, scientific squirrel Sandy Cheeks and her pal SpongeBob SquarePants saddle up for Texas to save their town.",
    "popularity": 666.162,
    "poster_path": "https://image.tmdb.org/t/p/original//30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg",
    "release_date": "2024-08-01",
    "title": "Saving Bikini Bottom: The Sandy Cheeks Movie",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//x2thJwMJ6oGlhn7UC4vSwHltEw0.jpg",
    "genre_ids": [
      28,
      53,
      10770
    ],
    "id": 1115396,
    "original_language": "en",
    "overview": "When a group of ex-military members is hired to retrieve a lost bag of stolen money, their mission becomes more difficult after a lone hunter finds the bag first.",
    "popularity": 609.662,
    "poster_path": "https://image.tmdb.org/t/p/original//xVbEJzdMxIQqpuLgla0hU8qr9mt.jpg",
    "release_date": "2023-05-12",
    "title": "Hunting Games",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
    "genre_ids": [
      28,
      80
    ],
    "id": 1160018,
    "original_language": "hi",
    "overview": "When an army commando finds out his true love is engaged against her will, he boards a New Dehli-bound train in a daring quest to derail the arranged marriage. But when a gang of knife-wielding thieves begin to terrorize innocent passengers on his train, the commando takes them on himself in a death-defying kill-spree to save those around him — turning what should have been a typical commute into an adrenaline-fueled thrill ride.",
    "popularity": 622.307,
    "poster_path": "https://image.tmdb.org/t/p/original//m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
    "release_date": "2024-07-03",
    "title": "Kill",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//p5kpFS0P3lIwzwzHBOULQovNWyj.jpg",
    "genre_ids": [
      53,
      80
    ],
    "id": 1032823,
    "original_language": "en",
    "overview": "A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event.",
    "popularity": 591.725,
    "poster_path": "https://image.tmdb.org/t/p/original//jwoaKYVqPgYemFpaANL941EF94R.jpg",
    "release_date": "2024-07-31",
    "title": "Trap",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//4ft6TR9wA6bra0RLL6G7JFDQ5t1.jpg",
    "genre_ids": [
      28,
      35
    ],
    "id": 704239,
    "original_language": "en",
    "overview": "A New Jersey construction worker goes from regular guy to aspiring spy when his long-lost high school sweetheart recruits him for an espionage mission.",
    "popularity": 610.803,
    "poster_path": "https://image.tmdb.org/t/p/original//d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg",
    "release_date": "2024-08-15",
    "title": "The Union",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//1wP1phHo2CROOqzv7Azs0MT5esU.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      12,
      28
    ],
    "id": 748783,
    "original_language": "en",
    "overview": "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
    "popularity": 656.567,
    "poster_path": "https://image.tmdb.org/t/p/original//p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
    "release_date": "2024-04-30",
    "title": "The Garfield Movie",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg",
    "genre_ids": [
      27,
      878,
      53
    ],
    "id": 762441,
    "original_language": "en",
    "overview": "As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive with her cat.",
    "popularity": 655.777,
    "poster_path": "https://image.tmdb.org/t/p/original//hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
    "release_date": "2024-06-26",
    "title": "A Quiet Place: Day One",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//mKOBdgaEFguADkJhfFslY7TYxIh.jpg",
    "genre_ids": [
      28,
      878,
      35,
      12,
      53
    ],
    "id": 365177,
    "original_language": "en",
    "overview": "Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.",
    "popularity": 2135.844,
    "poster_path": "https://image.tmdb.org/t/p/original//865DntZzOdX6rLMd405R0nFkLmL.jpg",
    "release_date": "2024-08-07",
    "title": "Borderlands",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//cyKH7pDFlxIXluqRyNoHHEpxSDX.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "id": 646097,
    "original_language": "en",
    "overview": "A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.",
    "popularity": 1686.017,
    "poster_path": "https://image.tmdb.org/t/p/original//xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg",
    "release_date": "2024-08-27",
    "title": "Rebel Ridge",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
    "genre_ids": [
      16,
      10751,
      35,
      28
    ],
    "id": 519182,
    "original_language": "en",
    "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
    "popularity": 1500.852,
    "poster_path": "https://image.tmdb.org/t/p/original//wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    "release_date": "2024-06-20",
    "title": "Despicable Me 4",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg",
    "genre_ids": [
      35,
      14
    ],
    "id": 917496,
    "original_language": "en",
    "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
    "popularity": 1480.847,
    "poster_path": "https://image.tmdb.org/t/p/original//kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
    "release_date": "2024-09-04",
    "title": "Beetlejuice Beetlejuice",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//yRKyJJYIzfeiVDHBe4LXguPQCvD.jpg",
    "genre_ids": [
      14,
      35
    ],
    "id": 4011,
    "original_language": "en",
    "overview": "A newly dead New England couple seeks help from a deranged demon exorcist to scare an affluent New York family out of their home.",
    "popularity": 873.489,
    "poster_path": "https://image.tmdb.org/t/p/original//nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
    "release_date": "1988-03-30",
    "title": "Beetlejuice",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//7aPrv2HFssWcOtpig5G3HEVk3uS.jpg",
    "genre_ids": [
      28,
      12,
      53
    ],
    "id": 718821,
    "original_language": "en",
    "overview": "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.",
    "popularity": 860.395,
    "poster_path": "https://image.tmdb.org/t/p/original//pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
    "release_date": "2024-07-10",
    "title": "Twisters",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//9juRmk8QjcsUcbrevVu5t8VZy5G.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "id": 923667,
    "original_language": "cn",
    "overview": "Set in the 1980s, troubled youth Chan Lok-kwun accidentally enters the Walled City, discovers the order amidst its chaos, and learns important life lessons along the way. In the Walled City, he becomes close friends with Shin, Twelfth Master and AV. Under the leadership of Cyclone, they resist against the invasion of villain Mr. Big in a series of fierce battles. Together, they vow to protect the safe haven that is Kowloon Walled City.",
    "popularity": 839.806,
    "poster_path": "https://image.tmdb.org/t/p/original//PywbVPeIhBFc33QXktnhMaysmL.jpg",
    "release_date": "2024-04-23",
    "title": "Twilight of the Warriors: Walled In",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//tCQfubckzzcuCbsGugkpLhfjS5z.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 970347,
    "original_language": "en",
    "overview": "Zee is a feared contract killer known as \"the Queen of the Dead,\" but when she refuses to murder a young blind woman, she finds herself hunted both by criminal colleagues and a determined police detective.",
    "popularity": 800.631,
    "poster_path": "https://image.tmdb.org/t/p/original//6PCnxKZZIVRanWb710pNpYVkCSw.jpg",
    "release_date": "2024-08-22",
    "title": "The Killer",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//9BQqngPfwpeAfK7c2H3cwIFWIVR.jpg",
    "genre_ids": [
      10749,
      18
    ],
    "id": 1079091,
    "original_language": "en",
    "overview": "When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.",
    "popularity": 723.278,
    "poster_path": "https://image.tmdb.org/t/p/original//4TzwDWpLmb9bWJjlN3iBUdvgarw.jpg",
    "release_date": "2024-08-07",
    "title": "It Ends with Us",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    "genre_ids": [
      27,
      878,
      28
    ],
    "id": 945961,
    "original_language": "en",
    "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
    "popularity": 712.621,
    "poster_path": "https://image.tmdb.org/t/p/original//b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    "release_date": "2024-08-13",
    "title": "Alien: Romulus",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
    "genre_ids": [
      28,
      80
    ],
    "id": 1160018,
    "original_language": "hi",
    "overview": "When an army commando finds out his true love is engaged against her will, he boards a New Dehli-bound train in a daring quest to derail the arranged marriage. But when a gang of knife-wielding thieves begin to terrorize innocent passengers on his train, the commando takes them on himself in a death-defying kill-spree to save those around him — turning what should have been a typical commute into an adrenaline-fueled thrill ride.",
    "popularity": 622.307,
    "poster_path": "https://image.tmdb.org/t/p/original//m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
    "release_date": "2024-07-03",
    "title": "Kill",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//p5kpFS0P3lIwzwzHBOULQovNWyj.jpg",
    "genre_ids": [
      53,
      80
    ],
    "id": 1032823,
    "original_language": "en",
    "overview": "A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event.",
    "popularity": 591.725,
    "poster_path": "https://image.tmdb.org/t/p/original//jwoaKYVqPgYemFpaANL941EF94R.jpg",
    "release_date": "2024-07-31",
    "title": "Trap",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//4ft6TR9wA6bra0RLL6G7JFDQ5t1.jpg",
    "genre_ids": [
      28,
      35
    ],
    "id": 704239,
    "original_language": "en",
    "overview": "A New Jersey construction worker goes from regular guy to aspiring spy when his long-lost high school sweetheart recruits him for an espionage mission.",
    "popularity": 610.803,
    "poster_path": "https://image.tmdb.org/t/p/original//d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg",
    "release_date": "2024-08-15",
    "title": "The Union",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//1wP1phHo2CROOqzv7Azs0MT5esU.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      12,
      28
    ],
    "id": 748783,
    "original_language": "en",
    "overview": "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
    "popularity": 656.567,
    "poster_path": "https://image.tmdb.org/t/p/original//p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
    "release_date": "2024-04-30",
    "title": "The Garfield Movie",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//bizhlTVjifYQUu4Xrdt7m3TYr7d.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "id": 1226578,
    "original_language": "en",
    "overview": "FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an unexpected turn, revealing evidence of the occult. Harker discovers a personal connection to the killer and must stop him before he strikes again.",
    "popularity": 648.343,
    "poster_path": "https://image.tmdb.org/t/p/original//5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg",
    "release_date": "2024-05-31",
    "title": "Longlegs",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//bxwKC4qAbceMgHU1xCCTBK1eYdn.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 5492,
    "original_language": "en",
    "overview": "While on a camping trip in order to reconnect, war veteran Colonel Lee Gunner must save his two sons from a gang of violent bikers when they're kidnapped after accidentally stumbling upon to a massive drug operation.",
    "popularity": 604.002,
    "poster_path": "https://image.tmdb.org/t/p/original//eEkAY5veAnwxUOOlpF62KawkFO9.jpg",
    "release_date": "2024-08-16",
    "title": "Gunner",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//orTQxcx2aoNpx1DIKTjBzpzvzd0.jpg",
    "genre_ids": [
      27,
      14
    ],
    "id": 1130053,
    "original_language": "en",
    "overview": "Desperate Cinderella summons her fairy godmother from an ancient flesh-bound book, seeking revenge on her evil stepmother and stepsisters who abuse and torment her daily.",
    "popularity": 565.441,
    "poster_path": "https://image.tmdb.org/t/p/original//xegGyjYdCcF9X1FWpfw1O1LcFnZ.jpg",
    "release_date": "2024-05-31",
    "title": "Cinderella's Curse",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//qkEnklEGDFy4TRVhuHFn2DI2BP6.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 930600,
    "original_language": "en",
    "overview": "Ebony Jackson, a struggling single mother fighting her personal demons, moves her family into a new home for a fresh start. But when strange occurrences inside the home raise the suspicions of Child Protective Services and threaten to tear the family apart, Ebony soon finds herself locked in a battle for her life and the souls of her children.",
    "popularity": 557.621,
    "poster_path": "https://image.tmdb.org/t/p/original//og1FteMFRInoQnlZeWqEn8XpXHh.jpg",
    "release_date": "2024-08-16",
    "title": "The Deliverance",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//vJk9DOLgP23jO5mBnPHE93MFgYu.jpg",
    "genre_ids": [
      12,
      10751,
      14,
      35
    ],
    "id": 826510,
    "original_language": "en",
    "overview": "Inside of his book, adventurous Harold can make anything come to life simply by drawing it. After he grows up and draws himself off the book's pages and into the physical world, Harold finds he has a lot to learn about real life.",
    "popularity": 457.863,
    "poster_path": "https://image.tmdb.org/t/p/original//dEsuQOZwdaFAVL26RjgjwGl9j7m.jpg",
    "release_date": "2024-07-31",
    "title": "Harold and the Purple Crayon",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
    "genre_ids": [
      28,
      14,
      27,
      53
    ],
    "id": 957452,
    "original_language": "en",
    "overview": "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.",
    "popularity": 539.959,
    "poster_path": "https://image.tmdb.org/t/p/original//58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
    "release_date": "2024-08-21",
    "title": "The Crow",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg",
    "genre_ids": [
      35,
      14
    ],
    "id": 917496,
    "original_language": "en",
    "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
    "popularity": 1480.847,
    "poster_path": "https://image.tmdb.org/t/p/original//kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
    "release_date": "2024-09-04",
    "title": "Beetlejuice Beetlejuice",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//9BQqngPfwpeAfK7c2H3cwIFWIVR.jpg",
    "genre_ids": [
      10749,
      18
    ],
    "id": 1079091,
    "original_language": "en",
    "overview": "When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.",
    "popularity": 723.278,
    "poster_path": "https://image.tmdb.org/t/p/original//4TzwDWpLmb9bWJjlN3iBUdvgarw.jpg",
    "release_date": "2024-08-07",
    "title": "It Ends with Us",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
    "genre_ids": [
      28,
      80
    ],
    "id": 1160018,
    "original_language": "hi",
    "overview": "When an army commando finds out his true love is engaged against her will, he boards a New Dehli-bound train in a daring quest to derail the arranged marriage. But when a gang of knife-wielding thieves begin to terrorize innocent passengers on his train, the commando takes them on himself in a death-defying kill-spree to save those around him — turning what should have been a typical commute into an adrenaline-fueled thrill ride.",
    "popularity": 622.307,
    "poster_path": "https://image.tmdb.org/t/p/original//m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
    "release_date": "2024-07-03",
    "title": "Kill",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//p5kpFS0P3lIwzwzHBOULQovNWyj.jpg",
    "genre_ids": [
      53,
      80
    ],
    "id": 1032823,
    "original_language": "en",
    "overview": "A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event.",
    "popularity": 591.725,
    "poster_path": "https://image.tmdb.org/t/p/original//jwoaKYVqPgYemFpaANL941EF94R.jpg",
    "release_date": "2024-07-31",
    "title": "Trap",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//bizhlTVjifYQUu4Xrdt7m3TYr7d.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "id": 1226578,
    "original_language": "en",
    "overview": "FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an unexpected turn, revealing evidence of the occult. Harker discovers a personal connection to the killer and must stop him before he strikes again.",
    "popularity": 648.343,
    "poster_path": "https://image.tmdb.org/t/p/original//5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg",
    "release_date": "2024-05-31",
    "title": "Longlegs",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//orTQxcx2aoNpx1DIKTjBzpzvzd0.jpg",
    "genre_ids": [
      27,
      14
    ],
    "id": 1130053,
    "original_language": "en",
    "overview": "Desperate Cinderella summons her fairy godmother from an ancient flesh-bound book, seeking revenge on her evil stepmother and stepsisters who abuse and torment her daily.",
    "popularity": 565.441,
    "poster_path": "https://image.tmdb.org/t/p/original//xegGyjYdCcF9X1FWpfw1O1LcFnZ.jpg",
    "release_date": "2024-05-31",
    "title": "Cinderella's Curse",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//vJk9DOLgP23jO5mBnPHE93MFgYu.jpg",
    "genre_ids": [
      12,
      10751,
      14,
      35
    ],
    "id": 826510,
    "original_language": "en",
    "overview": "Inside of his book, adventurous Harold can make anything come to life simply by drawing it. After he grows up and draws himself off the book's pages and into the physical world, Harold finds he has a lot to learn about real life.",
    "popularity": 457.863,
    "poster_path": "https://image.tmdb.org/t/p/original//dEsuQOZwdaFAVL26RjgjwGl9j7m.jpg",
    "release_date": "2024-07-31",
    "title": "Harold and the Purple Crayon",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//jnrLpUtOKelKhmGieEBcAvrsrFB.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 1114513,
    "original_language": "en",
    "overview": "When an American family is invited to spend the weekend at the idyllic country estate of a charming British family they befriended on vacation, what begins as a dream holiday soon warps into a snarled psychological nightmare.",
    "popularity": 475.255,
    "poster_path": "https://image.tmdb.org/t/p/original//dA4N6uWOnEMgbxXwFX7qX7adzs8.jpg",
    "release_date": "2024-09-11",
    "title": "Speak No Evil",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//yNU8UF3DOmv3G9gVNAj34beclTG.jpg",
    "genre_ids": [
      16,
      878,
      12,
      28,
      10751
    ],
    "id": 698687,
    "original_language": "en",
    "overview": "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
    "popularity": 468.676,
    "poster_path": "https://image.tmdb.org/t/p/original//qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg",
    "release_date": "2024-09-11",
    "title": "Transformers One",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//h9YlRHAZWOWtGonllmj6JJg1FrE.jpg",
    "genre_ids": [
      28,
      12,
      16,
      10751,
      14
    ],
    "id": 588648,
    "original_language": "zh",
    "overview": "Set in Han Imperial China, the plot follows the adventures of enslaved girl Ping with ancient dragon Long Danzi. Dragons had been banished from the kingdom. Ping, an orphan, finds one of the last remaining dragon eggs. Palace guards force Ping to run away in order to return the dragon egg to the ocean and save all dragons from extinction. Ping discovers that she is a true Dragonkeeper.",
    "popularity": 467.756,
    "poster_path": "https://image.tmdb.org/t/p/original//ggZGnJLzO3BTu7ysuuIzou3Oex5.jpg",
    "release_date": "2024-04-11",
    "title": "Dragonkeeper",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//en3GU5uGkKaYmSyetHV4csHHiH3.jpg",
    "genre_ids": [
      10752,
      28,
      18
    ],
    "id": 929590,
    "original_language": "en",
    "overview": "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
    "popularity": 377.469,
    "poster_path": "https://image.tmdb.org/t/p/original//sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    "release_date": "2024-04-10",
    "title": "Civil War",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//61yrVrkOH75fUtExDZ4Hi0KqOmc.jpg",
    "genre_ids": [
      27,
      53,
      35
    ],
    "id": 1225377,
    "original_language": "en",
    "overview": "It's Alex's 21st Birthday, but she's stuck at the amusement arcade on a late shift so her friends decide to surprise her, but a masked killer dressed as Mickey Mouse decides to play a game of his own with them which she must survive.",
    "popularity": 309.026,
    "poster_path": "https://image.tmdb.org/t/p/original//3ovFaFeojLFIl5ClqhtgYMDS8sE.jpg",
    "release_date": "2024-08-23",
    "title": "The Mouse Trap",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//2XCmJWRZIQtHzikNsW29l9oy5Fb.jpg",
    "genre_ids": [
      53,
      27
    ],
    "id": 804616,
    "original_language": "en",
    "overview": "After lesbian couple Meg and Kayla split following a traumatic homophobic incident, their three friends are intent on mending the rift during the wedding of Lizzie at a paradise resort. But a pre-wedding boat excursion turns to disaster and the wedding breakfast is likely to be the five girls!",
    "popularity": 279.724,
    "poster_path": "https://image.tmdb.org/t/p/original//1iWGGxHEwswZGvPSoMZlLFf0PNq.jpg",
    "release_date": "2024-03-22",
    "title": "Something in the Water",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//6GhU4BJnqLSaAuz0yQBq3RfdzsF.jpg",
    "genre_ids": [
      27,
      9648
    ],
    "id": 1216191,
    "original_language": "en",
    "overview": "After the brutal murder of her twin sister, Darcy goes after those responsible by using haunted items as her tools for revenge.",
    "popularity": 282.781,
    "poster_path": "https://image.tmdb.org/t/p/original//uln9Efc2vzDOl0Fue2BPs8l1WO7.jpg",
    "release_date": "2024-07-19",
    "title": "Oddity",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    "genre_ids": [
      12,
      18,
      878
    ],
    "id": 157336,
    "original_language": "en",
    "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "popularity": 236.219,
    "poster_path": "https://image.tmdb.org/t/p/original//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "release_date": "2014-11-05",
    "title": "Interstellar",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//4yrOyO3N55XazHQXXYoqiiPQd40.jpg",
    "genre_ids": [
      27
    ],
    "id": 938614,
    "original_language": "en",
    "overview": "A live broadcast of a late-night talk show in 1977 goes horribly wrong, unleashing evil into the nation's living rooms.",
    "popularity": 224.147,
    "poster_path": "https://image.tmdb.org/t/p/original//jGY62i0D0zitaGz4Ema7vTEYIXw.jpg",
    "release_date": "2024-03-19",
    "title": "Late Night with the Devil",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//62zw627mH74rng9zc4tFfaR54KW.jpg",
    "genre_ids": [
      16,
      878,
      10751
    ],
    "id": 1184918,
    "original_language": "en",
    "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
    "popularity": 199.001,
    "poster_path": "https://image.tmdb.org/t/p/original//vcZfDONCxoOU7mosZEnkhYujBEG.jpg",
    "release_date": "2024-09-12",
    "title": "The Wild Robot",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//wkPPRIducGfsbaUPsWfw0MCQdX7.jpg",
    "genre_ids": [
      28,
      35,
      12
    ],
    "id": 1051891,
    "original_language": "en",
    "overview": "When 93-year-old Thelma Post gets duped by a phone scammer pretending to be her grandson, she sets out on a treacherous quest across the city to reclaim what was taken from her.",
    "popularity": 195.17,
    "poster_path": "https://image.tmdb.org/t/p/original//rUcuageYgv9SsJoWuc0seRWG6JC.jpg",
    "release_date": "2024-06-21",
    "title": "Thelma",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    "genre_ids": [
      12,
      14,
      28
    ],
    "id": 122,
    "original_language": "en",
    "overview": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
    "popularity": 175.351,
    "poster_path": "https://image.tmdb.org/t/p/original//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "release_date": "2003-12-17",
    "title": "The Lord of the Rings: The Return of the King",
  },
  {
    "backdrop_path": "https://image.tmdb.org/t/p/original//pysPTtYmTcQBlShcxXZwfs3Zp8H.jpg",
    "genre_ids": [
      878,
      53,
      27
    ],
    "id": 1064028,
    "original_language": "en",
    "overview": "With his wife out sick, a struggling father brings home a lifelike AI, only to have his self-aware new help want everything her new family has to offer... Like the affection of her owner and she'll kill to get it.",
    "popularity": 179.26,
    "poster_path": "https://image.tmdb.org/t/p/original//gBenxR01Uy0Ev9RTIw6dVBPoyQU.jpg",
    "release_date": "2024-08-15",
    "title": "Subservience",
  }
]


const genres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
];

const findMovieDetails = (id) => {
  let movie = movieDetails.find(movie => movie.id == id);

  if (!movie) {
    return false;
  }

  // replace genre IDs with genre strings
  movie.genre_ids = movie.genre_ids.map(genre_id => {
    let match = genres.find(genre => genre.id === genre_id)
    if (match) {
      return match.name;
    } else {
      return genre_id;
    }
  })

  return movie;
}

module.exports = { findMovieDetails }