import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({pageInfo, experiences, projects, skills, socials}: Props) {
  
  const portfolio_title = `${pageInfo.name} - Portfolio`

  return (
    <div>
      <div className='text-teal-600 h-screen bg-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-teal-600/20 scrollbar-thumb-teal-600'>
      <Head>
        <title>{portfolio_title}</title>
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe pageInfo={pageInfo}/>
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter hover:saturate-150 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/9657/9657989.png" alt="Home Image" />
          </div>
        </footer>
      </Link>

      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 20,
  }
};
