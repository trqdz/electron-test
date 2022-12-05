const $=require('jquery');
const apipostRequest=require('apipost-send');
const { Collection, Runtime } = require('apipost-runtime');
const requestData=require('./requestData')
const option=require('./option');
 
const request=require('./request');
 

$(function(){

 
  const test_events=request.test_events
 

  $("#btnSend").on("click",()=>{
    
    const myCollection = new Collection(test_events, { iterationCount: 1, sleep: 0 });
    const emitRuntimeEvent = function (msg) {
      console.log(msg);
      // if(msg.action==='http_complate'){

      //   console.log(msg.data.response.data.request.body);
      // }
    };
    const runTime= new Runtime(emitRuntimeEvent);
    runTime.run(myCollection.definition, request.option);



  })


})