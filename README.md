# Magic OpenAI Extension
``
This extension helps you utilize Openai capabilities inside vscode, and generate snippets/data inside vscode directly, no need to copy/paste or switch windows.
``
## Features


### Generate a simple React Component


For example just type below in existing editor:
> Generate a react component to display cities with coordinates in table

and press ``Cmd+G`` , in few seconds you will see your code replaced with this: 
```
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>My Component</h1>
    </div>
  );
};

export default MyComponent;
```


### Another example can be to generate Data: 


> Generate json with object having coordinate of 2 cities in california with their coordinates

and press ``Cmd+G`` it should generate below json object for you:

```
{
    "Cities": [
        {
            "Name": "Los Angeles",
            "Coordinates": {
                "Latitude": 34.0522,
                "Longitude": -118.2437
            }
        },
        {
            "Name": "San Francisco",
            "Coordinates": {
                "Latitude": 37.7749,
                "Longitude": -122.4194
            }
        }
    ]
}
```

## Pre-Requisities

You will need to have a openai account and configure your key in extension settings. 

> Note: your keys are private to you and saved locally for you to use


## Extension Settings


You need to set below configurations to start using the plugin:

* `openaiApiKey`: your key from open ai account


## Note
``
This is WIP so if things dont work, please do report inorder to improve.
``




**You can generate almost any snippet that can fasten your developement speed.**
