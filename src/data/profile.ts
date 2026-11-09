export interface FocusCardItem {
  title: string;
  description: string;
  icon: 'Code2' | 'BrainCircuit' | 'Database' | 'Layers';
}

export interface AboutTeaserData {
  heading: string;
  paragraph: string;
  ctaText: string;
  ctaPath: string;
}

export interface StatItem {
  value: string;
  label: string;
  confirmed: boolean;
}

export interface ProfileData {
  // Confirmed facts
  name: string;
  title: string;
  email: string;
  location: string;
  institution: string;
  degree: string;
  graduationYear: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;

  // [OWNER TO CONFIRM]: Provisional portfolio copy
  intro: string;
  focusCards: FocusCardItem[];
  aboutTeaser: AboutTeaserData;
  stats: StatItem[];
}

export const profile: ProfileData = {
  // CONFIRMED FACTS
  name: 'Ashlin Siddharth',
  title: 'Full Stack Developer',
  email: 'ashlinsiddharth1@gmail.com',
  location: 'Bengaluru, India',
  institution: 'Presidency University, Bengaluru',
  degree: 'BCA - Data Science',
  graduationYear: '2027',
  githubUrl: 'https://github.com/ashlinsiddharth',
  linkedinUrl: 'https://www.linkedin.com/in/ashlin-siddharth-191861165',
  resumePath: '/resume.pdf',

  // [OWNER TO CONFIRM]: Provisional hero introduction text
  intro:
    'I design and develop modern web applications, explore intelligent technologies, and turn ideas into practical digital solutions.',

  // [OWNER TO CONFIRM]: Provisional core focus areas
  focusCards: [
    {
      title: 'Web Development',
      description: 'Building responsive web apps',
      icon: 'Code2',
    },
    {
      title: 'AI / Machine Learning',
      description: 'Exploring intelligent solutions',
      icon: 'BrainCircuit',
    },
    {
      title: 'Data Science',
      description: 'Turning data into insights',
      icon: 'Database',
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end application development',
      icon: 'Layers',
    },
  ],

  // [OWNER TO CONFIRM]: Provisional About section teaser copy
  aboutTeaser: {
    heading: 'A Developer Who Loves Building, Learning and Solving',
    paragraph:
      "I'm a passionate Full Stack Developer and a BCA (Data Science) student at Presidency University. I enjoy building meaningful applications, working with modern technologies, and exploring how AI and data can solve real-world problems.",
    ctaText: 'More About Me',
    ctaPath: '/about',
  },

  // STATS ARRAY: Only verified facts with confirmed=true
  stats: [
    {
      value: '2027',
      label: 'Graduation Year',
      confirmed: true,
    },
  ],
};
