export default function Kartu ({Hobi, children}) {
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-utama">{Hobi}</h2>
            {children}
        </section>
    );
}