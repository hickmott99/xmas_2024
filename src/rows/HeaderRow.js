function HeaderRow() {
    const cell_styles = "border border-black text-white font-bold text-center p-2"
    return (
        <>
            <div className={cell_styles}>Mom</div>
            <div className={cell_styles}>Dad</div>
            <div className={cell_styles}>Sydney</div>
            <div className={cell_styles}>Aubrey</div>
            <div className={cell_styles}>Drew</div>
        </>
    );
}

export default HeaderRow