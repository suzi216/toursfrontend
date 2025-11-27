export default function DynamicList({ label, items, setItems, placeholder }) {
    const addItem = () => setItems(prev => [...(prev || []), '']);
    const removeItem = (index) => setItems(prev => (prev || []).filter((_, i) => i !== index));
    const updateItem = (index, value) => setItems(prev => (prev || []).map((item, i) => (i === index ? value : item)));

const safeItems = Array.isArray(items) ? items : [''];

    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <div className="space-y-3">
                {safeItems.map((item, index) => (
                    <div key={index} className="flex gap-3">
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => updateItem(index, e.target.value)}
                            placeholder={placeholder}
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg"
                        />
                        {safeItems.length > 1 && (
                            <button type="button" onClick={() => removeItem(index)} className="p-2 text-red-500">
                                ✕
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={addItem} className="flex items-center gap-2 px-4 py-2 text-teal-600">
                    Add Item
                </button>
            </div>
        </div>
    );
}
