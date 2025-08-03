'use client';

import React, { useState, useMemo, useCallback } from 'react'; // Added useCallback
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  Folder,
  FileText,
  Code,
  GraduationCap,
  Award,
  Brain,
  ChevronRight,
  ChevronDown,
  Star,
  Calendar,
  Search,
  Database,
  Cloud,
  Cpu,
  Languages,
  Users,
  TrendingUp,
  Target,
  Clock,
  BookOpen,
  Mic,
  Settings,
  Newspaper,
  Activity,
  Trophy,
  BookCheck,
  ExternalLink
} from 'lucide-react';

// --- Data Imports (Simulated - In a real app, import from actual data sources) ---

const educationData = [
  {
    id: 'edu-mca',
    degree: 'Master of Computer Application (MCA)',
    institution: 'Institute of Technical Education and Research, SOA deemed to be university, Bhubaneswar',
    years: '2023-25',
    grade: 'CGPA: 8.38',
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
  },
  {
    id: 'edu-bsc',
    degree: 'Bachelor of Science in Chemistry',
    institution: 'P.P College, Nischintakoili, Utkal University, Bhubaneswar',
    years: '2019-22',
    grade: 'CGPA: 8.76',
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
  },
  {
     id: 'edu-hs',
    degree: 'Higher Secondary in Science',
    institution: 'P.P College, Nischintakoili Council of Higher Secondary Education, Odisha',
    years: '2017-2019',
    grade: '57.16%',
    icon: <GraduationCap className="h-5 w-5 text-primary" />, // Changed icon
  },
  {
     id: 'edu-sec',
    degree: 'Secondary',
    institution: 'Ahemmed Bux High School, Nischintakoili Board of Secondary Education, Odisha',
    years: '2017',
    grade: '76%',
    icon: <GraduationCap className="h-5 w-5 text-primary" />, // Changed icon
  },
];

const projectsData = [
  {
    id: 'proj-ams',
    title: 'Smart Attendance Tracker',
    description: 'A web-based application to modernize attendance tracking for employees and students.',
    techStack: ['Java', 'MySQL', 'JSP', 'Servlets', 'HTML', 'CSS', 'JavaScript', 'Apache Tomcat'],
    features: [
      'Developed a full-stack web application to digitize attendance for over 250 users, ensuring real-time access and monitoring.',
      'Achieved 100% attendance accuracy and reduced manual errors by 80%.',
    ],
    link: 'https://github.com/Ayesha-Taranum/Smart-Attendance-Tracker/tree/main',
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    id: 'proj-recipe',
    title: 'Recipe Finder App',
    description: 'Search-driven web application that recommends recipes based on available ingredients.',
    techStack: ['AngularJS', 'Spring Boot', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Built a search-based web app to suggest recipes from user-input ingredients using efficient queries and lightweight APIs.',
      'Reduced recipe search time by 60% and enhanced user experience with a fast, adaptive interface.',
    ],
    link: 'https://github.com/Ayesha-Taranum/RecipeApp',
    icon: <Search className="h-6 w-6 text-primary" />,
  },
  {
    id: 'proj-expenso',
    title: 'ExpensoMate Backend API',
    description: 'A comprehensive RESTful API for expense tracking with budget management and savings goals.',
    techStack: ['Spring Boot 3.5.3', 'Java 17', 'Maven'],
    features: [
      'Built a complete backend system enabling user authentication, category-wise expense tracking, budget setting, and savings goal management.',
      'Implemented secure and validated CRUD endpoints for 6 key entities, along with global exception handling and structured API responses.',
      'Architected the backend to be scalable and multi-user friendly, featuring budget threshold alerts and real-time savings progress tracking.',
    ],
    link: 'https://github.com/Ayesha-Taranum/Expensomate',
    icon: <Code className="h-6 w-6 text-primary" />,
  },
];

// Skill Icons
const JavaIcon = () => <Code className="h-4 w-4 text-yellow-500" />;
const PythonIcon = () => <Code className="h-4 w-4 text-blue-500" />;
const HtmlIcon = () => <Code className="h-4 w-4 text-orange-500" />;
const CssIcon = () => <Code className="h-4 w-4 text-blue-600" />;
const JsIcon = () => <Code className="h-4 w-4 text-yellow-400" />;
const TsIcon = () => <Code className="h-4 w-4 text-blue-400" />;
const AngularIcon = () => <Code className="h-4 w-4 text-red-600" />;
const SpringBootIcon = () => <Cpu className="h-4 w-4 text-green-500" />;
const TailwindIcon = () => <Settings className="h-4 w-4 text-cyan-500" />;
const SqlIcon = () => <Database className="h-4 w-4 text-purple-500" />;
const OsIcon = () => <Cpu className="h-4 w-4 text-gray-500" />; // Using CPU icon for OS
const WebDevIcon = () => <Code className="h-4 w-4 text-pink-500" />;

const skillsData = {
    languages: [
        { name: 'Java', icon: <JavaIcon /> }, { name: 'Python', icon: <PythonIcon /> },
        { name: 'HTML', icon: <HtmlIcon /> }, { name: 'CSS', icon: <CssIcon /> },
        { name: 'JavaScript', icon: <JsIcon /> }, { name: 'TypeScript', icon: <TsIcon /> },
    ],
    frameworks: [
        { name: 'AngularJS', icon: <AngularIcon /> }, { name: 'Spring Boot', icon: <SpringBootIcon /> },
        { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    ],
    cloudDatabases: [ { name: 'Relational Database (MySQL)', icon: <SqlIcon /> } ],
    relevantCoursework: [
        { name: 'Adv. Business English & Corp. Comm.', icon: <Mic className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Web Development', icon: <WebDevIcon /> }, { name: 'Operating Systems', icon: <OsIcon /> },
    ],
    areasOfInterest: [
        { name: 'Web Design & Dev', icon: <Code className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Team Collaboration', icon: <Users className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Data Organization', icon: <Database className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Data-Driven Decisions', icon: <TrendingUp className="h-4 w-4 text-muted-foreground" /> },
    ],
    softSkills: [
        { name: 'Creative Problem Solving', icon: <Brain className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Process Optimization', icon: <Settings className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Meeting Deadlines', icon: <Clock className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Strategic Planning', icon: <Target className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Clear Communication', icon: <Mic className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Ownership', icon: <Award className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Continuous Learning', icon: <BookOpen className="h-4 w-4 text-muted-foreground" /> },
        { name: 'Effective Collaboration', icon: <Users className="h-4 w-4 text-muted-foreground" /> },
    ],
};

const achievementsData = [
  {
    id: 'ach-cert-dsa',
    type: 'Certificate',
    title: 'Data Structures and Algorithms Complete Course - CPP & JAVA',
    issuer: 'GeeksforGeeks (GfG), Udemy',
    description: null,
    icon: <Code className="h-5 w-5 text-primary" />,
  },
  {
    id: 'ach-cert-java',
    type: 'Certificate',
    title: 'Learn Java Programming - Beginner to Master',
    issuer: 'Abdul Bari, Udemy',
    description: null,
    icon: <BookCheck className="h-5 w-5 text-primary" />,
  },
  {
    id: 'ach-cert-pgdca',
    type: 'Certificate',
    title: 'Post Graduate Diploma in Computer Applications (PGDCA)',
    issuer: '', // No specific issuer mentioned
    description: null, // No extra description needed
    icon: <BookCheck className="h-5 w-5 text-primary" />,
  },
  {
    id: 'ach-rank-gfg',
    type: 'Ranking',
    title: 'Secured 77th rank on GeeksforGeeks',
    issuer: null,
    description: 'Among the top performers at Siksha ‘O’ Anusandhan University.',
    icon: <Star className="h-5 w-5 text-primary" />,
  },
  {
    id: 'ach-sports',
    type: 'Sports',
    title: 'Shot Put and Javelin Champion',
    issuer: null,
    description: 'Excelling in throwing events with exceptional power and precision.',
    icon: <Trophy className="h-5 w-5 text-primary" />,
  },
  {
    id: 'ach-extra-dance',
    type: 'Extracurricular',
    title: 'Dancing',
    issuer: null,
    description: '', // Can be empty if no description needed
    icon: <Activity className="h-5 w-5 text-primary" />,
  },
   {
    id: 'ach-extra-news',
    type: 'Extracurricular',
    title: 'Reading Newspapers',
     issuer: null,
    description: '', // Can be empty if no description needed
    icon: <Newspaper className="h-5 w-5 text-primary" />,
  },
];

const certificatesData = achievementsData.filter(item => item.type === 'Certificate');


// --- File Tree Structure ---
// Update the FileItem type definition
type FileItem = {
  id: string;
  name: string;
  type: 'file' | 'folder';
  icon: JSX.Element;
  section?: 'education' | 'projects' | 'skills' | 'achievements'; // Main content section
  contentType?: 'all' | 'certificates'; // Used within 'achievements' to specify content type
  children?: FileItem[];
};


// Update the fileTree to include the certificates file
const fileTree: FileItem[] = [
  {
    id: 'folder-education',
    name: 'Education',
    type: 'folder',
    icon: <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />,
    children: [
      {
        id: 'education-all',
        name: 'education.info',
        type: 'file',
        section: 'education',
        icon: <BookOpen className="h-4 w-4 mr-2 text-blue-400" />,
      }
    ],
  },
  {
    id: 'folder-projects',
    name: 'Projects',
    type: 'folder',
    icon: <Code className="h-4 w-4 mr-2 text-purple-500" />,
    children: projectsData.map(proj => ({
      id: proj.id,
      name: `${proj.title.replace(/\s+/g, '-').toLowerCase()}.proj`,
      type: 'file',
      section: 'projects',
      icon: <FileText className="h-4 w-4 mr-2 text-purple-400" />,
    })),
  },
  {
    id: 'folder-skills',
    name: 'Skills',
    type: 'folder',
    icon: <Brain className="h-4 w-4 mr-2 text-green-500" />,
    children: [
      {
        id: 'skills-all',
        name: 'all-skills.info',
        type: 'file',
        section: 'skills',
        icon: <Star className="h-4 w-4 mr-2 text-green-400" />
      }
    ],
  },
  {
    id: 'folder-achievements',
    name: 'Achievements & Certs',
    type: 'folder',
    icon: <Trophy className="h-4 w-4 mr-2 text-yellow-500" />,
    children: [
      {
        id: 'achievements-certificates',
        name: 'certificates.info',
        type: 'file',
        section: 'achievements',
        contentType: 'certificates',
        icon: <Award className="h-4 w-4 mr-2 text-yellow-400" />,
      },
      {
        id: 'achievements-all',
        name: 'achievements.info',
        type: 'file',
        section: 'achievements',
        contentType: 'all',
        icon: <Star className="h-4 w-4 mr-2 text-yellow-400" />,
      },
    ],
  },
];


const EducationContent = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {educationData.map((edu) => (
        <Card key={edu.id} className="m-4 shadow-none border-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-primary">
              {edu.icon} <span className="ml-2">{edu.degree}</span>
            </CardTitle>
            <CardDescription className="text-base pt-1 text-muted-foreground">{edu.institution}</CardDescription>
          </CardHeader>
          <CardContent className="text-base text-foreground">
            <p><span className="font-semibold">Years:</span> {edu.years}</p>
            <p><span className="font-semibold">Grade:</span> {edu.grade}</p>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};

const SkillsContent = () => {
  const skillCategories = {
    'Programming Languages': skillsData.languages,
    'Frameworks & Libraries': skillsData.frameworks,
    'Cloud & Databases': skillsData.cloudDatabases,
    'Relevant Coursework': skillsData.relevantCoursework,
    'Areas of Interest': skillsData.areasOfInterest,
    'Soft Skills': skillsData.softSkills
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <Card key={category} className="m-4 shadow-none border-none bg-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-primary">{category}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {skills.map((skill: { name: string; icon: JSX.Element }, index: number) => ( // Added index for key
              <Badge
                key={`${category}-${index}`} // More robust key
                variant="outline"
                className="text-base px-3 py-1 flex items-center border-primary/50"
              >
                {React.cloneElement(skill.icon, { className: "mr-2" })}
                {skill.name}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};

// Component to display ALL achievements (excluding the dedicated certs list if needed, but let's show all here for simplicity, filtering certs only for the specific certs file)
const AllAchievementsContent = () => {
     // If we want achievements.info to NOT list certs already in certificates.info, filter here:
    // const otherAchievements = achievementsData.filter(item => item.type !== 'Certificate');
    // Or, if achievements.info lists EVERYTHING, just use achievementsData directly:
    const allAchievements = achievementsData; // Lists everything

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="m-4">
          <h3 className="text-2xl font-bold text-primary mb-4">All Achievements & Recognitions</h3>
          {allAchievements.length === 0 ? (
              <p className="text-muted-foreground italic">No achievements found.</p>
          ) : (
               <div className="space-y-4">
                {allAchievements.map((achievement) => (
                   <Card key={achievement.id} className="shadow-none border border-muted/50 bg-card/50"> {/* Added some styling */}
                     <CardHeader className="pb-2">
                       <div className="flex justify-between items-center"> {/* Changed to center items */}
                         <CardTitle className="text-lg flex items-center text-primary"> {/* Slightly smaller title */}
                           {achievement.icon} <span className="ml-2">{achievement.title}</span>
                         </CardTitle>
                         <Badge
                           variant={achievement.type === 'Certificate' ? 'default' : 'outline'}
                           className={`text-xs ${achievement.type === 'Certificate' ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary border-primary/30'}`}
                         >
                           {achievement.type}
                         </Badge>
                       </div>
                       {achievement.issuer && (
                         <CardDescription className="text-sm text-muted-foreground pt-1">
                           {achievement.type === 'Certificate' ? 'Issued by: ' : ''}{achievement.issuer}
                         </CardDescription>
                       )}
                     </CardHeader>
                     {achievement.description && (
                       <CardContent className="text-sm text-foreground pt-2"> {/* Smaller content text */}
                         <p>{achievement.description}</p>
                       </CardContent>
                     )}
                      {!achievement.description && !achievement.issuer && achievement.type === 'Extracurricular' && (
                        <CardContent className="text-sm text-muted-foreground italic pt-2">
                          Engaged activity.
                        </CardContent>
                      )}
                   </Card>
                 ))}
               </div>
          )}
      </div>
    </motion.div>
  );
};

// Component to display ONLY certificates
const CertificatesContent = () => {
    // certificatesData is already filtered at the top

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="m-4">
           <h3 className="text-2xl font-bold text-primary mb-4">Certificates</h3>
           {certificatesData.length === 0 ? (
               <p className="text-muted-foreground italic">No certificates found.</p>
           ) : (
              <div className="space-y-4">
               {certificatesData.map((cert) => (
                 <Card key={cert.id} className="shadow-none border border-muted/50 bg-card/50"> {/* Added some styling */}
                   <CardHeader className="pb-2">
                     <div className="flex justify-between items-center"> {/* Changed to center items */}
                       <CardTitle className="text-lg flex items-center text-primary"> {/* Slightly smaller title */}
                          {cert.icon} <span className="ml-2">{cert.title}</span>
                       </CardTitle>
                         {/* Optional: Keep the badge even for just certs */}
                          <Badge
                            variant="default"
                            className="text-xs bg-primary text-primary-foreground"
                          >
                            {cert.type} {/* Will always be 'Certificate' */}
                          </Badge>
                     </div>
                     {cert.issuer && (
                       <CardDescription className="text-sm text-muted-foreground pt-1">
                         Issued by: {cert.issuer}
                       </CardDescription>
                     )}
                   </CardHeader>
                     {/* Certificates don't have descriptions in the provided data, but keep the pattern */}
                     {cert.description && (
                       <CardContent className="text-sm text-foreground pt-2">
                         <p>{cert.description}</p>
                       </CardContent>
                     )}
                 </Card>
               ))}
              </div>
           )}
      </div>
    </motion.div>
  );
};


// Component to display Project details
const ProjectContent = ({ item }: { item: typeof projectsData[0] | undefined }) => {
  if (!item) return <div className="p-6 text-muted-foreground">Select a project to view details.</div>;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card className="m-4 shadow-none border-none bg-transparent">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center text-primary">
              {item.icon} <span className="ml-2">{item.title}</span>
            </CardTitle>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                View on GitHub <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </CardHeader>
        <CardContent className="text-base text-foreground space-y-4">
          <p>{item.description}</p>
          <div>
            <h4 className="font-semibold mb-2 text-primary/90 text-lg">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm marker:text-primary/80">
              {item.features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-primary/90 text-lg">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech, i) => <Badge key={i} variant="secondary" className="text-sm">{tech}</Badge>)}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


// Add the FileTreeItem component type
type FileTreeItemProps = {
  item: FileItem;
  level?: number;
  onFileSelect: (file: FileItem) => void;
  onFolderToggle: (folderId: string) => void; // Added toggle handler prop
  selectedFileId: string | null;
  isOpen: boolean; // Added isOpen prop
};

// Update the FileTreeItem component
const FileTreeItem = ({ item, level = 0, onFileSelect, onFolderToggle, selectedFileId, isOpen }: FileTreeItemProps) => {
  const isSelected = item.id === selectedFileId;

  const handleClick = () => {
    if (item.type === 'folder') {
      onFolderToggle(item.id);
    } else {
      onFileSelect(item);
    }
  };

  const icon = item.type === 'folder' ? (isOpen ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />) : item.icon;

  // Find the matching project data if this is a project file
  const projectData = item.section === 'projects' ? projectsData.find(p => p.id === item.id) : null;

  return (
    <div>
      <div
        onClick={handleClick}
        style={{ paddingLeft: `${level * 1}rem` }}
        className={`flex items-center py-1.5 pl-2 pr-1 cursor-pointer rounded hover:bg-muted/50 text-sm transition-colors ${isSelected ? 'bg-accent/20 text-accent-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
      >
        {item.type === 'folder' ? icon : React.cloneElement(icon, { className: "h-4 w-4 mr-2" })}
        <span className="flex-grow truncate">{item.name}</span>
        {projectData?.link && (
          <a
            href={projectData.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
      {item.type === 'folder' && isOpen && item.children && (
        <div className="ml-2">
          {item.children.map((child) => (
            <FileTreeItem
              key={child.id}
              item={child}
              level={level + 1}
              onFileSelect={onFileSelect}
              onFolderToggle={onFolderToggle}
              selectedFileId={selectedFileId}
              isOpen={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Update the main component
export default function InteractivePortfolioSection() {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(['folder-education', 'folder-projects', 'folder-skills', 'folder-achievements'])); // State for open folders, default open all

  const handleFileSelect = useCallback((file: FileItem) => {
    setSelectedFile(file);
  }, []); // Memoize for stability

   const handleFolderToggle = useCallback((folderId: string) => {
     setOpenFolders(prev => {
       const newSet = new Set(prev);
       if (newSet.has(folderId)) {
         newSet.delete(folderId);
       } else {
         newSet.add(folderId);
       }
       return newSet;
     });
   }, []); // Memoize for stability


  const ActiveContent = useMemo(() => {
    if (!selectedFile) {
      return <div className="p-6 text-muted-foreground flex items-center justify-center h-full">Select a file from the explorer to view its content.</div>;
    }

    // Logic to determine which content component to render based on selectedFile
    switch (selectedFile.section) {
      case 'education':
        return <EducationContent />;
      case 'projects':
        const projItem = projectsData.find(p => p.id === selectedFile.id);
        return <ProjectContent item={projItem} />;
      case 'skills':
        return <SkillsContent />;
      case 'achievements':
          // Use contentType to decide between all achievements and just certificates
          if (selectedFile.contentType === 'certificates') {
              return <CertificatesContent />;
          } else { // Assumes 'all' or default
              return <AllAchievementsContent />;
          }
      default:
        return <div className="p-6 text-muted-foreground">Content not found for this file.</div>;
    }
  }, [selectedFile]); // Depend only on selectedFile


  return (
    <section id="interactive-portfolio" className="py-20 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
            className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 text-primary"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
          Explore My Journey
        </motion.h2>

        {/* VS Code like UI */}
        <Card className="shadow-xl border border-muted/30 overflow-hidden bg-card/80 backdrop-blur-sm" style={{ height: '70vh' }}> {/* Increased height slightly */}
          <ResizablePanelGroup direction="horizontal" className="h-full">
            {/* File Explorer Panel */}
            <ResizablePanel defaultSize={25} minSize={15} maxSize={40}>
              <div className="flex flex-col h-full">
                <div className="p-3 border-b border-muted/30 bg-muted/10"> {/* Added slight background */}
                  <h3 className="text-sm font-semibold text-foreground">EXPLORER</h3>
                </div>
                <ScrollArea className="flex-grow p-2">
                  {fileTree.map(item => (
                    <FileTreeItem
                      key={item.id}
                      item={item}
                      level={0} // Top level items
                      onFileSelect={handleFileSelect}
                      onFolderToggle={handleFolderToggle} // Pass toggle handler
                      selectedFileId={selectedFile?.id || null}
                      isOpen={openFolders.has(item.id)} // Pass open state from parent
                    />
                  ))}
                </ScrollArea>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Content Display Panel */}
            <ResizablePanel defaultSize={75}>
                <div className="flex flex-col h-full">
                    {/* Tab Bar (Optional) */}
                    {selectedFile ? (
                         <div className="p-2 border-b border-muted/30 bg-muted/20 flex items-center">
                             {/* Ensure file icon is used here */}
                             {selectedFile.type === 'file' && selectedFile.icon && React.cloneElement(selectedFile.icon, { className: "h-4 w-4 mr-2" })}
                            <span className="text-sm font-medium text-foreground">{selectedFile.name}</span>
                         </div>
                    ) : (
                        <div className="p-2 border-b border-muted/30 bg-muted/20">
                            <span className="text-sm font-medium text-muted-foreground italic">No file open</span>
                        </div>
                     )}
                    <ScrollArea className="flex-grow">
                       {/* Render the memoized content */}
                       {ActiveContent}
                    </ScrollArea>
                </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Card>
      </div>
    </section>
  );
}