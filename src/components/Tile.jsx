export default function Tile({ className = '', concept, children }) {
  return (
    <section className={`tile ${className}`} data-concept={concept}>
      {children}
    </section>
  );
}
