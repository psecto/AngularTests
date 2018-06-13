import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent
{
  /********************************************************************
   * Fields
   ********************************************************************/

  // Game title
  @Input()
  text = '';

  // Game board
  cases: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  // Current player
  player = 1;

  // Empty case count
  emptyCaseCount = 9;


  /********************************************************************
   * Callbacks
   ********************************************************************/

  /**
   * Called when a case is clicked.
   */
  onCaseClicked(line: number, column: number): void
  {
      // Check empty case
      if (this.cases[line][column] === 0 && this._isEnded() === 0)
      {
          // Fill case and change player
          this.cases[line][column] = this.player;
          this.emptyCaseCount--;
          this.player *= -1;

          // Test if game is ended
          const winner = this._isEnded();
          if (winner !== 0)
          {
              this.text = (winner === 1 ? 'Circle' : 'Cross') + ' wins';
              setTimeout(() => this._reset(), 3000);
          }
          else if (this.emptyCaseCount === 0)
          {
              this.text = 'No winner';
              setTimeout(() => this._reset(), 3000);
          }
      }
  }


  /********************************************************************
   * Private Operations
   ********************************************************************/

  /**
   * Test if the game is ended.
   */
  private _isEnded(): number
  {
      if (this.emptyCaseCount < 5)
      {
          // Check lines and columns
          for (let i = 0; i < 3; ++i)
          {
              if (this.cases[i][0] !== 0 && this.cases[i][0] === this.cases[i][1] && this.cases[i][1] === this.cases[i][2])
              {
                  return this.cases[i][0];
              }
              if (this.cases[0][i] !== 0 && this.cases[0][i] === this.cases[1][i] && this.cases[1][i] === this.cases[2][i])
              {
                  return this.cases[0][i];
              }
          }

          // Diagonals
          const center = this.cases[1][1];
          if (center !== 0)
          {
              if (this.cases[0][0] === center && center === this.cases[2][2])
              {
                  return center;
              }
              if (this.cases[0][2] === center && center === this.cases[2][0])
              {
                  return center;
              }
          }
      }

      return 0;
  }

  /**
   * Reset the game board.
   */
  private _reset(): void
  {
      this.text = 'Tic-Tac-Toe';
      this.cases = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      this.emptyCaseCount = 9;
  }
}
