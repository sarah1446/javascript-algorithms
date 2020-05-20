/*
    수많은 마라톤 선수들이 마라톤에 참여하였습니다.
    단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
    완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
    완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(participant, completion) {
  var answer = participant;
  var runnerLength = participant.length;
  var idx;
  for (var i = 0; i < runnerLength; i++) {
    if (answer.includes(completion[i])) {
      idx = answer.indexOf(completion[i]);
      answer.splice(idx, 1);
    }
  }
  return answer[0];
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']);

/*
    splice로 배열의 원소를 삭제하기 때문에
    반복문의 반복회수를 answer.length가 아닌 
    runnerLength 고정값으로 넣어준다
    
    효율성이 떨어져서 다시 짜야할 거 같다..
*/
