const quotes =[
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
    },
    {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
    ];
const quote = document.querySelector("#quote span:first-child") //명언 구간
const author = document.querySelector("#quote span:last-child") //사람이름 구간

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//quotes.length로 이 array가 얼마나 긴지 구함 -> 10   ex) console.log([1,2,3,4,5].length) -> 5가 나옴
//Math.random()은 0~1에다가 quotes.length인 10을 곱해주면0~10인 수가 하나 나옴
//그 수를 Math.floor()를 통해 소수점을 버려서 자연수로 만들어줌
//결과적으로  quotes[n]이 되어서 n번쨰의 명언이 todaysQuote가됨

//콘솔로 시험삼아 해볼려면
//console.log(quotes[Math.floor(Math.random() * quotes.length)])

//Math.random() 0 "이상" 1 "미만"의 값
//Math.floor() 소수점을 버리는 것(버림)
//Math.ceil() 소수점을 올리는 것(올림)
//Math.round() 소수점을 반올림 하는 것
//html애서 숫자는 0부터 시작하기떄문에 floor로 해준다.




quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;