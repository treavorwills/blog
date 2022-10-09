const { Entry } = require('../models');

const entryData = [
    {
        title: 'Short People',
        body: 'Short people got no reason to live. They got little hands and little eyes And they walk around Tellin\' great big lies They got little noses And tiny little teeth They wear platform shoes On their nasty little feet Well, I don\'t want no short people Don\'t want no short people Don\'t want no short people \'Round here Short people are just the same As you and I (A fool such as I) All men are brothers Until the day they die (It\'s a wonderful world) Short people got nobody Short people got nobody Short people got nobody To love They got little baby legs And they stand so low You got to pick \'em up Just to say hello They got little cars That got beep, beep, beep They got little voices Goin\' peep, peep, peep They got grubby little fingers And dirty little minds They\'re gonna get you every time Well, I don\'t want no short people Don\'t want no short people Don\'t want no short people \'Round here',
        user_id: 2,
    },
    {
        title: 'Moonstruck',
        body: 'The Snowflakes Are Perfect. The Stars Are Perfect. Not Us. Not Us! We Are Here To Ruin Ourselves And To Break Our Hearts And Love The Wrong People And Die.',
        user_id: 1,
    },
    {
        title: 'Con-Air',
        body: 'Sorry Boss, But There\'s Only Two Men I Trust. One Of Them\'s Me. The Other\'s Not You.',
        user_id: 1,
    },
    {
        title: 'Wiplash',
        body: 'And really, I\'m gonna start to resent you for even asking me to stop drumming. And we\'re just gonna start to hate each other. And it\'s gonna get very... It\'s gonna be ugly. And so for those reasons, I\'d rather just, you know, break it off clean... because I wanna be great. Damien Chazelle\'s Whiplash was a sleeper hit, winning three Oscars at the Academy Awards. Andrew\'s musical, relentless quest to greatness by any means necessary sits on the edge of being an enduring relatable story and cautionary tale to audience members. Played by Miles Teller, Andrew\'s abusive relationship with his cut-throat music instructor Fletcher (J.K. Simmons) fuels the film\'s high-paced jazzy narrative. In short, there are some intense moments in this movie. Yet, nothing is more heartbreaking than when he breaks up with his girlfriend, Nicole. In this movie monologue, we watch as Nicole\'s heart breaks as Andrew rationalizes, out of nowhere that his dreams are more important than their relationship.',
        user_id: 3,
    },
    {
        title: 'The Dude',
        body: '\"I\'m The Dude, so that\'s what you call me. That or, uh, His Dudeness, or uh, Duder, or El Duderino, if you\'re not into the whole brevity thing.\" Expertly played by Jeff Bridges, The Dude is on a quest to seek restitution for his ruined rug after being mistaken for the \"other Lebowski.\" This funny movie monologue tells you everything you need to know about the Coen Brothers\' cult classic, setting in motion a series of utterly hilarious events.',
        user_id: 4,
    },
    {
        title: 'Matt Damon',
        body: 'So if I asked you about art, you=d probably give me the on about every art book ever written. Michelangelo. You know a lot about him. Life=s work. Political aspirations. Him and the Pope. Sexual orientation. The whole works, right? But I bet you can=t tell me what it smells like in the Sistine Chapel. You=ve never actually stood there and looked up at that beautiful ceiling. Seen that. If I ask you about women, you=d probably give me a syllabus of your personal favorites. You may have even been laid a few times. But you can=t tell me what it feels like to wake up next to a woman and feel truly happy. You=re a tough kid. If I ask you about war, you=d probably throw Shakespeare at me, right? =Once more into the breach, dear friends.= But you=ve never been near one. You=ve never held your best friend=s head in your lap and watch him gasp his last breath, looking to you for help. If I ask you about love, you=d probably quote me a sonnet. But you=ve never looked at a woman and been totally vulnerable. Known someone who can level you with her eyes. Feel like God put an angel on earth just for you. Who could rescue you from the depths of Hell. And you wouldn=t know what it=s like to be her angel. To have that love for her be there forever. Through anything. Through cancer. And you wouldn=t know about sleeping, sitting up in a hospital room for two months, holding her hand because the doctors could see in your eyes that the terms =visiting hours= don=t apply to you. You don=t know about real loss. Because that only occurs when you love something more than you love yourself. I doubt you=ve ever dared to love anybody that much. I look at you, I don=t see an intelligent, confident man. I see a cocky, scared-shitless kid. But you=re a genius, Will. No one denies that. No one could possibly understand the depths of you. But you presume to know everything about me because you saw a painting of mine. You ripped my fuckin= life apart. You=re an orphan, right? Do you think I=d know the first thing about how hard your life has been, how you feel, who you are because I read Oliver Twist? Does that encapsulate you? Personally, I don=t give a shit about all that. Because you know what? I can=t learn anything from you that I can=t read in some fuckin= book. Unless you want to talk about you. Who you are. And I=m fascinated. I=m in. But you don=t want to do that, do you, sport? You=re terrified of what you might say. Your move, chief.',
        user_id: 5,
    },
];


const seedEntries = () => Entry.bulkCreate(entryData);

module.exports = seedEntries;


