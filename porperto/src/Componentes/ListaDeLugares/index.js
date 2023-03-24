

import Lugar from "../Lugar";


function ListaDeLugares({ lugares }) {

    

    return (
        <>



                {console.log("lugares definitivos", lugares)}


                {lugares.map((lugar, index) =>


                    <Lugar lugar={lugar} index={index} />


                )}

            </>
    );
}

export default ListaDeLugares;