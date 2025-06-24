import "./PortfolioGoals.css";
import data from "../../data/portfolioGoalsData.json";

const PortfolioGoals = () => {
    const { lossRatio, renewalRetention, newBusiness, annualGWP } = data;

    const renderProgress = (value, target) => {
        const percentage = (value / target) * 100;
        return (
            <div className="progress-wrapper">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percentage - 10}%` }}>
                        <span className="progress-label">${value.toFixed(1)}M</span>
                    </div>
                </div>
                <div className="progress-footer">
                    <span className="progress-percentage">{Math.round(percentage)}%</span>
                    <span className="progress-target">${target}M</span>
                </div>
            </div>
        );
    };

    return (
        <div className="portfolio-goals">
            <h2 className="section-header">Portfolio goals</h2>

            <div className="goal">
                <h4>PORTFOLIO LOSS RATIO TARGET</h4>
                <div className="meta meta-target">
                    <span className="target">TG: {lossRatio.target}%</span>
                    <span className="arrow-down"></span>
                </div>
                <div className="loss-bar">
                    <div className="loss-segment green"></div>
                    <div className="loss-segment yellow" />
                    <div className="loss-segment red" />
                    <div className="indicator" style={{ left: `${lossRatio.value}%` }}>
                        <span className="indicator-label">{lossRatio.value}%</span>
                    </div>
                </div>
                <div className="meta meta-good">
                    <span className="label good">{lossRatio.label}</span>
                    <span className="arrow-up"></span>
                </div>
            </div>

            <div className="goal">
                <h4>RENEWAL RETENTION</h4>
                <div className="meta meta-target">
                    <span className="target">TG: {renewalRetention.targetRange.join("-")}%</span>
                </div>
                <div className="retention-bar">
                    <div className="retention-segment red" />
                    <div className="retention-segment yellow" />
                    <div className="retention-segment green"></div>
                    <div className="retention-segment yellow-2" />
                    <div className="indicator" style={{ left: `${renewalRetention.value - 25}%` }}>
                        <span className="indicator-label">{renewalRetention.value}%</span>
                    </div>
                </div>
                <div className="meta meta-good renewal-good">
                    <span className="label good">{renewalRetention.label}</span>
                    <span className="arrow-up"></span>
                </div>
            </div>

            <div className="goal">
                <h4>NEW BUSINESS TARGET</h4>
                {renderProgress(newBusiness.value, newBusiness.target)}
            </div>

            <div className="goal">
                <h4>ANNUAL GWP TARGET</h4>
                {renderProgress(annualGWP.value, annualGWP.target)}
            </div>
        </div>
    );
};

export default PortfolioGoals;
