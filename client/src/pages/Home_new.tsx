import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield3D } from '@/components/Shield3D';
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
