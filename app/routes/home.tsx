import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/resumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NeuroCV" },
    {
      name: "description",
      content: "Smart Analyzer to find you the right job!",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Analyze your Application & Resume Scores</h1>
          <h2>AI-powered analyzer to keep your submission reviewed.</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
