import React, {useEffect, useState} from 'react';
import './PullRequests.css';
import Menu from '../menu';
import PullRequest from './pullRequest';
import {getPullRequests} from "azure/index";

export default () => {
    const [pullRequests, setPullRequests] = useState({"all": []});
    useEffect(() => {
        (async() => {
            const prs = await getPullRequests();
            console.log(prs);
            setPullRequests(prs);
        })();
    }, []);
    return (<>
        <Menu/>
        {pullRequests.all.map(e => <PullRequest key={e.pullRequestId}/>)}
        {/* <div>
            <div class="pullRequest" data-ng-show="!$ctrl.showSettings && pr.isVisible" data-ng-class="$ctrl.reviewClass(pr)"
                data-ng-repeat="pr in $ctrl.pullRequests | orderBy:$ctrl.valueOfDate">
                <div class="actions">
                    <!-- <img data-ng-show="$ctrl.isMinePullRequests()" class="auto-complete" title="Build auto-complete" data-ng-class="{ 'disabled': !pr.autoCompleteSetBy }" data-ng-click="$ctrl.toggleAutoComplete($event, pr);" src="/img/auto-complete.png"/> -->
                </div>
                <div class="pullRequest-details" data-ng-click="$ctrl.redirect(pr);">
                    <div class="creator">
                        <div class="card-container">
                            <span class="card draft" data-ng-class='::{"draft--visible" : pr.isDraft}'>DRAFT</span>
                            <span class="card fast" data-ng-class='::{"fast--visible" : pr.autoCompleteSetBy}'>
                                <span class="auto-complete"></span>
                                <span>AUTO</span>
                            </span>
                        </div>
                        <pull-request-creator data-creator="::pr.createdBy"></pull-request-creator>
                    </div>
                    <div class="details">
                        <span class="prtitle" data-ng-bind="::pr.title"></span>
                        <div class="branchesInfo">{{::pr.sourceRefName.replace('refs/heads/', '')}} to
                            {{::pr.targetRefName.replace('refs/heads/', '')}}</div>
                        <pull-request-reviewers data-reviewers="::pr.reviewers"></pull-request-reviewers>
                        <div class="details-content">
                            <i class="fab fa-git-alt"></i>
                            <span class="repository" ng-bind="::pr.repository.name">:</span>
                            <span class="durationInfo" data-ng-bind="::$ctrl.durationToDisplay(pr)"></span>
                        </div>
                    </div>
                    <div class="state-details">
                        <div data-ng-if="pr.evaluations.state !== 'none'" class="prstate state-{{pr.evaluations.state}}"
                            title="{{$ctrl.policiesDetails(pr.evaluations.policies)}}">
                            <i data-ng-if="pr.evaluations.state == 'warning'" class="fas fa-exclamation icons-status"></i>
                            <i data-ng-show="pr.evaluations.state == 'error'"
                                class="fas fa-times icons-status"></i>
                            <i data-ng-show="pr.evaluations.state == 'success'" class="fas fa-check icons-status"></i>
                        </div>
                        <span data-ng-if="::pr.comments.length" class="comments"><span
                                data-ng-bind="::pr.comments.length"></span>
                            <i class="far fa-comments"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="pr-settings" data-ng-show="$ctrl.showSettings">
            <div>
                <label for="pr-settings-enable-notifications">Activer les notifications</label>
                <input id="pr-settings-enable-notifications" type="checkbox" data-ng-change="::$ctrl.toggleNotifications();"
                    data-ng-model="$ctrl.enableNotifications" />
            </div>
            <div>
                <button class="button--red" data-ng-click="::$ctrl.logout()">Logout</button>
            </div>
        </div> */}
    </>);
};
