import { PointsPerLegBet, PointsPerRaceBet } from "../consts/consts";
import { constructPlayerPoints } from "./defaults";

export const calculateLegBetPoints = (cellsWithCamels, legBets) => {
    const legBetPoints = constructPlayerPoints();
    const camelsSorted = [].concat(...cellsWithCamels).reverse();

    camelsSorted.forEach((camel, index) => {
        const playerThatBetted = legBets[camel];

        if (playerThatBetted) {
            legBetPoints[playerThatBetted] += PointsPerLegBet[index];
        }
    });

    return legBetPoints;
}

export const calculateRaceBetPoints = (cellsWithCamels, raceBets) => {
    const raceBetPoints = constructPlayerPoints();
    const { 0: camelThatWon } = [].concat(...cellsWithCamels).reverse();
    let betsThatSuceeded = 0;

    raceBets.forEach(raceBet => {
        if (raceBet.camel === camelThatWon) {
            raceBetPoints[raceBet.player] += PointsPerRaceBet.win[betsThatSuceeded];
            ++betsThatSuceeded;
            return;
        }

        raceBetPoints[raceBet.player] += PointsPerRaceBet.lose;
    });

    return raceBetPoints;
}
