// Every label here is attached to a real element through data-concept.
// The Inspect mode badges and the "How this page is built" list both read from this object.
export const concepts = {
  grid: 'CSS Grid · 12-column bento layout with Tailwind grid-cols-12',
  sticky: 'Sticky header · position: sticky with safe-area insets',
  aria: 'ARIA · role=switch with aria-checked',
  tokens: 'CSS variables · light and dark theme tokens',
  fluidType: 'Fluid type · clamp() with a variable font',
  anchors: 'Anchor links · target=_blank with rel=noopener noreferrer',
  semanticList: 'Semantic HTML · dl, dt and dd for facts',
  flex: 'Flexbox · flex-wrap meta row',
  rest: 'REST basics · HTTP verb, route, status code, JSON body',
  events: 'React events · onClick handlers on the request buttons',
  asyncCall: 'Async JavaScript · useEffect, Promise and async data flow',
  chips: 'Tailwind CSS · utility classes for the flex-wrap skill chips',
  responsive: 'Responsive design · tiles span all 12 columns below 768px',
  autoFit: 'CSS Grid · auto-fit with minmax() cards',
  clipboard: 'Clipboard API · writeText with a try/catch fallback',
  component: 'React components · one Tile component reused for every block',
  state: 'React state · useState drives Inspect mode',
  props: 'Props · data flows from App down into child components',
  list: 'Array.map · this list is rendered from the concepts data file',
  vite: 'Vite · dev server and production build',
};
