import React, { Component } from "react";

export class QuizResult extends Component {

  dayCount(){
      const now = new Date();
      const nextTenth = new Date(now.getFullYear(), now.getMonth(), 10, 0, 0, 0);
      if (nextTenth <= now) {
        nextTenth.setMonth(nextTenth.getMonth() + 1);
      }
      const millisecondsUntilNextTenth = nextTenth - now;
      const daysUntilNextTenth = Math.floor(millisecondsUntilNextTenth / (1000 * 60 * 60 * 24));
      const time = `${daysUntilNextTenth+1} days`;
      return time;
  }

  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col my-5 p-5">
            <i className="fa-solid fa-circle-check fa-5x" style={{color:'green'}}></i>
            <h2 className="my-2">Thank You</h2>
            <h3 className="my-3">For joining the quran Quiz Competition</h3>  
            <div className="mt-5">
            <i class="fa-regular fa-clock"></i>
            <p>REMAINING TIME FOR NEXT COMPETITION</p>
            </div>
            <div className="timer">
              <h3>
              {this.dayCount()}
              </h3>
            </div>
            </div>
            <div className="col my-5 p-5">
            <i className="fa-solid fa-award fa-5x" style={{color:'green'}}></i>
            <h2 className="my-2">Announcment</h2>
            <h3 className="my-5">please check the winner on 22 of this month. we cash out all the winners of the quran competition prize of this day.</h3>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizResult;
