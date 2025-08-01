export default function CategoryCard({ icon, title, description }: {
    icon: string;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-white rounded-xl p-6 border shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
        </div>
    );
}
