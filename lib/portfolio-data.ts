export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  imgSrc: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Artist site - Brapurple",
    slug: "brapurple",
    description: "A clean, modern portfolio site for an artist.",
    problem: "The artist needed a platform to showcase their work, share their story, and provide an easy way for fans to get in touch.",
    solution: "I designed and built a minimalist, responsive website that emphasizes the artist's visual work while maintaining a professional and artistic aesthetic.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    imgSrc: "/images/brapurple.png",
    link: "https://brapurple.me",
  },
  {
    id: "2",
    name: "Job Portal - Jobify",
    slug: "jobify",
    description: "A comprehensive job portal connecting job seekers with employers.",
    problem: "Traditional job search platforms were either too cluttered or lacked the necessary features for efficient job matching.",
    solution: "I created a streamlined job portal with advanced search filters, user-friendly application processes, and a clean interface for both employers and job seekers.",
    technologies: ["React", "Firebase", "CSS"],
    imgSrc: "/images/jobify.png",
    link: "https://jobassistant.netlify.app",
  },
  {
    id: "3",
    name: "Rock Paper Scissors Game",
    slug: "rock-paper-scissors",
    description: "An interactive and fun version of the classic game.",
    problem: "A fun way to demonstrate front-end skills and user interaction in a simple game environment.",
    solution: "Developed a fully interactive Rock Paper Scissors game with smooth animations and a score tracking system.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imgSrc: "/images/rock-p-s.png",
    link: "https://uniik-rock-paper-scissors.netlify.app/",
  },
  {
    id: "4",
    name: "Quiz Portal - Erudite Challenge",
    slug: "erudite-challenge",
    description: "An educational platform for challenging quizzes.",
    problem: "The need for a platform where users could test their knowledge in various categories in a fun and engaging way.",
    solution: "Built a quiz portal with a variety of question sets, timed challenges, and performance tracking.",
    technologies: ["React", "Tailwind CSS", "Supabase"],
    imgSrc: "/images/erudite.png",
    link: "https://eruditechallenge.netlify.app",
  },
];
