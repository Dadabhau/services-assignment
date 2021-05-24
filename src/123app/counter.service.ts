export class CounterService {
  activeToInactiveConunter = 0;
  inactiveToActiveConunter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveConunter++;
    console.log("Active to Inactive:" + this.activeToInactiveConunter);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveConunter++;
    console.log("Inactive to Active:" + this.inactiveToActiveConunter);
  }
}
