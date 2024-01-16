function SongCardSkeleton() {
  return (
    <div className="max-w-[300px] w-full rounded-2xl p-6 overflow-hidden shadow-lg shadow-black/30 bg-zinc-700/50 animate-pulse">
      <div className="w-full h-64 bg-gray-500 rounded-xl"></div>
      <div className="mt-8">
        <div className="h-8 bg-gray-500 rounded"></div>
        <div className="mt-2 h-4 bg-gray-500 rounded w-3/4"></div>
      </div>
    </div>
  );
}

export { SongCardSkeleton };
