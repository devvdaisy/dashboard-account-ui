import "./Dashboard.css";
import WorkQueue from "../components/WorkQueue/WorkQueue";
import PortfolioGoals from "../components/PortfolioGoals/PortfolioGoals";
import QuickActions from "../components/QuickActions/QuickActions";
import MarketIntelligence from "../components/MarketIntelligence/MarketIntelligence";
import MyAccounts from "../components/MyAccounts/MyAccounts";

export default function Dashboard() {
    return (
        <div className="dashboard-page">
            <div className="dashboard-page-top">
                <WorkQueue />
                <PortfolioGoals />
                <div className="dashboard-page-right">
                    <QuickActions />
                    <MarketIntelligence />
                </div>
            </div>
            <div className="dashboard-page-bottom">
                <MyAccounts />
            </div>
        </div>
    );
}
