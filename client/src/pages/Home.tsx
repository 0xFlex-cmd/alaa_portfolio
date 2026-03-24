import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Profile3D } from '@/components/Profile3D';
import { useState, useEffect } from 'react';

/**
 * Design Philosophy: Minimalist Cybersecurity (Dark Theme)
 * - Swiss Modernism with geometric precision
 * - Monochromatic dark background with neon cyan accents
 * - Extreme clarity through whitespace
 * - Technical, professional aesthetic
 * - 3D Shield visualization for visual appeal
 */

interface SkillCategory {
  title: string;
  skills: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  gpa: string;
  courses: string[];
  graduationDate: string;
  status: string;
}

export default function Home() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const [showCVModal, setShowCVModal] = useState(false);

  useEffect(() => {
    // Animate skill bars on mount
    const timer = setTimeout(() => {
      setVisibleSkills(Array.from({ length: 12 }, (_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'SIEM & Monitoring',
      skills: ['Splunk', 'IBM QRadar', 'Elastic Stack (ELK)']
    },
    {
      title: 'Network Security',
      skills: ['Palo Alto Cortex', 'Fortigate', 'Zeek', 'Wireshark', 'SNORT']
    },
    {
      title: 'Endpoint & EDR',
      skills: ['Kaspersky EDR']
    },
    {
      title: 'Threat Intelligence',
      skills: ['VirusTotal', 'PhishMe', 'Shodan', 'AlienVault OTX']
    },
    {
      title: 'Malware Analysis',
      skills: ['IDA', 'Ghidra', 'PE Studio', 'Process Hacker', 'Regshot']
    },
    {
      title: 'Forensics',
      skills: ['KAPE', 'FTK Imager', 'Zimmerman Toolkit']
    },
    {
      title: 'Scripting & Automation',
      skills: ['Python', 'PowerShell']
    },
    {
      title: 'Core Competencies',
      skills: ['SIEM Operations', 'Log Analysis', 'Threat Detection', 'Incident Response']
    }
  ];

  const certifications: Certification[] = [
    { name: 'Security Operations and Analysis', issuer: 'SANS', date: 'SEC450 (10/2025)' },
    { name: 'Windows Forensics Examiner', issuer: 'SANS', date: 'FOR500 (Books 1-5)' },
    { name: 'Incident Handler', issuer: 'SANS', date: 'SEC504 (Books 1-5)' },
    { name: 'CEH (Certified Ethical Hacker)', issuer: 'EC-Council', date: 'Completed' },
    { name: 'CCNA', issuer: 'Cisco', date: 'Completed' },
    { name: 'SOC Training Program', issuer: 'KAYFA - Imperious University of America', date: '07/2024' }
  ];

  const education: Education = {
    institution: 'Arab Open University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    location: 'EL-Shrouk, New Cairo',
    gpa: '2.7',
    status: 'Currently Enrolled (Expected Graduation: 06/2025)',
    courses: ['CCNA', 'Python', 'Robotics', 'Linux', 'CEH (EC-Council)', 'Network Security & Cryptography', 'Web Technologies (HTML, CSS, JavaScript)'],
    graduationDate: '06/2025'
  };

  const coreCompetencies = [
    'SIEM Monitoring, Log Analysis, and Threat Detection',
    'Incident Response Support and Intrusion Reporting',
    'Threat Monitoring, Mitigation, and Threat Intelligence',
    'Signature Development and Detection Engineering',
    'Vulnerability Identification and Security Control Assessment',
    'Email, Log, and Windows Registry Forensic Analysis',
    'Malware Classification and System Recovery Procedures',
    'Data Collection from Defense Tools (EDR, IDS/IPS, Firewalls)',
    'Designing and Deploying Honeypots, Honeynets, and Deceptive Decoys',
    'Leveraging Deception for Early Threat Detection and Mitigation',
    'Reporting and Documentation of Forensic Findings',
    'Continuous Monitoring and Security Posture Improvement'
  ];

  // Generate a simple PDF-like view
  const generateCVContent = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alaa Atef Elsayed Ahmed - CV</title>
  <style>
    body {
      font-family: 'Courier New', monospace;
      line-height: 1.6;
      color: #1a1a1a;
      background: #f5f5f5;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
    h1 {
      text-align: center;
      color: #00d9ff;
      border-bottom: 2px solid #00d9ff;
      padding-bottom: 10px;
      margin-bottom: 5px;
    }
    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 20px;
    }
    .contact-info {
      text-align: center;
      margin-bottom: 20px;
      font-size: 12px;
    }
    .section {
      margin-bottom: 20px;
    }
    .section-title {
      font-weight: bold;
      color: #00d9ff;
      border-bottom: 1px solid #00d9ff;
      margin-bottom: 10px;
      padding-bottom: 5px;
    }
    .job-title {
      font-weight: bold;
      color: #1a1a1a;
    }
    .company {
      color: #00d9ff;
      font-style: italic;
    }
    .date {
      float: right;
      color: #666;
      font-size: 12px;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      font-size: 12px;
    }
    .skill-item {
      background: #f0f0f0;
      padding: 8px;
      border-left: 3px solid #00d9ff;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
      font-size: 12px;
    }
    li {
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>ALAA ATEF ELSAYED AHMED</h1>
    <div class="subtitle">Cybersecurity SOC Analyst</div>
    
    <div class="contact-info">
      Email: a01143439039@gmail.com | Phone: +20 114 343 9039 | Location: Cairo, Egypt<br>
      LinkedIn: linkedin.com/in/alaa-atef-941352396
    </div>

    <div class="section">
      <div class="section-title">PROFESSIONAL SUMMARY</div>
      <p>Cybersecurity SOC Analyst with hands-on experience in threat intelligence, incident response, and security monitoring. Currently leveraging tools such as Elastic Stack (ELK) and Palo Alto Cortex to detect and respond to threats in real-time. Skilled in SIEM operations, vulnerability assessments, and digital forensics.</p>
    </div>

    <div class="section">
      <div class="section-title">PROFESSIONAL EXPERIENCE</div>
      <div class="job-title">SOC Analyst L1 <span class="date">08/2025 - Present</span></div>
      <div class="company">THE WHITEGUARD</div>
      <p style="font-size: 12px; color: #666;">Cairo, Giza</p>
      <ul>
        <li>Monitor, triage, and investigate security alerts from SIEM and other tools</li>
        <li>Prepare and document incident reports, communicating findings with clients and internal teams</li>
        <li>Utilize Elastic Stack (ELK), White Hawk, Palo Alto Cortex, Fortigate, Zeek, and Kaspersky EDR</li>
        <li>Practice and deploy detection engineering in lab environment to enhance detection capabilities</li>
        <li>Follow incident response playbooks and collaborate with IT teams to improve security posture</li>
        <li>Participate in SOC training, threat intelligence briefings, and continuous improvement activities</li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title">EDUCATION</div>
      <div class="job-title">Arab Open University <span class="date">Expected: 06/2025</span></div>
      <p style="font-size: 12px; margin: 5px 0;">Bachelor of Science in Computer Science | EL-Shrouk, New Cairo | GPA: 2.7</p>
      <p style="font-size: 12px; margin: 5px 0;"><strong>Major Courses:</strong> CCNA, Python, Robotics, Linux, CEH (EC-Council), Network Security & Cryptography, Web Technologies</p>
      <p style="font-size: 12px; margin: 5px 0;"><strong>Graduation Project Grade:</strong> A</p>
    </div>

    <div class="section">
      <div class="section-title">CERTIFICATIONS & TRAINING</div>
      <ul style="font-size: 12px;">
        <li><strong>SANS SEC450:</strong> Security Operations and Analysis (10/2025)</li>
        <li><strong>SANS FOR500:</strong> Windows Forensics Examiner (Books 1-5)</li>
        <li><strong>SANS SEC504:</strong> Incident Handler (Books 1-5)</li>
        <li><strong>CEH:</strong> Certified Ethical Hacker (EC-Council)</li>
        <li><strong>CCNA:</strong> Cisco Certified Network Associate</li>
        <li><strong>SANS KAYFA Training:</strong> Imperious University of America (07/2024)</li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title">TECHNICAL SKILLS</div>
      <div class="skills-grid">
        <div class="skill-item">SIEM: Splunk, QRadar, ELK</div>
        <div class="skill-item">Network: Palo Alto, Fortigate, Zeek</div>
        <div class="skill-item">Forensics: KAPE, FTK Imager</div>
        <div class="skill-item">Malware: IDA, Ghidra, PE Studio</div>
        <div class="skill-item">Threat Intel: VirusTotal, Shodan</div>
        <div class="skill-item">Scripting: Python, PowerShell</div>
      </div>
    </div>
  </div>
</body>
</html>
    `;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 border-b border-border backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400">
              <img 
                src="/alaa_portfolio/profile_new.jpg" 
                alt="Alaa Atef" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-bold font-mono text-cyan-400">
              ALAA ATEF
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="text-sm font-medium hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Height */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#16213e] to-[#0a0e27]">
        {/* Decorative elements in corners */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-cyan-400/30 opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-cyan-400/30 opacity-50"></div>
        <div className="absolute top-1/4 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container grid md:grid-cols-2 gap-12 items-center py-12">
          {/* Left side - Text (Larger and clearer) */}
          <div className="z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up tracking-tighter">
              Alaa Atef
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Cybersecurity SOC Analyst
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hands-on cybersecurity professional specializing in threat intelligence, incident response, and digital forensics. Currently working at <span className="text-cyan-400 font-bold">THE WHITEGUARD</span>.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-10 py-7 h-auto rounded-none border-b-4 border-cyan-800 active:border-b-0 active:translate-y-1 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-lg px-10 py-7 h-auto rounded-none transition-all"
                onClick={() => setShowCVModal(true)}
              >
                <Download className="w-5 h-5 mr-3" />
                View CV
              </Button>
            </div>
          </div>

          {/* Right side - 3D Profile Image */}
          <div className="hidden md:block h-[600px] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Profile3D />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* CV Modal */}
      {showCVModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowCVModal(false)}>
          <div className="bg-card rounded-lg border border-cyan-400/30 w-full max-w-5xl h-[90vh] md:h-[85vh] flex flex-col shadow-2xl shadow-cyan-400/20" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-card to-card/80 border-b border-cyan-400/30 px-6 py-4 flex justify-between items-center backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 font-mono">Curriculum Vitae</h3>
                <p className="text-sm text-muted-foreground mt-1">Alaa Atef Elsayed Ahmed</p>
              </div>
              <button 
                onClick={() => setShowCVModal(false)}
                className="text-muted-foreground hover:text-cyan-400 transition-colors text-3xl leading-none hover:scale-110"
              >
                ✕
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-auto">
              <iframe
                srcDoc={generateCVContent()}
                className="w-full h-full border-0"
                title="CV"
              />
            </div>
            
            {/* Footer */}
            <div className="border-t border-cyan-400/30 bg-card/50 px-6 py-3 flex justify-end gap-3 backdrop-blur-sm">
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                onClick={() => setShowCVModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Professional Summary</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cybersecurity SOC Analyst with hands-on experience in threat intelligence, incident response, and security monitoring. Currently leveraging tools such as Elastic Stack (ELK) and Palo Alto Cortex to detect and respond to threats in real-time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Skilled in SIEM operations, vulnerability assessments, and digital forensics. Fast learner with continuous commitment to developing expertise in detection engineering and proactive defense strategies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pursuing advanced certifications in cybersecurity (SANS SEC450, FOR500, SEC504) while maintaining practical hands-on experience in threat monitoring and incident handling.
              </p>
            </div>
            <div className="bg-card p-8 rounded-sm border border-border card-minimal">
              <h3 className="text-lg font-bold mb-6 font-mono text-cyan-400">Core Strengths</h3>
              <ul className="space-y-3">
                {['Threat Detection & Analysis', 'Incident Response', 'Digital Forensics', 'SIEM Operations', 'Log Analysis', 'Malware Analysis'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">→</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          
          <div className="card-minimal mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">SOC Analyst L1</h3>
                <p className="text-cyan-400 font-mono text-sm mt-1">THE WHITEGUARD</p>
              </div>
              <span className="text-muted-foreground text-sm font-mono">08/2025 - Present</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">Cairo, Giza</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Monitor, triage, and investigate security alerts from SIEM and other tools</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Prepare and document incident reports, communicating findings with clients and internal teams</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Utilize Elastic Stack (ELK), White Hawk, Palo Alto Cortex, Fortigate, Zeek, and Kaspersky EDR</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Practice and deploy detection engineering in lab environment to enhance detection capabilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Follow incident response playbooks and collaborate with IT teams to improve security posture</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Participate in SOC training, threat intelligence briefings, and continuous improvement activities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* University */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-2">{education.institution}</h3>
              <p className="text-cyan-400 font-mono text-sm mb-4">{education.degree} in {education.field}</p>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p><span className="font-semibold">Location:</span> {education.location}</p>
                <p><span className="font-semibold">GPA:</span> {education.gpa}</p>
                <p><span className="font-semibold">Status:</span> {education.status}</p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3">Major Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, i) => (
                    <span key={i} className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-sm border border-cyan-400/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-6">Certifications & Training</h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="pb-4 border-b border-border last:border-0">
                    <p className="font-semibold text-foreground">{cert.name}</p>
                    <p className="text-sm text-cyan-400 font-mono">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SANS Training Details */}
          <div className="card-minimal">
            <h3 className="text-lg font-bold mb-4 font-mono text-cyan-400">SANS Training Program (KAYFA)</h3>
            <p className="text-sm text-muted-foreground mb-4">Imperious University of America | July 2024</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Network & Security Fundamentals',
                'Windows Active Directory',
                'Linux Fundamentals',
                'SOC Analysis & Management',
                'SOC Monitoring – Splunk',
                'SOC Monitoring – QRadar',
                'SOC Case Studies & Tools',
                'Incident Handling',
                'Intro to Threat Hunting',
                'Intro to Digital Forensics'
              ].map((item, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Technical Skills & Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="card-minimal">
                <h3 className="text-lg font-bold mb-6 font-mono text-cyan-400">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-sm border border-border text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies Grid */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {coreCompetencies.map((competency, i) => (
                <div key={i} className="p-4 border border-border rounded-sm bg-card/50 text-sm text-muted-foreground hover:border-cyan-400/50 transition-colors">
                  {competency}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Interested in collaborating or have a security-related inquiry? Feel free to reach out through any of the channels below.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a href="mailto:a01143439039@gmail.com" className="card-minimal flex flex-col items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <span className="font-bold">Email</span>
                <span className="text-sm text-muted-foreground">a01143439039@gmail.com</span>
              </a>
              
              <a href="tel:+201143439039" className="card-minimal flex flex-col items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <span className="font-bold">Phone</span>
                <span className="text-sm text-muted-foreground">+20 114 343 9039</span>
              </a>
              
              <a href="https://linkedin.com/in/alaa-atef-941352396" target="_blank" rel="noopener noreferrer" className="card-minimal flex flex-col items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all">
                  <Linkedin size={24} />
                </div>
                <span className="font-bold">LinkedIn</span>
                <span className="text-sm text-muted-foreground">alaa-atef-941352396</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold font-mono text-cyan-400">
            ALAA ATEF
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alaa Atef Elsayed Ahmed. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:a01143439039@gmail.com" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
