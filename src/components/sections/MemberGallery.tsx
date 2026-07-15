import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Lock, MessageCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PROFILES = [
  {
    id: 1,
    name: "Priya S.",
    age: 31,
    city: "Mumbai",
    status: "divorced",
    statusLabel: "Divorced",
    tagline: "I am looking for a genuine long-term relationship with a caring, fun man.",
    detail: "Age pref: 25–38 • Weekends free • Loves travel",
    initial: "P",
    color: "from-rose-500 to-pink-700",
    online: true,
    reward: "Willing to pay ₹8,000/meet",
  },
  {
    id: 2,
    name: "Rekha M.",
    age: 38,
    city: "Delhi",
    status: "widow",
    statusLabel: "Widow",
    tagline: "Life is short — want to enjoy quality time with a charming man who makes me smile.",
    detail: "Age pref: 28–42 • Evenings & weekends • Loves dining out",
    initial: "R",
    color: "from-fuchsia-500 to-purple-700",
    online: true,
    reward: "Willing to pay ₹12,000/meet",
  },
  {
    id: 3,
    name: "Sunita K.",
    age: 29,
    city: "Bangalore",
    status: "single",
    statusLabel: "Single",
    tagline: "Young professional, busy schedule — want someone fun & no-strings weekend company.",
    detail: "Age pref: 24–35 • Flexible timing • Loves adventure",
    initial: "S",
    color: "from-amber-500 to-orange-600",
    online: false,
    reward: "Willing to pay ₹6,000/meet",
  },
  {
    id: 4,
    name: "Kavitha R.",
    age: 44,
    city: "Hyderabad",
    status: "separated",
    statusLabel: "Separated",
    tagline: "Mature woman seeking affectionate man for regular meetups and genuine companionship.",
    detail: "Age pref: 28–45 • Afternoons • Homely type preferred",
    initial: "K",
    color: "from-emerald-500 to-teal-700",
    online: true,
    reward: "Willing to pay ₹10,000/meet",
  },
  {
    id: 5,
    name: "Anjali D.",
    age: 33,
    city: "Chennai",
    status: "divorced",
    statusLabel: "Divorced",
    tagline: "Went through a bad marriage — just want joy, laughter and good company now.",
    detail: "Age pref: 26–40 • Weekends • Soft-spoken men preferred",
    initial: "A",
    color: "from-red-500 to-rose-700",
    online: true,
    reward: "Willing to pay ₹7,500/meet",
  },
  {
    id: 6,
    name: "Nisha P.",
    age: 26,
    city: "Pune",
    status: "single",
    statusLabel: "Single",
    tagline: "Looking for a confident, stylish man to go on exciting dates and make memories.",
    detail: "Age pref: 23–34 • Evenings • Fitness-oriented preferred",
    initial: "N",
    color: "from-violet-500 to-indigo-700",
    online: false,
    reward: "Willing to pay ₹5,500/meet",
  },
  {
    id: 7,
    name: "Deepa V.",
    age: 39,
    city: "Kolkata",
    status: "widow",
    statusLabel: "Widow",
    tagline: "Feeling lonely after years — want a warm, respectful man for long-term companionship.",
    detail: "Age pref: 30–45 • Any time • Educated men preferred",
    initial: "D",
    color: "from-blue-500 to-cyan-700",
    online: true,
    reward: "Willing to pay ₹9,000/meet",
  },
  {
    id: 8,
    name: "Meena J.",
    age: 35,
    city: "Ahmedabad",
    status: "separated",
    statusLabel: "Separated",
    tagline: "Husband left me — life goes on. Seeking a fun, caring gigolo for regular companionship.",
    detail: "Age pref: 27–42 • Flexible • Sense of humour essential",
    initial: "M",
    color: "from-pink-500 to-rose-700",
    online: true,
    reward: "Willing to pay ₹8,500/meet",
  }
];

const STATUS_COLORS: Record<string, string> = {
  divorced: "text-amber-400 bg-amber-400/10",
  widow: "text-purple-400 bg-purple-400/10",
  single: "text-green-400 bg-green-400/10",
  separated: "text-blue-400 bg-blue-400/10",
};

export function MemberGallery() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="gallery">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-bl-[100%] blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-sm font-semibold text-rose-400 mb-4">
            <Heart className="w-3.5 h-3.5 mr-2 fill-current" /> Real Women. Real Money. Real Fun.
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Women <span className="text-primary">Waiting for You</span> Right Now
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thousands of lonely, genuine women have posted profiles looking for a Gigolo. <strong className="text-white">Register free</strong> to see their full photos, phone numbers, and send a message today.
          </p>
        </div>

        {/* Urgency bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-card border border-white/10 rounded-full px-5 py-2.5 text-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-green-400 font-semibold">347 women online now</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">New profiles added every hour</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILES.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group rounded-2xl bg-card border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 gold-glow-hover flex flex-col"
            >
              {/* Avatar area */}
              <div className="relative">
                <div className={`w-full h-36 bg-gradient-to-br ${profile.color} flex items-end justify-between px-4 pb-4`}>
                  {/* Blurred photo placeholder */}
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur border-2 border-white/30 flex items-center justify-center text-white text-2xl font-serif font-bold shadow-lg">
                      {profile.initial}
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">{profile.name}</div>
                      <div className="flex items-center text-white/70 text-xs gap-1">
                        <MapPin className="w-3 h-3" /> {profile.city}
                      </div>
                    </div>
                  </div>
                  <div className={`absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-card ${profile.online ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                </div>

                {/* Blurred extra photos teaser */}
                <div className="absolute bottom-2 right-3 flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-7 h-7 rounded bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Lock className="w-3 h-3 text-white/40" />
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <span className="text-[9px] text-primary font-bold">+8</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-3">
                {/* Status + age */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[profile.status]}`}>
                    {profile.statusLabel}
                  </span>
                  <span className="text-sm text-muted-foreground">Age {profile.age}</span>
                </div>

                {/* Tagline */}
                <p className="text-sm text-gray-300 italic leading-snug flex-1">
                  "{profile.tagline}"
                </p>

                {/* Detail */}
                <p className="text-[11px] text-muted-foreground">{profile.detail}</p>

                {/* Reward badge */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-center">
                  <span className="text-primary text-xs font-bold">{profile.reward}</span>
                </div>

                {/* CTA */}
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" asChild>
                  <a href="#register">
                    <MessageCircle className="w-4 h-4 mr-2" /> Message Her
                  </a>
                </Button>
                <p className="text-[10px] text-muted-foreground text-center">Register free to unlock contact</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-2xl px-8 py-6 max-w-xl">
            <p className="text-white font-semibold text-lg mb-1">🔐 Full profiles & photos are members-only</p>
            <p className="text-muted-foreground text-sm mb-5">Register for free in 2 minutes — see real photos, WhatsApp numbers, and start chatting today.</p>
            <Button size="lg" className="bg-primary text-primary-foreground font-bold text-base px-10 h-12" asChild>
              <a href="#register">Create Free Account →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
