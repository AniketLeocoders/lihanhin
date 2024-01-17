import SortFilter from "./SortFilter"

const SidebarComp = () => {
    return (
        <div className=' flex h-full min-h-screen'>
            <div className="flex-[3] bg-slate-600"> xssxs</div>
            <div className="flex-1 p-6">
                <SortFilter />
            </div>
        </div>
    )
}

export default SidebarComp