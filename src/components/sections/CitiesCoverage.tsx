import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const CITIES = [
  { name: 'Mumbai', count: 1423, img: 'from-orange-900 to-amber-900' },
  { name: 'Delhi', count: 1285, img: 'from-blue-900 to-indigo-900' },
  { name: 'Bangalore', count: 912, img: 'from-green-900 to-emerald-900' },
  { name: 'Hyderabad', count: 756, img: 'from-purple-900 to-fuchsia-900' },
  { name: 'Chennai', count: 610, img: 'from-rose-900 to-red-900' },
  { name: 'Pune', count: 584, img: 'from-cyan-900 to-blue-900' },
  { name: 'Kolkata', count: 465, img: 'from-yellow-900 to-amber-900' },
  { name: 'Ahmedabad', count: 342, img: 'from-teal-900 to-emerald-900' },
  { name: 'Jaipur', count: 298, img: 'from-pink-900 to-rose-900' },
  { name: 'Surat', count: 245, img: 'from-sky-900 to-indigo-900' },
  { name: 'Lucknow', count: 186, img: 'from-violet-900 to-purple-900' },
  { name: 'Chandigarh', count: 174, img: 'from-fuchsia-900 to-pink-900' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export function CitiesCoverage() {
  return (
    <section className="py-24 bg-card" id="cities">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Women Waiting in <span className="text-primary">Your City</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We have active women members across every major Indian city — lonely, verified, and ready to meet a gigolo like you. Pick your city and start earning.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {CITIES.map((city) => (
            <motion.a
              key={city.name}
              href="#register"
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-background hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 gold-glow-hover cursor-pointer block"
            >
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${city.img} group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className="relative p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Heart className="w-5 h-5 text-primary fill-current" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{city.name}</h3>
                <p className="text-sm text-primary/80 font-semibold">{city.count.toLocaleString('en-IN')} Women</p>
                <p className="text-[11px] text-muted-foreground mt-1">seeking gigolo</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
