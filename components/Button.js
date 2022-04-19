export default function Button({ children, right, variants }) {
    const buttonClass = {
        "download": "py-[10px] px-[25px] float-right text-white bg-blue-600 SourceSans font-semibold tracking-widest rounded-md text-lg transition-all hover:bg-blue-700",
        "register": "py-[15px] px-[45px] text-white bg-blue-600 SourceSans font-semibold tracking-widest rounded-md text-lg transition-all hover:bg-blue-700",
        "register": "py-[15px] px-[45px] text-white bg-blue-600 SourceSans font-semibold tracking-widest rounded-md text-lg transition-all hover:bg-blue-700 flex items-center",
        "learn more": "py-[15px] px-[45px] text-blue-600 bg-blue-600/10 ml-6 SourceSans font-semibold tracking-widest rounded-md text-lg transition-all hover:bg-blue-600 hover:text-white"
    }

    const variant = buttonClass[variants];

    return (
        <button className={variant} >{ children }</button>
    );
}