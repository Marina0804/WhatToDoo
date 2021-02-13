let phrases = [
  { text: 'переслушать сотни раз любимую песню', image: 'iconfinder_7_4698574.png' },
  { text: 'наконец-то посмотреть аниме которое советовала подруга', image: 'iconfinder_anime_spirited_away_no_face_nobody_4043233.png' },
  { text: 'попытаться посмотреть дораму в оригинале и ничего не понять', image: 'iconfinder_workplace_1936905.png' },
  { text: 'перебрать шкаф и понять что там почти всё чёрное', image: 'zxc.png' },
  { text: 'начать смотреть сериал и забросить', image: 'iconfinder_Laptop_1747088.png' },
  { text: 'задуматься о чём то и пропасть в своих мыслях', image: 'zaq.png' },
  { text: 'приготовить еду и чуть не сжеч квартиру', image: 'iconfinder_pan_416389.png' },
  { text: 'попробывать научиться танцевать и врезаться в зеркало', image: 'asd.png' },
  { text: 'прилеч попать и проснуться через неделю', image: 'zde.png' },
  { text: 'пойти гулять с подругой и в итоге пойти вместе есть', image: 'dfdfs.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 