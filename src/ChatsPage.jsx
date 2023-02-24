import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    //const chatprops = useMultiChatLogic('96d88465-8879-4a38-a293-1e3b1ae050b9', props.user.username, props.user.secret);
    return <div>
        <PrettyChatWindow
            projectId='96d88465-8879-4a38-a293-1e3b1ae050b9'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}}
        />    
    </div>
}

export default ChatsPage;