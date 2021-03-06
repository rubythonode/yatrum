import { UserService } from './../services/user.service';
import { ServerAuthService } from './../services/server-auth.service';
import * as UserActions from './../actions/user.action';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as TripsActions from './../actions/trips.action';

@Injectable()

export class UserEffects {
	constructor(private action$: Actions, 
              private userService: UserService,
              private serverAuthService: ServerAuthService) {}

	@Effect()
		UserFollowers$: Observable<Action> = this.action$
			.ofType(UserActions.ActionTypes.LOAD_USER_FOLLOWERS)
			.switchMap((action: Action) => this.userService.getUserFollowers(action.payload))
			.map((data) => new UserActions.UserFollowersLoadedAction(data));

	@Effect()
		UserFollowing$: Observable<Action> = this.action$
			.ofType(UserActions.ActionTypes.LOAD_USER_FOLLOWING)
			.switchMap((action: Action) => this.userService.getUserFollowing(action.payload))
			.map((data) => new UserActions.UserFollowingLoadedAction(data));
	
	@Effect()
		FollowUser$: Observable<Action> = this.action$
			.ofType(UserActions.ActionTypes.FOLLOW_USER)
			.switchMap((action: Action) => this.userService.addTravellerToFollowingList(action.payload))
			.map((data) => new TripsActions.TripUserFollowedAction(data));
			
	@Effect()
		FollowProfileUser$: Observable<Action> = this.action$
		.ofType(UserActions.ActionTypes.FOLLOW_PROFILE_USER)
		.switchMap((action: Action) => this.userService.addTravellerToFollowingList(action.payload))
		.map((data) => {
			return new UserActions.ProfileUserFollowed(data);
		});
	// @Effect()
	// 	ProfileUserFollowed$: Observable<Action> = this.action$
	// 	.ofType(UserActions.ActionTypes.PROFILE_USER_FOLLOWED)
	// 	.map((action: Action) => new TripsActions.TripUserFollowedAction(action.payload));


  @Effect()
    UpdateUser$: Observable<Action> = this.action$
      .ofType(UserActions.ActionTypes.UPDATE_USER)
      .switchMap((action: Action) => this.userService.updateSocialLinks(action.payload))
      .map((data) => {
        let userProfile = this.serverAuthService.getServerUserProfile(data);
        console.log("userProfile is ", userProfile);
        return new UserActions.UpdateUserSuccess(userProfile);
      })
}