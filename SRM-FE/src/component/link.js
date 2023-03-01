import React from 'react'

function link() {
    return (
        <a
            href={target}
            onClick={(event) => {
                event.preventDefault(); // menghapus behavior default
                navigate(target); // mengubah state berdasarkan target
            }}
        >
            {children}
        </a>
    );
}

export default link
