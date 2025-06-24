import "./WorkQueue.css";
import workQueueData from "../../data/workQueueData.json";
import { useState } from "react";

const tabs = ["Assigned to me", "Pending Review", "Referrals"];

const WorkQueue = () => {
    const [activeTab, setActiveTab] = useState("Assigned to me");

    const allCount = workQueueData.length;
    const pendingCount = workQueueData.filter((item) => item.status === "Pending Review").length;
    const referralsCount = workQueueData.filter((item) => item.type.toLowerCase().includes("referral")).length;

    let filteredData = [];
    if (activeTab === "Assigned to me") {
        filteredData = workQueueData;
    } else if (activeTab === "Pending Review") {
        filteredData = workQueueData.filter((item) => item.status === "Pending Review");
    } else if (activeTab === "Referrals") {
        filteredData = workQueueData.filter((item) => item.type.toLowerCase().includes("referral"));
    }

    const counts = {
        "Assigned to me": allCount,
        "Pending Review": pendingCount,
        Referrals: referralsCount,
    };

    return (
        <div className="work-queue">
            <div className="section-header">
                <h2>Work Queue</h2>
                <div className="work-queue-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? "work-queue-tab active" : "work-queue-tab"}
                            onClick={() => setActiveTab(tab)}>
                            {tab} <span className="work-queue-tab-count">({counts[tab]})</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="table-container">
                <table className="queue-table">
                    <thead>
                        <tr>
                            <th>Originator</th>
                            <th>Client/Line</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, idx) => (
                            <tr key={idx}>
                                <td>
                                    <div className="originator-cell">
                                        <div className="originator-avatar">
                                            {item.originator
                                                .split(" ")
                                                .map((word) => word[0])
                                                .join("")
                                                .toUpperCase()}
                                        </div>
                                        <span>{item.originator}</span>
                                    </div>
                                </td>
                                <td>{item.client}</td>
                                <td>{item.type}</td>
                                <td>
                                    <div className="status">
                                        <span className={`status-dot ${item.status.toLowerCase().replace(" ", "-")}`}></span>
                                        <span className="status-label">{item.status}</span>
                                    </div>
                                </td>
                                <td>{item.created}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WorkQueue;
