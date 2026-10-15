import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

// Over images the cursor becomes a plain white dot (no inversion).
const IMAGE_SELECTOR = 'img, [data-cursor="image"]'
// Interactive things (links / buttons) grow the dot.
const GROW_SELECTOR = 'a, button, [role="button"], [data-cursor="grow"]'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches) return

    const dot = dotRef.current
    if (!dot) return

    document.body.classList.add(styles.hideNativeCursor)

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY
    let rafId = 0

    const render = () => {
      // Smooth follow (lerp) for a nice trailing feel.
      x += (targetX - x) * 0.22
      y += (targetY - y) * 0.22
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      dot.style.opacity = '1'
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (!target) return
      if (target.closest(GROW_SELECTOR)) {
        dot.classList.add(styles.grow)
        dot.classList.remove(styles.image)
      } else if (target.closest(IMAGE_SELECTOR)) {
        dot.classList.add(styles.image)
        dot.classList.remove(styles.grow)
      } else {
        dot.classList.remove(styles.image, styles.grow)
      }
    }

    const onLeave = () => {
      dot.style.opacity = '0'
    }
    const onEnter = () => {
      dot.style.opacity = '1'
    }
    const onDown = () => dot.classList.add(styles.down)
    const onUp = () => dot.classList.remove(styles.down)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      document.body.classList.remove(styles.hideNativeCursor)
    }
  }, [])

  return <div ref={dotRef} className={styles.cursor} aria-hidden="true" />
}
