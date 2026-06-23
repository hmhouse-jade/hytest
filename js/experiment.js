import {positiveWords, negativeWords, positiveImages, negativeImages} from "./data.js";
import {shuffle} from "./utils.js";

export const practiceBlock = {
  name:"연습",
  leftLabel:"자음",
  rightLabel:"모음",
  trials:[
    {type:"text",content:"ㄱ",correct:"left"},
    {type:"text",content:"ㅏ",correct:"right"},
    {type:"text",content:"ㄴ",correct:"left"},
    {type:"text",content:"ㅓ",correct:"right"},
    {type:"text",content:"ㄷ",correct:"left"},
    {type:"text",content:"ㄹ",correct:"left"},
    {type:"text",content:"ㅗ",correct:"right"},
    {type:"text",content:"ㅣ",correct:"right"}
  ]
};

export function createBlocks(){

// ✅ block1
  let allTrials = [];

  positiveWords.forEach(word => {
    allTrials.push({type:"text", content:word, correct:"left"});
  });

  negativeWords.forEach(word => {
    allTrials.push({type:"text", content:word, correct:"right"});
  });

  positiveImages.forEach(img => {
    allTrials.push({type:"image", content:img, correct:"left"});
  });

  negativeImages.forEach(img => {
    allTrials.push({type:"image", content:img, correct:"right"});
  });

  shuffle(allTrials);
  let block1Trials = allTrials.slice(0, 10);

  // ✅ block2
  let allTrials2 = [];

  positiveWords.forEach(word => {
    allTrials2.push({type:"text", content:word, correct:"right"});
  });

  negativeWords.forEach(word => {
    allTrials2.push({type:"text", content:word, correct:"left"});
  });

  positiveImages.forEach(img => {
    allTrials2.push({type:"image", content:img, correct:"right"});
  });

  negativeImages.forEach(img => {
    allTrials2.push({type:"image", content:img, correct:"left"});
  });

  shuffle(allTrials2);
  let block2Trials = allTrials2.slice(0, 10);


  return [
    practiceBlock,
    {
      name:"본실험 1",
      leftLabel:"긍정",
      rightLabel:"부정",
      trials: block1Trials
      
    },
    {
      name:"본실험 2",
      leftLabel:"부정",
      rightLabel:"긍정",
      trials: block2Trials
    }
  ];
}
