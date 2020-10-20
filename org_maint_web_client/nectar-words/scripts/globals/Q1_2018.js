var root = '.';
angular.module('nectar_words_app')
  .service('Q1_2018', function () {
     
      var allWeeksSaying = [
          // COPY PASTE
          /* COPY PASTE
            [{
                      posted: 'April 14 2017',
                      postDate: new Date('April 14 2017'),
                      title: 'April 14',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_unplugged_1_2017.jpg'
                  }, {
                      posted: 'April 13 2017',
                      postDate: new Date('April 13 2017'),
                      title: 'April 13',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/dwarkamai_1_2017.jpg'
                  }, {
                      posted: 'April 12 2017',
                      postDate: new Date('April 12 2017'),
                      title: 'April 12',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'April 11 2017',
                      postDate: new Date('April 11 2017'),
                      title: 'April 11',
                      seriesId: '-1',
                      seq: -1,
                      content: 'To reform one’s tendencies and character is indeed an uphill task. One may have studied all the text books of spiritual practice, also read all the scriptures and may have even lectured for hours on them; but one slips into error when confronted by temptation. Like the land that is parched, the heart may appear to be free from any crop of evil, but when the first showers fall, the seeds and roots underneath the soil change the parched land into a carpet of green. You may have the best vegetables, you may have the most capable chef in the world, but if the copper vessel in which you prepare the soup is not tinned, the dish you cook will be highly poisonous. Similarly, you must ‘tin’ your heart with Truth, Right Conduct, Peace and Dvinle Love. Only then will it become a vessel fit to repeat holy names, practice meditation, observe religious bows, do ritualistic worship and so on. ',
                      source: { author: 'Sri Sathya Sai Baba', location: 'Jan 13, 1965' }, author: 'Sri Sathya Sai Baba Jan 13, 1965',
                      img: root + '/images/sai_1221_1_2017.jpg'
                  }, {
                      posted: 'April 10 2017',
                      postDate: new Date('April 10 2017'),
                      title: 'April 10',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_unplugged.jpg'
                  },{
                      posted: 'April 9 2017',
                      postDate: new Date('April 9 2017'),
                      title: ' April 9',
                      seriesId: '-1',
                      seq: -1,
                      content: 'To reform one’s tendencies and character is indeed an uphill task. One may have studied all the text books of spiritual practice, also read all the scriptures and may have even lectured for hours on them; but one slips into error when confronted by temptation. Like the land that is parched, the heart may appear to be free from any crop of evil, but when the first showers fall, the seeds and roots underneath the soil change the parched land into a carpet of green. You may have the best vegetables, you may have the most capable chef in the world, but if the copper vessel in which you prepare the soup is not tinned, the dish you cook will be highly poisonous. Similarly, you must ‘tin’ your heart with Truth, Right Conduct, Peace and Dvinle Love. Only then will it become a vessel fit to repeat holy names, practice meditation, observe religious bows, do ritualistic worship and so on. ',
                      source: { author: 'Sri Sathya Sai Baba', location: 'Jan 13, 1965' }, author: 'Sri Sathya Sai Baba Jan 13, 1965',
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'Aoril 8 2017 ',
                      postDate: new Date('Aoril 8 2017'),
                      title: 'April 8',

                      seriesId: '-1',
                      seq: -1,
                      content: ' It is the most auspicious time to start reading Sundara Kaandam. With Baba’s grace, I place before you this wonderful story in brief, so that you may have time to read, despite your busy worldly schedule. Jai Sai Ram! <br/><br/>' +
                          '<div> To see the posting, click the <span style="font-size:2.2em">\'Narratives\'</span> option in the menu above and then select \'Sundara Kandam Parayaan\' from the drop down list.</div>',
                      source: { author: '', location: '' }, author: '',
                      img: root + '/images/sai_1221_2.jpg'
                  }],
                  #############
                    [{
                      posted: 'April 14 2017',
                      postDate: new Date('April 14 2017'),
                      title: 'April 14',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_unplugged_1_2017.jpg'
                  }, {
                      posted: 'April 13 2017',
                      postDate: new Date('April 13 2017'),
                      title: 'April 13',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/dwarkamai_1_2017.jpg'
                  }, {
                      posted: 'April 12 2017',
                      postDate: new Date('April 12 2017'),
                      title: 'April 12',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'April 11 2017',
                      postDate: new Date('April 11 2017'),
                      title: 'April 11',
                      seriesId: '-1',
                      seq: -1,
                      content: 'To reform one’s tendencies and character is indeed an uphill task. One may have studied all the text books of spiritual practice, also read all the scriptures and may have even lectured for hours on them; but one slips into error when confronted by temptation. Like the land that is parched, the heart may appear to be free from any crop of evil, but when the first showers fall, the seeds and roots underneath the soil change the parched land into a carpet of green. You may have the best vegetables, you may have the most capable chef in the world, but if the copper vessel in which you prepare the soup is not tinned, the dish you cook will be highly poisonous. Similarly, you must ‘tin’ your heart with Truth, Right Conduct, Peace and Dvinle Love. Only then will it become a vessel fit to repeat holy names, practice meditation, observe religious bows, do ritualistic worship and so on. ',
                      source: { author: 'Sri Sathya Sai Baba', location: 'Jan 13, 1965' }, author: 'Sri Sathya Sai Baba Jan 13, 1965',
                      img: root + '/images/sai_1221_1_2017.jpg'
                  }, {
                      posted: 'April 10 2017',
                      postDate: new Date('April 10 2017'),
                      title: 'April 10',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_unplugged.jpg'
                  },{
                      posted: 'April 9 2017',
                      postDate: new Date('April 9 2017'),
                      title: ' April 9',
                      seriesId: '-1',
                      seq: -1,
                      content: 'To reform one’s tendencies and character is indeed an uphill task. One may have studied all the text books of spiritual practice, also read all the scriptures and may have even lectured for hours on them; but one slips into error when confronted by temptation. Like the land that is parched, the heart may appear to be free from any crop of evil, but when the first showers fall, the seeds and roots underneath the soil change the parched land into a carpet of green. You may have the best vegetables, you may have the most capable chef in the world, but if the copper vessel in which you prepare the soup is not tinned, the dish you cook will be highly poisonous. Similarly, you must ‘tin’ your heart with Truth, Right Conduct, Peace and Dvinle Love. Only then will it become a vessel fit to repeat holy names, practice meditation, observe religious bows, do ritualistic worship and so on. ',
                      source: { author: 'Sri Sathya Sai Baba', location: 'Jan 13, 1965' }, author: 'Sri Sathya Sai Baba Jan 13, 1965',
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'Aoril 8 2017 ',
                      postDate: new Date('Aoril 8 2017'),
                      title: 'April 8',

                      seriesId: '-1',
                      seq: -1,
                      content: ' It is the most auspicious time to start reading Sundara Kaandam. With Baba’s grace, I place before you this wonderful story in brief, so that you may have time to read, despite your busy worldly schedule. Jai Sai Ram! <br/><br/>' +
                          '<div> To see the posting, click the <span style="font-size:2.2em">\'Narratives\'</span> option in the menu above and then select \'Sundara Kandam Parayaan\' from the drop down list.</div>',
                      source: { author: '', location: '' }, author: '',
                      img: root + '/images/sai_1221_2.jpg'
                  }],
          */
                  [  {
                      posted: 'April 14 2017',
                      postDate: new Date('April 14 2017'),
                      title: 'April 14',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_unplugged_1_2017.jpg'
                  }, {
                      posted: 'April 13 2017',
                      postDate: new Date('April 13 2017'),
                      title: 'April 13',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/dwarkamai_1_2017.jpg'
                  }, {
                      posted: 'April 12 2017',
                      postDate: new Date('April 12 2017'),
                      title: 'April 12',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'April 11 2017',
                      postDate: new Date('April 11 2017'),
                      title: 'April 11',
                      seriesId: '-1',
                      seq: -1,
                      content: 'To reform one’s tendencies and character is indeed an uphill task. One may have studied all the text books of spiritual practice, also read all the scriptures and may have even lectured for hours on them; but one slips into error when confronted by temptation. Like the land that is parched, the heart may appear to be free from any crop of evil, but when the first showers fall, the seeds and roots underneath the soil change the parched land into a carpet of green. You may have the best vegetables, you may have the most capable chef in the world, but if the copper vessel in which you prepare the soup is not tinned, the dish you cook will be highly poisonous. Similarly, you must ‘tin’ your heart with Truth, Right Conduct, Peace and Dvinle Love. Only then will it become a vessel fit to repeat holy names, practice meditation, observe religious bows, do ritualistic worship and so on. ',
                      source: { author: 'Sri Sathya Sai Baba', location: 'Jan 13, 1965' }, author: 'Sri Sathya Sai Baba Jan 13, 1965',
                      img: root + '/images/sai_1221_1_2017.jpg'
                  }, {
                      posted: 'April 10 2017',
                      postDate: new Date('April 10 2017'),
                      title: 'April 10',
                      seriesId: '-1',
                      seq: -1,
                      content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'April 9 2017',
                      postDate: new Date('April 9 2017'),
                      title: ' April 9',
                      seriesId: '-1',
                      seq: -1,
                      content: 'To reform one’s tendencies and character is indeed an uphill task. One may have studied all the text books of spiritual practice, also read all the scriptures and may have even lectured for hours on them; but one slips into error when confronted by temptation. Like the land that is parched, the heart may appear to be free from any crop of evil, but when the first showers fall, the seeds and roots underneath the soil change the parched land into a carpet of green. You may have the best vegetables, you may have the most capable chef in the world, but if the copper vessel in which you prepare the soup is not tinned, the dish you cook will be highly poisonous. Similarly, you must ‘tin’ your heart with Truth, Right Conduct, Peace and Dvinle Love. Only then will it become a vessel fit to repeat holy names, practice meditation, observe religious bows, do ritualistic worship and so on. ',
                      source: { author: 'Sri Sathya Sai Baba', location: 'Jan 13, 1965' }, author: 'Sri Sathya Sai Baba Jan 13, 1965',
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'Aoril 8 2017 ',
                      postDate: new Date('Aoril 8 2017'),
                      title: 'April 8',

                      seriesId: '-1',
                      seq: -1,
                      content: ' It is the most auspicious time to start reading Sundara Kaandam. With Baba’s grace, I place before you this wonderful story in brief, so that you may have time to read, despite your busy worldly schedule. Jai Sai Ram! <br/><br/>' +
                          '<div> To see the posting, click the <span style="font-size:2.2em">\'Narratives\'</span> option in the menu above and then select \'Sundara Kandam Parayaan\' from the drop down list.</div>',
                      source: { author: '', location: '' }, author: '',
                      img: root + '/images/sai_1221_2.jpg'
                  }],

                  [{
                      posted: 'April 16 2017',
                      postDate: new Date('April 16 2017'),
                      title: 'Loving heart',
                      seriesId: '-1',
                      seq: -1,
                      content: 'A mother, even at the risk of her life, protects her son, her only son.<br/>' +
                          'In the same way, let one who has recognized this truth, cultivate unbounded goodwill towards all beings. That which is most needed is a loving heart. ',
                      source: { author: ' Lord Buddha', location: '' }, author: ' Lord Buddha',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'April 15 2017',
                      postDate: new Date('April 15 2017'),
                      title: 'Signs of a true religion',
                      seriesId: '-1',
                      seq: -1,
                      content: 'The distinctive signs of a true religion are:<ul>' +
                          '<li>Goodwill<li>' +
                          '<li>Love<li>' +
                          '<li>Truthfulness<li>' +
                          '<li>Purity and<li>' +
                          '<li>Genuine feeling of kindness. ',
                      source: { author: ' Lord Buddha', location: '' }, author: ' Lord Buddha',
                      img: root + '/images/dwarkamai_1.jpg'
                  },{
                      posted: 'April 14 2017',
                      postDate: new Date('April 14 2017'),
                      title: 'Which is the best part of your religion?',
                      seriesId: '-1',
                      seq: -1,
                      content: 'Sai Amruta Vani wishes all its readers a very happy, prosperous and spiritual Tamil New Year!<br/><br/>' + 
                          'A man asked, “O Prophet of God! Which is the best part of Islam?”<br/' +
                          'Prophet Muhammad said, “(the best part is) That you give food to the hungry and extend greetings to all whom you know and whom you don’t know.',
                      source: { author: 'anon', location: '' }, author: 'anon',
                      img: root + '/images/sai_unplugged_1_2017.jpg'
                  }, {
                      posted: 'April 13 2017',
                      postDate: new Date('April 13 2017'),
                      title: 'The greatest marvel',
                      seriesId: '-1',
                      seq: -1,
                      content: 'In the Mahabharatha, Dharmaraja was asked to answer the question, “Which is the greatest marvel in the world?” Dharamaraja replied, “Though we see every people dying, we do not think, we would ourselves die! What can be a greater marvel than this?”<br/>' +
                          '&nbsp;&nbsp;Viveka (the ability to distinguish between good and bad), the special gift to man, has to be employed to unravel the mystery of life. The fact that one must eventually die begs the question, “Who am I?” When this question arises in your mind, it should not be ignored as unworthy of attention. When the intellect of the individual ripens and makes this enquiry, he enters into the path of ‘Thapas’. This is first step! ',
                      source: { author: 'Sai Baba', location: 'Sathya Sai Vahini, pp99-101 (edited and summarized) ' }, author: 'Sai Baba in Sathya Sai Vahini, pp99-101 (edited and summarized)',
                      img: root + '/images/dwarkamai_1_2017.jpg'
                  }, {
                      posted: 'April 12 2017',
                      postDate: new Date('April 12 2017'),
                      title: 'Ten characteristics of Dharma',
                      seriesId: '-1',
                      seq: -1,
                      content: 'Supreme forgiveness;<br/>' + 
                          'Supreme humility;<br/>' + 
                          ' Supreme straightforwardness;<br/>' + 
                          'Supreme truthfulness;<br/>' + 
                          'Supreme purity;<br/>' + 
                          ' Supreme self-restraint;<br/>' + 
                          ' Supreme austerity;<br/>' + 
                          'Supreme renunciation;<br/>' + 
                          'Supreme detachment and<br/>' + 
                          'Supreme continence are the ten characteristics of Dharma.',
                      source: { author: 'Lord Mahavir', location: '' }, author: 'Lord Mahavir',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'April 11 2017',
                      postDate: new Date('April 11 2017'),
                      title: 'Flames of fire',
                      seriesId: '-1',
                      seq: -1,
                      content: 'Different flames of fire, when brought close merge into one another.<br/>' + 
                          'In the same way, all individual souls merge with one another to constitute the universal soul (Paramatma). ',
                      source: { author: 'Lord Zarathushtra', location: '' }, author: 'Lord Zarathushtra',
                      img: root + '/images/sai_1221_1_2017.jpg'
                  }, {
                      posted: 'April 10 2017',
                      postDate: new Date('April 10 2017'),
                      title: 'The greatest virtue',
                      seriesId: '-1',
                      seq: -1,
                      content: 'All religions and scriptures agree that going to the aid of fellow beings in times of need and saving them from distressing situations is the greatest virtue. Always wish well for all beings <u>(Suhrudham Sarva Bhutanam)</u>. To be friendly towards all beings is the duty of everyone, since the same Atma is present in all beings. Comprehending this truth, it is the duty of everyone born as human being to do good to others with love. There is no need to search for God anywhere, since God resides in every being. The same soul resides in all beings (Ekatma Sarva Bhuta Antharatma). The body, therefore is to be considered as the temple of God. ',
                      source: { author: 'Sri Sathya Sai Baba ', location: 'Dec 25, 1992' }, author: 'Sri Sathya Sai Baba, Dec 25, 1992.',
                      img: root + '/images/sai_unplugged.jpg'
                  },{
                      posted: 'April 9 2017',
                      postDate: new Date('April 9 2017'),
                      title: 'Who will free you from bondage?',
                      seriesId: '-1',
                      seq: -1,
                      content: 'A father has got his sons and others to free him from his debts;<br/>' + 
                          'But he has got none but himself to remove his bondage.<br/>' + 
                          'It is due to ignorance that you find yourself under bondage;<br/>' +
                          'This alone leads you to countless births and deaths.',
                      source: { author: ' Adi Shankaracharya', location: '' }, author: ' Adi Shankaracharya',
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'Aoril 8 2017 ',
                      postDate: new Date('Aoril 8 2017'),
                      title: 'Where to look for God?',

                      seriesId: '-1',
                      seq: -1,
                      content: 'As fragrance abides in the flower, as the reflection is within the mirror, so does the Lord abide in you. Why search for Him outside?',
                      source: { author: 'Guru Nanak', location: '' }, author: 'Guru Nanak',
                      img: root + '/images/sai_1221_2.jpg'
                  }],
                  [{
                       posted: 'April 7 2017',
                       postDate: new Date('April 7 2017'),
                       title: 'How much time to spend on prayer?',
                       seriesId: '-1',
                       seq: -1,
                       content: 'It is not necessary to devote many hours to prayer. It is enough if one thinks of God with all his heart and offers himself even for a few minutes. A single match stick when struck can dispel the darkness in a room that was closed for years. Mountains of cotton can be burnt down by a single spark. Likewise, whole hearted chanting of the name of Rama even once can destroy mountains of sins. But the chanting should emanate from the depths of the heart.  Remember the name of Rama with love. God can be realized only through love and by no other means.',
                       source: { author: 'Sri Sathya Sai Baba ', location: 'Sri Rama Navami, April 4, 1989' }, author: 'Sri Sathya Sai Baba on Sri Rama Navami, April 4, 1989',
                       img: root + '/images/sai_unplugged_1_2017.jpg'
                   }, {
                       posted: 'April 6 2017',
                       postDate: new Date('April 6 2017'),
                       title: ' The present life',
                       seriesId: '-1',
                       seq: -1,
                       content: 'To reform one’s tendencies and character is indeed an uphill task. One may have studied all the text books of spiritual practice, also read all the scriptures and may have even lectured for hours on them; but one slips into error when confronted by temptation. Like the land that is parched, the heart may appear to be free from any crop of evil, but when the first showers fall, the seeds and roots underneath the soil change the parched land into a carpet of green. You may have the best vegetables, you may have the most capable chef in the world, but if the copper vessel in which you prepare the soup is not tinned, the dish you cook will be highly poisonous. Similarly, you must ‘tin’ your heart with Truth, Right Conduct, Peace and Dvinle Love. Only then will it become a vessel fit to repeat holy names, practice meditation, observe religious bows, do ritualistic worship and so on. ',
                       source: { author: 'Sri Sathya Sai Baba', location: 'Jan 13, 1965' }, author: 'Sri Sathya Sai Baba Jan 13, 1965',
                       img: root + '/images/dwarkamai_1_2017.jpg'
                   }, {
                       posted: 'April 5 2017',
                       postDate: new Date('April 5 2017'),
                       title: 'Incarnation of Righteousness (Dharma)',
                       seriesId: '-1',
                       seq: -1,
                       content: 'Dharma is the code of conduct that will promote the ideals in each stage of a person: student, householder, earner, master, servant, spiritual aspirant, ascetic etc. When the code is distorted and forgetting the very purpose for which one has come, the Lord incarnates and leads people along the right path. Lord Rama was one such incarnation. He truly is the embodiment of virtue (Dharama swarupam) shrouded in human form. He stuck to Dharma in daily practice, even from His infancy. His divine nature is revealed in His calm temperament and felling of love and affection. Meditate on Him and you will be filled with love for all beings; dwell on His story and you will find all agitations of your mind quietening into perfect calmness. ',
                       source: { author: 'Sri Sathya Sai Baba', location: 'April 1, 1963' }, author: 'Sri Sathya Sai Baba, April 1, 1963',
                       img: root + '/images/sai_unplugged_1_2017.jpg'
                   }, {
                       posted: 'April 4 2017',
                       postDate: new Date('April 4 2017'),
                       title: 'Sri Rama Navami',
                       seriesId: '-1',
                       seq: -1,
                       content: '<p><h6>The inner meaning of Ramayana</h6>Rama is the Indweller in every body. He is the Atma-Rama, the Rama (Source of Bliss) in every individual. His blessings surging up from that inner Spring can confer Peace and Bliss. The Ramayana, the Rama story, teaches two lessons: the value of detachment, and the need to become aware of the Divine in every being. Faith in God and detachment from objective pursuits are the keys for human liberation. Give up sense-objects; you gain Rama. Sita gave up the luxuries of Ayodhya and so, she could be with Rama, in the period of \'exile\'. When she cast longing eyes on the golden deer and craved for it, she lost the presence of Rama. Renunciation leads to joy; attachment brings about grief. Be in the world, but, not of it. The brothers, comrades, companions and collaborators of Rama are each of them examples of persons saturated with Dharma. Dasaratha is the representative of the merely physical, with the ten senses. The three Gunas - Sathwa, Rajas and Thamas - are the three Queens. The Four Goals of Life (Dharma, Artha, Kama, Moksha) - the Purusharthas - are the four Sons. Lakshmana is the Intellect; Sugriva is Viveka or Discrimination. Vali is Despair. Hanuman is the embodiment of Courage. The Bridge is built over the Ocean of Delusion. The three Rakshasa chiefs are personifications of the Rajasic (Ravana), Thamasic (Kumbhakarna) and the Sathwic qualities (Vibhishana). Sita is Brahmajnana or the Awareness of the Universal Absolute, which the Individual must acquire and regain undergoing travails in the crucible of Life. Make your heart pure and strong, contemplating the grandeur of the Ramayana. Be established in the faith that Rama is the Reality of your existence.<br/><br/> –Sri Sathya Sai Baba in Rama Katha Rasa Vahini,V(1)</p>' +
                            '<h6>Lord Shiva describes the power of Rama mantra to Parvathi</h6> Replying to Parvathi Shiva said, “By meditating on ‘Rama Rama’ my mind gets attracted to the beautiful name ‘Rama’. Saying the name of ‘Rama’ is equivalent to chanting the thousand names of Lord Vishnu (Vishnu Sahasranaamam).”',
                       source: { author: '', location: '' }, author: '',
                       img: root + '/images/ramnavami.png'
                   }, {
                       posted: 'March 30 - April 3 2017 ',
                       postDate: new Date('March 30 2017'),
                       title: 'Sundara Kandam',
                    
                       seriesId: '-1',
                       seq: -1,
                       content: ' It is the most auspicious time to start reading Sundara Kaandam. With Baba’s grace, I place before you this wonderful story in brief, so that you may have time to read, despite your busy worldly schedule. Jai Sai Ram! <br/><br/>' + 
                           '<div> To see the posting, click the <span style="font-size:2.2em">\'Narratives\'</span> option in the menu above and then select \'Sundara Kandam Parayaan\' from the drop down list.</div>',
                       source: { author: '', location: '' }, author: '',
                       img: root + '/images/dwarkamai_1_2017.jpg'
                   }],

             [{
                 posted: 'March 29 2017',
                 postDate: new Date('March 29 2017'),
                 title: 'Where does devotion take you?',
                 content: 'Devotion takes you into right discrimination, renunciation, love of all creatures, service to pious men, keeping company with the devoted, singing the praises of the Lord, truthfulness and other virtues. ',
                 source: { author: 'Sri Ramakrishna', location: 'Sayings, p210' }, author: 'Sayings of Sri Ramakrishna, p210',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/sai_unplugged_1_2017.jpg'
             }, {
                 posted: 'March 28 2017',
                 postDate: new Date('March 28 2017'),
                 title: 'HAPPY UGADI/GUDI PADWA',
                 content: 'The year becomes new;<br/>The day becomes holy;<p>- only when you sanctify it by spiritual practice, not otherwise. <br/> - Baba </p> ' + 
                          '<p></p>' +
                          '<p>You would have celebrated many Ugadi festivals in your life. Certain traditional practices go with every festival, such as having a sacred bath, wearing new clothes, cleaning the house and decorating it with buntings of green leaves. Greatness lies in purifying our thoughts, not merely purifying the transient body. The significance of the festival does not lie in wearing new clothes but in cultivating new and noble thoughts. The house should be decorated not merely with buntings of green leaves, but with buntings of love. Share your love with everyone who visits your house. Only then, would we be celebrating the festivals in its true spirit. <br/>Sri Sathya Sai Baba, March 18, 1999.</p>',
                 source: { author: 'Baba|Sri Sathya Sai Baba', location: '' }, author: 'Baba / Sri Sathya Sai Baba, March 18 1999',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/sai_1221_1.jpg'
             }, {
                 posted: 'March 27 2017',
                 postDate: new Date('March 27 2017'),
                 title: 'The Path of Love',
                 content: 'Bhakthi Yoga will teach people the path of Love. It will tell them not to love with a view to gain profit. Love all; no harm can come to you then. It will only spread joy and happiness to all. God is present in all beings as Love. So, the Love is directed to and accepted by, not the individual but by God who is resident there. The seeker of God who relies on the path of devotion (Bhakthi) soon becomes aware of this fact.',
                 source: { author: 'Sri Sathya Sai Baba', location: 'Sathya Sai Vahini, p65.' }, author: 'Sathya Sai Vahini, p65.',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/sai_1221_2.jpg'
             }, {
                 posted: 'March 26 2017',
                 postDate: new Date('March 26 2017'),
                 title: 'Strive',
                 content: '<p>Strive- that is your duty</p>'+ 
                          '<p>Yearn – that is your task</p>' +
                          '<p>Struggle – that is your assignment</p>' +
                          'The river strives, yearns and struggles to merge with the sea from which it came. It has that constant thought of consummation ever alert in its consciousness. It attempts to make itself pure and pellucid so that it may be welcomed by its source.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Gems of Wisdom, p395.',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/sai_1221_2.jpg'
             }, {
                 posted: 'March 25 2017',
                 postDate: new Date('March 25 2017'),
                 title: 'A tigress cannot give birth to a goat',
                 content: 'A goat cannot be born of a tigress! What emanates from God must be Divine.  The Atman in you, which came from Param-atman, is also immortal. Sparks emanating from the flames of fire have the same incendiary quality as the fire. The body is the temple of God. Until the man realizes the God within, he will be assiduously seeking Him elsewhere.  ',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Gems of Wisdom, p395',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/sai_1221_2.jpg'
             }, {
                 posted: 'March 24 2017',
                 postDate: new Date('March 24 2017'),
                 title: 'Scholarship is a burden',
                 content: 'Scholarship is a burden, it is often a handicap. So long as God is believed to be far away in temples and holy places, you will feel religion and vedanta to be a burden. Plant God in your heart and you will feel light and stronger. It is like the food bag- when you carry it on your shoulder, it feels heavy and you find it difficult to carry it during a walk. But, sit near a stream and eat it. Though the total weight has not decreased, you don’t feel the burden. Similarly, apply this idea to God. Do not carry Him on your shoulder, take ‘Him’ in. Let Him blossom within you.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba, Feb 18, 1964.',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/sai_1221_1.JPG'
             }, {
                 posted: 'March 23 2017',
                 postDate: new Date('March 23 2017'),
                 title: 'Nothing in the world can give you pure joy',
                 content: 'Your child will give you great joy through its play and prattle, but when it interferes with your work or demands your attention when you are working on something important, you get very angry! You child who was a source of joy now becomes a source of grief! Remember, there is nothing in this world which can give you unmixed joy. Even if there is one such thing, when it is lost, you become sad! This is the very nature of the world. So, try to correct the mind which experiences joy and sorrow. Control your mind and train it to accept and see the real nature of the world. This is the real purpose of education.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba , Dec 20, 1958.',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/sai_1221_1_2017.jpg'
             }, {
                 posted: 'March 22 2017',
                 postDate: new Date('March 22 2017'),
                 title: 'The seed and the soil',
                 content: 'The seed may have life in it; but the soil must be ploughed and made fit to activate it. When both these conditions are satisfied, the harvest of spiritual success is assured. He who instructs in the field of religion has to be of enthralling excellence; the listener too, has to be of sharp and clear understanding. Then, the result will be spiritual awakening of the highest level.',
                 source : { author: '', location: ''}, author: ' Sri Sathya Sai Baba in Sathya Sai Vahini, p97',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 12,
                 img: root + '/images/sai_unplugged_1_2017.jpg'
             }, {
                 posted: 'March 21 2017',
                 postDate: new Date('March 21 2017'),
                 title: 'When the thirst for liberation is strong',
                 content: 'When the thirst for liberation is really acute, a strange and mysterious force in Nature will begin to operate. When the soil is ready, the seed appears from somewhere! The spiritual Guru will be alerted and the thirst will be quenched. The aspirant has developed the power to attract the giver of illumination. That power is strong and full. Therefore, naturally, the conferrer of illumination will get ready to meet and bless the aspirant. Such a Guru, will steal your hearts not your wealth. ',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p97',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 11,
                 img: root + '/images/dwarkamai_1_2017.jpg'
             }, {
                 posted: 'March 20 2017',
                 postDate: new Date('March 20 2017'),
                 title: 'Bookish knowledge',
                 content: 'One can spend an entire life time scanning profoundly written books. One might even earn the highest rank among intellectuals. But, at the end of all, one might not have attained even some little progress in the spiritual field.  To conclude that a scholar who has reached the top most height can therefore be considered ripe in spiritual wisdom will prove to be a mistake. The scholar might write elaborate commentaries on Gita. But, as a result of all this study, if his character, behavior and conduct do not prove that Gita has soaked into him, all that punditry is a burden he is carrying around.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p95',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 10,
                 img: root + '/images/sai_unplugged_1_2017.jpg'
             }, {
                 posted: 'March 19 2017',
                 postDate: new Date('March 19 2017'),
                 title: 'Achieving fullness',
                 content: 'It is the inescapable destiny of every one to fulfill himself.  Every living being has to attain fullness in the end. Each one is at a particular stage of this march as a result of the activities engaged in previous lives.  The prompting to save oneself and the power to pull oneself up into liberation cannot be derived from books. The strength has to come from the individual himself.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p95',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 9,
                 img: root + '/images/dwarkamai_1_2017.jpg'
             }, {
                 posted: 'March 18 2017',
                 postDate: new Date('March 18 2017'),
                 title: 'What is the reason for bondage?',
                 content: 'Through ignorance (avidya), man gets bound. So, wisdom is the cure. How can this Awareness be accomplished? There are three ways of acquiring it. 1) through Prema (love) or Bhakthi 2) through loving service towards every living being and 3) through contemplation on the formless God.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p93',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 8,
                 img: root + '/images/dwarkamai_1_2017.jpg'
             }, {
                 posted: 'March 17 2017',
                 postDate: new Date('March 17 2017'),
                 title: 'Atma is masculine?',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 7,
                 content: 'The Atma is neither masculine nor feminine; it is not possible to impose these distinctions on It. They are merely physical attributes, pertaining to the body. When talking about Atma, ideas such as these are but signs of delusion.  The discussion of ‘age’ is also a product of delusion. The Atma is eternal. This ageless entity is ever One and Only.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p93',
                 img: root + '/images/dwarkamai_1_2017.jpg'
             }, {
                 posted: 'March 16 2017',
                 postDate: new Date('March 16 2017'),
                 title: 'You are your own architect',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 6,
                 content: 'Among men, each one is himself, the cause of his fortune good or bad. He himself is the builder, the architect. Fate, destiny, pre-determination, will of God – everyone of these explanations are toppled by the principle of Karma.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p92',
                 img: root + '/images/sai_unplugged_1_2017.jpg'
             }, {
                 posted: 'March 15 2017',
                 postDate: new Date('March 15 2017'),
                 title: ' The present life',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 5,
                 content: 'Just as the activities in this life are determined by the nature of the activities in the previous lives, the activities of this life determines the activities of next life. God has the power to shape the nature of man, but He does not exercise that power. Instead, He leaves it to the free will of the individual, who has to learn the lessons by experience.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p92',
                 img: root + '/images/dwarkamai_1_2017.jpg'
             }, {
                 posted: 'March 14 2017',
                 postDate: new Date('March 14 2017'),
                 title: 'Why certain Avatars are not worshipped?',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 4,
                 content: 'It is said that there are some manifestations that are partial, some others are full, some are temporary and some that are long lasting. But, these are called Avatars by common people only as a courtesy. Narada, Sanatkumara and other similar sages are referred to in some texts as Avatars. They have not got all the Divine characteristics. Therefore, they are not worshipped.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p91',
                 img: root + '/images/sai_unplugged_1_2017.jpg'
             }, {
                 posted: 'March 13 2017',
                 postDate: new Date('March 13 2017'),
                 title: 'God can be perceived through Avatars',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 3,
                 content: 'Iswara or God though not perceptible to the senses ordinarily, becomes so perceptible to the devotee who has deep attachment to Him and years to merge in Him. Such devotees perceive God as clearly as they perceive external objects. God is said to be formless, yet he can assume any form. In what form does He grant the vision to the devotee? He manifests in the form that the devotee yearns for; the form which will grant him the highest satisfaction. These forms are called Avatars. ',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p91',
                 img: root + '/images/dwarkamai_1_2017.jpg'
             }, {
                 posted: 'March 12 2017',
                 postDate: new Date('March 12 2017'),
                 title: 'Time is God',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 2,
                 content: 'Time is the manifestation of the power of God; so it has no beginning or end which can be measured. Karma too is an important Truth to be reckoned as such. The Creation, the Time and the Karma- all three are the instruments of God or Iswara. They are bound to Him.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p90',
                 img: root + '/images/sai_unplugged_1_2017.jpg'
             }, {
                 posted: 'March 11 2017',
                 postDate: new Date('March 11 2017'),
                 title: 'Purpose of Life',
                 seriesId: 'Spring 2017 Spiritual Gems',
                 seq: 1,
                 content: 'Life should have a purpose and meaning. The purpose is the attainment of the Supreme. By Supreme is meant the Atma. All those who have grown up in the Bharartiya culture, know that the Atma is everywhere. No other living being has been endowed with intelligence and discriminative faculty, heightened to this degree, in order to enable it to visualize the Atma. Man has the qualifications needed to seek the cause of Creation. He has in him the urge and the capacity to know the cause of Creation. This is the reason why man is acclaimed as the crown of creation.',
                 source : { author: '', location: ''}, author: 'Sri Sathya Sai Baba in Sathya Sai Vahini, p1',
                 img: root + '/images/dwarkamai_1_2017.jpg'
             }]
      ];

      this.returnAllWeeksSaying = function () {
          return allWeeksSaying;
      }
  });