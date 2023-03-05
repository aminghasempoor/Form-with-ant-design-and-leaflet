import dynamic from "next/dynamic";
const Mapantd = dynamic(() => import('./Mapantd'),{
    ssr : false
});
export default Mapantd