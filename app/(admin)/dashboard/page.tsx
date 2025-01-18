import HeaderSection from "@/app/(admin)/dashboard/ui/components/Header";
import Tile from "@/app/(admin)/dashboard/ui/components/Tile";
import BarChartComponent from "@/app/(admin)/dashboard/ui/components/BarChartComponent"
import PieChartComponent from "@/app/(admin)/dashboard/ui/components/PieChartComponent"
import LineGraphComponent from "./ui/components/LineGraphComponent";

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-8" id="header-section">
                <div className="flex">
                    <HeaderSection />
                </div>
                <div className="flex gap-5 p-6 rounded-xl bg-slate-50">
                    <Tile />
                    <Tile />
                    <Tile />
                </div>
                <div className="flex gap-2 mb-4">
                    <BarChartComponent />
                    <PieChartComponent />
                    <LineGraphComponent />
                </div>
            </div>
        </div>
    )
}
