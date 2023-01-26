const vscode = require('vscode');
const { Configuration, OpenAIApi } = require("openai");
const configFromEnv = require("./config");
const openaiApiKeyFromEnv= configFromEnv.openaiKey;

const openaiKeyFromConfig=vscode.workspace.getConfiguration().get('openaiApiKey'); 

const configuration = new Configuration({
  apiKey: openaiKeyFromConfig?openaiKeyFromConfig:openaiApiKeyFromEnv
});
const openai = new OpenAIApi(configuration);

const fetchOpenAI = async (text)=>{
  console.log("quering: ",text);
  let response; 
  try{  
  response = await openai.createCompletion({
        model: configFromEnv.model,
        prompt: text,
        max_tokens: 2000,
        temperature: 0.2,
      });
     
    }catch(err){
      console.log(err)
    }
      return response.data.choices;
}


module.exports= {fetchOpenAI };