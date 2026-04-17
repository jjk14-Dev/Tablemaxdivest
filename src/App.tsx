import { motion } from 'motion/react';
import {
  Trophy,
  ShieldCheck,
  TrendingUp,
  Users,
  ChevronRight,
  Mail,
  Gamepad2,
  Cpu,
  Award,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-zinc-50 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center cursor-pointer">
            <img src="/image/Logo_TableMAX.png" alt="Table Max" className="h-10" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#opportunity" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors font-medium">Opportunity</a>
            <a href="#product" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors font-medium">Product</a>
            <a href="#library" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors font-medium">Library</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all text-sm font-medium text-emerald-400"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-6 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Strategic Asset Contribution & Investment
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              The World's Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Electronic Table Game</span>
            </h1>
            <div className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl space-y-4">
              <p>
                Visionary ideas are often born too early. For 20+ years, we've refined our product's UX with an obsessive focus on the player, earning a dedicated cult following with each install. We have built a solid foundation, fortified by numerous GLI approvals.
              </p>
              <p className="text-emerald-400 font-semibold">
                Now, AI has caught up to our vision, and the opportunity is immense.
              </p>
              <p>
                Our eTable platform is the engine, embedded SaaS is the business model, AI is the catalyst, and global eTable disruption is the result.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#opportunity" className="group px-8 py-4 rounded-full bg-emerald-500 text-[#0a0f1a] font-semibold hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2">
                Explore the Product <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Product Image */}
            <div className="aspect-[4/3] rounded-2xl bg-[#0d1526] border border-white/10 overflow-hidden relative group shadow-2xl shadow-emerald-500/5">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none z-20 rounded-2xl" />
              <img
                src="/image/DSC_0014.JPG"
                alt="Table Max Electronic Table Game Device"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 border-y border-white/5 bg-[#0d1526]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, label: "Years Development", value: "20+", color: "text-emerald-400" },
              { icon: ShieldCheck, label: "Extensive Certification", value: "GLI", color: "text-rose-400" },
              { icon: TrendingUp, label: "Years Active Floor", value: "10+", color: "text-sky-400" },
              { icon: Users, label: "Player Following", value: "Cult", color: "text-violet-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-4 py-4 rounded-xl"
              >
                <stat.icon className={`w-7 h-7 ${stat.color} mb-4`} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section id="opportunity" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Opportunity</h2>
          <div className="text-xl text-zinc-400 leading-relaxed space-y-4">
            <p>
              We are seeking a strategic partner for the purposeful transition of the world's premier eTable—a proven, refined operational asset positioned for AI-driven scale. Rather than a traditional sale, we are pursuing a strategic contribution of our technology into a partner's portfolio.
            </p>
            <p className="text-emerald-400 font-semibold">
              We are focused on two specific investment paths:
            </p>
            <p>
              (1) Integrating our product, software library, and IP into a corporate entity to bolster an established line,
            </p>
            <p className="text-center text-zinc-500 font-medium">or</p>
            <p>
              (2) Seeding these assets into an AI startup that will leverage AI and an embedded SaaS model for global eTable operations. This option potentially includes follow-on cash investment from us.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Proven Performance",
              desc: "Consistent revenue generation with metrics outperforming traditional table games. Currently installed in locations for over 10 years, performing at the higher end of all gaming devices.",
              icon: TrendingUp,
              gradient: "from-emerald-500/10 to-transparent"
            },
            {
              title: "Regulatory Ready",
              desc: "Extensive GLI approvals and base approvals are already in place for most US markets, significantly reducing time-to-market and regulatory risk.",
              icon: ShieldCheck,
              gradient: "from-teal-500/10 to-transparent"
            },
            {
              title: "Player Retention",
              desc: "Unmatched stickiness. Once players try Table Max, they return for the unique side bets and pacing. The device has developed a dedicated cult following.",
              icon: Users,
              gradient: "from-cyan-500/10 to-transparent"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-[#0d1526] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Characteristics Table */}
      <section id="product" className="py-24 px-6 bg-[#0d1526]/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Product Characteristics</h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-medium">Characteristic</th>
                  <th className="py-4 px-6 font-medium">Details</th>
                  <th className="py-4 px-6 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { label: "Product Type", value: "Electronic Table Game (ETG) / Video Gaming Device", status: "Fully Developed", statusColor: "bg-emerald-500/10 text-emerald-400" },
                  { label: "Development History", value: "Over 20 years of continuous UX and software refinement", status: "Mature", statusColor: "bg-sky-500/10 text-sky-400" },
                  { label: "Regulatory Status", value: "Extensive GLI approvals; Base approvals in most US markets", status: "Approved", statusColor: "bg-emerald-500/10 text-emerald-400" },
                  { label: "Market Performance", value: "Top-tier performance among facility gaming devices", status: "Top Tier", statusColor: "bg-violet-500/10 text-violet-400" },
                  { label: "Installation Longevity", value: "Proven stability with 10+ year active installations", status: "Active", statusColor: "bg-emerald-500/10 text-emerald-400" },
                  { label: "Player Engagement", value: "High retention, dedicated player base ('cult following')", status: "Strong", statusColor: "bg-teal-500/10 text-teal-400" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 font-medium text-zinc-200 whitespace-nowrap">{row.label}</td>
                    <td className="py-5 px-6 text-zinc-400">{row.value}</td>
                    <td className="py-5 px-6">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Exclusive Games */}
      <section id="library" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Exclusive Game Library</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We hold exclusive rights to several games for the video device segment, including <strong className="text-emerald-400">Caribbean Stud Poker, Progressive Blackjack, Bonus Blackjack, Blackjack Bullets, Roulette 21 and other popular electronic table game titles</strong>.
            </p>
          </div>

          {/* Game cards hidden for now
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Caribbean Stud Poker", subtitle: "Classic table game with electronic precision" },
              { title: "Multi-Game Platform", subtitle: "Expandable library with proven player appeal" }
            ].map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group aspect-video rounded-xl bg-[#0d1526] border border-white/10 overflow-hidden relative hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 z-10">
                  <Gamepad2 className="w-16 h-16 mb-4 text-emerald-500/20" />
                  <p className="font-bold text-xl text-white">{game.title}</p>
                  <p className="text-sm text-zinc-400 mt-2">{game.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
          */}
        </div>
      </section>



      {/* Contact Form */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-3xl bg-[#0d1526] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg text-zinc-400">
                  Let's discuss this opportunity.
                </p>
              </div>

              <form
                action="https://formspree.io/f/mvzdpvbr"
                method="POST"
                className="space-y-6"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0f1a] border border-white/10 text-zinc-100 placeholder-zinc-600 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0f1a] border border-white/10 text-zinc-100 placeholder-zinc-600 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Contact details..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0f1a] border border-white/10 text-zinc-100 placeholder-zinc-600 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all resize-none"
                  />
                </div>

                {/* Honeypot for spam protection */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 text-[#0a0f1a] font-bold hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/25 text-lg cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src="/image/Logo_TableMAX.png" alt="Table Max" className="h-6" />
          </div>
          <p className="text-sm text-zinc-600">Copyright &copy; 2026 Vegas Amusement, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
