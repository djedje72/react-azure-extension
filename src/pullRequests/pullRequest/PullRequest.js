import React from 'react';
import './PullRequest.css';
import PullRequestCreator from "./pullRequestCreator";
import PullRequestReviewers from "./pullRequestReviewers";

export default () => {
    return (
        <div className="pullRequest">
            <div className="pullRequest-details">
                <div className="creator">
                    <div className="card-container">
                        <span className="card draft">DRAFT</span>
                        <span className="card fast">
                            <span className="auto-complete"></span>
                            <span>AUTO</span>
                        </span>
                    </div>
                    <PullRequestCreator data-creator="::pr.createdBy"/>
                </div>
                <div className="details">
                    <span className="prtitle"></span>
                    <div className="branchesInfo">from to target</div>
                    <PullRequestReviewers data-reviewers="::pr.reviewers"/>
                    <div className="details-content">
                        <i className="fab fa-git-alt"></i>
                        <span className="repository">:</span>
                        <span className="durationInfo"></span>
                    </div>
                </div>
                <div className="state-details">
                    <div className="prstate state-{{pr.evaluations.state}}"
                        title="{{$ctrl.policiesDetails(pr.evaluations.policies)}}">
                        <i className="fas fa-exclamation icons-status"></i>
                        <i
                            className="fas fa-times icons-status"></i>
                        <i className="fas fa-check icons-status"></i>
                    </div>
                    <span className="comments"><span
                           ></span>
                        <i className="far fa-comments"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};
