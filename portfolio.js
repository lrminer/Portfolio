$(document).ready(function () {
    const aboutItems = {
        h1: 'About Me',
        p: 'Lorem ipsum text asldkjfasd lasdl kfjasldkfja sldkfjas ldfkjas ldjf asldjf alskjdfl asjflaskjdflasjfla sjdflkjasdlfjasldkfjaslkdfjalskdjfklajdflkasjdflkasjdflkjasdf sdlk jfasl djf asldkfj asf lkjasd flkjasd lkjas flkjas dflkj asdflkj asdflk jasdlfk jasdlfk jasdlfk jasdlfkj asdlf jasld fkjas fdlkj'
    };

    $('#aboutLink').on('click', function () {
        const div = $('<div>');
        const h1 = $('<h1>');
        const p = $('<p>');

        h1.text(aboutItems.h1);
        p.text(aboutItems.p);


        div.addClass(''); ///style your appended content with bootstrap classes here
        div.append(h1, p);


        $('#main-content').html(div);
    });

    const myContactInfo = [{
        element: '<h1>',
        content: 'Logan Miner'
    }, {
        element: '<p>',
        content: 'Phone: 616-648-7908'
    }, {
        element: '<p>',
        content: 'Email: loganrobertminer@gmail.com'
    }];

    const contactItems = {
        form: [{
            input: "<input>",
            type: "text",
            name: "name",
            placeholder: 'Name'
        }, {
            input: "<input>",
            type: "text",
            name: "name",
            placeholder: 'Email'
        }, {
            input: "<input>",
            type: "text",
            name: "name",
            placeholder: 'Message'
        }, {
            input: "<input>",
            type: "submit",
            name: "name",
            placeholder: 'Your name'
        }]
    };

    $('#contactLink').on('click', function () {
        $('#main-content').empty();

        
        //makes div with my info
        const myInfo = $('<div>');
        for (let i = 0; i < myContactInfo.length; i++) {
            const element = $(myContactInfo[i].element);
            const content = myContactInfo[i].content;
            element.text(content);
            myInfo.append(element);
        }
        $('#main-content').append(myInfo);
        
        
        
        //makes the form
        const div = $('<div>');
        const form = $('<form>');
        const h1 = $();

        for (let i = 0; i < contactItems.form.length - 1; i++) {
            const input = $(contactItems.form[i].input);
            input.attr('type', contactItems.form[i].type);
            input.attr('name', contactItems.form[i].name);
            input.attr('placeholder', contactItems.form[i].placeholder);
            input.addClass('.contact-input')
            form.append(input);
        }
        form.addClass('d-flex flex-column');
        // const button = $('<button>');


            // form.append(button);

            div.append(form);

        div.addClass('d-flex flex-column'); //style your appended content with bootstrap classes here

        $('#main-content').append(div);
    });

    const portfolioItems = [{
        h1: 'Translate-A-Tweet App',
        p: 'Project 1',
        img: '<img>',
        src: "./assets/images/smartmockups_jz9qy2bj.jpg",
        ghpage: "https://github.com/lrminer/translate-tweet-app",
        deployed: "https://lrminer.github.io/translate-tweet-app/"
    }, {
        h1: 'Pokemon Node',
        p: 'Snippet about piece',
        img: '<img>',
        src: "./assets/images/ball-macro-pokeball-1310847-vincent-MA-janssen.jpg",
        ghpage: "https://github.com/lrminer/Nodemon",
        deployed: "https://github.com/lrminer/Nodemon"
    }, {
        h1: 'Trivia Game',
        p: 'Snippet about piece',
        img: '<img>',
        src: "./assets/images/Star_Wars_Logo.svg",
        ghpage: "https://github.com/lrminer/TriviaGame",
        deployed: "https://lrminer.github.io/TriviaGame/"
    }, {
        h1: 'Crystal Game',
        p: 'Snippet about piece',
        img: '<img>',
        src: "./assets/images/crystal_collectors_demo.PNG",
        ghpage: "https://github.com/lrminer/Unit-4-Game",
        deployed: "https://lrminer.github.io/Unit-4-Game/"
    }, {
        h1: 'Word Guess Game',
        p: 'Snippet about piece',
        img: '<img>',
        src: "./assets/images/Star_Wars_Logo.svg",
        ghpage: "https://github.com/lrminer/Word-Guess-Game",
        deployed: "https://lrminer.github.io/Word-Guess-Game/"
    }];

    $('.dropdown-item').on('click', function () {
        const index = $(this).attr('value');

        const h1 = $('<h1>');
        h1.text(portfolioItems[index].h1);

        const p = $('<p>');
        p.text(portfolioItems[index].p);

        const img = $('<img>');
        img.attr('src', portfolioItems[index].src);

        const div = $('<div>');

        div.addClass('d-flex flex-column'); //style your appended content with bootstrap classes here
        div.append(h1, p, img);

        $('#main-content').html(div);

    });
    //going to need keyword this

});