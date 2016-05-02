(function () {
    var root = '/myApp/nectar-words';
    angular.module('nectar_words_app')
      .service('Hub', function ($http, $q,
            March4April12016,
            Week3March2016) {
          //  var budgetStatus = {};
          var allWeeksSaying = [
                 
                  [{
                      posted: 'March 25 2016',
                      postDate: new Date('March 25 2016'),
                      title: 'Secret to misery',
                      content: 'Never say, “mine”. Whenever we say a thing is “mine”, misery will immediately come. Do not say, “my house.” Do not say, “my body.” The whole difficulty lies there. The body is neither yours, nor mine, nor anybody’s. These bodies come and go by the laws of Nature, but we are free, standing as a witness. This body is not any more free, than picture on a wall.  Why should we be attached so much to the body? If somebody paints a picture, he does it and passes on. Do not project the limb of selfishness, “I must possess it.” As soon as that is projected, misery will begin.',
                      author: 'Swami Vivekananda in Complete Works, V(1), pp100-101.',
                      seriesId: '-1',
                      seq: -1,
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'March 24 2016',
                      postDate: new Date('March 24 2016'),
                      title: 'Secret to wellness',
                      content: 'Give up all this ‘I’ and ‘mine’.<br/><br/>Illness begins with ‘I’.<br/><br/>Wellness begins with ‘We’.',
                      author: 'taken from Sri Swami Narayan Sampradaya',
                      seriesId: '-1',
                      seq: -1,
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'March 23 2016',
                      postDate: new Date('March 23 2016'),
                      title: ' Learn from your mistakes',
                      content: 'Do not brood over your past mistakes and failures as this will only fill your mind with grief, regret and depression. Do not repeat them in the future. There is something good in all seeming failures. You are not to see that now. Time will reveal it. Be patient. ',
                      author: 'Swami Sivananda',
                      seriesId: '-1',
                      seq: -1,
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'March 22 2016',
                      postDate: new Date('March 22 2016'),
                      title: 'Hatred',
                      content: 'Give up the feelings of hatred of others in your heart. You are considering others as others because of egoism, pomp and show. Every living being and human being is an embodiment of Paramatma.  We are the birds of the same nest; we are the children of the same mother; we are the flowers of the same creeper; we are the people of the same world. Why should we harbor hatred? In truth, you hate yourself when you hate others. The greatest quality in every man is love. When love is absent, evil qualities like hatred and jealousy raise their heads.',
                      author: 'Discourses of Bhagavan Sri Sathya Sai Baba, Nov 19-24, 1987, p25.',
                      seriesId: '-1',
                      seq: -1,
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'March 20 2016',
                      postDate: new Date('March 20 2016'),
                      title: 'Touching the feet-1',
                      content: 'By merely touching, you can transfer your sins to the other person. It is for that reason that devotees are not allowed to touch the feet of some swamis. It is not the physical touch wherein lies the danger, but in mental conditions also; bad influences may flow from one person to the other by the mere touch. ',
                      author: 'Conversations with Sri Sathya Sai Baba, p69.',
                      seriesId: 03202016,
                      seq: 1,
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'March 21 2016',
                      postDate: new Date('March 21 2016'),
                      title: ' Touching the feet -2',
                      content: 'We pay respect to the elders by touching their feet. When touching, people cross their hands. The reason for this is simple.  The right side of the human body is considered positive and left side of the body is considered negative. When you face the elders and cross your hands, the right hand touches the right foot and the left hand touches left foot of the person. During this process, the elders touch the head of the person and gives blessings.  This way, a complete circuit is formed wherein your sins are transmitted to him and you receive positive energy from him.',
                      author: 'taken from Sri Swami Narayan Sampradaya',
                      seriesId: 03202016,
                      seq: 2,
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'March 18 2016',
                      postDate: new Date('March 18 2016'),
                      title: 'Touching the feet of the Lord',
                      content: 'The idea behind bowing one’s head at the feet of Bhagawan is that sacred thoughts enter the devotee’s mind. When the devotee’s head touches the Lord’s feet, the Lord’s divine energy flows towards him. By the Lord’s touch, you can be relieved of your sins.',
                      author: ' – Sri Sathya Sai Baba in Summer Showers in Brindavan, 1996.',
                      seriesId: '-1',
                      seq: -1,
                      img: root + '/images/dwarkamai_1.jpg'
                  },{
                      posted: 'March 17 2016',
                      postDate: new Date('March 17 2016'),
                      title: 'What is Spiritual Practice?',
                      seriesId: '-1',
                      seq: -1,
                      content: '<u>Devotee:</u> What is Sadhana (spiritual practice)?<p/>' +
  '<u>Bhagawan:</u> It is mind that binds man and the same mind liberates him. Mind is constituted of desire (sankalpa) and disposition (vikalpa) [desires and fulfillment of desires].  Desire is of two kinds: the noble and the base. The base desires are lust and greed. Noble desire is directed towards enlightenment and emancipation.  Base desire contaminates and clouds the understanding. Sadhana is easy for the aspirant who is endowed with noble desires. Calmness is the criterion of spiritual progress. Plunge the purified mind into your heart. Then, the work is over. This is the essence of all spiritual practice.',
                      author: ' –Ramana Maharshi',
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'March 16 2016',
                      postDate: new Date('March 16 2016'),
                      title: 'Peace',
                      seriesId: '-1',
                      seq: -1,
                      content: 'Peace is a reflection of spiritual consciousness. It begins with each person and extends to home, the neighborhood, the nation and beyond. Peace comes when the higher nature in man takes over the lower nature. Peace is the natural state of mind.',
                      author: 'Sivaya Subramaniya Swami (Himalayan Academy)',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'March 15 2016',
                      postDate: new Date('March 15 2016'),
                      title: ' Why is the world full of opposites?',
                      seriesId: '-1',
                      seq: -1,
                      content: '<u>Devotee:</u> Swamiji, Why the world is full of opposites?<p/>' +
  '<u>Swamiji:</u> So that you can use your is discrimination (viveka) to differentiate between the good and the bad and develop dispassion (vairagya) for bad things in the world. There are people in this world, who are so poor that they don’t have any food to eat. There are people who are very rich and have a lot of food in the fridge. Yet they can’t eat; they starve. Do you know why? They are dieting! (Everyone laughs) The message is that neither should you starve nor eat too much. Buddha once starved during his penance and became just bone and skin and was about to collapse. People around him gave him food and water so that he was healthy enough to continue his penance. Buddha learnt a lesson that one should take the middle path and not torture the body to achieve salvation.',
                      author: ' –Swami T',
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'March 14 2016',
                      postDate: new Date('March 14 2016'),
                      title: ' Loss of faith',
                      seriesId: '-1',
                      seq: -1,
                      content: 'A man wanted to cross a river in spate due to torrential rains. A sage gave him a talisman and said, “This will carry you across.” The man holding it in his hand began to cross the river. Before he had gone half the way, he was seized with curiosity and opened the talisman to see what was in it. Therein he found, written on a piece of paper, the sacred name ‘Rama’. At this, the man said depreciatingly, “Is this the whole secret?” No sooner did this skepticism enter his mind, he sank down! It is the faith in the ‘name’ of the Lord that works wonders! ',
                      author: 'Sayings of Sri Ramakrishna, p135',
                      img: root + '/images/sai_1221_1.jpg'
                  }],
                  [{
                      posted: 'March 8 2016',
                      postDate: new Date('March 8 2016'),
                      title: ' Faith-1',
                      seriesId: 03082016,
                      seq: 1,
                      content: 'Parvati once asked Shiva, “O Lord, what is the root of the eternal, everlasting, all-embracing bliss?” To her Shiva replied, “The root is faith.” Let everyone take to devotional practices and perform the duties of his own creed and faith',
                      author: 'Sayings of Sri Ramakrishna, p133',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'March 9 2016',
                      postDate: new Date('March 9 2016'),
                      title: ' Faith-2',
                      seriesId: 03082016,
                      seq: 2,
                      content: 'Unless one becomes child-like in faith, it is difficult for one to realize God. If the mother says to the child, “He is your brother”, the child fully believes that the person referred to is really its brother. If the mother says, “Don’t go there. There is bogey man”, the child is indeed convinced that there is a bogey man. God is really moved when He sees in a man that kind of child-like faith. None can realize God with the calculating nature of the worldly-minded',
                      author: 'Sayings of Sri Ramakrishna, p134',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'March 10 2016',
                      postDate: new Date('March 10 2016'),
                      title: ' Faith-3',
                      seriesId: 03082016,
                      seq: 3,
                      content: 'The stone may remain in water for many years; yet the water will never penetrate into it. But clay soon disintegrates into mud when it comes in contact with water. So too, the strong heart of a faithful devotee does not despair however long he is subjected to trials and torments. But the man of weak faith is shaken even by the most trifling cause.',
                      author: 'Sayings of Sri Ramakrishna, p135',
                      img: root + '/images/dwarkamai_1.jpg'
                  },     {
                      posted: 'March 10 2016',
                      postDate: new Date('March 10 2016'),
                      title: 'Weekend is suffused with Faith!',
                      seriesId: 03082016,
                      seq: 4,
                      content: '<u>TFD (1727): Fri 3/11/16. Faith-4</u><br/><br/>' +
                  'While struggling in the spiritual field, you should accept God as your protector. To instill faith in a child, the mother persuades it to walk a few steps but will be careful not to let it fall. If the child totters and is about to lose its balance, the mother hurries to catch it. God too, like a mother has His eyes fixed on you. This ever present faith and conviction will fill you with divine love. </i>–Teachings of Sri Sathya Sai Baba, p52.<i>' +
                  '<br/><br/><u>TFD (1728): Sat 3/12/16. Faith-5</u><br/><br/>' +
                  'When the sun is directly over your head, there will be no shadow. So too, when the faith is direct and steady in your mind, it will not cast a shadow of doubt. . –Teachings of Sri Sathya Sai Baba, p99..<i>' +
                  '<br/><br/><u>TFD (1729): Sun 3/13/16. Faith-6</u><br/><br/>' +
                  'Sri Rama, who was God incarnate, had to build a bridge to cross the ocean to reach Lanka. But, Hanuman, his faithful monkey devotee and servant, crossed the ocean in one leap, because of his firm faith in Rama. Here, the servant achieved more than the master, simply through faith.',
                      img: root + '/images/sai_unplugged.jpg',
                      author: 'Sayings of Sri Ramakrishna, p135',
                  }, {
                      posted: 'March 7 2016',
                      postDate: new Date('March 7 2016'),
                      title: 'Maha Shivarathri',
                      seriesId: 03072016,
                      seq: 1,
                      content: 'Rathri means night, signifying darkness. Shiva means auspiciousness. ‘Shivarathri’ signifies auspiciousness which is inherent in darkness. It refers to the wisdom which exists in the midst of ignorance. Wisdom and ignorance are not two different things; they are essentially the same, opposite polarities of the same underlying principle. The state that transcends both wisdom and ignorance is Divinity (Paratatva). This Shivarathri is a day when one tries to establish friendship between mind and God. Shivarathri reminds everyone of the fact that Divinity is all pervasive and is to be found everywhere. It is said that Shiva lives in Kailasa. But where is Kailasa? Kailasa is our own mind full of joy and bliss. It means that when you develop purity, steadiness and sacredness from within, your heart becomes filled with peace and bliss and ultimately your heart itself becomes Kailasa.<p/>' +
                  ' Scriptures proclaim that Maha Shivarathri is very auspicious time to worship Lord Shiva. Performing Abhisheka to Shivalingam with Panchamruthams (Milk, Buttermilk, Ghee, Honey, Sugar, and Fruits) while chanting Sri Rudram pleases Lord Shiva the most. Staying awake throughout the night (Jagarana) and worshipping Lord Shiva is particularly pleasing to Him.  One has to worship Lord Shiva to achieve salvation and that too on Shivarathri day. It is certain that one who keeps awake on this day will attain Shiva Sayujyam (becoming one with Lord Shiva). It is believed that the devotee\'s sincere worship of Lord Shiva on this auspicious night will absolve past sins and enable salvation. ',
                      author: 'Sri Sathya Sai Baba, Feb 17, 1985(1st passage)',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'March 6 2016',
                      postDate: new Date('March 6 2016'),
                      title: 'Maha Shivarathri',
                      seriesId: 03072016,
                      seq: 2,
                      content: 'The phase of the Moon generally controls the mind. Every day, during the dark phase of the month, the Moon wanes and its counterpart in man, the mind, also wanes. On the fourteenth day (Chathurdashi), just a tiny bit is left and if some extra effort is made on that day, the mind can be killed (Manohara). The Chathurdashi of the dark half of this month is called Maha Shivarathri and it should be spent in Japa and Dhyana of Shiva without thinking about food or sleep. - Baba in Sanathana Sarathi, April 1994, p7.<p/>' +
                  '<u>Mrutyunjaya Mantra <i>(due to Sage Vashishta)</i></u><br>' +
                  '<i>We offer or worship to the fragrant, three eyed Lord Shiva who enhances prosperity. May he liberate us from the bondage of death like the urvaruka melon (which effortlessly separates from the vine when ripe). May He not (let us turn away) from immortality.</i><p>' +
                  '<b><i>Om tryambakam yajamahe sugnadhim pushtivardhanam<br/>&nbsp;Urvarukamiva bandanaan mrutyur muksheeya mamrutat</i></b>',
                      author: ' ',
                      img: root + '/images/dwarkamai_1.jpg'
                  }],
                  [{
                      posted: 'March 1 2016',
                      postDate: new Date('March 1 2016'),
                      title: 'Namah Shivaya – the first letter "Na"',
                      seriesId: 03012016,
                      seq: 1,
                      content: '"Namah Shivaya" is a very powerful mantra to worship Lord Shiva and also to meditate upon Him. Adi Sankara has composed Shiva Panchakshara Stotram with each verse starting with each letter of the mantra Namah Shivaya.  Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                         'My salutations to Lord Shiva, who is in the form the syllable ‘Na’, who wears serpent king as a garland, who has three eyes, who has ashes smeared all over his body, who is the supreme Lord, who is eternal, pure and who wears space as his clothing.<p/>' +
                         '<i>Naagendra-Haaraaya Tri-Lochanaaya<br/>Bhasma-Angga-Raagaaya Maheshvaraaya |<br/>Nityaaya Shuddhaaya Dig-Ambaraaya<br/>Tasmai Nakaaraaya NamahShivaaya ||1||</i>',
                      author: 'Shankaracharya',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'March 2 2016',
                      postDate: new Date('March 2 2016'),
                      title: 'Namah Shivaya – the second letter ‘Ma’',
                      seriesId: 03012016,
                      seq: 2,
                      content: 'My salutations to Lord Shiva, who is in the form the syllable "Ma", who is bathed with waters of Ganga and sandal paste, who is the supreme Lord of Nandi and other leaders of the troop of attendants in Kailasa and who is elaborately worshipped with mandara and many other flowers.  Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                         '<p/>Mandaakinii-Salila-Chandana-Carcitaaya<br/>Nandi-Iishvara-Pramatha-Naatha-Maheshvaraaya |<br/>Mandaara-Pushpa-Bahu-Pushpa-Su-Puujitaaya<br/>Tasmai Makaaraaya Namah Shivaaya ||2||',
                      author: 'Shankaracharya',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'March 3 2016',
                      postDate: new Date('March 3 2016'),
                      title: 'Namah Shivaya – the third letter ‘Shi’',
                      seriesId: 03012016,
                      seq: 3,
                      content: 'My salutations to Lord Shiva, who is in the form the syllable ‘Shi’, the blessed one who has a blue neck, who is like the sun to the cluster of lotuses that is likened to Parvathi’s face, who destroyed Daksha’s sacrifice and who has the bull inscription on his banner.  Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                         '<p/>Shivaaya Gaurii-Vadana-Abja-Vrnda-Suuryaaya<br/>' +
                          'Dakssa-Adhvara-Naashakaaya |<br/>' +
                          'Shree-Neelakantaaya Vrsha-Dhvajaaya<br/>' +
                          'Tasmai Shikaaraaya Namah Shivaaya ||3||',
                      author: 'Shankaracharya',
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'March 4 2016',
                      postDate: new Date('March 4 2016'),
                      title: 'Namah Shivaya – the fourth letter ‘Va’',
                      seriesId: 03012016,
                      seq: 4,
                      content: '<p/>My salutations to Lord Shiva, who is in the form the syllable ‘Va’, who is adored by great sages like Vashishta, Agstya, Gutama as well as other gods and who has the sun, the moon and the fire as his three eyes. Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                         'Vashissta-Kumbhodbhava-Gautama-Aarya<br/>' +
  'Muuni-Indra-Deva-Aarcita-Shekharaaya |<br/>' +
  'Candra-Aarka-Vaishvaanara-Locanaaya<br/>' +
  'Tasmai Vakaaraaya Namah Shivaaya ||4||',
                      author: 'Shankaracharya',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'March 5 2016',
                      postDate: new Date('March 5 2016'),
                      title: 'Namah Shivaya – the fifth letter ‘Ya’',
                      seriesId: 03012016,
                      seq: 5,
                      content: '<p/>My salutations to Lord Shiva, who is in the form the syllable ‘Ya’, who appeared once as a yaksha (celestial being), who has a braid of matted locks, who holds the pinaka bow in his arm and who is the most ancient, the shining Lord, whose clothes are the four directions (He invades the space). Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                         'Yajnya-SvaruupaayaJattaa-Dharaaya<br/>' +
  'Pinaaka-HastaayaSanaatanaaya |<br/>' +
  'DivyaayaDevaaya Dig-Ambaraaya<br/>' +
  'TasmaiYakaaraayaNamahShivaaya ||5||<p/>' +
  'He, who recites this meritorious five syllabled hymn in the shrine of Lord Shiva, gains the abode of Shiva and rejoices with the Lord.<p/>' +
  'Panchaakssaram-Idam Punnyam Yah Pateth-Shiva-Sannidhau |<br/>' +
  'Shivalokam-Aavaapnoti Shivena Saha Modate ||6||',
                      author: 'Shankaracharya',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'Feb 29 2016',
                      postDate: new Date('Feb 29 2016'),
                      title: 'Silence is Golden',
                      seriesId: '-1',
                      seq: -1,
                      content: 'When the mind is still, then the truth gets a chance to be heard in the purity of silence',
                      author: 'Sri Aurobindo',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'Feb 28 2016',
                      postDate: new Date('Feb 28 2016'),
                      title: 'The best teacher',
                      seriesId: '-1',
                      seq: -1,
                      content: 'This world is the best teacher. There is a lesson in everything. There is a lesson in each experience. Learn it and become wise. Every failure is a stepping stone to success. Every difficulty or disappointment is a trail of your faith. Every unpleasant incident or temptation is a test of your inner strength. Therefore, do not despair. Match forward!',
                      author: 'Swami Sivananda',
                      img: root + '/images/dwarkamai_1.jpg'
                  }, {
                      posted: 'Feb 27 2016',
                      postDate: new Date('Feb 27 2016'),
                      title: 'What makes us engage in service?',
                      seriesId: '-1',
                      seq: -1,
                      content: 'Just as a flower gives out its fragrance to whosoever approaches it or uses it, so too, love from our heart radiates towards everybody and manifests as spontaneous service.',
                      author: 'Swami Ramdas',
                      img: root + '/images/sai_1221_1.jpg'
                  }],
                  [{
                      posted: 'Feb 26 2016',
                      postDate: new Date('Feb 26 2016'),
                      title: 'Sing His name',
                      seriesId: '-1',
                      seq: -1,
                      content: 'Sing with Bhakti the sacred ‘name’ of the Lord and the mountain of your sins will vanish, just as a mountain of cotton will burn to ashes and disappear in no time if a spark of fire falls on it.',
                      author: 'Sayings of Sri Ramakrishna, p99',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'Feb 25 2016',
                      postDate: new Date('Feb 25 2016'),
                      title: 'How to repeat God’s name? - 1 ',
                      seriesId: '-1',
                      seq: -1,
                      content: '----- No doubt the holy ‘name’ is very effective, but is it sufficient without Love? The soul must hunger for God. What will it avail if I repeat His ‘name’ while I allow my mind to be attached to ‘woman and gold’? No doubt, a man is purged of his sins by once uttering His name but the next moment, he takes to various sinful ways of living<p/> ' +
                          'Sayings of Sri Ramakrishna, p99<p/>' +
                          '<br/> ---- Prema Se Bolo Ek Baar Sai Ram<p/>Jai Jai Ram Sai Ram<p/>Bolo Ram Sai Ram<p/>Prema Se Bolo Ek Baar Sai Ram<p/>Hey Madhuta Manohara Ram<p/>Hey Mohana Mooratha Ram<p/>Hey Karuna Sindhu Ram<p/>Hey Raghupathi Raghava Ram<p/>Hey Patheetha Pavana Ram<p/>Jai Jai Ram Sai Ram<p/>Bolo Ram Sai Ram (Prema Se..)<p/>' +
                          '<br/> ----- Can anyone compare the grace of Lord Shiva with any other God?<p/>You have to say only once with love, “Shiva, Chidambaram”<p/>To get liberation, you have to do no other Punya!<p/>- ‘Sabha pathiku veru daivam samanam aaguma?’ –a famous song by Gopalakrishna Bharati',
                      author: '(various)',
                      img: root + '/images/dwarkamai_1.jpg'
                  },
                  {
                      posted: 'Feb 24 2016',
                      postDate: new Date('Feb 24 2016'),
                      title: 'The power of God’s name-3',
                      seriesId: 'The Power of Gods Name',
                      seq: 3,
                      content: 'A man, who voluntarily goes to a river, gets the benefit of the bath; so does he, who has been pushed into the river by another, or who, when sleeping soundly, has a bucket of river water thrown upon him. So too, knowingly or unknowingly, consciously or unconsciously, in whatever state of mind a man utters God’s name, he acquires the merit of such utterance.',
                      author: 'Sayings of Sri Ramakrishna, p96. (slightly edited)',
                      img: root + '/images/sai_unplugged.jpg'
                  }, {
                      posted: 'Feb 23 2016',
                      postDate: new Date('Feb 23 2016'),
                      title: 'The power of God’s name-2',
                      seriesId: 'The Power of Gods Name',
                      seq: 2,
                      content: 'People do not know what the ‘name’ of God can do. Those who repeat it constantly alone know its power. It can purify our mind completely. The ‘name’ can take us to the summit of spiritual experience.',
                      author: 'Swami Ramdas',
                      img: root + '/images/dwarkamai_1.jpg'
                  },
                  {
                      posted: 'Feb 22 2016',
                      postDate: new Date('Feb 22 2016'),
                      title: 'The power of God’s name-1',
                      seriesId: 'The Power of Gods Name',
                      seq: 1,
                      content: 'A king guilty of the heinous sin of killing a Brahmana went to the hermitage of a Rishi to learn what penance he must perform in order to be purified. The Rishi was absent but his son was in the hermitage. Hearing the report of the King, he said, “Repeat the name ‘Rama’ three times and your sin will be expiated.” When the Rishi came back and heard of the remedy prescribed by his son, he remarked angrily, “Sins committed in myriads of births are purged immediately by uttering the ‘name’ of the Lord just once. How weak must be your faith! O fool! You have ordered the holy name to be repeated thrice? For this weakness in your faith, you shall become an outcaste.” And the son became Guha, a boatman of the Ramayana.',
                      author: 'Sayings of Sri Ramakrishna, p136',
                      img: root + '/images/sai_1221_1.jpg'
                  }, {
                      posted: 'Feb 21 2016',
                      postDate: new Date('Feb 21 2016'),
                      title: 'What is Japa?',
                      seriesId: '-1',
                      seq: -1,
                      content: 'Japa means repeating the name of the Lord, silently, by sitting in a quiet place. If one continues the repetition with concentration and devotion, one is sure to be blessed with Divine Vision and ultimately God-realization. Suppose a chest of treasures is immersed in the Ganges with one end attached to a chain, which is fixed on the bank. Following the chain, link by link, you can dive into the water and gradually trace your way to the treasure chest. In the same manner, if you become absorbed in the repetition of the His holy name, you will eventually realize Him.',
                      author: 'Sayings of Sri Ramakrishna, p359. (slightly edited)',
                      img: root + '/images/dwarkamai_1.jpg'
                  },
                  {
                      posted: 'Feb 20 2016',
                      postDate: new Date('Feb 20 2016'),
                      title: 'What is Karma Yoga?',
                      seriesId: '-1',
                      seq: -1,
                      content: 'Karma Yoga makes us understand and admit that this world is a world of five minutes and it is something that we have to pass through, and that freedom is not here but is only to be found beyond. To find the way out of bondages of the world, we have to go through it slowly and surely. There may be a few exceptional persons who can stand aside and give up the world, as a snake casts off its skin and stands aside and looks at it. There is no doubt, these are exceptional beings. But the rest of us have to go slowly through the world of work (Karma). Karma Yoga shows the process, the secret and the method of doing it to the best of our advantage.',
                      author: 'Swami Vivekananda in Complete Works, V(1), pp 99-100.',
                      img: root + '/images/sai_unplugged.jpg'
                  }],
                   [{
                       posted: 'Feb 19 2016',
                       postDate: new Date('Feb 19 2016'),
                       title: 'Offer gratitude to God',
                       seriesId: '-1',
                       seq: -1,
                       content: 'Gratitude is a great virtue. When the power of the gratitude is realized, it can give benefits much more than anyone can imagine. If out of narrow mindedness, people become ungrateful, they will suffer immensely. If such is the case inpurely human relationships, how much more rewarding it will be, if gratitude is offered to God? ',
                       author: 'Sri Sathya Sai Baba, 1992',
                       img: root + '/images/dwarkamai_1.jpg'
                   }, {
                       posted: 'Feb 17 2016',
                       postDate: new Date('Feb 17 2016'),
                       title: 'Where are you searching for him?',
                       seriesId: '-1',
                       seq: -1,
                       content: 'As fragrance abides in the flower, as the reflection is within the mirror, so does the Lord resides with in you. Why are you searching from Him elsewhere?',
                       author: 'Guru Nanak',
                       img: root + '/images/sai_1221_1.jpg'
                   }, {
                       posted: 'Feb 16 2016',
                       postDate: new Date('Feb 16 2016'),
                       title: 'Beauty (or Fault) is in the eye of the beholder',
                       seriesId: '-1',
                       seq: -1,
                       content: 'The waxing and waning of the moon has nothing to do with the moon. When the moon waxes, we falsely think that the moon is growing; and when it wanes, we think that the moon is shrinking. Factually, the moon as it is, always the same. It solely depends on the observer on the earth who is looking at the moon. So too, the faults that you see in others are mainly due to you',
                       author: 'Balarama’s advice to Rukmini in Srimad Bhagavatam',
                       img: root + '/images/dwarkamai_1.jpg'
                   },
                   {
                       posted: 'Feb 13 2016',
                       postDate: new Date('Feb 13 2016'),
                       seriesId: 02132016,
                       seq: 1,
                       title: 'Love Story of Rukmini and Krishna – Part 1',
                       content: '<h4>The Love Story of Rukmini and Krishna</h4><p><h4>Background and characters</h4></p>' +
  '<p>Krishna was the eighth son of Devaki and Vasudeva. The fetus of the seventh son Balarama was transferred to the womb of Rohini and he was brought up in Gokul. Devaki’s father was Devaka and his elder brother Ugrasena was ruling over Mathura. Ugrasena had nine sons and Kamsa was the eldest son. Kamsa had no sisters of his own and so he loved Devaki as his dearest self. Kamsa imprisoned his father Ugrasena and installed himself as the King of Mathura.</p><p>Jarasandha ruled over Magadha. He gave his two daughters Asti and Prapti in marriage to Kamsa. Krishna killed Kamsa in a fight and restored the crown to Ugrasena. Krishna refused to take the crown, handed over Mathura to Ugrasena and went back to Dwaraka. Jarasandha hated Krishna because both his daughters were widowed by Krishna.</p><p>Jarasandha’s friend Damaghosha was a king of Chedi. He was very cruel and a stubborn King. (Dama means curbing down. Ghosha means famous. So, he was famous for curbing down and controlling his citizens.) He had a son Sishupala who will be the crown prince of Chedi. Damaghosha loved his son so much that he would many perform many rituals to invoke good fortune on him.</p>' +
  '<h4>Rukmi brings the news</h4><p>Bheeshmaka was the King of Vidharba. He had five sons and only one daughter. The first son was Rukmi and the youngest daughter was Rukmini. She was very beautiful and was at the right age to be married. Narada used to visit Bhishmaka’s palace often and from their conversations she had heard many good things about Krishna. Slowly, Rukmini started thinking of Krishna and began to dote on Krishna.</p><p>Rukmini’s brother Rukmi was always in bad company and he was very friendly with Kamsa and  Jarasandha. Rukmi brought the news to Bheeshmaka that the cowherd boy Krishna had slain Kamsa.<br/>Rukmini said, “He is not a cowherd boy. He is a noble Yadava.”<br/>Rukmi snapped immediately, “Rukmini, he has killed my friend and you call him noble?”<br/>“Don’t forget! Kamsa was cruel. He imprisoned his own father and usurped the throne”, shouted Rukmini.<br/>Bheeshmaka interrupted, “I assume Krishna will now become the King of Mathura.”<br/>Rukmi said, “No. Krishna refused the crown and Ugrasena was re-instated.”<br/>Rukmini cut him short, “Don’t you see! How noble Krishna is?”<br/>“How did Jarasandha react?” asked Bheeshmaka.<br/>Rukmi replied, “He is furious. He vows to take revenge. He has sent word for me. I must go and see him.”</p>' +
  '<h4>Rukmini longs for Krishna</h4><p>All this news and incidents made Rukmini’s love for Krishna even stronger. Bheeshmaka and his wife also felt that Krishna was the most suitable groom for Rukmini.<br/>Meanwhile, Jarasandha with Rukmi and his allies made several attempts to kill Krishna but in vain. After the eighteenth attempt, they decided to bide their time and go back to their capitals.<br/>In Dwaraka, Balarama broke the news: “Krishna, we have come to know that Jarasandha has decided to lie low for a while. Now, you will have some time to think of the beautiful princess of Vidharba!”<br/>“Balarama! Somehow, I have also developed love for Rukmini. I am thinking of her all the time! My mind is also set on marrying her. But her brother Rukmi is a staunch ally of Jarasandha.”<br/>At the same time, in Vidharba, Rukmini too was lost in the dreams of Krishna hugging her (when the Lord thinks of His devotee, the devotee also thinks of Him!). She thought, “Even with Rukmi and his allies, Jarasandha could not vanquish Krishna. You are great, Krishna! You and only You shall be my Lord!”<p><h4>To be continued….</h4>',
                       author: 'anon',
                       img: root + '/images/sai_unplugged.jpg'
                   },

                   {
                       posted: 'Feb 14 2016',
                       postDate: new Date('Feb 14 2016'),
                       seriesId: 02132016,
                       seq: 2,
                       title: 'Love Story of Rukmini and Krishna – Part 2',
                       content: '<h4>Bheeshmaka’s proposal refused</h4><p>When Rukmi returned from the war, Bheeshmaka called him and said,“Rukmi, your mother and I have decided to give Rukmini in marriage to Krishna.”Rukmi quickly responded, “How could you do it father? Krishna has killed Jarasanda’s son-in-law, Kamsa. We cannot afford to displease this mighty emperor.”Bheeshmaka’s face dropped: “But, we cannot think of a better husband for Rukmini.”Rukmi said, “My friend Sishupala, the crown prince of Chedi is enamored of Rukmini.  He will be the best person to marry her.”Bheeshmaka was not at all happy about it but he had to yield to his eldest son’s decisions. Not only that, he was getting old and he could not think of ways to bring Krishna and Rukmini together. He said, “All right Rukmi, do as you will!”Rukmi said, “Then, I shall send a proposal to the King of Chedi and invite Sishupala to come and marry Rukmini.”Rukmini who was walking in the garden, overheard their conversation and was deeply upset. She thought, “How can my brother force me to marry someone whom I don’t like?” Meanwhile, Rukmi started making arrangements for Rukmini’s marriage with Sishupala.</p>' +
  '<h4>Rukmni sends a love letter</h4><p>Suddenly, a thought occurred to Rukmini.“Why not I approach Krishna? After all, my parents are for it.”She went into the palace to her room and sent word for Sunanda, a brahmin whom she trusted and who was also kind to her.Sunanda walked in and said surprisingly, “Why do you look so pale dear? What is the matter?”Rukmini told him about the conversation she had overheard and asked him, “Is it wrong to send a secret message to Krishna?”Sunanda replied, “No dear! It would be very wrong to marry Sishupala if your heart is set on another. Moreover, your parents have approved Krishna and their hearts are set on Him.”Rukmini asked him, “With whom can I entrust such a sacred message?”“Don’t worry dear one! I shall carry the message for you.”Rukmini took a banana leaf and wrote a message on it using her nails and gave it to Sunanda saying, “Be sure to tell Krishna that my kith and kin should not be killed on my account.” Sunanda assured that he would do so.</p>' +
  '<h4>Krishna reads the letter</h4><p>With great difficulty, Sunanda reached Dwaraka and met Krishna. Krishna welcomed him, seated him and said, “O venerable one, please tell me why have you come this far?”Sunanda said, “Dear Lord, I have come with a message from Rukmini, the princess of Vidarbha!”Sunanda described Rukmini’s dilemma and gave the message to Krishna. Krishna lovingly received the banana leaf from the hands of Sunanda and started reading the message:“Lord, I have chosen You as my husband. Please come to Vidarbha, vanquish the armies of Jarasandha and Sishupla and take me with you. On the day of the marriage, I will be first taken to the Durga temple for worship. It will be a good place for you to kidnap me from there.”<br/>After reading the message, Krishna looked at Sunanda."If you do not come and take her away, she has decided to give up her life!”, said Sunanda.<br/>Krishna replied, “I know… I know. Little does she know that I too have set my heart on winning her! But Rukmi will not give her to me.”<br/>Sunanda’s face fell, “That means…. you will not take her….”<br/>“No. No. Now that she has revealed her heart to me, I shall make her mine. I shall vanquish anyone who comes in my way”, said Krishna.<br/>At this point, Sunanda interrupted, “The little girl wants to make sure that there is no blood-shed on her account.” Krishna nodded His head in approval, gave gifts to Sunanda and sent him home.</p>' +
  '<h4>Krishna heads to Vidarbha/Jarasandha plans</h4><p>Krishna called his charioteer Daruka and asked him to get ready. Krishna told him to inform Balarama that he was proceeding to Vidarbha. Meanwhile, Rukmi’s formal proposal and invitation reached Sishupala. Sishupala was very jubilant because there was no Swayamvara (bride choosing the husband). All he has to do was, go to Vidarbha marry Rukmini and bring her home. It was that easy.. but Jarasandha was not confident. He knew that the vile cowherd could cause some trouble if he comes to know of this news. Jarasandha sent for all his vassals and allies to be ready in Vidarbha to confront Krishna, if he comes to take away the bride.  Balarama became aware of this news and marched towards Vidarbha with his armies, elephants, horses and chariots.</p>'
  + '<h4>Rukmini’s anxiety builds up</h4><p>At Vidarbha, Rukmini’s anxiety was building up every moment. She thought, “Has Krishna felt disgusted with my message that I have no shame in asking him to be my husband? Then, why has Sunanda not come back?” As she started looking at the window for the hundredth time, she saw Sunanda entering the palace. She quickly ran to the door to meet Sunanda. Sunanda briefed her, “Krishna has come dear! Everything is going according to the plan. Balarama too has come with his forces” and left the palace in a hurry.</p>' +
  '<h4>Rukmini heads to Durga’s shrine</h4><p>“Rukmini, your chariot has arrived. Are you ready?”, shouted one of the maids. Rukmini was dressed nicely and she got into the chariot. She was taken to the temple courtyard where she stepped down. Many Kings had assembled there. From there, she looked for Krishna and thought, “I don’t see Krishna among them. They say that he is dark blue, wears a yellow robe and sports a peacock feather in his crown.” She entered the temple, washed the feet of Goddess Durga, and placed flowers at her feet. Overcome by anxiety and emotion, she prayed, “O Goddess Durga, please let Krishna and only Krishna win and marry me. O Durga, please do not disappoint me.” As she walked towards the gate, her eyes scanned the assembly of Kings again,  looking for Krishna. She murmured, “Will Krishna ever come and rescue me?”</p>'
  + '<h4>To be continued</h4>',
                       author: 'anon',
                       img: root + '/images/dwarkamai_1.jpg'
                   }, {
                       posted: 'Feb 15 2016',
                       postDate: new Date('Feb 15 2016'),
                       seriesId: 02132016,
                       seq: 3,
                       title: 'Love Story of Rukmini and Krishna – Part 3',
                       content: '<h4>Krishna suddenly appeared</h4>' + '<p>Suddenly, from behind, a hand came and held her right hand and the other hand held her left shoulder. She heard, “Rukmini! It is me! Your Krishna!” In a moment, she was placed in the chariot next to Him and Krishna’s chariot sped away blowing dust into the eyes of the confused Kings. Jarasandha ordered his army to pursue Krishna. Balarama immediately came behind Krishna’s chariot and assured Krishna that he will deal with them.</p>' + '<h4>Rukmi follows Krishna</h4>' +
                           '<p>While Balarama was dealing with Jarasandha and his army, Rukmi and Shishupala charged ahead towards Krishna’s chariot. Balarama engaged in a fierce fight with Shishupala. Shishupala slowed down lost Krishna. Meanwhile, Rukmi had almost caught up with Krishna. Rukmi shot an arrow at Krishna which only hit his armor. Krishna then killed Rukmi’s horses with his arrows and then shattered his chariot. Mad with rage, Rukmi took his sword and rushed towards Krishna. Krishna picked up his sword and was ready to fight. Immediately, Rukmini fell at Krishna’s feet and cried, “O Dear Lord, please spare my brother. Please do not kill him!”</p>' +
                           '<h4>Rukmi humiliated</h4>' +
                           '<p>Krishna said, “Arise Rukmini! For your sake, Rukmi shall live.” Krishna went up to Rukmi and tied him with his cummerbund. Krishna then with his sword, shaved half of Rukmi’s mustache and shaved half of his head. Just then Balarama arrived and he talked to Rukmini,“Please do not take offence, dear sister-in-law. Your brother has reaped the fruits of his own actions.” Humiliated and insulted, Rukmi walked away saying, “I can’t return to the capital now. It is a shame.”</p>' +
                           '<h4>Rukmini weds Krishna in Dwaraka</h4>' +
                           '<p>Krishna said, “Come into the chariot Rukmini. We must hurry to Dwaraka and have our wedding solemnized by rituals.” After a few days, they were married according to Vedic rituals. After this marriage, Krishna became the King of Yadus at Dwaraka. The inhabitants of Dwaraka City were so pleased that they dressed themselves with nicest garments and ornaments and went to present gifts, according to their means, to the newly married couple. All the houses of Dwaraka were decorated with flags, festoons and flowers.  The whole city became fragrant by burning of fine incense. At night, there was illumination from thousands of lamps, which decorated every building. The Goddess of fortune Rukmini, was finally united with the Lord Krishna and all the people of Dwaraka felt extremely jubilant.',

                       author: 'anon',
                       img: root + '/images/sai_unplugged.jpg'
                   }],
                  [{
                      posted: 'Feb 12 2016',
                      postDate: new Date('Feb 12 2016'),
                      title: 'I would lie like dust!',
                      seriesId: '-1',
                      seq: -1,
                      content: 'To become a holy man, esteemed by all,<br/>' +
                           'Is like climbing a palm tree tall;<br/>' +
                           'Succeed, you enjoy the delicious juice;<br/>' +
                           'Fall, you are heap of broken bones!<p/>' +
                           'He, who is above the greed for gold,<br/>' +
                           'And who is free from woman’s hold,<br/>' +
                           'Is truly holy indeed!<br/>' +
                           'On such a holy man’s feet<br/>' +
                           'I would lie like dust, says Kabir.',
                      author: 'Sant Kabir',
                      img: root + '/images/dwarkamai_1.jpg'
                  },
              {
                  posted: 'Feb 11 2016',
                  postDate: new Date('Feb 11 2016'),
                  title: 'The dinner party',
                  seriesId: '-1',
                  seq: -1,
                  content: 'You love your friends so much that you invite them for dinner at your home. You talk to them, and entertain them. After the dessert and coffee is served, you expect them to slowly leave. What will happen if everyone wants to stay back? (everyone laughs) For those who are still chatting and not thinking of leaving, you give a hint saying, “Shall I offer some more coffee?” or “Can you help us in the kitchen to put things away?”(big laughter)<p/>' +
                          'What has happened? A few hours ago, you loved them so much that you poured your hearts out to them. Now you want them to leave. Why?.. because, you want to spend time with yourself and your family. So too, be engaged in the worldly things only to the extent necessary for your survival. Spend the rest of the time in contemplating on the glories of the Lord and engaging in Sadhana (spiritual practice).',
                  author: 'Swami T',
                  img: root + '/images/sai_unplugged.jpg'
              },
               {
                   posted: 'Feb 10 2016',
                   postDate: new Date('Feb 10 2016'),
                   title: 'Mind is everything',
                   seriesId: '-1',
                   seq: -1,
                   content: 'The mind is everything. It is in mind alone that one becomes pure and impure.<p/>' +
                               'A man, first of all, makes his own mind impure and then alone he sees other man’s faults. I tell you one thing. If you want peace of mind, do not find fault with others. Rather see your own faults. -Sri Sarada Devi (wife of Sri Ramakrishna ',
                   author: '-Sri Sarada Devi (wife of Sri Ramakrishna Paramahamsa)',
                   img: root + '/images/dwarkamai_1.jpg'
               },
               {
                   posted: 'Feb 09 2016',
                   postDate: new Date('Feb 09 2016'),
                   title: 'Always be active',
                   seriesId: '-1',
                   seq: -1,
                   content: 'One should always be active. One should be never without work.<p/>' +
                       'For, when one is idle, all sorts of bad thoughts crop up in one’s mind.',
                   author: '-Sri Ramakrishna Paramahamsa',
                   img: root + '/images/sai_unplugged.jpg'
               }], [{
                   posted: 'Jan 31 2016',
                   postDate: new Date('Jan 31 2016'),
                   title: ' Burning Karma',
                   seriesId: '-1',
                   seq: -1,
                   content: 'Just as fire fanned by powerful winds destroys heaps of firewood in no time, so also, the fire of meditation destroys heaps of Karma in a moment.',
                   author: 'Lord Mahavir',
                   img: root + '/images/dwarkamai_1.jpg'
               },
               {
                   posted: 'Jan 30 2016',
                   postDate: new Date('Feb 17 2016'),
                   title: 'The most peaceful person',
                   seriesId: '-1',
                   seq: -1,
                   content: 'He who recognizes the existence of suffering, its cause, its cessation and path leading to its cessation has fathomed the Four Noble Truths. He will walk in the right path. Right views will be the torch to light his way. Right aims will be his guide. Right words will be his dwelling place on the road. His gait will be straight, for it is right behavior. His refreshments will be the right way of earning his livelihood. Right efforts will be his steps; right thoughts his breath; and peace will follow in his footprints',
                   author: 'Lord Buddha',
                   img: root + '/images/sai_1221_1.jpg'
               }, {
                   posted: 'Jan 29 2016',
                   postDate: new Date('Jan 29 2016'),
                   title: 'Why would somebody name me ‘Dust’?',
                   content: 'We all look upon dust with contempt as something that we should avoid or not to come in contact with. Renu is a very common name for girls in northern part of India. Several months ago, one of the volunteers at the Shirdi Temple told me that Renu means ‘dust’. Please read this wonderful story……<p/>One day, Krishna by his maya, fell into a dreaded disease which no doctor could cure.  Narada came in the disguise of a physician and prescribed that if somebody can give his or her feet’s dust washed and give that water for Krishna to drink, he will be cured. Otherwise, he will die. When Krishna asked Rukmini and Sathyabhama for the ‘dust water’ they started cried saying that it will the highest sin because Krishna is their husband, as well as God.<p/> When Krishna approached Radha and the other Gopis, they were ready to offer their ‘dust water’. When Krishna warned them that they will be committing the greatest sin, they simply smiled and said that they would rather go to hell than lose their dear Krishna. The Lord craves for the ‘dust’ from the feet of the devotees because it is very auspicious. Then, what to speak of the Bhakta? Don’t you feel that you are blessed to have such a nice name, like Renu?',
                   author: 'Anon',
                   img: root + '/images/dwarkamai_1.jpg'
               }],
               [{
                   posted: 'Jun 4 2015',
                   postDate: new Date('Jun 4 2015'),
                   title: 'The Wonderful Story of Rhea - Part 1',
                   seriesId: 06042015,
                   seq: 1,
                   content: '<h3>The wonderful story of Rhea Chandnani</h3>' +
'<p>A gray Porche 911 raced into Stevenson Blvd in Fremont and made a sharp right turn into Liberty Street. All the kids dropped their toys and bats, left their tricycles and ran to their homes for safety. A dust cloud followed the car whenever the engine revved up, with random crunching of coke cans and empty water bottles on the street. It appeared as though the car was on a re-entry path from space, not going to stop anywhere, when it suddenly made a sharp 90 degree turn into a drive-way but came to screeching stop with just one inch to spare the garage door. The care rocked back and forth from this sudden braking. All the moms with their kids stood on their drive ways and watched this Nascar show and sighed, “The speed queen has arrived.”</p><br>' +
'<p>   A few seconds later, the driver’s side door opened and out came a slim leg with high heels. Next, a very fashionable and modern figure in a three piece suit emerged, carrying a laptop, a smart phone and a leather bag full of office documents. The woman, at last, ducked her head and pulled her hand bag from the passenger’s seat and slammed the door shut. The clock, unable to bear the shock, moved forward by a minute and said 6:49. Then there was the ‘tick tack’ of the high-heels for a while, walking on the cement. It stopped when her hand opened the front door which always remained unlocked.</p><br>' +
'<p> The door was shut behind. Carefully holding all the things in one hand, she removed her high-heels and flung them to one corner of the house. As she was walking towards her room, she could hear the coughing of an old man from the other room. Dropping everything on the table, she went into the kitchen, took out something from the fridge and put it in the microwave. The box said ‘Lean Cuisine’.  After the microwave beeped, she took the food to her room with a drink. When she was about to put the food in the mouth, there was a loud shout from the other room, “Beti, Did you pray to Baba?” Rhea retorts from her room, “Dad, you say work is worship. I have been worshipping my work all day. Allow me to eat in peace.” Rhea flipped through all the channels on the TV and found that there was nothing worth watching. Quickly gulping the food, she started going through all the office papers she had brought home.</p><br>' +
'<p>     Rhea has a B.S in Mechanical Engineering from UCLA and a MBA from UCLA Anderson School of Management. She worked as a Senior Director of Corporate Loans at Bank of America in San Francisco for many years. She was tired of commuting by BART. She wanted to work some place where she could drive her Porche to work and show off. For the past three years, she has been with C-Gate in Fremont as VP of Finance. She is bright, sharp and clever and she can out-smart you in any conversation. Once, for the Diwali function, at her father’s persistence, she wore a saree. The blouse she wore had a very low back. One of her friends came to her and said, “Rhea, you are a very forward and modern girl exposing so much of your back.” Rhea snapped, “You say, I am forward! I am very backward. I don’t show my front. I insult men by showing my back.”</p><br>' +
'<p>     Tomorrow is her day. She has made a deal to buy Solar-Indra and their world-class manufacturing facility in Fremont that overlooks 880. She has to be at work by 7:00AM the next day, to be in the conference call with JP Morgan Chase, Citi Bank and Merrill Lynch to close the deal. All the big shots from both C-Gate and Solar-Indra will be there. This will be a major step for Rhea. It will help her realize her life-long ambition to become a Senior VP or CFO of C-Gate.</p><br>' +
'<p>       The alarm went off at 5:30AM. Hitting the Snooze button Rhea slept for some more time. She got dressed very nicely with fine clothes and showed a ‘little’ to attract the men of power. Sipping a cup of tea, she put all the papers back into the leather bag and got ready to load it into the car. It was a Thursday in winter and it was already late. As she got out of her room, her dad was walking in the hall way chanting ‘Sai Ram, Sai Ram’. He looked at Rhea and said,</p><br>' +
'<p>“Why do you dress like a street girl?”</p><br>' +
'<p> “Yes, I am a street girl. Wall Street girl! You don’t know anything about management.”</p><br>' +
'<p>“Your mom couldn’t manage you. That is why she passed away when you were a teen-ager.”</p><br>' +
'<p>Rhea had no time to respond. She had to be out of the house soon.</p><br>' +
'<p>She was racing to get to Kato Road. There was a dense fog and the visibility was just a few feet. The traffic on Dixon Landing was bad due to the BART construction and it had backed up all the way to 880. When she was at the signal on Dixon Landing Road at California Circle, she thought she could make a right at California Circle to bypass the through traffic on Dixon Landing, make it through Milmont Drive and get to Kato Road. This could save a few minutes. So, she quickly made a right turn into California Circle and was speeding as there was no traffic.</p><br>' +
'<p>                 As she was driving through, she came across a bridge. Right at the bridge, it appeared as though a brown leaf was being blown away by the wind from left to right. She sped through it and suddenly, there was a ‘thud’!    -to be continued</p><br>',
                   author: 'Narration',
                   img: root + '/images/sai_1221_1.jpg'
               }, {
                   posted: 'Jun 5 2015',
                   postDate: new Date('Jun 5 2015'),
                   seriesId: 06042015,
                   seq: 2,
                   title: 'The Wonderful Story of Rhea - Part 2',
                   content: '<p>“Oh my God, What did I do?”</p><br>' +
'<p>Rhea could see a man dressed in white clothes being hit by the car. He was limping and making his way to the walk way on the right.</p><br>' +
'<p>“Shoot! Who is this idiot? Oh my God, my meeting is finished!”</p><br>' +
'<p>She stopped the car right there, turned on the emergency blinkers and stepped out to help him.</p><br>' +
'<p>“Are you OK? Were you hurt badly?</p><br>' +
'<p>“It is OK. A slight bruise on my right knee and a few drops of blood.”</p><br>' +
'<p>“Shall I take you to the hospital?”</p><br/><p>“No! No! I don’t want to miss my Arati.”</p><br><p>Rhea’s mind went reeling! “It is not even 7:00AM. He is dating Arati at this hour! I thought I was modern. What has the world come to?”</p></br><p>“OK, I will drop where your Arati is waiting.”</p></br><p>“No, Thank you. I will walk. All this is….(he was choked with emotions) His doing!”</p></br>' +
'<p>Rhea thought that he didn’t feel safe in her car anymore. As he was walking by, she saw that he was wearing white pants and a white shirt. He was carrying a white back pack, he had his white shoes on his left hand and he was walking bare footed! She couldn’t help notice that in the back pack, something was stuffed in the last minute and it was hanging out of the partly zipped back pocket. The elastic band had a name ‘Jockey’. Rhea couldn’t control herself. She murmured, “Oh My God, The world has changed so much! He is dating Arati and he is carrying extra under garments!” She quickly got back into her car and drove off to work. She thanked her good luck that this didn’t turn into a law suit.</p><br>' +
'<p>Everything went well with the video conference and the deal was done. Everyone congratulated Rhea on how she had meticulously orchestrated the whole deal. Slowly, everyone left the conference room except for a few. The CEO of C-Gate, Scott Brown patted Rhea on her right shoulder and pulled her to one side and said, “Meet Mr. Hakim. He is the Senior VP of Operations at Solar-Indra.”</p><br>' +
'<p>Hakim stretched his hand, “I am Hakimrai Jaichand” and shook Rhea’s hand. Rhea replied, “Chandnani, Rhea Chandnani. Nice to meet you!” (Rhea always introduced herself in James Bond style, “Bond, James Bond”). Brown continued, “Hakim will be with us for a few more months before he retires. I want you to spend all the time with him to understand how the factory operates, the machinery, tools, facilities, maintenance, safety, plant drawings etc., so that we can convert it for our operations. Your mechanical engineering skills will become handy now.” Hakim and Rhea agreed that starting next Monday, they would meet at the factory to go over all the details.</p><br>' +
'<p> The next week, Rhea showed up at the plant at 8:00. It was a huge building which was totally empty of any workers. The company had gone belly-up. All the machines were turned off and it was very quiet. There were only three people….Rhea, Hakim and Steve, a senior technician to help them with any technical issues related to the factory. There was a big office on the second floor with complete glass windows which overlooked the factory floor. One could tell from there what was happening in the factory floor at any given moment. Hakim and Rhea were the lone occupants of this huge office space and Steve was always running errands for them and also to attend to the needs of the building.</p><br>' +
'<p>Rhea being a gregarious, fashionable and always out-going person, this deafening silence bothered her. But, she has to do it if she wants to climb the corporate ladder. Every day, she would come in at 8:00 and notice that Hakim was already there having brewed the first pot of coffee. She would leave around 5:00 and Hakim would still continue to work. What a dedicated person Hakim must be!</p><br>' +
'<p> Slowly, they go to know each other. Hakim began to like her company in the office. Rhea was tall 5’ 8”, slim, well dressed with brimming youth and pleasant manners. Hakim came to know that Rhea was not a coffee person. She liked Chai Latte. Sometimes, Hakim would take Rhea to Starbucks on Dixon Landing near Chevron and buy her a Chai Latte and chat on some personal matters. They would go out to lunch together and chat about their experiences in their jobs as well as previous jobs. -to be continued</p><br>'
,
                   author: 'Narration',
                   img: root + '/images/dwarkamai_1.jpg'
               }, {
                   posted: 'Jun 5 2015',
                   postDate: new Date('Jun 5 2015'),
                   seriesId: 06042015,
                   seq: 3,
                   title: 'The Wonderful Story of Rhea - Part 3',
                   content: '<p>One day, Rhea left home early around 6:30AM so that she could be there before Hakim. Once again, due to the heavy traffic on Dixon Landing, she took the California Circle to bypass the traffic. As she was driving past BAPS Swami Narayan Mandir on the left, she saw a man, dressed totally in white entering a building on the right. He looked like the same man she had an accident with some time ago. If he was the same person, out of curiosity, she wanted to find out whether he was doing well. As she turned, she noticed a sign ‘SHIRDI SAI PARIVAAR’. She quickly got out of the car and entered the building so that she could meet him before he disappeared into the building. There he was, coming out of the ‘Shoe Room’ bare footed again. Rhea stopped him at the Shoe Room and asked him:</p><br>' +
'<p>“Do you remember me?”</p></br><p>“Yes. I do..Oh ..that accident!”</p></br><p>“Are you alright after the accident?”</p></br><p>“Yes, I am fine. He takes care of me all the time!” and he pointed towards the idol of Baba in the Main Hall. Rhea looked at the idol of Baba and there were no emotions in her heart. She looked at her watch to see when she can break out of that conversation. The man continued:</p></br>' +
'<p>“You are in time for Kakad Arati. Would you like to join?”</p></br><p>“Yes!” Rhea wondered as to what made her say ‘Yes’. She continued:</p></br><p>“What is your name?”</p></br><p>“I am Sunil Khare and You?”</p></br><p>“Chandnani. Rhea Chandnani”</p></br><p>“Are you from Mumbai?”</p></br><p>“Yes”</p></br>' +
'<p>“I am from Mumbai too. We will talk later. Let us go in and have Darshan.”</p><br>' +
'<p>Rhea followed Sunil like a sheep with a bent head. She was wondering why she has become so obedient to a stranger, almost following his tail. Rhea saw that there were more than 30 people in the early hours of the morning worshipping a marble idol of an old man they lovingly called Baba. There were two brass signs on the wall inscribed ‘Faith’ and ‘Patience’. Rhea froze and stood still like a pillar. There was an aura of peace and tranquility, though the speakers were blasting off with some songs accompanied by drums which she could not understand. They were pouring water on the idol, wiping and dressing the idol etc. At some point, all the women were called to hold a plate with 5 lamps to wave it in front of Baba. She did that ritual and came out. She looked at her watch, it was already 8:15! She thought, “What am I doing here?” Just then, Sunil came to her, took her to the kitchen so that she can eat something before leaving the place.  Rhea asked Sunil:</p><br>' +
'<p>She stopped the car right there, turned on the emergency blinkers and stepped out to help him.</p><br>' +
'<p>“When can I meet you again?”</p><br><p>“Same time, same place every day. If we have to meet again, He will make it happen”</p><br><p>Rhea waved at Sunil and dashed off to work. She was wondering who is ‘He’?</p><br>' +
'<p>  Months rolled by. One day, during lunch, Rhea asked Hakim as to how he is could work such long hours. This hit Hakim very hard at his heart.  He said, “Rhea, I am sorry to share this with you. I am divorced. I have nothing else to do. I am tired of playing golf all the time. My two daughters are married and well settled. My ex-wife is in Seattle. I have a retirement home in Phoenix. I am currently renting a place in Milpitas. Once I retire from here, I go straight to Phoenix and see how long I can sustain myself in that house, all alone. I don’t have any friends in Phoenix. Also, at my age, it is difficult to find people who have similar interests.” Rhea felt sorry that her question exposed the sad side of Hakim.</p><br>' +
'<p> Rhea learnt a lot from Hakim during the three months she was with him in the factory.  Both had developed a 420 page document that showed the plan as to which tools they have to keep, which tools they have to sell and which tools they have to buy and install so that they can turn the factory to make C-Gate’s products. It was now time for Hakim to retire as his last Friday was coming up. Rhea wanted to take him to dinner and bid him farewell. She had chosen a very nice Italian restaurant in San Jose.</p></br>' +
'<p> Hakim drove her to the restaurant and they both enjoyed the fine Italian spirits and the gourmet Italian cuisine. Hakim said that he feels very lonely because the only thing that he was holding onto was his job and it is also gone now. He has to transition now into retirement.  He said that he needed a week to clean up and vacate his apartment and that would make him even more miserable. Rhea could see the slight tears in his eyes and she felt sorry for him. Hakim then held Rhea’s both hands and said, “Rhea, I have got to know you during the past three months. You are a very smart and intelligent girl and you can pick up things very quickly and become good at it. You are an asset to C-Gate. I will talk to Scott Brown and strongly recommend that you be promoted to Senior VP of Operations and Finance. But, I need a small favor from you. You helped me clean up the Solar-Indra facility. Can you please stay with me for one week to help with packing and clean-up? Will you please help me with my transition to retirement?” -to be continued</p><br>',
                   author: 'Narration',
                   img: root + '/images/sai_1221_1.jpg'
               }, {
                   posted: 'Jun 7 2015',
                   postDate: new Date('Jun 7 2015'),
                   seriesId: 06042015,
                   seq: 4,
                   title: 'The Wonderful Story of Rhea - Part 4',
                   content: '<p>Rhea was suddenly taken aback. She could quickly sense an evil motive in Hakim’s request. Though many top executives had flirted with her once in a while, nobody had made such bold advances. She thought to herself, “Hakim will recommend me for promotion only if I help him with his lonely transition. Otherwise, he wouldn’t recommend me. What about all the hard work that I have put in for the past three months? He wants a personal favor from me to help my career. How mean can he be?”</p><br>' +
'<p> Rhea cut short the conversation and told Hakim that she had to go home immediately to take care her father because it was getting late for his medications. She didn’t want to take a ride from Hakim. Instead, she called a cab, went straight to work, picked up her car went home. It was a restless night. Somehow Hakim’s actions bothered her to the root. She wanted to talk to someone about it and let off her steam. Rhea didn’t have any close friends with whom she could confide.The only person that came to her mind was Sunil Khare whom she met last at the temple. “How to call him, text him or email him? I don’t have his contact info.” so thought Rhea. The best way to reach him is to go the Shirdi temple and wait for him. Somehow, due to the mental agony, fatigueand tiredness she dozed off a little in the early morning hours.</p><br>' +
'<p> It was a Saturday and that was her sleep-in day. Yet, she got up early and was at the Shirdi temple parking lot at 6:15AM waiting for Sunil to show up. Several cars pulled in, people gotout and entered the temple. Rhea was becoming impatient. At about 6:30, a white Toyota Corolla came in fully loaded with clothes, blanket, pillow, comforter, tiny table lamp,a laptop computer, a few books and other stuff. Slowly the door opened and out came Sunil walking towards the temple entrance. Rhea quickly went to the entrance, stopped him and shouted,</p><br>' +
'<p>“Sunil, I want to talk to you. It is urgent!” Sunilwas surprised to see her after a long time.</p></br><p>“Rhea, how are you? It has been a long time! Sure, we can talk. What is urgent now is to have Baba’s darshan. After the Arati, we can talk at length. Whatever is bothering you will vanish if you pray to Baba.”</p></br><p>Rhea felt somewhat snubbed at his response but she had no other recourse.  All these days, she didn’t believe in God or Baba but now, she was forced to pray for His help. As she begged Baba to resolve her problem, she was choked with emotions. After the final Arati at 8:00, Sunil and Rhea took the Prasadam in the kitchen. Rhea said:</p></br><p>“Shall we talk now?”</p></br><p>“Not here. Let us go outside. It looks like it is something personal.”</p></br>' +
'<p>Both were standing near Rhea’s car and Rhea poured her heart out to Sunil of everything that happened at work since the car accident. Sunil was a passive listener. He never said anything. Just then, it began to drizzle and Rhea asked Sunil to sit in the passenger’s side of the car. The car was filled fashion magazines, brochures and catalogs of women’s fine clothing and intimate apparel, perfumes, scarves, shopping bags from Victoria’s Secret and Ann Taylor, different colored shoes and watch bands,handbags, credit card statements etc. Sunil felt rather uneasy to sit in a woman’s car but he had no choice and he sat silently. Unable to bear his silence, Rhea blurted angrily:</p></br>' +
'<p>“So, Sunil, you have nothing to say after all that I have told you?”</p><br><p>“Rhea, I don’t know you that well. I was hesitating how to say this to you! You have placed your career as number one, personal fitness and beauty as number two, fashion/luxury as number three, professional contacts as number four, your personal life at the very bottom and there is no place for spirituality. Spirituality is the foundation of humanity and since you don’t have it, everything has crumbled. Now, you are asking me to comfort you!”</p><br><p>“What is wrong in aspiring for the highest position in any organization?”</p><br><p>“There is nothing wrong, but it has to be supported by a strong foundation of spirituality so that you can stay in that position for long. If your ego is driving you to aspire for that position, then the down fall is imminent.”</p><br><p>“Shut up Sunil! You talk like a saint! Are you telling me that your career goals were all based on spirituality?”</p><br>' +
'<p>“Will you allow me to talk without being rude?”</p><br><p>“I am so sorry! I hardly know you, yet I am taking the liberty to scream at you!”</p></br>' +
'<p>“Many years ago, I was working for Cisco in the Finance department. I repeatedly kept on telling the management, ‘the Company financesare not looking good.’ One day, there was a major layoff and I was one of them. Then, I joined a small start-up Fiasco (Financial Investment Advisors and Services Corp) and did very well. After many years, the CEO resigned and I took over the company and made it highly profitable. I sold the company to Merrill Lynch and made many millions. I could have bought a home, got married and settled down. Instead, I became greedy for money. I started my own Financial Services Company thinking that I could double or even triple my investment. This is when I failed. I lost all of it.….<br> To be continued</p>'
,
                   author: 'Narration',
                   img: root + '/images/sai_unplugged.jpg'
               }, {
                   posted: 'Jun 8 2015',
                   postDate: new Date('Jun 8 2015'),
                   seriesId: 06042015,
                   seq: 5,
                   title: 'The Wonderful Story of Rhea - Part 5',
                   content: '<p>“What happened next?”</p><br><p>“Even then, I didn’t learn a lesson. My ego and arrogance kept on pushing me to start another venture to recoup the loss. I borrowed money from my friends and started another company. Again, luck was not in my favor. I was totally broke. Some of my friends who were not married, allowed me to stay with them for a while but when they got married, I was booted out. I became a homeless person.”</p><br><p>“So, that made you spiritual?”</p><br><p>“No. I lost my father when I was ten and my mother brought me up. I was the only child. Since we were always struggling to make both ends meet, I understood the importance of money and craved for it. Just when I became homeless, I got the news that my mother was seriously ill. I had to borrow money from my friends to go to India to see her. She passed away within a few days of my arrival. I could not do any elaborate arrangements for her cremation. At my mother’s funeral, I met a person who was a devotee of Sri Sathya Sai Baba of Puttaparthi. He suggested that I go to Puttaparthi and have Baba’s darshan so that it could help me straighten my life. After I had His darshan, my whole life changed and I understood the real meaning of life. My greed for money disappeared once and for all and I became spiritual.”</p><br><p>“If you don’t have a home, where do you live?”</p><br>' +
'<p>“Didn’t you see my white 1982 Toyota Corolla filled with stuff? That is all that I have. If I can’t find a place to stay overnight in a homeless shelter, then I sleep in my car. Rest rooms in some temples have a shower and make use of it when necessary. My breakfast, lunch and dinner are made up of prasadams from various temples and Gurudwaras. My needs are very little.”</p><br>' +
'<p>“I find it hard to believe. You look good, clean shaven, nicely dressed and well groomed. Why were you crossing the road near the Penitencia Creek Bridge with bare foot when my car hit you?”</p><br><p>“Oh, that is a long story. I had given my car for service at Piercey Toyota in Milpitas. They promised that the car will be ready in the evening. When I went there, the Service person said that there were problems with the brakes and I have to leave the car with him for one more day. With nowhere to go, I walked from there to the Milpitas Shirdi temple for Dhup and Shej Arati. After the Shej Arati, I was wondering where to spend the night. Just then a devotee couple who had come for the Shej Arati, noticed my aimless wanderings in the temple premises. They asked me whether I needed any help. First I said I didn’t need any help, yet they insisted. I told them that I have no place to spend the night. The husband and wife were very nice. They told me that I could spend the night in their house. Their house is walkable distance from the temple, on the other side of Coyote Creek Bridge on Elkwood Drive. I told them that I will be leaving early to attend the Kakad Arati. They said to leave quietly without making noise. I had a quick shower, changed my clothes, held my shoes in my hand and walked quietly bare-footed to cross the bridge to reach the temple. You know what all happened after that.”</p><br>' +
'<p>“Now I know why you were carrying your old clothes in your back pack that morning. Sunil, are you not interested in finding a job?”</p><br/>' +
'<p>“You think I am not looking? Unfortunately, the Silicon Valley is flooded with software engineers, and finding a regular job is not that easy. I do many contract jobs that last for a few months. Without a steady job and a good bank balance, it is difficult to rent an apartment in this area.”</p><br/>' +
'<p>“Sunil, you have been very nice to me and you have hammered some sense into my head. What can I do for you? Would you like to stay in my house till your job situation gets better?”</p></br>' +
'<p>“Rhea, it is very kind of you to make me that offer. Somehow, I have been away from women all along. My only weakness was money and I am out of it now. Somehow, I have learnt to keep ‘woman and money’ away. I don’t want to go back on that path again.”</p></br>' + 
'<p>“Sunil, I understand your point. Yet, I want to give you something in return for all the help you have given me. Tell me what I can do for you?”</p><br>' + 
'<p>“Rhea, please listen to me carefully. When you go to orthodox temples in India for worship, they ask men to remove their shirt, the inner T-shirt (banyan), belt and bare their chests. Some temples even ask men to remove their pants, wallets and wear a Dhoti. Women are supposed to be fully covered, head-to-toe with a saree. In this country, when you go to a temple for worship, men are fully covered, whereas many women show off, thinking they are cultured, civilized, graceful and sophisticated. Today is a holiday and you came to me for advice. What is the need to have such a flashy dress for visiting a temple as if you are going for an Oscar award? Instead of spending hundreds of dollars for designer clothes, dress moderately and use the money saved to feed the hungry, poor and the homeless. When you dress temptingly and invitingly, you can expect problems. When you dress conservatively, people respect you and stay at arms-length even while speaking to you. For men, tie is a neck wear. For women, Duppatta is not a neck wear. Let your dress be one step behind the latest fashions.”</p></br>' +
'<p>“You are very selfish. You only make contacts with people who can help you in your career or do favors for you. Even when you spend time with them, you always keep thinking of ROI (Return on Investment), Preservation of Capital etc. Give up such expectations and let your friendship be genuine and come from your heart.”</p><br>' +
'<p>“Next, believe in God and pray to him whole heartedly to free you from the greed for worldly objects. When the greed goes down, compassion and love will blossom in your heart. Then your face will shine, radiate peace and people will be attracted to you naturally, not because of you are beautiful and attractive. Respect the elders and engage in some volunteering activity to make up for the time you have wasted so far in your life.”<br/>…… to be continued</p></br>' ,

                   author: 'Narration',
                   img: root + '/images/sai_1221_1.jpg'
               }, {
                   posted: 'Jun 9 2015',
                   postDate: new Date('Jun 9 2015'),
                   seriesId: 06042015,
                   seq: 6,
                   title: 'The Wonderful Story of Rhea - Conclusion',
                   content: '<p>“Sunil, it is all a wonderful piece of advice. Service to the poor is a good thing to do.  Let me think about it before I launch into volunteering.”</p></br>' + 
'<p>“Rhea, the moment a noble thought occurs in your mind, you must put it into action right away. If you procrastinate, it will go away. The drizzle that we had a moment ago was a blessing from Baba that you are turning towards God. Look, it is only 9:30. The San Mateo Homeless Shelter is looking for people to sponsor lunch today. On Saturdays, there are about 20 women and a few men waiting for lunch. We can buy some Pizzas and soft drinks on the way and serve them lunch. Why don’t you go home, get dressed in some simple clothes and come back. I will be waiting for you here, at the temple. We will both go and feed the hungry today. What do you say?”</p><br>' + 
'<p>“Sunil, it is a good idea. Let me go home, change and come back quickly.”</p><br/><p>“Good, good! Don’t change your mind!” Sunil got out of the car and waited for her in his 1982 Corolla.</p></br>' +
'<p>Rhea was serving the Pizza and Sunil was handing out soft drink cans. As they received the food from Rhea, many people said, “May God Bless you!” “May you and your family be happy!”At those moments, Rhea’s eyes moistened and something choked her throat. She had never seen so much of poverty in an affluent part of California. She really felt sad that she has squandered away all her money whereas these people didn’t have even some money to buy food. After lunch, Sunil introduced some of the women to Rhea. Rhea had a heart-to-heart conversation with them. Some of them were well educated professionals but fate had its way on them. She comforted and consoled them. All of them thanked her for taking the time to come and serve them. While they were talking, Sunil had quietly gone out and had bought several boxes of cookies. He prepared some hot tea in the kitchen and served them with cookies and tea. Everyone enjoyed the hospitality. The conversation continued till 4:00PM. Sunil and Rhea took leave of them and started walking towards to the parking lot. Sunil broke the silence.</p><br>' +
'<p>“Rhea, let this not be your first and last service to the poor. There are homeless shelters in Fremont, Milpitas, San Jose, Sunnyvale etc. Call them several weeks before and schedule your service for every weekend at different shelters. When you do service regularly, you will be surprised to find that you will become ‘rich’ and your life too will become ‘rich’. Once in a while, you will be able to spot me in one of the shelters. Do you get the picture?”</p><br>' +
'<p>Rhea was contemplating on Sunil’s words and could not fully fathom the meaning.</p><br/><p>Sunil asked Rhea, “You haven’t told me anything about your family!”</p><br/><p>“I am the only child and I am single. My mother passed away when I was thirteen. My father lives with me. He is a stick in the mud and he has his old ways.”</p><br/><p>“Don’t talk badly about your father. You have met me because of your father!”</p><br/><p>“You know him?”</p><br/><p>“Yes. We have known each other for ages! When you go home, please tell him that I have responded to his request. I hope you will continue to feed the homeless.” So saying, Sunil sped off in his car.</p><br>' + 
'<p> When Rhea made a right turn from Stevenson Blvd into Liberty Street, the car was going very slowly. The kids who were playing stopped and watched her in wonder. She stopped in the middle of the road, lowered the window, talked to a few kids and even squeezed the cheek of a young boy with love! All the moms who were watching this from their drive-ways shouted in unison, “The Divine queen has arrived.”</p><br>' +
'<p>As Rhea entered the house, she saw her father coming out of the corner where he used to pray to Baba. Seeing her in a saree he asked, “Was there a party?”</p><br/><p>“No. I went to Costco to buy Pizza for the homeless.”</p><br/><p>“Wearing a saree?”</p><br/><p>“Dad, I met a homeless person, Sunil. I love him very much.”</p><br/><p>“Sai Raaam, Sai Raaam! I don’t like where this is going! Please don’t tell me that you want to marry him.”</p><br/><p>“Nah, Nah! Sunil said, ‘He has responded to your request.’ Do you know him?”</p><br/><p>“How does he look?”</p><br/><p>“Wears a white dress, carries a white bag containing his belongings and talks high philosophy.”</p><br>' +
'<p> Rhea’s father stood still for a minute thinking who that person could be?… Sunil… it doesn’t ring a bell….. Suddenly, his lips quivered and began to sob like a child. Rhea quickly hugged him and comforted him. After gaining composure, he spoke:</p><br><p>“Rhea, my dear child! I have been praying to Baba for many, many years asking Him to put some sense into your head. Seeing how you were behaving, I had given up all hope. Finally, He has come in the form of Sunil and answered my prayers. How loving He is! Baba used to say, ‘If wealth is used only for personal enjoyment, it is wasted.’ He works in very mysterious ways.</p><br><p>He says,‘I bring men to Me from long distances and many places. I seek them and bring them to Me. They do not come of their own accord… I bring them to Me!’</p><br>' +
'<p> I have been praying to Him since I was a teen-ager. Yet, He did not give me His vision. You never believed in God, yet, He gave you His Divine vision! How merciful is He! You were able to see Him, talk to Him, seek guidance from Him and worked together with Him and fed the poor. What else one can you ask for in this birth? Beti…. you are indeed blessed! Really blessed! (He chokes) Look at me, “I must have been a sinner in my past life!”, and he burst into tears.</p><br>' +
'<p>Tears welled up in Rhea’s eyes and she immediately fell at her father’s feet for the very first time and asked him to pardon all her mistakes and negligence towards her father. She said, “Dad, because of your prayers, I have been transformed. I have now realized that name, fame, position, wealth and money are not important in life. I promise you that I will take good care of you from now on, and you won’t feel like a neglected person in this house. Please forgive me, Dad.”<br/>' +
          '“Beti, get up and ask for forgiveness from Baba. Always keep chanting ‘Sai Ram Sai Ram’ because we don’t know when we will err and go in wrong ways. I am so happy today because, you are not only my daughter but you have become Baba’s daughter too!”  <br/><br/>' +
          '“By the way, how did you meet Sunil?”<br/>“Accidentally!”</p><br>' +
          '<p> On Monday, before going to work, Rhea stopped at the Shirdi temple to have Baba’s darshan.  She was looking for Sunil. She asked someone in the temple,</p><br>' +
          '<p>“Excuse me! I am looking for a homeless person by name Sunil who comes in the mornings.”</p><br>' +
          '<p>The person was somewhat perplexed at this question and out came the reply:</p><br>' +
          '<p>“We do not know of any homeless person by name Sunil. We only know of one Sunil who comes on weekend mornings but he has a home.”</p><br>' +
          '<p>Rhea remembered her father’s remark, ‘He works in very mysterious ways!’<br/><h5>Jai Sai Ram</h5>' 
,
                   author: 'Narration',
                   img: root + '/images/dwarkamai_1.jpg'
               }, {
                   posted: 'Jun 10 2015',
                   postDate: new Date('Jun 10 2015'),
                   title: 'The Wonderful Story of Rhea - Genesis',
                   seriesId: 06042015,
                   seq: 7,
                   content: 'There is a question that is in everybody’s mind now: is Rhea Rheal? Please read on….</p><br/>' +
                       '<p>About six months ago, I had been to the Shirdi temple on a Thursday afternoon for Madhyan Arati. After having the Prasadam, I was sitting in the Main Hall looking at Baba.  A woman walked up to me and said:</p><br/>' +
                       '<p>“I was told that there is a person here who sends Baba’s messages every day. Do you know who he is?”</p><br/>' +
                       '<p>“That is me! So, do you want to join the group?” and I smiled.</p><br/>' +
                       '<p>“No, I just wanted to meet that person.”</p><br/>' +
                       '<p>After thinking for a while, she sat on the bench next to me. I was trying to ignore her. She said:</p><br/>' +
                       '<p>“You know, I want to share a Baba experience with you.”</p><br/>' +
                       '<p>“OK”, I said disinterestedly.</p><br/>' +
                       '<p>“Baba gave darshan to my friend!”</p><br/>' +
                       '<p>“Where?”</p><br/>' +
                       '<p>“On that street, in front of the temple!”</p><br/>' +
                       '<p>“I see… In what form, like an old man with a beard and all?”</p><br/>' +
                       '<p>“No! Like a middle-aged man, clean shaven with pant and shirt.”</p><br/>' +
                       '<p>“That is good.”</p><br/>' +
                       '<p>I was trying to get away from her, as I did not believe in her story.</p><br/>' +
                       '<p>“You don’t want to hear the story?”</p><br/>' +
                       '<p>“No. I have to get back to work.”</p><br/>' +
                       '<p>I was thinking to myself, “I want to escape from her and she is not letting me.” Since I didn’t believe in the story, I was determined to prove her wrong.</p><br/>' +
                       '<p>“Tell me what happened after the darshan.”</p><br/>' +
                       '<p>“She became a very nice person.”</p><br/>' +
                       '<p>“She might have been a nice person even before. You are just trying to connect the two together!”</p><br/>' +
                       '<p>“No! I am telling you, she was very rude and nasty before and suddenly.. she became a very nice person.”</p><br/>' +
                       '<p>Every time I challenged her, the story became even longer with more details! So, I stopped questioning her. She narrated the whole story as quickly as possible because she could sense my impatience to break out of that conversation.</p><br/>' +
                       '<p>Just then, my old friend Ratnam showed up.</p><br/>' +
                       '<p>“Hey Prasad, how are you doing? It has been a long time! May be two years?”</p><br/>' +
                       '<p>“Ratnam, I am very happy to see you. I think, we met may be five years ago in a conference.”</p><br/>' +
                       '<p>“What are you doing now?”</p><br/>' +
                       '<p>“Just sitting and praying.”</p><br/>' +
                       '<p>“No, I am asking, what are you doing these days? Working or retired?”</p><br/>' +
                       '<p>“Oh.., I am still working.”</p><br/>' +
                       '<p>“You haven’t changed a bit since I have seen you last.”</p><br/>' +
                       '<p>“What about you?”</p><br/>' +
                       '<p>“I am in transition.. I am looking..”</p><br/>' +
                       '<p>“Ratnam, can you wait for a minute? Let me finish my conversation with her.”</p><br/>' +
                       '<p>I turned to my right and the woman is nowhere to be found!</p><br/>' +
                       '<p>After chatting with Ratnam briefly, I get back to work. I am all confused. I jot down a few points from that conversation on a small piece of paper and put it away. I am now convinced that there are more fake people in spirituality than in any other field.</p><br/>' +
                       '<p>Months later, I thought about it. “If it was real, won’t it be nice to share it with devotees?” Again, in due course of time, the thought faded away. A month ago, I was on vacation for a week in London. When I was praying to Baba in the morning, I got a message from Baba: “You have time to go on vacation, but you don’t have time to write my devotee’s story!”</p><br/>' +
                       '<p>What a powerful message!</p><br/>' +
                       '<p>You all know what happened then….Rhea was born!</p><br/>' +
                       '<p>Jai Sai Ram!',
                   author: 'Narration',
                   img: root + '/images/sai_1221_1.jpg'
               } 
               ]

          ];
       //   var marchAp = this.marchApril2016();
          var march4April2016Data = March4April12016.getWeekData();
          allWeeksSaying.splice(0, 0, march4April2016Data);
          var weekCount = [];
          for (var i = 1; i <= allWeeksSaying.length; i++)
          { weekCount.push(i); }
          var archive = [];
          for (var weekInd = 0; weekInd < allWeeksSaying.length; weekInd++)
          {
              for (var dayInd = 0 ; dayInd < allWeeksSaying[weekInd].length; dayInd++)
              {
                  var archiveElement =
                               {
                                   posted: allWeeksSaying[weekInd][dayInd].posted,
                                   postDate: allWeeksSaying[weekInd][dayInd].postDate,
                                   title: allWeeksSaying[weekInd][dayInd].title,
                                   content: allWeeksSaying[weekInd][dayInd].content,
                                   author:allWeeksSaying[weekInd][dayInd].author

                               };
                  archive.push(archiveElement);
              }
          }
         
           
          this.getThisWeekSaying = function (whichWeek) {
         //     allWeeksSaying.splice(0, 0, Week3March2016.marchApril2016());
              return allWeeksSaying[whichWeek];
          };
          this.getWeekIndices = function () {
              return weekCount;
          };
          this.getArchives = function () {
              console.log(Week3March2016.getWeekData());
              return archive;
          };
         
         /* this.marchApril2016 = function () {
              var marchApril2016Data = [{
                  posted: 'Feb 15 2016',
                  postDate: new Date('Feb 15 2016'),
                  title: 'Love Story of Rukmini and Krishna – Part 3',
                  content: '<h4>Krishna suddenly appeared</h4>' + '<p>Suddenly, from behind, a hand came and held her right hand and the other hand held her left shoulder. She heard, “Rukmini! It is me! Your Krishna!” In a moment, she was placed in the chariot next to Him and Krishna’s chariot sped away blowing dust into the eyes of the confused Kings. Jarasandha ordered his army to pursue Krishna. Balarama immediately came behind Krishna’s chariot and assured Krishna that he will deal with them.</p>' + '<h4>Rukmi follows Krishna</h4>' +
                      '<p>While Balarama was dealing with Jarasandha and his army, Rukmi and Shishupala charged ahead towards Krishna’s chariot. Balarama engaged in a fierce fight with Shishupala. Shishupala slowed down lost Krishna. Meanwhile, Rukmi had almost caught up with Krishna. Rukmi shot an arrow at Krishna which only hit his armor. Krishna then killed Rukmi’s horses with his arrows and then shattered his chariot. Mad with rage, Rukmi took his sword and rushed towards Krishna. Krishna picked up his sword and was ready to fight. Immediately, Rukmini fell at Krishna’s feet and cried, “O Dear Lord, please spare my brother. Please do not kill him!”</p>' +
                      '<h4>Rukmi humiliated</h4>' +
                      '<p>Krishna said, “Arise Rukmini! For your sake, Rukmi shall live.” Krishna went up to Rukmi and tied him with his cummerbund. Krishna then with his sword, shaved half of Rukmi’s mustache and shaved half of his head. Just then Balarama arrived and he talked to Rukmini,“Please do not take offence, dear sister-in-law. Your brother has reaped the fruits of his own actions.” Humiliated and insulted, Rukmi walked away saying, “I can’t return to the capital now. It is a shame.”</p>' +
                      '<h4>Rukmini weds Krishna in Dwaraka</h4>' +
                      '<p>Krishna said, “Come into the chariot Rukmini. We must hurry to Dwaraka and have our wedding solemnized by rituals.” After a few days, they were married according to Vedic rituals. After this marriage, Krishna became the King of Yadus at Dwaraka. The inhabitants of Dwaraka City were so pleased that they dressed themselves with nicest garments and ornaments and went to present gifts, according to their means, to the newly married couple. All the houses of Dwaraka were decorated with flags, festoons and flowers.  The whole city became fragrant by burning of fine incense. At night, there was illumination from thousands of lamps, which decorated every building. The Goddess of fortune Rukmini, was finally united with the Lord Krishna and all the people of Dwaraka felt extremely jubilant.',

                  author: 'anon',
                  img: root + '/images/sai_unplugged.jpg'
              }];
              return marchApril2016Data;
          }*/
      })
      .service('March4April12016', function () {
          this.getWeekData = function () {
              var weekData =
             [{
                 posted: 'April 1 2016',
                 postDate: new Date('April 1 2016'),
                 title: 'Fools can’t….',
                 content: 'Sage Suka said, “Fools cannot grasp the Truth. They cannot recognize Divinity and understand the power of God. They live in delusion that their petty plans will save them and that they can triumph through their own efforts. They don’t know the fact that even the smallest success can’t be won without God’s grace.” – describing that Kamsa is a fool.',
                 author: 'Taken from Bhagavata Vahini, p229 by Sri Sathya Sai Baba.',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/sai_1221_1.jpg'
             }, {
                 posted: 'March 31 2016',
                 postDate: new Date('March 31 2016'),
                 title: ' Sadhana will not liberate you',
                 content: 'Sadhana does not bring about liberation. It only calms and controls the rajasic and thamasic gunas. Only when the saathwic guna takes control of a man, liberation comes.',
                 author: 'Conversations with Sathya Sai Baba, p100',
                 seriesId: 03282016,
                 seq: 4,
                 img: root + '/images/sai_unplugged.jpg'
             }, {
                 posted: 'March 30 2016',
                 postDate: new Date('March 30 2016'),
                 title: '  No time for Sadhana?',
                 content: 'Of the various sadhanas, repetition of the name of the Lord (Namasmarana) is the most effective. If you don’t have the time for it, then Karma Yoga (dedicating your work to the Lord) is the next best. Even if this can’t be done, then love of God is enough. With love of God, no discipline or practice is necessary. ',
                 author: 'Conversations with Sathya Sai Baba, p33',
                 seriesId: 03282016,
                 seq: 3,
                 img: root + '/images/sai_unplugged.jpg'
             }, {
                 posted: 'March 29 2016',
                 postDate: new Date('March 29 2016'),
                 title: 'Benefits of Sadhana',
                 content: 'The conscious mind is our external mind with which we perceive the external world. The subconscious mind contains our memory patterns and all impressions of the past, due to the interaction of our senses with the external world. Beneath the subconscious mind reside the seeds of the past karmas that are yet to manifest. Through the regular practice of sadhana, it is possible to dissolve or wash off the un-manifested karmas. Sadhana is the greatest boon given to mankind by our religions. ',
                 author: 'Subramaniya Swami in Living with Siva, pp 42-44',
                 seriesId: 03282016,
                 seq: 2,
                 img: root + '/images/sai_1221_1.jpg'
             }, {
                 posted: 'March 28 2016',
                 postDate: new Date('March 28 2016'),
                 title: 'Spiritual practice (Sadhana)',
                 content: 'Namasmarana (repetition of the Lord’s name) is the most effective sadhana (spiritual practice). Select one name and one form for smarana (repetition) and manana (contemplation). Remember with each name the glory behind the name. Namasmarana will help you escape from the clutches of anger, jealousy, hatred, malice and greed.  The best sadhana is to discover your Atmic reality and to recognize the oneness of that Atma in all others. The body is to be kept trim for this. Keep it light and bright. It is a boat which can take you across the sea of illusion. Don’t add to its weight by attaching it to worldly things and others; then, it is in danger of sinking during the journey.',
                 author: 'Sri Sathya Sai Baba in Sadhana- The Inward Path, pp42-43',
                 seriesId: 03282016,
                 seq: 1,
                 img: root + '/images/sai_unplugged.jpg'
             }, {
                 posted: 'March 27 2016',
                 postDate: new Date('March 27 2016'),
                 title: ' Receiving God’s grace',
                 content: 'God’s grace is like sunlight. It is everywhere but you have to do some sadhana (spiritual practice) to acquire it. When you first begin your daily sadhana, it is likely to begin in an awkward way. Don’t be discouraged when the mind runs wild as you sit quietly and are unable to control it. Don’t be discouraged if you find that you are unable to even choose a time to sit quietly for half an hour. If you persist, soon all this will be overcome and vagaries of the mind will settle down. If you must bring the power from the Power-House to your residence to illumine your place, you have to put up poles at regular intervals and connect your house with the Power-House with cables. So too, if you must win the Grace of God, do sadhana everyday, at regular timings and connect yourself with God by the cable of Namasmarana (repetition of the Lord’s name). ',
                 author: '– Sri Sathya Sai Baba in Sadhana- The Inward Path, p42',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/dwarkamai_1.jpg'
             }, {
                 posted: 'March 26 2016',
                 postDate: new Date('March 26 2016'),
                 title: 'The nature of God’s grace',
                 content: 'God’s grace is like sunlight. It is everywhere but you have to do some sadhana (spiritual practice) to acquire it. Sadhana is like opening the door of your heart so that the sun may illumine it. Like the music that is broadcast over the radio, it is all around you; but you have to tune your receiver to the right wavelength so that you can hear and enjoy it.  The main consequence of grace is ‘Self-realization’ but there are other incidental benefits too, like a happy and contented life, unruffled equanimity or santhi (peace). The plantain tree has the bunch of fruits as its man gift! But the leaves, the soft core of the trunk, the flower bud – these are subsidiary items that can also be used. That is the nature of God’s grace. It fulfills a variety of wants.',
                 author: ' – Sri Sathya Sai Baba in Sadhana- The Inward Path, p14',
                 seriesId: '-1',
                 seq: -1,
                 img: root + '/images/dwarkamai_1.jpg'
             }];
              return weekData;
          };
      }) 
      .service('Week3March2016', function () {
        this.getWeekData = function () {
            var weekData = [{
                posted: 'Feb 15 2016',
                postDate: new Date('Feb 15 2016'),
                title: 'Love Story of Rukmini and Krishna – Part 3',
                content: '<h4>Krishna suddenly appeared</h4>' + '<p>Suddenly, from behind, a hand came and held her right hand and the other hand held her left shoulder. She heard, “Rukmini! It is me! Your Krishna!” In a moment, she was placed in the chariot next to Him and Krishna’s chariot sped away blowing dust into the eyes of the confused Kings. Jarasandha ordered his army to pursue Krishna. Balarama immediately came behind Krishna’s chariot and assured Krishna that he will deal with them.</p>' + '<h4>Rukmi follows Krishna</h4>' +
                    '<p>While Balarama was dealing with Jarasandha and his army, Rukmi and Shishupala charged ahead towards Krishna’s chariot. Balarama engaged in a fierce fight with Shishupala. Shishupala slowed down lost Krishna. Meanwhile, Rukmi had almost caught up with Krishna. Rukmi shot an arrow at Krishna which only hit his armor. Krishna then killed Rukmi’s horses with his arrows and then shattered his chariot. Mad with rage, Rukmi took his sword and rushed towards Krishna. Krishna picked up his sword and was ready to fight. Immediately, Rukmini fell at Krishna’s feet and cried, “O Dear Lord, please spare my brother. Please do not kill him!”</p>' +
                    '<h4>Rukmi humiliated</h4>' +
                    '<p>Krishna said, “Arise Rukmini! For your sake, Rukmi shall live.” Krishna went up to Rukmi and tied him with his cummerbund. Krishna then with his sword, shaved half of Rukmi’s mustache and shaved half of his head. Just then Balarama arrived and he talked to Rukmini,“Please do not take offence, dear sister-in-law. Your brother has reaped the fruits of his own actions.” Humiliated and insulted, Rukmi walked away saying, “I can’t return to the capital now. It is a shame.”</p>' +
                    '<h4>Rukmini weds Krishna in Dwaraka</h4>' +
                    '<p>Krishna said, “Come into the chariot Rukmini. We must hurry to Dwaraka and have our wedding solemnized by rituals.” After a few days, they were married according to Vedic rituals. After this marriage, Krishna became the King of Yadus at Dwaraka. The inhabitants of Dwaraka City were so pleased that they dressed themselves with nicest garments and ornaments and went to present gifts, according to their means, to the newly married couple. All the houses of Dwaraka were decorated with flags, festoons and flowers.  The whole city became fragrant by burning of fine incense. At night, there was illumination from thousands of lamps, which decorated every building. The Goddess of fortune Rukmini, was finally united with the Lord Krishna and all the people of Dwaraka felt extremely jubilant.',
                seriesId: '02152016',
                seq: 3,
                author: 'anon',
                img: root + '/images/sai_unplugged.jpg'
            }];
            return weekData;
         };
    });

}());