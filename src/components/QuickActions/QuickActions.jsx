import "./QuickActions.css";
const QuickActions = () => {
    return (
        <div className="quick-actions">
            <h2 className="quick-actions-header">Quick Actions</h2>

            <div className="quick-actions-btns">
                <button className="quick-actions-btn">New Submission</button>
                <button className="quick-actions-btn">Quote Builder</button>
                <button className="quick-actions-btn">Risks Models</button>
                <button className="quick-actions-btn">Documents Upload</button>
            </div>
        </div>
    );
};

export default QuickActions;
