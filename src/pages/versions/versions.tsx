import ScriptVersionsAPI from '@/api/scriptVersions.ts';
import Loading from '@/components/loading';
import type { ScriptVersion } from '@/types/scriptVersion';


function Versions() {
    const { versionsData, versionsLoading, versionsError } = ScriptVersionsAPI();

    if (versionsLoading) {
        return <Loading />;
    }

    if (versionsError) {
        return (
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Versions</h1>
                <p className="text-red-500">Error</p>
            </div>
        );
    }

    const data: Record<string, ScriptVersion> = versionsData.versions;

    return (
       <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Versions</h1>
            <div className="grid grid-cols-1 gap-4">
                {Object.values(data).map((script, index) => (
                    <div
                        key={index}
                        className="w-full border p-3 flex flex-col gap-2 rounded-lg bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm"
                    >
                        <div className="flex flex-row items-start justify-between">
                            <p className="text-lg font-semibold">{script.name}</p>
                            <p className="text-sm text-[hsl(var(--text-muted-foreground))]">v{script.version}</p>
                        </div>
                        {Object.entries(script.news).map(([category, entries], catIndex) => (
                            <div key={catIndex}>
                                <p className="text-sm font-semibold">{category}</p>
                                <ul className="list-disc ml-5 text-sm text-[hsl(var(--text-muted-foreground))]">
                                    {entries.map((entry, entryIndex) => (
                                        <li key={entryIndex}>{entry}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Versions;