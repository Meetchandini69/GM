import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Lock, MessageCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PROFILES = [
  {
    id: 1,
    name: "Priya S.",
    age: 31,
<<<<<<< HEAD
    city: "Mumbai",
=======
    city: "Coimbatore",
>>>>>>> design
    status: "divorced",
    statusLabel: "Divorced",
    tagline: "I am looking for a genuine long-term relationship with a caring, fun man.",
    detail: "Age pref: 25–38 • Weekends free • Loves travel",
<<<<<<< HEAD
    initial: "P",
    color: "from-rose-500 to-pink-700",
=======
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
>>>>>>> design
    online: true,
    reward: "Willing to pay ₹8,000/meet",
  },
  {
    id: 2,
    name: "Rekha M.",
    age: 38,
<<<<<<< HEAD
    city: "Delhi",
=======
    city: "Chennai",
>>>>>>> design
    status: "widow",
    statusLabel: "Widow",
    tagline: "Life is short — want to enjoy quality time with a charming man who makes me smile.",
    detail: "Age pref: 28–42 • Evenings & weekends • Loves dining out",
<<<<<<< HEAD
    initial: "R",
    color: "from-fuchsia-500 to-purple-700",
=======
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
>>>>>>> design
    online: true,
    reward: "Willing to pay ₹12,000/meet",
  },
  {
    id: 3,
    name: "Sunita K.",
    age: 29,
<<<<<<< HEAD
    city: "Bangalore",
=======
    city: "Madurai",
>>>>>>> design
    status: "single",
    statusLabel: "Single",
    tagline: "Young professional, busy schedule — want someone fun & no-strings weekend company.",
    detail: "Age pref: 24–35 • Flexible timing • Loves adventure",
<<<<<<< HEAD
    initial: "S",
    color: "from-amber-500 to-orange-600",
=======
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
>>>>>>> design
    online: false,
    reward: "Willing to pay ₹6,000/meet",
  },
  {
    id: 4,
    name: "Kavitha R.",
    age: 44,
<<<<<<< HEAD
    city: "Hyderabad",
=======
    city: "Trichy",
>>>>>>> design
    status: "separated",
    statusLabel: "Separated",
    tagline: "Mature woman seeking affectionate man for regular meetups and genuine companionship.",
    detail: "Age pref: 28–45 • Afternoons • Homely type preferred",
<<<<<<< HEAD
    initial: "K",
    color: "from-emerald-500 to-teal-700",
=======
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
>>>>>>> design
    online: true,
    reward: "Willing to pay ₹10,000/meet",
  },
  {
    id: 5,
    name: "Anjali D.",
    age: 33,
<<<<<<< HEAD
    city: "Chennai",
=======
    city: "Salem",
>>>>>>> design
    status: "divorced",
    statusLabel: "Divorced",
    tagline: "Went through a bad marriage — just want joy, laughter and good company now.",
    detail: "Age pref: 26–40 • Weekends • Soft-spoken men preferred",
<<<<<<< HEAD
    initial: "A",
    color: "from-red-500 to-rose-700",
=======
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
>>>>>>> design
    online: true,
    reward: "Willing to pay ₹7,500/meet",
  },
  {
    id: 6,
    name: "Nisha P.",
    age: 26,
<<<<<<< HEAD
    city: "Pune",
=======
    city: "Erode",
>>>>>>> design
    status: "single",
    statusLabel: "Single",
    tagline: "Looking for a confident, stylish man to go on exciting dates and make memories.",
    detail: "Age pref: 23–34 • Evenings • Fitness-oriented preferred",
<<<<<<< HEAD
    initial: "N",
    color: "from-violet-500 to-indigo-700",
=======
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
>>>>>>> design
    online: false,
    reward: "Willing to pay ₹5,500/meet",
  },
  {
    id: 7,
    name: "Deepa V.",
    age: 39,
<<<<<<< HEAD
    city: "Kolkata",
=======
    city: "Vellore",
>>>>>>> design
    status: "widow",
    statusLabel: "Widow",
    tagline: "Feeling lonely after years — want a warm, respectful man for long-term companionship.",
    detail: "Age pref: 30–45 • Any time • Educated men preferred",
<<<<<<< HEAD
    initial: "D",
    color: "from-blue-500 to-cyan-700",
=======
    photo: "https://randomuser.me/api/portraits/women/57.jpg",
>>>>>>> design
    online: true,
    reward: "Willing to pay ₹9,000/meet",
  },
  {
    id: 8,
    name: "Meena J.",
    age: 35,
<<<<<<< HEAD
    city: "Ahmedabad",
=======
    city: "Tirunelveli",
>>>>>>> design
    status: "separated",
    statusLabel: "Separated",
    tagline: "Husband left me — life goes on. Seeking a fun, caring gigolo for regular companionship.",
    detail: "Age pref: 27–42 • Flexible • Sense of humour essential",
<<<<<<< HEAD
    initial: "M",
    color: "from-pink-500 to-rose-700",
=======
    photo: "https://randomuser.me/api/portraits/women/63.jpg",
>>>>>>> design
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
<<<<<<< HEAD
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
=======
              {/* Photo area */}
              <div className="relative">
                <div className="w-full h-44 overflow-hidden relative">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top filter blur-[3px] scale-105 group-hover:blur-[2px] transition-all duration-300"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                  {/* Name + city overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between">
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">{profile.name}</div>
                      <div className="flex items-center text-white/70 text-xs gap-1 mt-0.5">
>>>>>>> design
                        <MapPin className="w-3 h-3" /> {profile.city}
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className={`absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-card ${profile.online ? 'bg-green-400' : 'bg-gray-500'}`}></div>
=======
                  {/* Online indicator */}
                  <div className={`absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-card ${profile.online ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                  {/* Lock overlay — member only */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Lock className="w-5 h-5 text-white/60" />
                    </div>
                  </div>
>>>>>>> design
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
