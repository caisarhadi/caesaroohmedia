import { gsap } from 'gsap';

const DURATION = 0.5;
const EASE = 'power2.out';

/**
 * Opens the drawer.
 * @param drawerElement - The HTML element of the drawer.
 * @param backdropElement - The HTML element of the backdrop.
 * @param onCompleteCallback - Optional callback to run when the animation completes.
 */
export const openDrawerAnimation = (
  drawerElement: HTMLElement,
  backdropElement: HTMLElement | null,
  onCompleteCallback?: () => void
) => {
  // console.log("🚀 GSAP openDrawerAnimation FUNCTION CALLED");
  gsap.killTweensOf([drawerElement, backdropElement]);

  const tl = gsap.timeline({ onComplete: onCompleteCallback }); // Use timeline's onComplete
  
  if (backdropElement) {
    tl.to(backdropElement, {
      opacity: 1,
      duration: DURATION,
      ease: EASE,
      onStart: () => { if(backdropElement) backdropElement.style.display = 'block'; }
    }, 0);
  }
  tl.to(drawerElement, {
    x: '0%',
    duration: DURATION,
    ease: EASE,
    onStart: () => { drawerElement.style.visibility = 'visible'; }
  }, 0);
  return tl; // Returning timeline can be useful but not strictly needed for this callback pattern
};

/**
 * Closes the drawer.
 * @param drawerElement - The HTML element of the drawer.
 * @param backdropElement - The HTML element of the backdrop.
 * @param onCompleteCallback - Optional callback to run when the animation completes.
 */
export const closeDrawerAnimation = (
  drawerElement: HTMLElement,
  backdropElement: HTMLElement | null,
  onCompleteCallback?: () => void
) => {
  console.log("🚀 GSAP closeDrawerAnimation FUNCTION CALLED"); // Keep this log for now
  gsap.killTweensOf([drawerElement, backdropElement]);

  const tl = gsap.timeline({ onComplete: onCompleteCallback }); // Use timeline's onComplete

  if (backdropElement) {
    tl.to(backdropElement, {
      opacity: 0,
      duration: DURATION,
      ease: EASE,
      onComplete: () => { if(backdropElement) backdropElement.style.display = 'none'; } 
    }, 0);
  }
  tl.to(drawerElement, {
    x: '-100%',
    duration: DURATION,
    ease: EASE,
    onComplete: () => { drawerElement.style.visibility = 'hidden'; } 
  }, 0);
  return tl;
};

// Example utility function (can be removed or modified)
// export const sampleAnimation = (target: gsap.TweenTarget) => {
//   gsap.to(target, { rotation: 360, duration: 1 });
// };

// Configuration for Next.js compatibility
// Ensure GSAP targets are not null before animating, especially with SSR
// For example, use React refs and useEffect

// It's also good practice to kill animations on component unmount
// e.g., in useEffect return () => { /* gsap.killTweensOf(target) */ } 