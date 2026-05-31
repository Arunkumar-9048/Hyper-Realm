import LFGCard from './LFGCard'

const players = [
  {
    name: 'NeonShadow',
    rank: 'Gold II',
    region: 'US-West',
    mode: 'RANKED',
    quote: '"Need sniper for ranked. Comms required. Let\'s hit Plat tonight."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyVA8GiKqdtQL5cWhwYdrZ16vYDEsIwB15GmnTtRi0aLpMjcpNBcNRuQ-3TwRQ_MlN0YKfPOe7QqJCO_sVRem6nC44gDtWEuBmM0qxmBne-bGm7Xm8moJFo1T4JgMWVLBF0Kh9baKt8SbG9Vz4vmbuU8fq3gs40rOPRPOja4D-cA99aJLVNY52wHwhZZON9grmK0RnQpt-wqMX9ThFfnihrNAdgs8ZhbmTVxXDD-3FbYS1mOH3NuRRp3rVx-VCCACk55yEBTA7iw',
    tag: 'bg-success/10 text-tertiary border-tertiary/20'
  },
  {
    name: 'PixelPaladin',
    rank: 'Plat I',
    region: 'EU-West',
    mode: 'PRACTICE',
    quote: '"Tourney practice for Midnight Tactical. 4/5 filled."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5h1Dgft0pEfNRb8jziFuJ5WykxI30KaEEbVp1aDWFIAYqAWKPK6DgsBlogG7DHhsKiQ1DS99knz8rQDuj5cmE-v6Gc8DbhKk2naJI45aAgVE7jDoCZy0GPQCwNsEUmHX4Tg6ZKW6vLockGtLjehRYS_-2wm-DwQSleLzER0lzMw3KTXlnprB0X43kPeevPZ01FjlQXNGSOFK78_V-Z9P5ZlvzwgpOUlptu4vk5bK7W72n42iMX2AkfBwybHF6cud-86O2TprSjg',
    tag: 'bg-success/10 text-primary border-primary/20'
  }
]

export default function LFGSection() {
  return (
    <section className="pb-8">
      <h2 className="font-display font-bold text-body-lg tracking-tight mb-3">Looking for Squad</h2>
      <div className="space-y-3">
        {players.map((player) => (
          <LFGCard key={player.name} player={player} />
        ))}
      </div>
    </section>
  )
}
