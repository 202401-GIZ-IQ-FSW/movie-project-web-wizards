export default async function Genre({params}) {
    const id = params.id;
 
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=31e1507410b28f1467c4589ed6e2d5e7&with_genres=${id}`);
    const data = await res.json();
    const genres = data.results;
    console.log(genres)
    return (
        <div className="grid grid-cols-5 justify-center gap-5 p-8 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ... text-white">
    {genres.map((genre) => (
        <div key={genre.id} className="items-center rounded-lg shadow-md border border-gray-200 p-4">
            
        <img src={`https://image.tmdb.org/t/p/w500${genre.poster_path}`} className="w-full h-auto rounded-lg" alt={genre.original_title} />
        <h1 className="text-lg font-semibold mb-2 pt-5">{genre.original_title}{genre.rating}</h1>
        </div>
    ))}
</div>


    


         
    );
}