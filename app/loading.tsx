export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-midnight text-white">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border border-cyanGlow/20" />
        <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-cyanGlow" />
        <div className="absolute inset-6 rounded-full bg-cyanGlow/20 blur-md" />
      </div>
    </main>
  );
}
