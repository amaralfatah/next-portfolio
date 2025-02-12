// app/links/loading.tsx
export default function Loading() {
  return (
    <div className="flex flex-col gap-8 animate-pulse">
      <div className="h-20 bg-muted rounded-md"/>
      <div className="aspect-video bg-muted rounded-md"/>
    </div>
  );
}
