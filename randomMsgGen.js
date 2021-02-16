function randIndexGen(array) {
  return Math.floor(Math.random()* array.length);
}

const selfCareAdvice = {
  opener() {
    const goodMoods = ['carefree', 'cheerful', 'hopeful', 'empowered', 'refreshed', 'confident', 'grateful', 'content'];
    const badMoods = ['moody', 'down', 'anxious', 'overwhelmed', 'lonely', 'restless', 'hopeless', 'cranky', 'melancholy'];
    return `Reminder: self care is important for ${goodMoods[randIndexGen(goodMoods)]} people and ${badMoods[randIndexGen(badMoods)]} people.`;
  },
  care() {
    const cares = ['Check in with yourself and reflect.', 'Practice some self care today.', 'Find a comfortable place to clear your mind.', 'How have you cared for yourself today?'];
    return cares[randIndexGen(cares)];
  },
  action() {
    const actions = ["Write three things you're grateful for.", 'Light your favorite candle.', 'Make yourself a cup of tea.', 'When did you last try something new?', 'Try listening to a soundscape', 'Try a breathing exercise - breathe in for 5, breathe out for 5, repeat.'];
    return actions[randIndexGen(actions)];
  }
}

function randMsgGen() {
  return `${selfCareAdvice.opener()} ${selfCareAdvice.care()} ${selfCareAdvice.action()}`;
}

console.log(randMsgGen());
