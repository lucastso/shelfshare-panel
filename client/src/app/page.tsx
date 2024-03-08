export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-4 bg-zinc-900 h-screen text-white">
      <h1 className="text-xl">tabdraw</h1>

      <span>username:</span>
      <span>password:</span>

      <span>bookmarks:</span>
      <div className="flex flex-col">
        <span>a</span>
        <span>a</span>
        <span>a</span>
        <span>a</span>
      </div>
    </main>
  );
}
