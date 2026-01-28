import React, { useMemo, useRef } from "react"

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
}: {
  children: React.ReactNode
  className?: string
  maxTilt?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  const supportsFinePointer = useMemo(() => {
    if (typeof window === "undefined") return true
    return window.matchMedia("(pointer:fine)").matches
  }, [])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!supportsFinePointer) return
    const el = ref.current
    if (!el) return

    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width // 0..1
    const py = (e.clientY - r.top) / r.height // 0..1

    const rx = (py - 0.5) * -2 * maxTilt
    const ry = (px - 0.5) * 2 * maxTilt

    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)`
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[
        "neon-frame relative will-change-transform transition-transform duration-200",
        className,
      ].join(" ")}
    >
      <div className="shimmer" />
      {/* content must be above the ::after glass layer */}
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
