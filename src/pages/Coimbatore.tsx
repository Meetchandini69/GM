import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, MessageCircle, Lock, ChevronRight, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Navbar,
  WhyChooseUs,
  HowItWorks,
  EarningsOpportunity,
  PricingPlans,
  RegisterSection,
  Footer,
} from '@/components/sections';

const CBE_PROFILES = [
  {
    id: 1, name: "Lakshmi A.", age: 34, area: "RS Puram",
    status: "divorced", statusLabel: "Divorced",
    tagline: "Looking for a caring, fun man for regular weekend companionship in Coimbatore.",
    detail: "Age pref: 26–40 • Weekends • Well-groomed preferred",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true, reward: "Willing to pay ₹9,000/meet",
  },
  {
    id: 2, name: "Meena S.", age: 41, area: "Peelamedu",
    status: "widow", statusLabel: "Widow",
    tagline: "Lonely after a long time. Want warmth, fun and no-pressure companionship.",
    detail: "Age pref: 30–45 • Evenings • Educated men preferred",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    online: true, reward: "Willing to pay ₹11,000/meet",
  },
  {
    id: 3, name: "Preethi R.", age: 27, area: "Saibaba Colony",
    status: "single", statusLabel: "Single",
    tagline: "Busy IT professional wanting fun dates and good company on weekends.",
    detail: "Age pref: 24–35 • Flexible • Fitness-oriented preferred",
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
    online: false, reward: "Willing to pay ₹6,500/meet",
  },
  {
    id: 4, name: "Kavitha N.", age: 38, area: "Gandhipuram",
    status: "separated", statusLabel: "Separated",
    tagline: "Seeking a genuine, affectionate gigolo for long-term company in Coimbatore.",
    detail: "Age pref: 28–42 • Afternoons • Homely type preferred",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    online: true, reward: "Willing to pay ₹8,500/meet",
  },
];

const STATUS_COLORS: Record<string, string> = {
  divorced: "text-amber-400 bg-amber-400/10",
  widow: "text-purple-400 bg-purple-400/10",
  single: "text-green-400 bg-green-400/10",
  separated: "text-blue-400 bg-blue-400/10",
};

const STATS = [
  { label: 'Women Registered', value: '843+' },
  { label: 'Online Right Now', value: '127' },
  { label: 'New Profiles Today', value: '24' },
  { label: 'Avg. Earnings/Month', value: '₹75K' },
];

const AREAS = [
  'RS Puram', 'Gandhipuram', 'Peelamedu', 'Saibaba Colony',
  'Singanallur', 'Vadavalli', 'Ondipudur', 'Kuniyamuthur',
  'Thudiyalur', 'Kovaipudur', 'Pollachi Road', 'Mettupalayam Road',
];

export default function Coimbatore() {
  useEffect(() => {
    document.title = "Gigolo Job in Coimbatore | Earn ₹50K–₹2L/Month — GigoloClub.in";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Find gigolo jobs in Coimbatore. Meet lonely, divorced and single women in RS Puram, Gandhipuram, Peelamedu and more. Free registration on GigoloClub.in. 100% private."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Coimbatore</span>
            </div>

            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              <MapPin className="w-3.5 h-3.5 mr-2" /> Coimbatore, Tamil Nadu
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Gigolo Job in{' '}
              <span className="text-primary">Coimbatore</span>
              <br />Earn ₹50K–₹2L/Month
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              843+ lonely, divorced and single women in Coimbatore are looking for a gigolo right now — in RS Puram, Gandhipuram, Peelamedu and all major areas. Register free and start earning today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold text-base px-10 h-12" asChild>
                <a href="#register">Register Free — Start Today →</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/40 text-white hover:bg-primary/10 h-12" asChild>
                <a href="#gallery">View Women Profiles</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-card border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Women profiles ── */}
        <section className="py-20 bg-card" id="gallery">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Women in <span className="text-primary">Coimbatore</span> Waiting Right Now
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These women posted profiles on GigoloClub.in looking for a gigolo in Coimbatore. Register free to see their full contact.
              </p>
            </div>

            {/* Urgency bar */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-3 bg-background border border-white/10 rounded-full px-5 py-2.5 text-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-green-400 font-semibold">127 women online in Coimbatore</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {CBE_PROFILES.map((profile, index) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl bg-background border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 gold-glow-hover flex flex-col"
                >
                  <div className="relative">
                    <div className="w-full h-44 overflow-hidden relative">
                      <img
                        src={profile.photo}
                        alt={profile.name}
                        className="w-full h-full object-cover object-top filter blur-[3px] scale-105 group-hover:blur-[2px] transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="text-white font-bold text-lg leading-tight">{profile.name}</div>
                        <div className="flex items-center text-white/70 text-xs gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" /> {profile.area}, Coimbatore
                        </div>
                      </div>
                      <div className={`absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-card ${profile.online ? 'bg-green-400' : 'bg-gray-500'}`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                          <Lock className="w-5 h-5 text-white/60" />
                        </div>
                      </div>
                    </div>
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
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[profile.status]}`}>
                        {profile.statusLabel}
                      </span>
                      <span className="text-sm text-muted-foreground">Age {profile.age}</span>
                    </div>
                    <p className="text-sm text-gray-300 italic leading-snug flex-1">"{profile.tagline}"</p>
                    <p className="text-[11px] text-muted-foreground">{profile.detail}</p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-center">
                      <span className="text-primary text-xs font-bold">{profile.reward}</span>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" asChild>
                      <a href="#register"><MessageCircle className="w-4 h-4 mr-2" /> Message Her</a>
                    </Button>
                    <p className="text-[10px] text-muted-foreground text-center">Register free to unlock contact</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold px-10 h-12" asChild>
                <a href="#register">View All 843 Coimbatore Profiles →</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Areas covered ── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                All Areas in <span className="text-primary">Coimbatore</span> Covered
              </h2>
              <p className="text-muted-foreground">Women registered from every major locality in Coimbatore city.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {AREAS.map((area) => (
                <a
                  key={area}
                  href="#register"
                  className="inline-flex items-center gap-1.5 bg-card border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-white cursor-pointer"
                >
                  <MapPin className="w-3 h-3 text-primary" />
                  {area}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trust badges ── */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Shield, title: '100% Private & Discreet', desc: 'Your identity is never revealed. All profiles are confidential.' },
                { icon: Star, title: 'Verified Women Only', desc: 'All women profiles in Coimbatore are manually reviewed.' },
                { icon: Clock, title: 'Free Registration', desc: 'Sign up in 2 minutes and start browsing profiles instantly.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO content ── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
                Gigolo Jobs in Coimbatore — Complete Guide
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground text-sm leading-relaxed">
                <div>
                  <h3 className="text-white font-semibold text-base mb-3">What is a Gigolo Job in Coimbatore?</h3>
                  <p className="mb-4">A gigolo in Coimbatore is a male companion who meets lonely, divorced, widowed or single women for paid companionship. GigoloClub.in connects verified men with women in Coimbatore's RS Puram, Gandhipuram, Peelamedu and other areas who seek genuine company and are willing to pay ₹5,000–₹20,000 per meeting.</p>
                  <h3 className="text-white font-semibold text-base mb-3">How Much Can I Earn?</h3>
                  <p>Gigolos in Coimbatore typically earn ₹50,000–₹2,00,000 per month depending on availability and profile quality. Members on Gold and Platinum plans get priority matching and earn 3–5× more.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-3">Call Boy Jobs in Coimbatore</h3>
                  <p className="mb-4">Call boy and playboy jobs in Coimbatore are in high demand. Many women — especially professionals, divorced women and widows in areas like Saibaba Colony and Vadavalli — are looking for discreet, paid male companionship through trusted platforms like GigoloClub.in.</p>
                  <h3 className="text-white font-semibold text-base mb-3">Male Escort Jobs — Coimbatore</h3>
                  <p>Male escort and gigolo services in Coimbatore are completely private. Your name, photo and contact are visible only to matched women members. Register free to get started today.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <HowItWorks />
        <EarningsOpportunity />
        <PricingPlans />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}
