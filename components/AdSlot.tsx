export default function AdSlot({ position }: { position: string }) {
  return (
    <div
      className="my-6"
      data-ad-position={position}
    >
      {/* AdSense广告位 - 后续替换为真实广告代码 */}
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 text-center text-xs text-gray-400">
        广告位 ({position})
      </div>
    </div>
  )
}
