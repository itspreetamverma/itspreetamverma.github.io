import { useState } from 'react';

export default function CopyButton({ text, targetId, concept }) {
  const [label, setLabel] = useState('Copy');

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
      setLabel('Copied');
    } catch (error) {
      const element = document.getElementById(targetId);
      if (element) {
        const range = document.createRange();
        range.selectNodeContents(element);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setLabel('Selected');
    }
    setTimeout(() => setLabel('Copy'), 1600);
  }

  return (
    <button type="button" className="copy" data-concept={concept} onClick={handleClick}>
      {label}
    </button>
  );
}
