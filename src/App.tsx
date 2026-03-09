import React, { useState, useEffect } from 'react';
import { 
  Castle, 
  Calendar, 
  MapPin, 
  Palette, 
  Music, 
  Sparkles, 
  ArrowRight, 
  Quote, 
  Mail, 
  Phone, 
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  ChevronRight,
  Search,
  Users,
  Utensils
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Featured', href: '#weddings' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 px-6 lg:px-20 py-4 flex items-center justify-between ${
        isScrolled ? 'bg-bg-light/90 backdrop-blur-md border-b border-primary/20 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <Castle className="text-primary w-8 h-8" />
        <h1 className={`serif-font text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
          Divine Events
        </h1>
      </div>

      <nav className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className={`text-sm font-semibold uppercase tracking-widest hover:text-primary transition-colors ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="bg-primary hover:bg-primary-dark text-bg-dark px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20 hidden sm:block">
          Plan Your Event
        </button>
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-light border-b border-primary/20 p-6 flex flex-col gap-4 lg:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-semibold uppercase tracking-widest text-slate-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-bg-dark px-6 py-3 rounded-full font-bold text-sm">
              Plan Your Event
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7CIiy1THzrfzm8NVK0XAs1XIx_0SvtiE-4ZUcvO7GlaxPxRRl1WFPDmrUR4D-fJvF5U6wKkVp8w0Evzb_Aeq8pg-YnbOlLD4o99OjYhwD16pFbC9Z_rr6lDDaXDyhFPFSZnDuRy41GYffdi51CeqcAqhZqBqLWpwJY_mHLCP8IxpeEd8_0JQJof7z7tlNDcKTWkRXBgVauScCZAy859ZArUG2PRl5jiqtVMZacx_28TKO4IQ7ceo88qz1ux7teov4k_rzy_ufp4M')" }}
        ></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-4 max-w-5xl"
      >
        <h1 className="serif-font text-5xl md:text-8xl text-white mb-6 leading-tight">
          Divine Events: <br/> 
          <span className="italic font-normal text-primary">Luxury Weddings & Royal Celebrations</span>
        </h1>
        <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Crafting unforgettable weddings and extraordinary events across Rajasthan and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-bg-dark px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30">
            Plan Your Event
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
            View Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto" id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 border border-primary/30 rounded-lg group-hover:inset-0 transition-all duration-500"></div>
          <img 
            className="rounded-lg shadow-2xl relative z-10 w-full h-[600px] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMJ6QXtmpyi3MYextu-0ocOSLjS_smCxQIz-rF_CctpeyOW9HI48BksDV1djkHOj4-jU2aPpr0lVhvLYSLVrlN79j3hpyS08Tgg3qzz55vicMTDnN7gIuCFfhI-rWCLdkdPlCiSGW6k6Bi6rbR2xXx2E204wpMWs7OIMuCpnwcm-cbPPPQkVHe15tgFLnn43dhq3HdznvXCrgJYOJkAehMjSE1SSi3DTra1t8RNtGNM_Xz1VvsvXmywE6I5m_MaY9jS4EpU99IQIA" 
            alt="Heritage Haveli"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase block mb-4">Our Heritage</span>
          <h2 className="serif-font text-4xl md:text-5xl mb-8 leading-snug">Timeless Elegance in the Heart of Rajasthan</h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Specializing in Mandawa & Shekhawati heritage venues, Divine Events brings the opulence of the Rajputana era to your special day. Our deep-rooted connection with frescoed havelis and majestic palaces allows us to curate experiences that are historically rich and modernly luxurious.
          </p>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            From the whispered secrets of ancient corridors to the grand spectacle of a palace courtyard, we ensure every detail resonates with royal finesse.
          </p>
          <div className="flex gap-10">
            <div>
              <span className="text-primary text-4xl font-bold serif-font">15+</span>
              <p className="text-sm font-bold uppercase tracking-widest mt-2">Years Experience</p>
            </div>
            <div>
              <span className="text-primary text-4xl font-bold serif-font">200+</span>
              <p className="text-sm font-bold uppercase tracking-widest mt-2">Royal Weddings</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Calendar />, title: 'Wedding Planning', desc: 'Full-service boutique planning from inception to the last dance.' },
    { icon: <Search />, title: 'Destination Weddings', desc: 'Scouting and managing breathtaking locations across the globe.' },
    { icon: <Castle />, title: 'Heritage Palace Weddings', desc: "Exclusive access to Rajasthan's most prestigious private palaces." },
    { icon: <Palette />, title: 'Event Design', desc: 'Bespoke decor conceptualized to reflect your unique personal story.' },
    { icon: <Music />, title: 'Entertainment', desc: 'A fusion of traditional Rajasthani folk and modern global acts.' },
    { icon: <Sparkles />, title: 'Fireworks & Drone Shows', desc: 'Spectacular aerial storytelling to light up the desert sky.' },
  ];

  return (
    <section className="py-24 bg-primary/5" id="services">
      <div className="px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl mb-4">Exquisite Services</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-xl border border-primary/10 hover:border-primary/50 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="text-primary w-12 h-12 mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon as React.ReactElement, { size: 48, strokeWidth: 1.5 })}
              </div>
              <h3 className="serif-font text-2xl mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedWeddings = () => {
  const weddings = [
    {
      title: 'Mandawa Palace Wedding',
      desc: 'A legacy of love amidst frescoed walls and ancient history.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeDTeZnR27zxXRPxzP6TKDpyr6NAtYd9xos31NFWu9MU1ErcpDGY6LIHekjGvWTjy2-2B_KK-QVzJHwGarc4Rklcmq2Buairxp2FdJF6sQLK5CKdZQE6GR-g2i-amC4tyxOiq5s4QrKVQEQKrNz9PouS6cWvBLdQnVNKsDBww0BEt_Hofa08F7jyJCiva2z1BfZUOTgtlwR0ruZ3pfjrY4_DSOgzc7MYvtXtQdl39RDPOcIA6731GEfJZS4Nt3o6NzGoFXR8M2EsI'
    },
    {
      title: 'Udaipur Lake Palace',
      desc: 'Romantic waterside elegance with panoramic palace views.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm6sus5hv183UfDXWrFVIbEoznRH7YBCrEVbj_JbCxDa1tqQ0N2NSjKmgTVtzRONn2f74jf3EZvKXZFKbJkcVEEUxkJziRiTvQAyVrs-vPKYguS-1kLqvSPrN-y4Pt9Bqpcmvn9q5nJdt-gNbwd61ncih48D-eMeNEMQC1fM1FjOxaw2PfSLsnWexqzkK3gSNwB8huua-JInyBnu3nhYHVHjTKlO-I_fFcS9Be8GWcW2Gx6MTGacGNF2euVKiLH3tlc-Xmjknp8Ts'
    },
    {
      title: 'Royal Haveli Celebration',
      desc: 'Intimate yet opulent festivities in an architectural masterpiece.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH83q1el1oAjE2oSMHSIivZYlg4K4TGdz4CohABrQM-7kOxzcF9WowuJ7N1wg7jLSo5jEAQlXetrPql-DrnI_oh9lQsld3s-gM5Faj-wdF1Hfo-qDHshesvahjq-jIII_jBlkUma-7MZg-FGYrZR0vcixJyc9kSaLn-ZmWIjnISt7TBR_zTZX8Z80w_ACvis_vumGMGdiwGYPWqwGZ9TU1fnHCSVfla1xByn4oxYtXnfOyGl5ek0bFR79d7EhRWi8PEVeMAYt4qlI'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto" id="weddings">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="text-primary font-bold tracking-[0.3em] uppercase block mb-4">The Gallery</span>
          <h2 className="serif-font text-4xl md:text-5xl">Featured Celebrations</h2>
        </div>
        <button className="text-primary font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all group">
          View All Weddings <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {weddings.map((wedding, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" 
              src={wedding.img} 
              alt={wedding.title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-maroon/90 to-transparent flex flex-col justify-end p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="serif-font text-2xl mb-2">{wedding.title}</h4>
              <p className="text-white/80 text-sm mb-4">{wedding.desc}</p>
              <a className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2" href="#">
                Read Story <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD2TRvJvpEc2rTWHivt-J03AyE6supV07s_Wl3lzx1ydLz8alZ3s64VakJjcKvxw_hQIv0bt6UeawQFpdj271bPvJ6hvJoqP_0Dm1ndladtXxsRPgEoJgbAyRRmEFa2fsUiXzYvcDzJGDudoOEG_l11o74AOYzI8bree_E8PjuFFNJPchF1lU96ZwHJ-rJUqtXnq-ALJ-EVm201wkiBXsOFPIadzjDP6liz3BYuwnKbJ6aibNaRJvISHqLN9xEYlCCNk0YNjL8rqN0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAGHPEqBLAubpPFC6vxqv3E3OTbbN2lh6wvDxQvxs69F3dulhpwAI2X8XojSn2WpDhq0iDlwywCBb5po1cKbaMfnQIjak5owoAyWu7a4A3zt5XiJe5UsVPwXuuGrj9JAwbrbDGjnMNHeZ79_rhmJd82FdkSuyvE9MTfVyLFFO91XKjBRWvwS7GYh1vo3RHQ_7qWJsah43S3eWy07P1bNpn-Rto3LMBjsMQWHq_BG7nff9IJW2tYb-0wyEhZyRz4GBar2zLFzNciAFg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDYrERQTu8n7BESP7BOQZ9pKF2q8H8DA7Pu0ri-vKeWOlvzuGTSMKs4ClAdK6XcMQ9kp9Yz2p79qHLfYwjx-2Wdr4spLdj-ciX0KHdAIxT1ekEkLL9oPuUedZxihYFQzXr7rfw5sgTTWG_Dyqonyd2OjHig4nERl1yo0L_gwA__XpNfP3dmPvX7yWXf4mrGn5C1F7POIKaKVyN7ucDP4_j97iKR3A7NaYRJfjxyDWmF7Er_60pHBUBrwc7vGxNe3zwkdVoRhuuoPrw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBdFI6BDVfZDWrj9B40S5vWd_qLJkE6yPIBy0Rrw9cw2JfqztmmGWDkCBKFQmoR6MzaNvbRLpP4hUO_lXKyAtylovpjuTqyFgC3seOtY0aLuZJ6FYFXk4Xa7PAk0Q8djIYYW5w82AVz5fXWsLPbN0ccRD8lrEttFx3tkExihr2EGyPdalknw7KMadgtBUGVARCnK6HL404zNVeigG7hXeBUWZRPtjzXipLe9HAKVVXXme1KuUltr_sMXTBaBDsKHwz7kKVLqrlDchY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCWO5mXECixuXF0D0Fkxji2lJkeNQ-Cnk1qnEdG4OCB6oKXq4rlDseY8gncsKW1zjqJ-MsKWLIRHxs4OZwROfW-x5-FmVT0CWSnyWwIe9ASILiY-lB9Wr2Ufk7tlRIdrV_Iua8JeMiyzQeWU_pjfYTkwGjcciKb6XgDSzu1Mgb9ex84aN7F7eD3oHHu9aoqFPEep94EIcE3vpPqcxZM2T0NSotyda_h5MZ5bOKxqNFFBhXkfaLnKOcTcis_0OLyMdylg3hRKS1Fvsc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3pCp0FkDpGjm7evK2LLzPbcEcmQzNlPVTMpw1vHQqQLAEvERXtvZg8A8dOOZaSnnDrAELAoKKmtzfTS52CzlLh3014m0l16vTmvDUOPkZ0Z6iEAPFMDdJ172ZaCxUpLi0ywv6WHVA_0tfU5WZnDKop2HKLSIJjIvTu3rQBpvplxdPQ0MQC9yy6reGESGr9RwYYfrp2iloAIzkt_TxeRwWjoOCW4UR6rc8LdiFsg6JHPaBu_gcDTV3jkk-_MA75RbzR8wudjEX46Q'
  ];

  return (
    <section className="py-24 px-6 lg:px-20" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl mb-4 italic">Breathtaking Moments</h2>
          <p className="text-slate-500 max-w-xl mx-auto">A glimpse into the extraordinary worlds we create for our couples.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img 
                className="w-full hover:scale-105 transition-transform duration-500 cursor-pointer" 
                src={img} 
                alt={`Portfolio ${idx}`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Understanding your vision and royal aspirations.' },
    { num: '02', title: 'Concept', desc: 'Developing bespoke mood boards and themes.' },
    { num: '03', title: 'Venue', desc: 'Securing exclusive palace and haveli locations.' },
    { num: '04', title: 'Coordination', desc: 'Managing vendors, logistics, and planning.' },
    { num: '05', title: 'Setup', desc: 'Transforming the space with artisans and decor.' },
    { num: '06', title: 'Execution', desc: 'The flawless realization of your dream day.' },
  ];

  return (
    <section className="py-24 bg-accent-maroon text-white overflow-hidden">
      <div className="px-6 lg:px-20 max-w-7xl mx-auto">
        <h2 className="serif-font text-4xl text-center mb-20">The Royal Journey</h2>
        <div className="flex overflow-x-auto pb-10 gap-12 scrollbar-hide">
          {steps.map((step, idx) => (
            <div key={idx} className="min-w-[200px] flex-1 text-center relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 text-bg-dark font-bold text-xl shadow-lg shadow-primary/20">
                {step.num}
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 w-full h-[1px] bg-white/20 -z-0"></div>
              )}
              <h5 className="font-bold uppercase tracking-widest text-sm mb-2">{step.title}</h5>
              <p className="text-white/60 text-xs px-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MandawaExperience = () => {
  const features = [
    { icon: <Users />, title: 'Traditional Processions', desc: 'Regal elephant and horse-led baraats through the historic lanes of Mandawa.' },
    { icon: <Music />, title: 'Folk Artisanship', desc: 'Live performances by Manganiyar musicians and Kalbelia dancers under the desert stars.' },
    { icon: <Utensils />, title: 'Royal Gastronomy', desc: 'Authentic Rajasthani feasts curated by heritage chefs in palace courtyards.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase block mb-4">Exclusive Curations</span>
          <h2 className="serif-font text-4xl md:text-5xl mb-8">The Mandawa Experience</h2>
          <div className="space-y-8">
            {features.map((f, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-primary/20 flex items-center justify-center rounded-lg text-primary">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                  <p className="text-slate-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <img 
            className="rounded-2xl shadow-2xl border-4 border-primary/20 w-full h-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRDW4yVr32AC3_9n4e04O-iHbvTBJQT9W2_2us35r9hXcvsnTrsH9wyel6pPjY-eeD6jCf1NbAqPk9LxKkaUOKb898kQRUbf43dd1NH2KTIIC88Gr-mrp2aRqljHS_4XV2IB1e8F-WT7WSswIEVF0M8uQ2vPhqmvFX9geMe06q_eXuPZSXvXFbOCWoO3tq7iA4ERwzEJDeYbgmyIcTJXxvCz93lmX2J9FduUNJ_ozPNoFiEQ4glndwRnLpNoO8Xs5tRcb2FKUrypU" 
            alt="Rajasthani Folk Music"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote className="text-primary w-16 h-16 mx-auto mb-8 opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="serif-font text-2xl md:text-3xl italic text-slate-700 mb-12 leading-relaxed">
            "Divine Events didn't just plan a wedding; they created a legacy for our family. Every guest felt like royalty in the heart of Mandawa. The attention to detail and the palace venue they secured was beyond our wildest dreams."
          </p>
          <div className="flex items-center justify-center gap-4">
            <img 
              className="w-16 h-16 rounded-full object-cover border-2 border-primary" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqXCtZJLqa7UW3GXVg0vE36m_21GDLWb3HRJClbhG5BLaOBBihMwOS0GabzFNiwEUMGwWzANgR50u0wiWGTMKbFMnMgB_3nQxYQbM2lufoovYaQleoFZ1CyCgV6IT2luFuh4432D-fNvR4rlA_Wi5IeTwuy8JcWAtQ67A3yaaqiNPICZZmav2Mz0GiQlXOYy_naCciGLoEAq2IA_MGbKWmNp6X9YiFEUNZ7Aj3ocyCQj2m4LO4zeoJqu3emwxuRMoeRr6PzpUT9ko" 
              alt="Priyanka & Arjun"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <h5 className="font-bold text-lg">Priyanka & Arjun</h5>
              <p className="text-slate-500 text-sm">Mandawa Palace Wedding, Nov 2023</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto" id="contact">
      <div className="bg-bg-dark text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/3 p-12 bg-accent-maroon flex flex-col justify-between">
          <div>
            <h2 className="serif-font text-4xl mb-6">Begin Your Story</h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              Inquire today to start conceptualizing your royal celebration in Rajasthan. Our advisors are ready to bring your vision to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-primary w-5 h-5" />
                <span className="text-sm">Mandawa, Shekhawati, Rajasthan</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary w-5 h-5" />
                <span className="text-sm">royalevents@divine.in</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primary w-5 h-5" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
          </div>
          <button className="mt-12 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-all w-full">
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </button>
        </div>
        <div className="lg:w-2/3 p-12 bg-white">
          <form 
            className="grid md:grid-cols-2 gap-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                eventDate: formData.get('eventDate'),
                location: formData.get('location'),
                guestCount: formData.get('guestCount'),
                budget: formData.get('budget'),
                message: formData.get('message'),
              };

              try {
                const response = await fetch('/api/inquiry', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                });
                const result = await response.json();
                if (result.success) {
                  alert("Thank you! Your royal inquiry has been received.");
                  (e.target as HTMLFormElement).reset();
                } else {
                  alert("Something went wrong. Please try again.");
                }
              } catch (error) {
                console.error("Submission error:", error);
                alert("Failed to connect to the server.");
              }
            }}
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
              <input name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Name" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
              <input name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Email Address" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Event Date</label>
              <input name="eventDate" required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Preferred Location</label>
              <select name="location" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                <option>Mandawa</option>
                <option>Udaipur</option>
                <option>Jaipur</option>
                <option>Jodhpur</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Guest Count</label>
              <input name="guestCount" required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Estimated Guests" type="number" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Budget Range</label>
              <select name="budget" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                <option>Luxury (₹50L - ₹1Cr)</option>
                <option>Elite (₹1Cr - ₹5Cr)</option>
                <option>Royal (₹5Cr+)</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
              <textarea name="message" required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Tell us about your dream wedding..." rows={4}></textarea>
            </div>
            <button type="submit" className="md:col-span-2 bg-primary hover:bg-primary-dark text-bg-dark py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/20">
              Request a Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-light border-t border-primary/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Castle className="text-primary w-10 h-10" />
              <h2 className="serif-font text-3xl font-bold tracking-tight">Divine Events</h2>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Rajasthan's premier luxury wedding planner specializing in heritage celebrations, palace weddings, and cultural storytelling.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <Instagram className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <Facebook className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-6">Service Areas</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Jaipur Weddings</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Udaipur Weddings</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Mandawa Heritage</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Delhi NCR</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Jodhpur Palaces</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-6">Navigation</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#about">Our Story</a></li>
              <li><a className="hover:text-primary transition-colors" href="#services">Luxury Services</a></li>
              <li><a className="hover:text-primary transition-colors" href="#portfolio">Portfolio Gallery</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Press & Media</a></li>
              <li><a className="hover:text-primary transition-colors" href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs text-center md:text-left">
          <p>© 2024 Divine Events Private Limited. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedWeddings />
      <Portfolio />
      <Process />
      <MandawaExperience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
