import HeaderSection from "../utilities/ui/pages/dashboard-page/page-sections/header-section/HeaderSection";
import Tile from "../utilities/ui/pages/dashboard-page/page-sections/tiles-section/Tile";
import ButtonTile from "../utilities/ui/pages/dashboard-page/page-sections/tiles-section/ButtonTile";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-8" id="header-section">
                <div className="flex">
                    <HeaderSection />
                </div>
                <div className="flex gap-5 p-6 bg-slate-50 rounded-xl">
                    <Tile />
                    <Tile />
                </div>
                <div className="flex justify-between align-center py-4 px-12 border">
                    <div>What would you like to do | </div>
                    <div className="flex gap-2">
                        <ButtonTile />
                        <ButtonTile />
                        <ButtonTile />
                    </div>
                </div>
            </div>
        </div>
    )
}