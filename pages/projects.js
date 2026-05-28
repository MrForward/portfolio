import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { content } from '../data/content';

export default function Projects() {
    return (
        <Layout
            title="Builds — Krishna Chaitanya"
            description="Side projects I've shipped: Fumble Machine, ProdReady, SkillTree, and more AI-powered tools."
            path="/projects"
        >
            <section>
                <h1 className="mb-12">{content.projects.title}</h1>
                <div className="space-y-8">
                    {content.projects.items.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {/* Additional callout */}
                <p className="text-center text-gray-500 dark:text-gray-400 mt-8 text-sm">
                    ++ Completed 100's of Product Teardowns, some are contest winners and some ended with humbling critiques.
                </p>
            </section>
        </Layout>
    );
}
