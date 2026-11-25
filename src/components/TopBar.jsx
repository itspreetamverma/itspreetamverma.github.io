import { concepts } from '../data/concepts';

export default function TopBar({ inspectOn, setInspectOn }) {
  return (
    <header className="top" data-concept={concepts.sticky}>
      <span className="font-mono text-sm font-medium tracking-wide">preetam.verma</span>
      <button
        type="button"
        role="switch"
        aria-checked={inspectOn}
        className="switch"
        data-concept={concepts.aria}
        onClick={() => setInspectOn(!inspectOn)}
      >
        <span className="track" aria-hidden="true">
          <span className="knob" />
        </span>
        <span>
          Inspect mode: <b>{inspectOn ? 'on' : 'off'}</b>
        </span>
      </button>
    </header>
  );
}
