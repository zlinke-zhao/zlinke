export const dynamic = 'force-static'

export async function GET() {
  const adsTxt = 'google.com, pub-1019611632171859, DIRECT, f08c47fec0942fa0\n'

  return new Response(adsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
