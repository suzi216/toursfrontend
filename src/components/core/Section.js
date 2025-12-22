function Section({ title, children }) {
    return (
        <div className="space-y-3">
            <h2 className="text-lg xl:text-xl font-semibold text-gray-700 border-b-2 border-teal-600 pb-2">{title}</h2>
            {children}
        </div>
    );
}

export default Section;