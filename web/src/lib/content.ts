import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_DIR = join(process.cwd(), 'content');

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  body: string;
  technologies: string[];
  role: string;
  outcomes: string;
  images: string[];
  links: { label: string; url: string }[];
}

export interface Company {
  companyName: string;
  logo: string;
  url?: string;
  order: number;
}

export interface Settings {
  name: string;
  roles: string[];
  shortBio: string;
  socialLinks: { label: string; url: string }[];
  navItems: { label: string; iconId: string; route: string }[];
}

/**
 * Load all case studies from Decap-managed content
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const caseStudiesPath = join(CONTENT_DIR, 'case-studies');
  
  try {
    const files = await readdir(caseStudiesPath);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    const studies = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = join(caseStudiesPath, file);
        const content = await readFile(filePath, 'utf-8');
        const { data, content: body } = matter(content);
        const htmlBody = await marked(body);
        
        return {
          slug: data.slug || file.replace('.md', ''),
          title: data.title || '',
          summary: data.summary || '',
          body: htmlBody || '',
          technologies: data.technologies || [],
          role: data.role || '',
          outcomes: data.outcomes || '',
          images: data.images || [],
          links: data.links || [],
        } as CaseStudy;
      })
    );
    
    return studies;
  } catch (error) {
    // If directory doesn't exist or is empty, return empty array
    return [];
  }
}

/**
 * Load a single case study by slug
 */
export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const studies = await getCaseStudies();
  return studies.find(study => study.slug === slug) || null;
}

/**
 * Load all company logos from Decap-managed content, sorted by order
 */
export async function getCompanies(): Promise<Company[]> {
  const companiesPath = join(CONTENT_DIR, 'companies');
  
  try {
    const files = await readdir(companiesPath);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    const companies = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = join(companiesPath, file);
        const content = await readFile(filePath, 'utf-8');
        const { data } = matter(content);
        
        return {
          companyName: data.companyName || '',
          logo: data.logo || '',
          url: data.url,
          order: data.order || 0,
        } as Company;
      })
    );
    
    // Sort by order field
    return companies.sort((a, b) => a.order - b.order);
  } catch (error) {
    return [];
  }
}

/**
 * Load profile and site settings from Decap-managed content
 */
export async function getSettings(): Promise<Settings | null> {
  const settingsPath = join(CONTENT_DIR, 'settings');
  
  try {
    const files = await readdir(settingsPath);
    const mdFile = files.find(file => file.endsWith('.md'));
    
    if (!mdFile) return null;
    
    const filePath = join(settingsPath, mdFile);
    const content = await readFile(filePath, 'utf-8');
    const { data } = matter(content);
    
    return {
      name: data.name || 'Portfolio',
      roles: data.roles || [],
      shortBio: data.shortBio || '',
      socialLinks: data.socialLinks || [],
      navItems: data.navItems || [],
    } as Settings;
  } catch (error) {
    return null;
  }
}
