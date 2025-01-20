import React from "react";

interface paginationProps {
    page: number,
    pagesArray: number[],
    changePage: (p: number) => void;
}

const Pagination: React.FC<paginationProps> = ({page, pagesArray, changePage}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', margin: '10px' }}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'pageButton pageButton__current' : 'pageButton'}
                > {p}
                </span>
            )}
        </div>
    );
}

export default Pagination;