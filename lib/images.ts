/**
 * Mockup imagery helper.
 *
 * The live reference site uses licensed/shot photography we can't reuse.
 * For a droppable template we use Picsum Photos (https://picsum.photos) —
 * a free placeholder image service built exactly for this purpose (no
 * license/attribution issues). Swap `mockPhoto(...)` calls for real
 * `next/image` assets once you have final photography.
 */
export function mockPhoto(seed: string, width = 2000, height = 2000) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed+666)}/${width}/${height}`;
}
