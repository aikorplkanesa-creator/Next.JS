export default function SkillCard({ nama, level }) {
    return (
        <div className="rounded-xl border border-border bg-card p-5
shadow-sm">
    <h3 className="text-lg font-semibold text-primary">{nama}</h3>
        <p className="mt-1 text-sm text-muted-foreground dark:text-gray-400">Level: {level}</p>

        <div className="mt-4 text-xs font-medium text-blue-600">
            Lihat detail →
        </div>
   </div>
 );
}
