import { notFound } from "next/navigation";
import ProjectDetailPage from "../../../components/ProjectDetailPage";
import {
  getDictionary,
  getFeaturedProjects,
  getProjectBySlug,
} from "../../../../lib/i18n";
import {
  getProjectMetadata,
  getProjectStructuredData,
} from "../../../../lib/seo-config";

const locale = "ar";

export const dynamicParams = false;

export function generateStaticParams() {
  return getFeaturedProjects(locale).map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(locale, slug);

  return project
    ? getProjectMetadata(locale, project)
    : { robots: { index: false, follow: false } };
}

export default async function ArabicProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailPage
      locale={locale}
      dictionary={getDictionary(locale)}
      project={project}
      structuredData={getProjectStructuredData(locale, project)}
    />
  );
}
