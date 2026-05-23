import { useState } from "react";
import { ArrowRight, Sparkles, Heart, Compass, Users, MessageCircleHeart, Sun, Moon, CheckCircle2 } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import creatorAlejandra from "@/assets/creator-alejandra.jpg";
import founderPhoto from "@/assets/founder.jpg";

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl tracking-tight text-foreground">
          elara<span className="text-accent">.</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#product" className="hover:text-foreground transition">Inside Elara</a>
          <a href="#community" className="hover:text-foreground transition">Community</a>
        </nav>
        <a href="#waitlist" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
          Join waitlist
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" aria-hidden />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs tracking-wide uppercase text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Founding waitlist open
          </span>
          <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4.5rem] text-foreground text-balance">
            A 7-day AI reset for ambitious women who are tired of carrying everything alone.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Elara helps you rebuild clarity, confidence, daily structure, and emotional support —
            starting with one guided check-in at a time.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#waitlist" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-base font-medium shadow-soft hover:translate-y-[-1px] transition">
              Join the waitlist
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-base font-medium text-foreground hover:bg-card transition">
              See how it works
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Built quietly. Launching soon. Free for founding members.</p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-sm animate-float">
            <div className="absolute -inset-6 bg-gradient-warm rounded-[2rem] blur-2xl opacity-60" aria-hidden />
            <img
              src={heroPortrait}
              alt="A woman in a quiet moment of reflection"
              width={1024}
              height={1280}
              className="relative rounded-[2rem] shadow-soft object-cover w-full aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur rounded-2xl shadow-card p-4 max-w-[220px] border border-border/60">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-accent font-medium">
                <Sun className="h-3.5 w-3.5" /> Day 3 · Morning
              </div>
              <p className="mt-2 text-sm text-foreground leading-snug">
                "What part of you needs softness today?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-16 border-y border-border/50 bg-card/40">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 grid sm:grid-cols-[auto_1fr] gap-8 items-center">
        <div className="flex items-center gap-4">
          <img src={creatorAlejandra} alt="Alejandra Ramirez" width={640} height={640} loading="lazy"
            className="h-16 w-16 rounded-full object-cover ring-2 ring-accent/40" />
          <div>
            <p className="text-sm uppercase tracking-wider text-accent">Creator partner</p>
            <p className="font-serif text-xl text-foreground">Alejandra Ramirez</p>
            <p className="text-xs text-muted-foreground">2.8M+ social audience</p>
          </div>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Built with creator-led community insights and early input from women navigating
          <em className="text-foreground/80 not-italic"> ambition, burnout, dating, identity, and reinvention.</em>
        </p>
      </div>
    </section>
  );
}

const problems = [
  { icon: Sun, title: "You're high-functioning but exhausted", body: "You deliver. You show up. And quietly, you've been running on empty for months." },
  { icon: Compass, title: "You want structure without pressure", body: "Not another rigid productivity system — something that meets you where you are." },
  { icon: Heart, title: "You crave softness, but still want to grow", body: "Rest and ambition aren't opposites. You're allowed both, at the same time." },
  { icon: MessageCircleHeart, title: "You want support that understands you", body: "Not a generic chatbot. Guidance that actually gets your culture, your context, your weight." },
];

function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">If this sounds familiar</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
            You don't need another app. You need a quiet place to land.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="group rounded-3xl border border-border/70 bg-card p-7 shadow-card hover:shadow-soft transition">
              <div className="h-11 w-11 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const screens = [
  { label: "Onboarding", caption: "Where are you, really?", tint: "from-[oklch(0.93_0.04_60)] to-[oklch(0.82_0.08_50)]" },
  { label: "Daily reset", caption: "A 4-minute ritual.", tint: "from-[oklch(0.9_0.06_70)] to-[oklch(0.78_0.11_75)]" },
  { label: "AI reflection", caption: "Elara, listening.", tint: "from-[oklch(0.86_0.07_45)] to-[oklch(0.62_0.13_40)]" },
  { label: "Community", caption: "Women like you.", tint: "from-[oklch(0.88_0.05_80)] to-[oklch(0.7_0.1_65)]" },
  { label: "Clarity test", caption: "What you actually want.", tint: "from-[oklch(0.92_0.03_50)] to-[oklch(0.74_0.09_55)]" },
];

function PhoneMockup({ label, caption, tint }: { label: string; caption: string; tint: string }) {
  return (
    <div className="shrink-0 w-[200px] sm:w-[220px]">
      <div className={`relative rounded-[2.2rem] p-3 bg-gradient-to-br ${tint} shadow-soft`}>
        <div className="rounded-[1.7rem] bg-background aspect-[9/19] p-5 flex flex-col">
          <div className="mx-auto h-1 w-12 rounded-full bg-foreground/10 mb-6" />
          <p className="text-[10px] uppercase tracking-[0.18em] text-accent">{label}</p>
          <p className="mt-2 font-serif text-xl text-foreground leading-tight">{caption}</p>
          <div className="mt-6 space-y-2">
            <div className="h-2 rounded-full bg-muted w-full" />
            <div className="h-2 rounded-full bg-muted w-4/5" />
            <div className="h-2 rounded-full bg-muted w-3/5" />
          </div>
          <div className="mt-auto rounded-2xl bg-secondary/70 p-3">
            <div className="h-2 rounded-full bg-foreground/15 w-2/3" />
            <div className="mt-2 h-2 rounded-full bg-foreground/10 w-1/2" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Product() {
  return (
    <section id="product" className="py-24 sm:py-32 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Inside Elara</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
            A small, beautiful operating system for your inner life.
          </h2>
        </div>
      </div>
      <div className="mt-14 overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-5 sm:gap-7 px-5 sm:px-8 lg:justify-center min-w-max">
          {screens.map((s) => (
            <PhoneMockup key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Tell Elara where you are emotionally", body: "A short, gentle check-in — no scoring, no shame. Just honesty." },
  { n: "02", title: "Get a personalized 7-day path", body: "Rituals, reflections, and small actions designed for your specific season." },
  { n: "03", title: "Check in daily with AI guidance, rituals, and community", body: "Soft structure that actually sticks — with women walking beside you." },
];

function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">How it works</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
            Seven days. One quiet shift at a time.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-border/70 bg-card p-8 shadow-card">
              <div className="font-serif text-5xl text-accent/80">{s.n}</div>
              <h3 className="mt-4 font-serif text-2xl text-foreground leading-snug">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 sm:p-16 shadow-soft relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1 text-xs uppercase tracking-wider">
              <Users className="h-3.5 w-3.5" /> Latina-first community
            </div>
            <h2 className="mt-6 font-serif text-3xl sm:text-5xl text-balance leading-tight">
              Launching first with Latina women — because culture, family, ambition, softness, and identity are deeply connected.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              We're building Elara for the women who hold everything together — daughters, founders, eldest sisters,
              first-generation everything. You deserve something built for the way you actually live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="py-24 sm:py-32 bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Founding waitlist</p>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
          Be one of the first women inside Elara.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Founding members get free lifetime access to the first cohort, early influence on what we build, and a private welcome from the team.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-3xl border border-border bg-card p-10 shadow-card">
            <CheckCircle2 className="h-10 w-10 text-accent mx-auto" />
            <h3 className="mt-4 font-serif text-2xl text-foreground">You're on the list.</h3>
            <p className="mt-2 text-muted-foreground">We'll be in touch soon, gently. Bienvenida.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 grid gap-3 text-left bg-card rounded-3xl border border-border p-6 sm:p-8 shadow-card">
            <label className="grid gap-1.5">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
              <input
                required maxLength={80}
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your first name"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
              <input
                required type="email" maxLength={120}
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp <span className="normal-case text-muted-foreground/70">(optional)</span></span>
              <input
                maxLength={30}
                value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
                placeholder="+1 555 000 0000"
              />
            </label>
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-base font-medium shadow-soft hover:opacity-90 transition">
              Join the founding waitlist
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">No spam. Ever. Unsubscribe with one tap.</p>
          </form>
        )}
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 grid md:grid-cols-[280px_1fr] gap-10 items-center">
        <div className="relative max-w-[280px] mx-auto">
          <div className="absolute -inset-4 bg-gradient-warm rounded-3xl blur-xl opacity-60" aria-hidden />
          <img src={founderPhoto} alt="Founder of Elara" width={768} height={896} loading="lazy"
            className="relative rounded-3xl object-cover w-full aspect-[4/5] shadow-card" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">A note from the founder</p>
          <blockquote className="mt-5 font-serif text-2xl sm:text-3xl text-foreground leading-snug text-balance">
            "Elara was built for women who look successful from the outside, but privately feel overwhelmed, lonely, or unsure what they actually want next."
          </blockquote>
          <p className="mt-6 text-muted-foreground">— The Elara team</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-serif text-lg text-foreground">elara<span className="text-accent">.</span></p>
        <p>© {new Date().getFullYear()} Elara. Made with care.</p>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <Product />
      <HowItWorks />
      <Community />
      <Waitlist />
      <Founder />
      <Footer />
    </main>
  );
}