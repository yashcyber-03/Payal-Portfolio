// Renders a real link when a URL is set, otherwise a clearly inactive label.
export default function ExtLink({ href, children, empty = 'Add link in data file', className = 'link' }) {
  if (/^https?:\/\//.test(href || '')) return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  return <span className="text-xs text-grey" title={empty}>{children} (link not set)</span>
}
