export interface ProfileData {
  name: string;
  title: string;
  location: string;
  institution: string;
  degree: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
}

export const profile: ProfileData = {
  name: 'Ashlin Siddharth',
  title: 'Full Stack Developer',
  location: 'Bengaluru, India',
  institution: 'Presidency University, Bengaluru',
  degree: 'BCA – Data Science',
  githubUrl: 'https://github.com/ashlinsiddharth',
  // [OWNER TO CONFIRM]: Provisional LinkedIn URL from initial requirements
  linkedinUrl: 'https://www.linkedin.com/in/ashlin-siddharth-191861165',
  // [OWNER TO CONFIRM]: Target path for owner-provided resume PDF asset
  resumePath: '/resume.pdf',
};
