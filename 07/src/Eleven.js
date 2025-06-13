import React from 'react'

function Eleven() {
    const Quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "There is no elevator to success. You have to take the stairs.",
  "Dreams don’t work unless you do.",
  "Study while others are sleeping. Work while others are loafing. Prepare while others are playing. — William Arthur Ward",
  "Hard work beats talent when talent doesn’t work hard.",
  "Your future is created by what you do today, not tomorrow.",
  "Great things are never done by staying in your comfort zone.",
  "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing. — Pelé",
  "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.",
  "Work hard in silence. Let success make the noise.",
  "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
  "The pain you feel today will be the strength you feel tomorrow.",
  "One day, all your hard work will pay off.",
  "Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. — Dwayne Johnson",
  "Studying is not about time. It’s about effort. If you put in the effort, you’ll see the results.",
  "Do something today that your future self will thank you for.",
  "Stay focused, stay disciplined, and never give up."
];
const randomIndex = Math.floor(Math.random()*Quotes.length);
const quote = Quotes[randomIndex];

  return (
    <div>
        {quote}
    </div>
  )
}

export default Eleven