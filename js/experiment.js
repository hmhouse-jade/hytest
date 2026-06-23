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

  //const block1 = [];
  //const block2 = [];
  
  let block1Trials = [];
  let block2Trials = [];

  shuffle(block1Trials);
  shuffle(block2Trials);

  
  block1Trials = block1Trials.slice(0, 5);
  block2Trials = block2Trials.slice(0, 5);


  positiveWords.forEach(w=>{
    block1Trials.push({type:"text",content:w,correct:"left"});
    block2Trials.push({type:"text",content:w,correct:"right"});
  });

  negativeWords.forEach(w=>{
    block1Trials.push({type:"text",content:w,correct:"right"});
    block2Trials.push({type:"text",content:w,correct:"left"});
  });

  positiveImages.forEach(img=>{
    block1Trials.push({type:"image",content:img,correct:"left"});
    block2Trials.push({type:"image",content:img,correct:"right"});
  });

  negativeImages.forEach(img=>{
    block1Trials.push({type:"image",content:img,correct:"right"});
    block2Trials.push({type:"image",content:img,correct:"left"});
  });

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
