import React, { useEffect, useState } from 'react';
import '../styles/ProjectModal.css';

function ProjectModal({ project, details, onClose }) {
  const [loading, setLoading] = useState(true);

  // Close on Escape, lock body scroll while open
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    // Brief, deliberate loading state so the modal doesn't feel like it
    // just "snaps" into existence — also gives slower devices a moment
    // to settle before content paints.
    const timer = setTimeout(() => setLoading(false), 400);

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          X
        </button>

        {loading ? (
          <div className="modal-loading">
            <div className="modal-spinner"></div>
            <p>Loading project details…</p>
          </div>
        ) : !details ? (
          <div className="modal-error">
            <p>Sorry, details for this project couldn't be loaded.</p>
            <button className="btn btn-color-2 modal-retry-btn" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <div className="modal-page">
            <h2 id="modal-title" className="modal-title">{project.title}</h2>

            <p className="modal-text">{details.about}</p>

            {details.features?.length > 0 && (
              <>
                <h3 className="modal-heading">Key Features</h3>
                {details.features.map((f, i) => (
                  <p key={i} className="modal-text">
                    <strong className="modal-inline-label">{f.heading}: </strong>
                    {f.text}
                  </p>
                ))}
              </>
            )}

            {details.stack?.length > 0 && (
              <>
                <h3 className="modal-heading">Tech Stack</h3>
                {details.stack.map(([label, value], i) => (
                  <p key={i} className="modal-text modal-stack-line">
                    <strong className="modal-inline-label">{label}:</strong> {value}
                  </p>
                ))}
              </>
            )}

            <button
              className="btn btn-color-1 modal-github-btn"
              onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
            >
              View on GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
