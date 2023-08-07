const DetailsIP = () => {

    return (
        <main className="p-2 absolute rounded-lg shadow-md top-[180px] flex justify-around self-center z-10 w-[80%] h-[100px] bg-white">

            <section className="p-3">
                <p className="text-slate-500 font-semibold">IP ADDRESS</p>
                <h4 className="text-center text-slate-700">10445</h4>
            </section>
            <section className="p-3">
                <p className="text-slate-500 font-semibold">LOCATION</p>
                <h4 className="text-center text-slate-700">Pune</h4>
            </section>

            <section className="p-3">
                <p className="text-slate-500 font-semibold">TIME ZONE</p>
                <h4 className="text-center text-slate-700">EUU</h4>
            </section>

            <section className="p-3">
                <p className="text-slate-500 font-semibold">ISP</p>
                <h4 className="text-center text-slate-700">Jio</h4>
            </section>

        </main>
    )
}

export default DetailsIP