import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
    const [currentEmoji, queueRerenderCurrentEmoji] = useState("");
    const [previousEmoji, queueRerenderPreviousEmoji] = useState("");

    const handleEmojiChangeClock = () => {
        queueRerenderPreviousEmoji(currentEmoji);
        queueRerenderCurrentEmoji("⏰");
    }
    const handleEmojiChangeBed = () => {
        queueRerenderPreviousEmoji(currentEmoji);
        queueRerenderCurrentEmoji("🛌");
    }
    const handleEmojiChangeEgg = () => {
        queueRerenderPreviousEmoji(currentEmoji);
        queueRerenderCurrentEmoji("🍳");
    }
    const handleEmojiChangeYum = () => {
        queueRerenderPreviousEmoji(currentEmoji);
        queueRerenderCurrentEmoji("😋");
    }
    const handleEmojiChangePlate = () => {
        queueRerenderPreviousEmoji(currentEmoji);
        queueRerenderCurrentEmoji("🍽️");
    }

    return (
        <>
            <h3>Current Emoji: {currentEmoji}</h3>
            <h3>Previous Emoji: {previousEmoji}</h3>

            <button onClick={handleEmojiChangeClock}>⏰</button>
            <button onClick={handleEmojiChangeBed}>🛌</button>
            <button onClick={handleEmojiChangeEgg}>🍳</button>
            <button onClick={handleEmojiChangeYum}>😋</button>
            <button onClick={handleEmojiChangePlate}>🍽️</button>

        </>
    )
}