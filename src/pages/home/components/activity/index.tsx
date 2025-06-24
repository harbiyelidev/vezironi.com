import { Tooltip } from 'react-tooltip'
import type { ProfileData } from '@/types/discordProfile'

function ExternalImage(rawUrl?: string): string {
    const matchedUrl = rawUrl?.match(/https\/.+/);

    const imageUrl: string = matchedUrl ? `https://${matchedUrl[0].slice(6)}` : '';

    console.log('ExternalImage URL:', imageUrl);

    return imageUrl;
}

function Activity({ profile }: { profile: ProfileData }) {
    const findVisualStudioActivity = (activities: ProfileData['activities']) => {
        return activities.find(activity => activity.name === 'Visual Studio Code');
    }

    const visualStudioActivity = findVisualStudioActivity(profile.activities);

    if (!visualStudioActivity) {
        return <div className="grid w-full grid-cols-1 gap-4 max-md:w-full">
            <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-md w-full">
                <div className="p-6 pt-0 mt-5 w-full">
                    <div className="flex flex-row items-center w-full">
                        <div className="min-w-24 min-h-24 w-24 h-24 max-w-24 max-h-24 animate-pulse bg-[hsl(var(--bg-secondary))] rounded-md"></div>
                        <div className="ml-4 w-full">
                            <div className="flex flex-col gap-y-1.5 mb-1">
                                <div className="w-36 h-8 animate-pulse bg-[hsl(var(--bg-secondary))] rounded-md"></div>
                                <div className="w-36 h-5 animate-pulse bg-[hsl(var(--bg-secondary))] rounded-md"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

    return (
        <div className="grid w-full grid-cols-1 gap-4 max-md:w-full">
            <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-md w-full">
                <div className="p-6 pt-0 mt-5 w-full">
                    <div className="flex flex-row items-center w-full">
                        <img id="vscode-image" src={ExternalImage(visualStudioActivity?.assets.large_image)} alt="vs_code" width={100} height={100} loading='eager' decoding='async' className='rounded-md' />
                        <Tooltip
                            anchorSelect="#vscode-image"
                            content={visualStudioActivity?.assets.large_text || 'Visual Studio Code'}
                            noArrow={true}
                            place="top"
                            className='!bg-[hsl(var(--bg-secondary))] !text-[hsl(var(--text-foreground))] !text-sm !font-["Geist-Regular"] !p-2 !rounded-lg !shadow-md'
                        />
                        <div className="ml-4 w-full">
                            <div className="flex flex-col mb-1">
                                <h1 className="text-2xl font-['Geist-Bold'] text-[hsl(var(--text-primary))]">{visualStudioActivity?.state}</h1>
                                <p className="font-['Geist-Regular'] text-gray-400">{visualStudioActivity?.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;