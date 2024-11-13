import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const generateMinutesToRead = (minutes) => {
    let emojis = "";

    if (minutes < 30) {
      const coffeeCount = Math.ceil(minutes / 5);
      emojis = "☕️".repeat(coffeeCount);
    } else {
      const bentoCount = Math.ceil(minutes / 10);
      emojis = "🍱".repeat(bentoCount);
    }

    return `${emojis} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{generateMinutesToRead(minutes)}</p>
    </article>
  );
}

export default Article;

