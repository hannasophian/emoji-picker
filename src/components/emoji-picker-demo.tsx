import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
    const [currentEmoji, queueRerenderCurrentEmoji] = useState<string>("");
    const [previousEmojis, queueRerenderPreviousEmojis] = useState<string[]>([]);

    const handleEmojiChangeClock = () => {
        queueRerenderPreviousEmojis([...previousEmojis, "⏰"]);
        queueRerenderCurrentEmoji("⏰");
    }
    const handleEmojiChangeBed = () => {
        queueRerenderPreviousEmojis([...previousEmojis, "🛌"]);
        queueRerenderCurrentEmoji("🛌");
    }
    const handleEmojiChangeEgg = () => {
        queueRerenderPreviousEmojis([...previousEmojis, "🍳"]);
        queueRerenderCurrentEmoji("🍳");
    }
    const handleEmojiChangeYum = () => {
        queueRerenderPreviousEmojis([...previousEmojis, "😋"]);
        queueRerenderCurrentEmoji("😋");
    }
    const handleEmojiChangePlate = () => {
        queueRerenderPreviousEmojis([...previousEmojis, "🍽️"]);
        queueRerenderCurrentEmoji("🍽️");
    }

    return (
        <>
            <h3>Current Emoji: {currentEmoji}</h3>
            <h3>Previous Emoji: {previousEmojis}</h3>

            <button onClick={handleEmojiChangeClock}>⏰</button>
            <button onClick={handleEmojiChangeBed}>🛌</button>
            <button onClick={handleEmojiChangeEgg}>🍳</button>
            <button onClick={handleEmojiChangeYum}>😋</button>
            <button onClick={handleEmojiChangePlate}>🍽️</button>

        </>
    )
}