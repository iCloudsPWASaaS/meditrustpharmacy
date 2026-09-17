const palettes = [
  ["#00BDE0", "#0369A1"],
  ["#7C3AED", "#4F46E5"],
  ["#F59E0B", "#EF4444"],
  ["#10B981", "#0D9488"],
  ["#EC4899", "#8B5CF6"],
];

export function AvatarInitials({
  name,
  index = 0,
  size = 48,
  ring = true,
}: {
  name: string;
  index?: number;
  size?: number;
  ring?: boolean;
}) {
  const initials = name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  const [c1, c2] = palettes[index % palettes.length];
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full text-white ${ring ? "ring-2 ring-white" : ""}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${c1}, ${c2})`,
        fontSize: size * 0.36,
        fontWeight: 600,
      }}
      aria-hidden
    >
      {initials || "MP"}
    </span>
  );
}

export function AvatarGroup({ names, size = 44 }: { names: string[]; size?: number }) {
  return (
    <span className="flex -space-x-3">
      {names.map((n, i) => (
        <AvatarInitials key={n} name={n} index={i} size={size} />
      ))}
    </span>
  );
}
