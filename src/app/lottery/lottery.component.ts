import {Component, OnInit} from '@angular/core';
import {Team} from '../team';

@Component({
	selector: 'app-lottery',
	templateUrl: './lottery.component.html',
	styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {
	teams: Team[] = [new Team()];
	draftOrder: Team[] = [];
	draftOrderFlipped: any = {};
	draftsPicked = false;

	constructor() {
	}

	ngOnInit() {
	}

	addTeam() {
		this.teams.push(new Team());
	}

	flipCard(i: number) {
		this.draftOrderFlipped[i] = true;
	}

	removeTeam() {
		this.teams.pop();
	}

	calculateLottery() {
		const teams = [...this.teams];
		this.draftOrder = [];
		let allBalls = teams.map(team => team.weight).reduce((a, b) => a + b);
		while (teams.length !== 0) {
			const pickedBall = Math.floor(Math.random() * allBalls) + 1;
			let ballCount = 0;
			let selectedTeamIndex: number;
			for (let i = 0; i < teams.length; i++) {
				const team = teams[i];
				ballCount += team.weight;
				if (ballCount >= pickedBall) {
					selectedTeamIndex = i;
					break;
				}
			}
			const selectedTeam = teams[selectedTeamIndex];
			this.draftOrder.push(selectedTeam);
			allBalls -= selectedTeam.weight;
			teams.splice(selectedTeamIndex, 1);
		}
		this.draftsPicked = true;
	}

}
