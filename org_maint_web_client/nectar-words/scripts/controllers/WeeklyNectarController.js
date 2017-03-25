(function () {
    
    var WeeklyNectarController = function ($scope, $routeParams, $localStorage, connectToService) {
        //publish   
        $scope.root = '.';
        // local $scope.root = '/nectar-words';
        var startOfThisWeek = parseInt(new Date().getDay());
        var deltaToDesiredWeek = startOfThisWeek + (($routeParams.weekIndex - 1) * 7)
        //console.log(startOfDateString);
        $scope.weekIndex = $routeParams.weekIndex - 1;
        if ($routeParams.weekIndex == 1)
            $scope.WhichWeek = " the past week.";
        else
            $scope.WhichWeek = ($scope.weekIndex +1) + " week(s) back";
        $scope.startOfThisWeek = new Date(new Date().getTime() - parseInt(startOfThisWeek * 24 * 60 * 60 * 1000));
        $scope.startOfChosenWeek = new Date(new Date().getTime() - parseInt(deltaToDesiredWeek * 24 * 60 * 60 * 1000));
        $scope.today = new Date();
        $scope.sortType = 'seq';
        if ($localStorage.thisWeekSaying == undefined || $localStorage.thisWeekSaying == null) {
            $scope.allWeeksSaying = [
                [{
                    posted: 'March 8 2016',
                    postDate: new Date('March 8 2016'),
                    title: ' Faith-1',
                    content: 'Parvati once asked Shiva, “O Lord, what is the root of the eternal, everlasting, all-embracing bliss?” To her Shiva replied, “The root is faith.” Let everyone take to devotional practices and perform the duties of his own creed and faith',
                    author: 'Sayings of Sri Ramakrishna, p133',
                    img: $scope.root + '/images/sai_1221_2.jpg'
                }, {
                    posted: 'March 9 2016',
                    postDate: new Date('March 9 2016'),
                    title: ' Faith-2',
                    content: 'Unless one becomes child-like in faith, it is difficult for one to realize God. If the mother says to the child, “He is your brother”, the child fully believes that the person referred to is really its brother. If the mother says, “Don’t go there. There is bogey man”, the child is indeed convinced that there is a bogey man. God is really moved when He sees in a man that kind of child-like faith. None can realize God with the calculating nature of the worldly-minded',
                    author: 'Sayings of Sri Ramakrishna, p134',
                    img: $scope.root + '/images/sai_unplugged.jpg'
                }, {
                    posted: 'March 10 2016',
                    postDate: new Date('March 10 2016'),
                    title: ' Faith-3',
                    content: 'The stone may remain in water for many years; yet the water will never penetrate into it. But clay soon disintegrates into mud when it comes in contact with water. So too, the strong heart of a faithful devotee does not despair however long he is subjected to trials and torments. But the man of weak faith is shaken even by the most trifling cause.',
                    author: 'Sayings of Sri Ramakrishna, p135',
                    img: $scope.root + '/images/dwarkamai_1.jpg'
                }, {
                    posted: 'March 10 2016',
                    postDate: new Date('March 10 2016'),
                    title: 'Weekend is suffused with Faith!',
                    content: '<u>TFD (1727): Fri 3/11/16. Faith-4</u><br/><br/>' +
                'While struggling in the spiritual field, you should accept God as your protector. To instill faith in a child, the mother persuades it to walk a few steps but will be careful not to let it fall. If the child totters and is about to lose its balance, the mother hurries to catch it. God too, like a mother has His eyes fixed on you. This ever present faith and conviction will fill you with divine love. </i>–Teachings of Sri Sathya Sai Baba, p52.<i>'+
                '<br/><br/><u>TFD (1728): Sat 3/12/16. Faith-5</u><br/><br/>' +
                'When the sun is directly over your head, there will be no shadow. So too, when the faith is direct and steady in your mind, it will not cast a shadow of doubt. . –Teachings of Sri Sathya Sai Baba, p99..<i>'+
                '<br/><br/><u>TFD (1729): Sun 3/13/16. Faith-6</u><br/><br/>' +
                'Sri Rama, who was God incarnate, had to build a bridge to cross the ocean to reach Lanka. But, Hanuman, his faithful monkey devotee and servant, crossed the ocean in one leap, because of his firm faith in Rama. Here, the servant achieved more than the master, simply through faith.',
                    img: $scope.root + '/images/sai_unplugged.jpg',
                    author: 'Sayings of Sri Ramakrishna, p135',
            }, {
                    posted: 'March 7 2016',
                    postDate: new Date('March 7 2016'),
                    title: 'Maha Shivarathri',
                    content: 'Rathri means night, signifying darkness. Shiva means auspiciousness. ‘Shivarathri’ signifies auspiciousness which is inherent in darkness. It refers to the wisdom which exists in the midst of ignorance. Wisdom and ignorance are not two different things; they are essentially the same, opposite polarities of the same underlying principle. The state that transcends both wisdom and ignorance is Divinity (Paratatva). This Shivarathri is a day when one tries to establish friendship between mind and God. Shivarathri reminds everyone of the fact that Divinity is all pervasive and is to be found everywhere. It is said that Shiva lives in Kailasa. But where is Kailasa? Kailasa is our own mind full of joy and bliss. It means that when you develop purity, steadiness and sacredness from within, your heart becomes filled with peace and bliss and ultimately your heart itself becomes Kailasa.<p/>' +
                ' Scriptures proclaim that Maha Shivarathri is very auspicious time to worship Lord Shiva. Performing Abhisheka to Shivalingam with Panchamruthams (Milk, Buttermilk, Ghee, Honey, Sugar, and Fruits) while chanting Sri Rudram pleases Lord Shiva the most. Staying awake throughout the night (Jagarana) and worshipping Lord Shiva is particularly pleasing to Him.  One has to worship Lord Shiva to achieve salvation and that too on Shivarathri day. It is certain that one who keeps awake on this day will attain Shiva Sayujyam (becoming one with Lord Shiva). It is believed that the devotee\'s sincere worship of Lord Shiva on this auspicious night will absolve past sins and enable salvation. ',
                    author: 'Sri Sathya Sai Baba, Feb 17, 1985(1st passage)',
                    img: $scope.root + '/images/sai_unplugged.jpg'
                }, {
                    posted: 'March 6 2016',
                    postDate: new Date('March 6 2016'),
                    title: 'Maha Shivarathri',
                    content: 'The phase of the Moon generally controls the mind. Every day, during the dark phase of the month, the Moon wanes and its counterpart in man, the mind, also wanes. On the fourteenth day (Chathurdashi), just a tiny bit is left and if some extra effort is made on that day, the mind can be killed (Manohara). The Chathurdashi of the dark half of this month is called Maha Shivarathri and it should be spent in Japa and Dhyana of Shiva without thinking about food or sleep. - Baba in Sanathana Sarathi, April 1994, p7.<p/>' +
                '<u>Mrutyunjaya Mantra <i>(due to Sage Vashishta)</i></u><br>'+
                '<i>We offer or worship to the fragrant, three eyed Lord Shiva who enhances prosperity. May he liberate us from the bondage of death like the urvaruka melon (which effortlessly separates from the vine when ripe). May He not (let us turn away) from immortality.</i><p>' +
                '<b><i>Om tryambakam yajamahe sugnadhim pushtivardhanam<br/>&nbsp;Urvarukamiva bandanaan mrutyur muksheeya mamrutat</i></b>',
                    author: ' ',
                    img: $scope.root + '/images/dwarkamai_1.jpg'
                } ],
                [{
                    posted: 'March 1 2016',
                    postDate: new Date('March 1 2016'),
                    title: 'Namah Shivaya – the first letter "Na"',
                    content: '"Namah Shivaya" is a very powerful mantra to worship Lord Shiva and also to meditate upon Him. Adi Sankara has composed Shiva Panchakshara Stotram with each verse starting with each letter of the mantra Namah Shivaya.  Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                       'My salutations to Lord Shiva, who is in the form the syllable ‘Na’, who wears serpent king as a garland, who has three eyes, who has ashes smeared all over his body, who is the supreme Lord, who is eternal, pure and who wears space as his clothing.<p/>' +
                       '<i>Naagendra-Haaraaya Tri-Lochanaaya<br/>Bhasma-Angga-Raagaaya Maheshvaraaya |<br/>Nityaaya Shuddhaaya Dig-Ambaraaya<br/>Tasmai Nakaaraaya NamahShivaaya ||1||</i>',
                    author: 'Shankaracharya',
                    img: $scope.root + '/images/sai_1221_1.jpg'
                }, {
                    posted: 'March 2 2016',
                    postDate: new Date('March 2 2016'),
                    title: 'Namah Shivaya – the second letter ‘Ma’',
                    content: 'My salutations to Lord Shiva, who is in the form the syllable "Ma", who is bathed with waters of Ganga and sandal paste, who is the supreme Lord of Nandi and other leaders of the troop of attendants in Kailasa and who is elaborately worshipped with mandara and many other flowers.  Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                       '<p/>Mandaakinii-Salila-Chandana-Carcitaaya<br/>Nandi-Iishvara-Pramatha-Naatha-Maheshvaraaya |<br/>Mandaara-Pushpa-Bahu-Pushpa-Su-Puujitaaya<br/>Tasmai Makaaraaya Namah Shivaaya ||2||',
                    author: 'Shankaracharya',
                    img: $scope.root + '/images/sai_unplugged.jpg'
                }, {
                    posted: 'March 3 2016',
                    postDate: new Date('March 3 2016'),
                    title: 'Namah Shivaya – the third letter ‘Shi’',
                    content: 'My salutations to Lord Shiva, who is in the form the syllable ‘Shi’, the blessed one who has a blue neck, who is like the sun to the cluster of lotuses that is likened to Parvathi’s face, who destroyed Daksha’s sacrifice and who has the bull inscription on his banner.  Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                       '<p/>Shivaaya Gaurii-Vadana-Abja-Vrnda-Suuryaaya<br/>' +
                        'Dakssa-Adhvara-Naashakaaya |<br/>' +
                        'Shree-Neelakantaaya Vrsha-Dhvajaaya<br/>' +
                        'Tasmai Shikaaraaya Namah Shivaaya ||3||',
                    author: 'Shankaracharya',
                    img: $scope.root + '/images/dwarkamai_1.jpg'
                }, {
                    posted: 'March 4 2016',
                    postDate: new Date('March 4 2016'),
                    title: ' Namah Shivaya – the fourth letter ‘Va’',
                    content: '<p/>My salutations to Lord Shiva, who is in the form the syllable ‘Va’, who is adored by great sages like Vashishta, Agstya, Gutama as well as other gods and who has the sun, the moon and the fire as his three eyes. Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                       'Vashissta-Kumbhodbhava-Gautama-Aarya<br/>' +
'Muuni-Indra-Deva-Aarcita-Shekharaaya |<br/>' +
'Candra-Aarka-Vaishvaanara-Locanaaya<br/>' +
'Tasmai Vakaaraaya Namah Shivaaya ||4||',
                    author: 'Shankaracharya',
                    img: $scope.root + '/images/sai_unplugged.jpg'
                }, {
                    posted: 'March 5 2016',
                    postDate: new Date('March 5 2016'),
                    title: ' NamahShivaya – the fifth letter ‘Ya’',
                    content: '<p/>My salutations to Lord Shiva, who is in the form the syllable ‘Ya’, who appeared once as a yaksha (celestial being), who has a braid of matted locks, who holds the pinaka bow in his arm and who is the most ancient, the shining Lord, whose clothes are the four directions (He invades the space). Click <a href="https://www.youtube.com/watch?v=nGiHxuAhpRw" target=_blank ><span style="font-weight:bolder">here</span></a> to enjoy Shiva’s glory!<p/>' +
                       'Yajnya-SvaruupaayaJattaa-Dharaaya<br/>' +
'Pinaaka-HastaayaSanaatanaaya |<br/>' +
'DivyaayaDevaaya Dig-Ambaraaya<br/>' +
'TasmaiYakaaraayaNamahShivaaya ||5||<p/>' +
'He, who recites this meritorious five syllabled hymn in the shrine of Lord Shiva, gains the abode of Shiva and rejoices with the Lord.<p/>' +
'Panchaakssaram-Idam Punnyam Yah Pateth-Shiva-Sannidhau |<br/>' +
'Shivalokam-Aavaapnoti Shivena Saha Modate ||6||',
                    author: 'Shankaracharya',
                    img: $scope.root + '/images/sai_1221_1.jpg'
                },  {
                    posted: 'Feb 29 2016',
                    postDate: new Date('Feb 29 2016'),
                    title: 'Silence is Golden',
                    content: 'When the mind is still, then the truth gets a chance to be heard in the purity of silence',
                    author: 'Sri Aurobindo',
                    img: $scope.root + '/images/sai_unplugged.jpg'
                },{
                posted: 'Feb 28 2016',
            postDate: new Date('Feb 28 2016'),
            title: 'The best teacher',
            content: 'This world is the best teacher. There is a lesson in everything. There is a lesson in each experience. Learn it and become wise. Every failure is a stepping stone to success. Every difficulty or disappointment is a trail of your faith. Every unpleasant incident or temptation is a test of your inner strength. Therefore, do not despair. Match forward!',
            author: 'Swami Sivananda',
            img: $scope.root + '/images/dwarkamai_1.jpg'
        }, {
                    posted: 'Feb 27 2016',
                    postDate: new Date('Feb 27 2016'),
                    title: 'What makes us engage in service?',
                    content: 'Just as a flower gives out its fragrance to whosoever approaches it or uses it, so too, love from our heart radiates towards everybody and manifests as spontaneous service.',
                    author: 'Swami Ramdas',
                    img: $scope.root + '/images/sai_1221_1.jpg'
                }],
                [{
                    posted: 'Feb 26 2016',
                    postDate: new Date('Feb 26 2016'),
                    title: 'Sing His name',
                    content: 'Sing with Bhakti the sacred ‘name’ of the Lord and the mountain of your sins will vanish, just as a mountain of cotton will burn to ashes and disappear in no time if a spark of fire falls on it.',
                    author: 'Sayings of Sri Ramakrishna, p99',
                    img: $scope.root + '/images/sai_1221_1.jpg'
                }, {
                    posted: 'Feb 25 2016',
                    postDate: new Date('Feb 25 2016'),
                    title: 'How to repeat God’s name? - 1 ',
                    content: '----- No doubt the holy ‘name’ is very effective, but is it sufficient without Love? The soul must hunger for God. What will it avail if I repeat His ‘name’ while I allow my mind to be attached to ‘woman and gold’? No doubt, a man is purged of his sins by once uttering His name but the next moment, he takes to various sinful ways of living<p/> ' +
                        'Sayings of Sri Ramakrishna, p99<p/>' + 
                        '<br/> ---- Prema Se Bolo Ek Baar Sai Ram<p/>Jai Jai Ram Sai Ram<p/>Bolo Ram Sai Ram<p/>Prema Se Bolo Ek Baar Sai Ram<p/>Hey Madhuta Manohara Ram<p/>Hey Mohana Mooratha Ram<p/>Hey Karuna Sindhu Ram<p/>Hey Raghupathi Raghava Ram<p/>Hey Patheetha Pavana Ram<p/>Jai Jai Ram Sai Ram<p/>Bolo Ram Sai Ram (Prema Se..)<p/>' +
                        '<br/> ----- Can anyone compare the grace of Lord Shiva with any other God?<p/>You have to say only once with love, “Shiva, Chidambaram”<p/>To get liberation, you have to do no other Punya!<p/>- ‘Sabha pathiku veru daivam samanam aaguma?’ –a famous song by Gopalakrishna Bharati',
                    author: '(various)',
                    img: $scope.root + '/images/dwarkamai_1.jpg'
                },
                {
                    posted: 'Feb 24 2016',
                    postDate: new Date('Feb 24 2016'),
                    title: 'The power of God’s name-3',
                    content: 'A man, who voluntarily goes to a river, gets the benefit of the bath; so does he, who has been pushed into the river by another, or who, when sleeping soundly, has a bucket of river water thrown upon him. So too, knowingly or unknowingly, consciously or unconsciously, in whatever state of mind a man utters God’s name, he acquires the merit of such utterance.',
                    author: 'Sayings of Sri Ramakrishna, p96. (slightly edited)',
                    img: $scope.root + '/images/sai_unplugged.jpg'
                }, {
                    posted: 'Feb 23 2016',
                    postDate: new Date('Feb 23 2016'),
                    title: 'The power of God’s name-2',
                    content: 'People do not know what the ‘name’ of God can do. Those who repeat it constantly alone know its power. It can purify our mind completely. The ‘name’ can take us to the summit of spiritual experience.',
                    author: 'Swami Ramdas',
                    img: $scope.root + '/images/dwarkamai_1.jpg'
                },
                {
                    posted: 'Feb 22 2016',
                    postDate: new Date('Feb 22 2016'),
                    title: 'The power of God’s name-1',
                    content: 'A king guilty of the heinous sin of killing a Brahmana went to the hermitage of a Rishi to learn what penance he must perform in order to be purified. The Rishi was absent but his son was in the hermitage. Hearing the report of the King, he said, “Repeat the name ‘Rama’ three times and your sin will be expiated.” When the Rishi came back and heard of the remedy prescribed by his son, he remarked angrily, “Sins committed in myriads of births are purged immediately by uttering the ‘name’ of the Lord just once. How weak must be your faith! O fool! You have ordered the holy name to be repeated thrice? For this weakness in your faith, you shall become an outcaste.” And the son became Guha, a boatman of the Ramayana.',
                    author: 'Sayings of Sri Ramakrishna, p136',
                    img: $scope.root + '/images/sai_1221_1.jpg'
                }, {
                    posted: 'Feb 21 2016',
                    postDate: new Date('Feb 21 2016'),
                    title: 'What is Japa?',
                    content: 'Japa means repeating the name of the Lord, silently, by sitting in a quiet place. If one continues the repetition with concentration and devotion, one is sure to be blessed with Divine Vision and ultimately God-realization. Suppose a chest of treasures is immersed in the Ganges with one end attached to a chain, which is fixed on the bank. Following the chain, link by link, you can dive into the water and gradually trace your way to the treasure chest. In the same manner, if you become absorbed in the repetition of the His holy name, you will eventually realize Him.',
                    author: 'Sayings of Sri Ramakrishna, p359. (slightly edited)',
                    img: $scope.root + '/images/dwarkamai_1.jpg'
                },
                {
                    posted: 'Feb 20 2016',
                    postDate: new Date('Feb 20 2016'),
                    title: 'What is Karma Yoga?',
                    content: 'Karma Yoga makes us understand and admit that this world is a world of five minutes and it is something that we have to pass through, and that freedom is not here but is only to be found beyond. To find the way out of bondages of the world, we have to go through it slowly and surely. There may be a few exceptional persons who can stand aside and give up the world, as a snake casts off its skin and stands aside and looks at it. There is no doubt, these are exceptional beings. But the rest of us have to go slowly through the world of work (Karma). Karma Yoga shows the process, the secret and the method of doing it to the best of our advantage.',
                    author: 'Swami Vivekananda in Complete Works, V(1), pp 99-100.',
                    img: $scope.root + '/images/sai_unplugged.jpg'
                }],
                 [{
                     posted: 'Feb 19 2016',
                     postDate: new Date('Feb 19 2016'),
                     title: 'Offer gratitude to God',
                     content: 'Gratitude is a great virtue. When the power of the gratitude is realized, it can give benefits much more than anyone can imagine. If out of narrow mindedness, people become ungrateful, they will suffer immensely. If such is the case inpurely human relationships, how much more rewarding it will be, if gratitude is offered to God? ',
                     author: 'Sri Sathya Sai Baba, 1992',
                     img: $scope.root + '/images/dwarkamai_1.jpg'
                 }, {
                     posted: 'Feb 17 2016',
                     postDate: new Date('Feb 17 2016'),
                     title: 'Where are you searching for him?',
                     content: 'As fragrance abides in the flower, as the reflection is within the mirror, so does the Lord resides with in you. Why are you searching from Him elsewhere?',
                     author: 'Guru Nanak',
                     img: $scope.root + '/images/sai_1221_1.jpg'
                 }, {
                     posted: 'Feb 16 2016',
                     postDate: new Date('Feb 16 2016'),
                     title: 'Beauty (or Fault) is in the eye of the beholder',
                     content: 'The waxing and waning of the moon has nothing to do with the moon. When the moon waxes, we falsely think that the moon is growing; and when it wanes, we think that the moon is shrinking. Factually, the moon as it is, always the same. It solely depends on the observer on the earth who is looking at the moon. So too, the faults that you see in others are mainly due to you',
                     author: 'Balarama’s advice to Rukmini in Srimad Bhagavatam',
                     img:$scope.root + '/images/dwarkamai_1.jpg'
                 },
                 {
                     posted: 'Feb 13 2016',
                     postDate: new Date('Feb 13 2016'),
                     title: 'Love Story of Rukmini and Krishna – Part 1',
                     content: '<h4>The Love Story of Rukmini and Krishna</h4><p><h4>Background and characters</h4></p>' +
'<p>Krishna was the eighth son of Devaki and Vasudeva. The fetus of the seventh son Balarama was transferred to the womb of Rohini and he was brought up in Gokul. Devaki’s father was Devaka and his elder brother Ugrasena was ruling over Mathura. Ugrasena had nine sons and Kamsa was the eldest son. Kamsa had no sisters of his own and so he loved Devaki as his dearest self. Kamsa imprisoned his father Ugrasena and installed himself as the King of Mathura.</p><p>Jarasandha ruled over Magadha. He gave his two daughters Asti and Prapti in marriage to Kamsa. Krishna killed Kamsa in a fight and restored the crown to Ugrasena. Krishna refused to take the crown, handed over Mathura to Ugrasena and went back to Dwaraka. Jarasandha hated Krishna because both his daughters were widowed by Krishna.</p><p>Jarasandha’s friend Damaghosha was a king of Chedi. He was very cruel and a stubborn King. (Dama means curbing down. Ghosha means famous. So, he was famous for curbing down and controlling his citizens.) He had a son Sishupala who will be the crown prince of Chedi. Damaghosha loved his son so much that he would many perform many rituals to invoke good fortune on him.</p>' +
'<h4>Rukmi brings the news</h4><p>Bheeshmaka was the King of Vidharba. He had five sons and only one daughter. The first son was Rukmi and the youngest daughter was Rukmini. She was very beautiful and was at the right age to be married. Narada used to visit Bhishmaka’s palace often and from their conversations she had heard many good things about Krishna. Slowly, Rukmini started thinking of Krishna and began to dote on Krishna.</p><p>Rukmini’s brother Rukmi was always in bad company and he was very friendly with Kamsa and  Jarasandha. Rukmi brought the news to Bheeshmaka that the cowherd boy Krishna had slain Kamsa.<br/>Rukmini said, “He is not a cowherd boy. He is a noble Yadava.”<br/>Rukmi snapped immediately, “Rukmini, he has killed my friend and you call him noble?”<br/>“Don’t forget! Kamsa was cruel. He imprisoned his own father and usurped the throne”, shouted Rukmini.<br/>Bheeshmaka interrupted, “I assume Krishna will now become the King of Mathura.”<br/>Rukmi said, “No. Krishna refused the crown and Ugrasena was re-instated.”<br/>Rukmini cut him short, “Don’t you see! How noble Krishna is?”<br/>“How did Jarasandha react?” asked Bheeshmaka.<br/>Rukmi replied, “He is furious. He vows to take revenge. He has sent word for me. I must go and see him.”</p>' +
'<h4>Rukmini longs for Krishna</h4><p>All this news and incidents made Rukmini’s love for Krishna even stronger. Bheeshmaka and his wife also felt that Krishna was the most suitable groom for Rukmini.<br/>Meanwhile, Jarasandha with Rukmi and his allies made several attempts to kill Krishna but in vain. After the eighteenth attempt, they decided to bide their time and go back to their capitals.<br/>In Dwaraka, Balarama broke the news: “Krishna, we have come to know that Jarasandha has decided to lie low for a while. Now, you will have some time to think of the beautiful princess of Vidharba!”<br/>“Balarama! Somehow, I have also developed love for Rukmini. I am thinking of her all the time! My mind is also set on marrying her. But her brother Rukmi is a staunch ally of Jarasandha.”<br/>At the same time, in Vidharba, Rukmini too was lost in the dreams of Krishna hugging her (when the Lord thinks of His devotee, the devotee also thinks of Him!). She thought, “Even with Rukmi and his allies, Jarasandha could not vanquish Krishna. You are great, Krishna! You and only You shall be my Lord!”<p><h4>To be continued….</h4>',
                     author: 'anon',
                     img: $scope.root + '/images/sai_unplugged.jpg'
                 },
                 
                 {
                     posted: 'Feb 14 2016',
                     postDate: new Date('Feb 14 2016'),
                     title: 'Love Story of Rukmini and Krishna – Part 2',
                     content: '<h4>Bheeshmaka’s proposal refused</h4><p>When Rukmi returned from the war, Bheeshmaka called him and said,“Rukmi, your mother and I have decided to give Rukmini in marriage to Krishna.”Rukmi quickly responded, “How could you do it father? Krishna has killed Jarasanda’s son-in-law, Kamsa. We cannot afford to displease this mighty emperor.”Bheeshmaka’s face dropped: “But, we cannot think of a better husband for Rukmini.”Rukmi said, “My friend Sishupala, the crown prince of Chedi is enamored of Rukmini.  He will be the best person to marry her.”Bheeshmaka was not at all happy about it but he had to yield to his eldest son’s decisions. Not only that, he was getting old and he could not think of ways to bring Krishna and Rukmini together. He said, “All right Rukmi, do as you will!”Rukmi said, “Then, I shall send a proposal to the King of Chedi and invite Sishupala to come and marry Rukmini.”Rukmini who was walking in the garden, overheard their conversation and was deeply upset. She thought, “How can my brother force me to marry someone whom I don’t like?” Meanwhile, Rukmi started making arrangements for Rukmini’s marriage with Sishupala.</p>' + 
'<h4>Rukmni sends a love letter</h4><p>Suddenly, a thought occurred to Rukmini.“Why not I approach Krishna? After all, my parents are for it.”She went into the palace to her room and sent word for Sunanda, a brahmin whom she trusted and who was also kind to her.Sunanda walked in and said surprisingly, “Why do you look so pale dear? What is the matter?”Rukmini told him about the conversation she had overheard and asked him, “Is it wrong to send a secret message to Krishna?”Sunanda replied, “No dear! It would be very wrong to marry Sishupala if your heart is set on another. Moreover, your parents have approved Krishna and their hearts are set on Him.”Rukmini asked him, “With whom can I entrust such a sacred message?”“Don’t worry dear one! I shall carry the message for you.”Rukmini took a banana leaf and wrote a message on it using  her nails and gave it to Sunanda saying, “Be sure to tell Krishna that my kith and kin should not be killed on my account.” Sunanda assured that he would do so.</p>'  +
'<h4>Krishna reads the letter</h4><p>With great difficulty, Sunanda reached Dwaraka and met Krishna. Krishna welcomed him, seated him and said, “O venerable one, please tell me why have you come this far?”Sunanda said, “Dear Lord, I have come with a message from Rukmini, the princess of Vidarbha!”Sunanda described Rukmini’s dilemma and gave the message to Krishna. Krishna lovingly received the banana leaf from the hands of Sunanda and started reading the message:“Lord, I have chosen You as my husband. Please come to Vidarbha, vanquish the armies of Jarasandha and Sishupla and take me with you. On the day of the marriage, I will be first taken to the Durga temple for worship. It will be a good place for you to kidnap me from there.”<br/>After reading the message, Krishna looked at Sunanda."If you do not come and take her away, she has decided to give up her life!”, said Sunanda.<br/>Krishna replied, “I know… I know. Little does she know that I too have set my heart on winning her! But Rukmi will not give her to me.”<br/>Sunanda’s face fell, “That means…. you will not take her….”<br/>“No. No. Now that she has revealed her heart to me, I shall make her mine. I shall vanquish anyone who comes in my way”, said Krishna.<br/>At this point, Sunanda interrupted, “The little girl wants to make sure that there is no blood-shed on her account.” Krishna nodded His head in approval, gave gifts to Sunanda and sent him home.</p>' +
'<h4>Krishna heads to Vidarbha/Jarasandha plans</h4><p>Krishna called his charioteer Daruka and asked him to get ready. Krishna told him to inform Balarama that he was proceeding to Vidarbha. Meanwhile, Rukmi’s formal proposal and invitation reached Sishupala. Sishupala was very jubilant because there was no Swayamvara (bride choosing the husband). All he has to do was, go to Vidarbha marry Rukmini and bring her home. It was that easy.. but Jarasandha was not confident. He knew that the vile cowherd could cause some trouble if he comes to know of this news. Jarasandha sent for all his vassals and allies to be ready in Vidarbha to confront Krishna, if he comes to take away the bride.  Balarama became aware of this news and marched towards Vidarbha with his armies, elephants, horses and chariots.</p>'
+ '<h4>Rukmini’s anxiety builds up</h4><p>At Vidarbha, Rukmini’s anxiety was building up every moment. She thought, “Has Krishna felt disgusted with my message that I have no shame in asking him to be my husband? Then, why has Sunanda not come back?” As she started looking at the window for the hundredth time, she saw Sunanda entering the palace. She quickly ran to the door to meet Sunanda. Sunanda briefed her, “Krishna has come dear! Everything is going according to the plan. Balarama too has come with his forces” and left the palace in a hurry.</p>' +
'<h4>Rukmini heads to Durga’s shrine</h4><p>“Rukmini, your chariot has arrived. Are you ready?”, shouted one of the maids. Rukmini was dressed nicely and she got into the chariot. She was taken to the temple courtyard where she stepped down. Many Kings had assembled there. From there, she looked for Krishna and thought, “I don’t see Krishna among them. They say that he is dark blue, wears a yellow robe and sports a peacock feather in his crown.” She entered the temple, washed the feet of Goddess Durga, and placed flowers at her feet. Overcome by anxiety and emotion, she prayed, “O Goddess Durga, please let Krishna and only Krishna win and marry me. O Durga, please do not disappoint me.” As she walked towards the gate, her eyes scanned the assembly of Kings again,  looking for Krishna. She murmured, “Will Krishna ever come and rescue me?”</p>'
+ '<h4>To be continued</h4>',
                     author: 'anon',
                     img: $scope.root + '/images/dwarkamai_1.jpg'
                 },{
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
            img: $scope.root + '/images/sai_unplugged.jpg'
        }],
                [{
                posted: 'Feb 12 2016',
                postDate: new Date('Feb 12 2016'),
                title: 'I would lie like dust!',
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
            img:$scope.root + '/images/dwarkamai_1.jpg'
        },
            {
                posted: 'Feb 11 2016',
                postDate: new Date('Feb 11 2016'),
                title: 'The dinner party',
                content: 'You love your friends so much that you invite them for dinner at your home. You talk to them, and entertain them. After the dessert and coffee is served, you expect them to slowly leave. What will happen if everyone wants to stay back? (everyone laughs) For those who are still chatting and not thinking of leaving, you give a hint saying, “Shall I offer some more coffee?” or “Can you help us in the kitchen to put things away?”(big laughter)<p/>' +
                        'What has happened? A few hours ago, you loved them so much that you poured your hearts out to them. Now you want them to leave. Why?.. because, you want to spend time with yourself and your family. So too, be engaged in the worldly things only to the extent necessary for your survival. Spend the rest of the time in contemplating on the glories of the Lord and engaging in Sadhana (spiritual practice).',
                author: 'Swami T',
                img: $scope.root + '/images/sai_unplugged.jpg'
        },
             {
                posted: 'Feb 10 2016',
                postDate: new Date('Feb 10 2016'),
                title: 'Mind is everything',
                content: 'The mind is everything. It is in mind alone that one becomes pure and impure.<p/>' +  
                            'A man, first of all, makes his own mind impure and then alone he sees other man’s faults. I tell you one thing. If you want peace of mind, do not find fault with others. Rather see your own faults. -Sri Sarada Devi (wife of Sri Ramakrishna ',
                author: '-Sri Sarada Devi (wife of Sri Ramakrishna Paramahamsa)',
                img: $scope.root + '/images/dwarkamai_1.jpg'
             },
             {
                 posted: 'Feb 09 2016',
                 postDate: new Date('Feb 09 2016'),
                 title: 'Always be active',
                 content: 'One should always be active. One should be never without work.<p/>' +
                     'For, when one is idle, all sorts of bad thoughts crop up in one’s mind.',
                 author: '-Sri Ramakrishna Paramahamsa',
                 img: $scope.root + '/images/sai_unplugged.jpg'
             }], [{
                 posted: 'Jan 31 2016',
                 postDate: new Date('Jan 31 2016'),
                 title: ' Burning Karma',
                 content: 'Just as fire fanned by powerful winds destroys heaps of firewood in no time, so also, the fire of meditation destroys heaps of Karma in a moment.',
                 author: 'Lord Mahavir',
                 img: $scope.root + '/images/dwarkamai_1.jpg'
             },
             {
                 posted: 'Jan 30 2016',
                 postDate: new Date('Feb 17 2016'),
                 title: 'The most peaceful person',
                 content: 'He who recognizes the existence of suffering, its cause, its cessation and path leading to its cessation has fathomed the Four Noble Truths. He will walk in the right path. Right views will be the torch to light his way. Right aims will be his guide. Right words will be his dwelling place on the road. His gait will be straight, for it is right behavior. His refreshments will be the right way of earning his livelihood. Right efforts will be his steps; right thoughts his breath; and peace will follow in his footprints',
                 author: 'Lord Buddha',
                 img: $scope.root + '/images/sai_1221_1.jpg'
             }, {
                 posted: 'Jan 29 2016',
                 postDate: new Date('Jan 29 2016'),
                 title: 'Why would somebody name me ‘Dust’?',
                 content: 'We all look upon dust with contempt as something that we should avoid or not to come in contact with. Renu is a very common name for girls in northern part of India. Several months ago, one of the volunteers at the Shirdi Temple told me that Renu means ‘dust’. Please read this wonderful story……<p/>One day, Krishna by his maya, fell into a dreaded disease which no doctor could cure.  Narada came in the disguise of a physician and prescribed that if somebody can give his or her feet’s dust washed and give that water for Krishna to drink, he will be cured. Otherwise, he will die. When Krishna asked Rukmini and Sathyabhama for the ‘dust water’ they started cried saying that it will the highest sin because Krishna is their husband, as well as God.<p/> When Krishna approached Radha and the other Gopis, they were ready to offer their ‘dust water’. When Krishna warned them that they will be committing the greatest sin, they simply smiled and said that they would rather go to hell than lose their dear Krishna. The Lord craves for the ‘dust’ from the feet of the devotees because it is very auspicious. Then, what to speak of the Bhakta? Don’t you feel that you are blessed to have such a nice name, like Renu?',
                 author: 'Anon',
                 img: $scope.root + '/images/dwarkamai_1.jpg'
             }]
            ];
            $scope.thisWeeksSaying = $scope.allWeeksSaying[$scope.weekIndex];
         }
        else {
            $scope.thisWeekSaying = $localStorage.thisWeekSaying;
        };
    };

    

    WeeklyNectarController.$inject = ['$scope', '$routeParams', '$localStorage', 'connectToService'];

    angular.module('nectar_words_app')
      .controller('WeeklyNectarController', WeeklyNectarController);

}());