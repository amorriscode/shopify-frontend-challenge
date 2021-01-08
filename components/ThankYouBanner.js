import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const duration = 15 * 1000
const defaults = {
  startVelocity: 30,
  spread: 360,
  ticks: 60,
  zIndex: 0,
  colors: ['#E50914', '#B20710', '#52525B'],
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min
}

export default function ThankYouBanner() {
  const animationEnd = Date.now() + duration

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 450)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-8">
      <img
        className="rounded col-span-1 w-full"
        src="https://media.giphy.com/media/4JXNjv3MR21YXfsaqQ/giphy.gif"
      />

      <div className="bg-brand-red p-8 rounded text-white text-2xl w-full col-span-2 flex flex-col justify-center items-center space-y-4 text-center">
        <p>Thanks for nominating your favourite films!</p>

        <p>Check back soon to find out who won!</p>
      </div>
    </div>
  )
}
