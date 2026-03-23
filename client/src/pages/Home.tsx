import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

/**
 * Design Philosophy: Minimalist Cybersecurity
 * - Swiss Modernism with geometric precision
 * - Monochromatic with neon cyan accents
 * - Extreme clarity through whitespace
 * - Technical, professional aesthetic
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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold font-mono text-cyan-600">
            ALAA ATEF
          </div>
          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-cyan-600 transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium hover:text-cyan-600 transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium hover:text-cyan-600 transition-colors">Skills</a>
            <a href="#contact" className="text-sm font-medium hover:text-cyan-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663388554091/92rN7N6Tiq3HDoGdDgEmoh/hero-banner-hLwc3rkLgvmWSAgLDHK3sj.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        
        <div className="relative container py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              علاء عاطف السيد احمد
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Cybersecurity SOC Analyst
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hands-on cybersecurity professional specializing in threat intelligence, incident response, and digital forensics. Currently working at THE WHITEGUARD with expertise in SIEM operations, detection engineering, and proactive defense strategies.
            </p>
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
              >
                View CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Professional Summary</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cybersecurity SOC Analyst with hands-on experience in threat intelligence, incident response, and security monitoring. Currently leveraging tools such as Elastic Stack (ELK) and Palo Alto Cortex to detect and respond to threats in real-time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Skilled in SIEM operations, vulnerability assessments, and digital forensics. Fast learner with continuous commitment to developing expertise in detection engineering and proactive defense strategies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pursuing advanced certifications in cybersecurity (SANS SEC450, FOR500, SEC504) while maintaining practical hands-on experience in threat monitoring and incident handling.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm border border-gray-200 card-minimal">
              <h3 className="text-lg font-bold mb-6 font-mono text-cyan-600">Core Strengths</h3>
              <ul className="space-y-3">
                {['Threat Detection & Analysis', 'Incident Response', 'Digital Forensics', 'SIEM Operations', 'Log Analysis', 'Malware Analysis'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-600 font-bold mt-1">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          
          <div className="card-minimal mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">SOC Analyst L1</h3>
                <p className="text-cyan-600 font-mono text-sm mt-1">THE WHITEGUARD</p>
              </div>
              <span className="text-gray-600 text-sm font-mono">08/2025 - Present</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">Cairo, Giza</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Monitor, triage, and investigate security alerts from SIEM and other tools</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Prepare and document incident reports, communicating findings with clients and internal teams</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Utilize Elastic Stack (ELK), White Hawk, Palo Alto Cortex, Fortigate, Zeek, and Kaspersky EDR</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Practice and deploy detection engineering in lab environment to enhance detection capabilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Follow incident response playbooks and collaborate with IT teams to improve security posture</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Participate in SOC training, threat intelligence briefings, and continuous improvement activities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* University */}
            <div className="card-minimal">
              <h3 className="text-xl font-bold mb-2">{education.institution}</h3>
              <p className="text-cyan-600 font-mono text-sm mb-4">{education.degree} in {education.field}</p>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p><span className="font-semibold">Location:</span> {education.location}</p>
                <p><span className="font-semibold">GPA:</span> {education.gpa}</p>
                <p><span className="font-semibold">Status:</span> {education.status}</p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3">Major Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, i) => (
                    <span key={i} className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-sm border border-cyan-200">
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
                  <div key={i} className="pb-4 border-b border-gray-200 last:border-0">
                    <p className="font-semibold text-gray-900">{cert.name}</p>
                    <p className="text-sm text-cyan-600 font-mono">{cert.issuer}</p>
                    <p className="text-xs text-gray-600 mt-1">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SANS Training Details */}
          <div className="card-minimal">
            <h3 className="text-lg font-bold mb-4 font-mono text-cyan-600">SANS Training Program (KAYFA)</h3>
            <p className="text-sm text-gray-600 mb-4">Imperious University of America | July 2024</p>
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
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Technical Skills & Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="card-minimal">
                <h3 className="font-mono text-cyan-600 font-bold text-sm mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                        <span className="text-xs text-gray-500">Expert</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill"
                          style={{
                            width: visibleSkills.includes(catIndex * 3 + skillIndex) ? '90%' : '0%',
                            transitionDelay: `${(catIndex * 3 + skillIndex) * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="bg-gray-50 p-8 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-6 font-mono text-cyan-600">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {coreCompetencies.map((competency, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-cyan-600 font-bold text-lg leading-none">→</span>
                  <span className="text-gray-700 text-sm">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                I'm always interested in discussing cybersecurity challenges, threat intelligence, and innovative defense strategies. Feel free to reach out for collaboration opportunities or to discuss your security needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Mail className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:a01143439039@gmail.com" className="text-cyan-600 hover:text-cyan-700 break-all">
                      a01143439039@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a href="https://wa.me/201143439039" className="text-cyan-600 hover:text-cyan-700">
                      +20 114 343 9039
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-700">Cairo, Egypt</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Linkedin className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/alaa-atef-941352396" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
                    >
                      Connect with me <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-minimal">
              <h3 className="text-lg font-bold mb-6 font-mono text-cyan-600">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Current Role</p>
                  <p className="text-gray-700">SOC Analyst L1 at THE WHITEGUARD</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Specialization</p>
                  <p className="text-gray-700">Threat Detection, Incident Response, Digital Forensics</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Education</p>
                  <p className="text-gray-700">B.Sc. Computer Science (Arab Open University)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Certifications</p>
                  <p className="text-gray-700">CEH, CCNA, SANS Training (SEC450, FOR500, SEC504)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Languages</p>
                  <p className="text-gray-700">Arabic (Native), English (Fluent)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 Alaa Atef. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/alaa-atef-941352396" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:a01143439039@gmail.com" className="text-gray-600 hover:text-cyan-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
