import CopyButton from './CopyButton';

export default function ContactRow({ label, value, href, canCopy = false, copyConcept }) {
  const valueId = `contact-${label.toLowerCase()}`;

  return (
    <div className="item">
      <span className="k">{label}</span>
      {href ? (
        <a className="v" id={valueId} href={href} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : (
        <span className="v" id={valueId}>
          {value}
        </span>
      )}
      {canCopy && <CopyButton text={value} targetId={valueId} concept={copyConcept} />}
    </div>
  );
}
