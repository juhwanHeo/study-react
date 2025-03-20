import { useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom({ serverUrl, roomId }) {
    useEffect(() => {
        const connection = createConnection({serverUrl, roomId});
        connection.connect();
        return () => connection.disconnect();
    }, [serverUrl, roomId]);
    
    return <h1>Welcome to the {roomId} room!</h1>;
}
