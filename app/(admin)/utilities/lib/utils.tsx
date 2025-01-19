export function createLinkContent(icon: JSX.Element, text: string) {
    const baseTextClass = 'text-sm';

    return (
        <>
            <div className="w-6 h-6 justify-center items-center flex">{icon}</div>
            <div className={baseTextClass}>{text}</div>
        </>
    );
}