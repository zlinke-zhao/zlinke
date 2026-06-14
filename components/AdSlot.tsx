'use client'

import { useEffect, useRef } from 'react'

export default function AdSlot({ position }: { position: string }) {
  const adRef = useRef<HTMLModElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    // Avoid pushing the same ad twice in React strict-mode / re-renders
    if (pushed.current) return
    pushed.current = true

    try {
      // @ts-expect-error adsbygoogle is injected by the script in layout.tsx
      const adsbygoogle = window.adsbygoogle || []
      adsbygoogle.push({})
    } catch (e) {
      console.error('AdSense push error:', e)
    }
  }, [])

  return (
    <div className="my-6" data-ad-position={position}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1019611632171859"
        data-ad-slot="8367513551"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
