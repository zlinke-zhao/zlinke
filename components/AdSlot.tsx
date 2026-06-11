export default function AdSlot({ position }: { position: string }) {
  return (
    <div
      className="my-6"
      data-ad-position={position}
    >
      {/* AdSense广告位 - 后续替换为真实广告代码 */}
      <div className="bg-gray-50 dark:bg-gray-800/50 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center text-xs text-gray-400 dark:text-gray-500">
        广告位 ({position})
      </div>
    </div>
  )
}
