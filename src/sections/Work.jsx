import { useEffect, useState } from 'react'
import { categories, projects } from '../data/projects'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import ExtLink from '../components/ExtLink'
import Img from '../components/Img'
export default function Work() {
  const [cat, setCat] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [viewingProject, setViewingProject] = useState(false)
  const items = cat === 'All' ? projects : projects.filter((x) => x.category === cat)

  useEffect(() => {
    if (!selectedProject) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
        setViewingProject(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  const openProject = (project) => {
    setViewingProject(false)
    setSelectedProject(project)
  }

  const closeProject = () => {
    setViewingProject(false)
    setSelectedProject(null)
  }

  const reelId = selectedProject?.link.match(/instagram\.com\/reel\/([^/?]+)/i)?.[1]

  return (
    <Section id="work" eyebrow="Featured work" title="Selected projects." intro="">
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`pb-0.5 border-b transition-colors ${cat === c ? 'border-brown text-brown' : 'border-transparent text-grey hover:text-charcoal'}`}>{c}</button>
        ))}
      </div>
      {items.length === 0 && <p className="text-grey">No projects in this category yet.</p>}
      <ul className="columns-1 sm:columns-2 lg:columns-3 gap-8 [&>li]:mb-12">
        {items.map((x) => (
          <Reveal as="li" key={x.id} className="break-inside-avoid group">
            <div className="overflow-hidden bg-beige">
              {x.video || (x.link && x.platform === 'Instagram' && x.link.includes('/reel/')) ? (
                <button type="button" onClick={() => openProject(x)} className="block w-full text-left" aria-label={`View ${x.title}`}>
                  <Img src={x.img} alt={`${x.title} cover photo`} className={`w-full ${x.ar} transition-transform duration-700 group-hover:scale-[1.03]`} />
                </button>
              ) : (
                <Img src={x.img} alt={`${x.title} thumbnail (replaceable placeholder)`} className={`w-full ${x.ar} transition-transform duration-700 group-hover:scale-[1.03]`} />
              )}
            </div>
            <p className="eyebrow mt-3">{x.category} · {x.platform}</p>
            <h3 className="font-serif text-2xl mt-1">{x.title}</h3>
            <p className="text-sm text-charcoal/70 mt-1">{x.desc}</p>
            <div className="mt-2">
              {x.video || (x.link && x.platform === 'Instagram' && x.link.includes('/reel/')) ? (
                <button type="button" onClick={() => openProject(x)} className="link">View Project</button>
              ) : x.link ? <ExtLink href={x.link}>View Project</ExtLink> : null}
            </div>
          </Reveal>
        ))}
      </ul>
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeProject()
        }}>
          <section role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="relative w-full max-w-3xl overflow-hidden bg-cream shadow-2xl">
            <button type="button" onClick={closeProject} className="absolute right-4 top-4 z-10 p-2 text-sm text-charcoal hover:text-brown" aria-label="Close project">Close ×</button>
            {!viewingProject ? (
              <div className="mx-auto max-w-lg px-6 py-16 text-center sm:px-12">
                <p className="eyebrow">{selectedProject.category} · {selectedProject.platform}</p>
                <h2 id="project-dialog-title" className="mt-3 font-serif text-4xl">{selectedProject.title}</h2>
                <p className="mt-4 text-charcoal/70">Would you like to view this project here?</p>
                <div className="mt-8 flex justify-center gap-4">
                  <button type="button" onClick={() => setViewingProject(true)} className="btn btn-dark">View Project</button>
                  <button type="button" onClick={closeProject} className="link">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="p-4 pt-14 sm:p-6 sm:pt-14">
                <h2 id="project-dialog-title" className="mb-4 font-serif text-2xl">{selectedProject.title}</h2>
                {selectedProject.video ? (
                  <video
                    key={selectedProject.video}
                    src={selectedProject.video}
                    className="mx-auto max-h-[75vh] w-full max-w-[420px] bg-charcoal"
                    autoPlay
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support video playback.
                  </video>
                ) : reelId ? (
                  <iframe
                    title={`${selectedProject.title} Instagram reel`}
                    src={`https://www.instagram.com/reel/${reelId}/embed`}
                    className="mx-auto aspect-[9/16] max-h-[75vh] w-full max-w-[420px] border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : <p className="text-sm text-charcoal/70">This project cannot be displayed here.</p>}
              </div>
            )}
          </section>
        </div>
      )}
    </Section>
  )
}
