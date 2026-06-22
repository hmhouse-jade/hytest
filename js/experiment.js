import { shuffle } from "./utils.js";
import { positiveWords, negativeWords, positiveImages, negativeImages } from "./data.js";

export let results=[];
export let errorCount=0;

export function createBlocks(){

  const block1Trials=[];
  const block2Trials=[];

  positiveWords.forEach(word=>{
    block1Trials.push({type:"text",content:word,correct:"left"});
  });

  negativeWords.forEach(word=>{
    block1Trials.push({type:"text",content:word,correct:"right"});
  });

  positiveImages.forEach(img=>{
    block1Trials.push({type:"image",content:img,correct:"left"});
  });

  negativeImages.forEach(img=>{
    block1Trials.push({type:"image",content:img,correct:"right"});
  });

  positiveWords.forEach(word=>{
    block2Trials.push({type:"text",content:word,correct:"right"});
  });

  negativeWords.forEach(word=>{
    block2Trials.push({type:"text",content:word,correct:"left"});
  });

  positiveImages.forEach(img=>{
    block2Trials.push({type:"image",content:img,correct:"right"});
  });

  negativeImages.forEach(img=>{
    block2Trials.push({type:"image",content:img,correct:"left"});
  });

  shuffle(block1Trials);
  shuffle(block2Trials);

  return [
    {name:"본실험 1",leftLabel:"긍정",rightLabel:"부정",trials:block1Trials},
    {name:"본실험 2",leftLabel:"부정",rightLabel:"긍정",trials:block2Trials}
  ];
}