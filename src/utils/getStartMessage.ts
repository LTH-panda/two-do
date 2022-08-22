const messages = [
  "내일은 꼭 해야지",
  "오늘의 설거지를 내일로 미루지 말자",
  "오늘의 운동은 내일로 미루자",
  "내일의 내가 알아서 하겠지",
];

function getStartMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

export default getStartMessage;
