import Image from "next/image";
import icon from '/public/arrowIcon.svg'
const UserInput = ({inputRef,getIpDetails}:any)=>{
    return (
        <div className="flex flex-row justify-center self-center w-full h-2/5">
        <input className="p-2 mt-8 rounded w-[600px] outline-none " placeholder="Search of any IP or Domain" ref={inputRef} />
        <div className="p-2 h-18 bg-black mt-8 flex justify-center self-center rounded-r">
        <Image
        alt="arrow"
        src={icon}
        width={27}
        height={27}
        className="cursor-pointer"
        onClick={getIpDetails}
        />
        </div>
        </div>
     
    )
}

export default UserInput;