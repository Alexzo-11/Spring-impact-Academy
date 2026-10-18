import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight, ArrowRight, BookOpen, CalendarDays, Check, ChevronDown,
  CirclePlay, Laptop, Menu, MessageCircle, ShieldCheck,
  Sparkles, Target, Users, X, Zap, ClipboardCheck, BookMarked,
} from 'lucide-react';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfYlEPr4v_psqRRMzkG73unIFAskrOpMQgO3eirXceJSIEaQw/viewform?usp=preveiw'; // Replace with your Google Forms registration link.
const WHATSAPP_URL = 'https://chat.whatsapp.com/LZzca3MGg614QwBX4e851w'; // Replace with your official WhatsApp link/number.

const features = [
  { icon: BookOpen, title: 'Past questions that build confidence', text: 'Work through JAMB past questions from 2010–2026 and learn to recognise patterns, not just memorise answers.' },
  { icon: Users, title: 'Live, guided online classes', text: 'Stay accountable with structured lessons, a clear weekly rhythm and room to ask questions.' },
  { icon: Target, title: 'Understand the why', text: 'Tutors explain answers, unpack difficult concepts and help you correct mistakes with purpose.' },
  { icon: ClipboardCheck, title: 'Practice with feedback', text: 'Use regular assessments to see what is improving and where your next study session should focus.' },
];

const subjects = [
  { name: 'Mathematics', short: 'MTH', tone: 'blue' },
  { name: 'English Language', short: 'ENG', tone: 'green' },
  { name: 'Physics', short: 'PHY', tone: 'orange' },
  { name: 'Chemistry', short: 'CHM', tone: 'purple' },
  
];

const faqs = [
  { q: 'Who is this programme for?', a: 'The programme is designed for JAMB/UTME candidates who want a more structured way to practise past questions, strengthen understanding and prepare with consistency.' },
  { q: 'Are classes held online?', a: 'Yes. Teaching is delivered through live online classes. Add your preferred class platform and access instructions here before publishing.' },
  { q: 'How many subjects can I register for?', a: 'You can register for 2 subjects or 4 subjects. The flyer lists ₦1,500 for 2 subjects and ₦2,500 for 4 subjects. Confirm the final fee and payment process with the academy.' },
  { q: 'When does the next cohort begin?', a: 'The current programme flyer lists 2 November 2026 as the start date. Please check the registration form for any updates.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={14} /> JAMB preparation, with a plan. <span>2026 cohort registration is open</span><a href="#enrol">Explore the programme <ArrowRight size={13}/></a></div>
      <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
        <nav className="nav container">
          <a className="brand" href="#home" aria-label="Spring Impact Academy home">
            <img
                src="/assets/spring-impact-logo.png"
                alt="Spring Impact Adacemy"
                className="academy-logo"
                />

          </a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <a href="#programme" onClick={closeMenu}>Programme</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#subjects" onClick={closeMenu}>Subjects</a>
            <a href="#faqs" onClick={closeMenu}>FAQs</a>
            <a className="nav-cta" href={FORM_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Register now <ArrowUpRight size={16}/></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"/> YOUR JAMB SUCCESS MATTERS</div>
              <h1>Prepare with purpose.<br/><span>Perform with</span> <em>confidence.</em></h1>
              <p className="hero-lede">A focused 16-week online JAMB past-question programme designed to help you practise smarter, understand more and walk into your exam better prepared.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={FORM_URL} target="_blank" rel="noreferrer">Secure your spot <ArrowUpRight size={18}/></a>
                <a className="btn btn-quiet" href="#programme"><span className="play-icon"><CirclePlay size={20}/></span> Explore the programme</a>
              </div>
              <div className="trust-row">
                <div className="avatar-stack"><span>SI</span><span>J</span><span>✓</span></div>
                <div><strong>Built around consistent practice</strong><small>Live classes · Guided revision · Assessments</small></div>
              </div>
              <div className="hero-note"><span className="note-icon"><CalendarDays size={18}/></span><span><small>NEXT COHORT STARTS</small><strong>02 November 2026</strong></span><span className="note-divider"/><span><small>PROGRAMME LENGTH</small><strong>16 weeks</strong></span></div>
            </div>
            <div className="hero-visual">
              <div className="visual-glow"/>
              <div className="image-frame">
                <img src="/assets/jamb-flyer.png" alt="Spring Impact Academy JAMB past questions programme flyer" />
                <div className="image-shine"/>
              </div>
              <div className="floating-card float-top"><span className="float-icon"><Target size={20}/></span><span><strong>Study with direction</strong><small>A plan for every week</small></span></div>
              <div className="floating-card float-bottom"><span className="mini-check"><Check size={17}/></span><span><strong>Practice. Review. Improve.</strong><small>Small steps, steady progress.</small></span></div>
              <div className="visual-caption"><span className="caption-line"/> <span>THE NEXT CHAPTER STARTS HERE</span></div>
            </div>
          </div>
          <div className="container hero-bottom"><span>STRUCTURE THAT SUPPORTS YOUR AMBITION</span><div className="bottom-line"/></div>
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            <div className="stat"><span className="stat-icon"><CalendarDays/></span><div><strong>16 weeks</strong><small>Guided programme</small></div></div>
            <div className="stat"><span className="stat-icon"><Laptop/></span><div><strong>100% online</strong><small>Learn from anywhere</small></div></div>
            <div className="stat"><span className="stat-icon"><BookMarked/></span><div><strong>2010–2026</strong><small>Past-question coverage</small></div></div>
            <div className="stat"><span className="stat-icon"><Zap/></span><div><strong>3× weekly</strong><small>Classes per subject</small></div></div>
          </div>
        </section>

        <section className="section-pad programme-section" id="programme">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow"><span className="eyebrow-dot"/> THE PROGRAMME</div>
              <h2>More than revision.<br/><span>A smarter way to prepare.</span></h2>
              <p>Big goals become manageable when the work is broken into clear, repeatable steps. We help you turn study time into focused practice.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return <article className="feature-card reveal" style={{'--delay': `${i * 90}ms`}} key={feature.title}>
                  <div className="feature-top"><span className="feature-icon"><Icon size={23}/></span><span className="feature-number">0{i + 1}</span></div>
                  <h3>{feature.title}</h3><p>{feature.text}</p><div className="feature-rule"/>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container approach-grid">
            <div className="approach-visual reveal">
              <div className="approach-card card-back"/>
              <div className="approach-card card-front">
                <div className="card-label"><span/> YOUR WEEKLY STUDY RHYTHM</div>
                <div className="week-title">Progress is a practice.</div>
                <div className="week-row"><span className="week-icon"><BookOpen size={18}/></span><span><strong>Learn</strong><small>Build understanding</small></span><span className="week-tag">01</span></div>
                <div className="week-row"><span className="week-icon"><ClipboardCheck size={18}/></span><span><strong>Practise</strong><small>Work through past questions</small></span><span className="week-tag">02</span></div>
                <div className="week-row"><span className="week-icon"><Target size={18}/></span><span><strong>Review</strong><small>Find gaps and correct mistakes</small></span><span className="week-tag">03</span></div>
                <div className="progress-label"><span>Consistency is the advantage</span><strong>Keep going ↗</strong></div><div className="progress-track"><span/></div>
              </div>
              <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            </div>
            <div className="approach-copy reveal">
              <div className="eyebrow"><span className="eyebrow-dot"/> HOW WE HELP YOU GROW</div>
              <h2>A clear process.<br/><span>A stronger you.</span></h2>
              <p className="approach-lede">Confidence comes from knowing what to do next. Our approach combines guided lessons with deliberate practice so you can build momentum week after week.</p>
              <div className="check-list">
                <div><span><Check size={15}/></span><p><strong>Understand the question</strong><small>Learn how to interpret what each question is asking.</small></p></div>
                <div><span><Check size={15}/></span><p><strong>Know why the answer works</strong><small>Follow clear explanations, not just answer keys.</small></p></div>
                <div><span><Check size={15}/></span><p><strong>Track what needs work</strong><small>Use assessments to guide your next steps.</small></p></div>
              </div>
              <a href={FORM_URL} target="_blank" rel="noreferrer" className="text-link">Start your preparation <ArrowRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="section-pad subjects-section" id="subjects">
          <div className="container">
            <div className="subjects-heading reveal"><div><div className="eyebrow"><span className="eyebrow-dot"/> YOUR UTME SUBJECTS</div><h2>Focus on what<br/><span>moves you forward.</span></h2></div><p>Choose the subject package that fits your UTME combination. Build your foundation, one topic and one question at a time.</p></div>
            <div className="subjects-grid">
              {subjects.map((subject, i) => <div className={`subject-card ${subject.tone} reveal`} style={{'--delay': `${i * 70}ms`}} key={subject.name}>
                <div className="subject-symbol">{subject.short}</div><div className="subject-bottom"><span>{subject.name}</span><ArrowUpRight size={18}/></div>
              </div>)}
            </div>
            <div className="subject-footnote"><ShieldCheck size={18}/> <span>Register for <strong>2 subjects or 4 subjects</strong> based on your UTME combination.</span></div>
          </div>
        </section>

        <section className="enrol-section section-pad" id="enrol">
          <div className="container">
            <div className="enrol-panel reveal">
              <div className="enrol-copy">
                <div className="eyebrow eyebrow-light"><span className="eyebrow-dot"/> YOUR NEXT STEP</div>
                <h2>Your future deserves<br/>a focused plan.</h2>
                <p>Make your preparation intentional. Join the Spring Impact Academy 16-week online JAMB past-question programme.</p>
                <div className="enrol-date"><CalendarDays size={20}/><span><small>CLASSES BEGIN</small><strong>2 November 2026</strong></span></div>
              </div>
              <div className="pricing-wrap">
                <div className="pricing-label">SIMPLE PROGRAMME FEES</div>
                <div className="price-card"><div><span className="price-count">02 SUBJECTS</span><strong>₦1,500</strong><small>Programme fee</small></div><span className="price-check"><Check size={18}/></span></div>
                <div className="price-card featured-price"><div><span className="price-count">04 SUBJECTS</span><strong>₦2,500</strong><small>Programme fee</small></div><span className="price-check"><Check size={18}/></span></div>
                <a href={FORM_URL} target="_blank" rel="noreferrer" className="btn btn-yellow">Register via Google Forms <ArrowUpRight size={18}/></a>
                <p className="price-note"><ShieldCheck size={14}/> Registration and payment instructions will be provided by the academy.</p>
              </div>
              <div className="panel-decoration decor-one"/><div className="panel-decoration decor-two"/>
            </div>
          </div>
        </section>

        <section className="section-pad faq-section" id="faqs">
          <div className="container faq-grid">
            <div className="faq-intro reveal"><div className="eyebrow"><span className="eyebrow-dot"/> GOOD TO KNOW</div><h2>Questions?<br/><span>Start here.</span></h2><p>Everything you need to take the next step. If you need more details, reach out to the academy team.</p><a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Talk to the team <ArrowRight size={17}/></a></div>
            <div className="faq-list reveal">
              {faqs.map((faq, i) => <div className={`faq-item ${openFaq === i ? 'faq-open' : ''}`} key={faq.q}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><ChevronDown size={19}/></button>
                {openFaq === i && <p>{faq.a}</p>}
              </div>)}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner"><div><span className="final-kicker">SEE THE FUTURE. SEIZE IT.</span><h2>Make this your turning point.</h2><p>Show up for your goals. We’ll help you make the practice count.</p></div><a className="btn btn-primary" href={FORM_URL} target="_blank" rel="noreferrer">Join the next cohort <ArrowUpRight size={18}/></a></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <img
                src="/assets/spring-impact-logo.png"
                alt="Spring Impact Adacemy"
                className="academy-logo"
            />
          </a>
          <p>Helping learners prepare with purpose, practice with direction and move towards their goals with confidence.</p>
          <div className="footer-links"><a href="#programme">Programme</a><a href="#subjects">Subjects</a><a href="#faqs">FAQs</a><a href={FORM_URL} target="_blank" rel="noreferrer">Registration</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Spring Impact Academy. All rights reserved.</span><span>Built for ambition. Designed for progress.</span></div>
      </footer>
      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Contact Spring Impact Academy on WhatsApp"><MessageCircle size={22}/><span>Need help?</span></a>
    </div>
  );
}

export default App;
