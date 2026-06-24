export default async function getFakestoreData(path: `/${string}`) {
    const res = await fetch(`https://dev.tejbahadurkarki.site/api${path}`,
        {
            next: {
                revalidate: 60,
                tags: ["api", path]
            }
        }
    );
    return await res.json();

}