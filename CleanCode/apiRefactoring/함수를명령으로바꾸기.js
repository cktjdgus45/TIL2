export function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).excute();
  }
  
  class Scorer {
    construct(candidate, medicalExam, scoringGuide) {
      this.candidate = candidate,
        this.medicalExam = medicalExam,
        this.scoringGuide = scoringGuide
    }
    excute() {
      let result = 0;
      let healthLevel = 0;
      let highMedicalRiskFlag = false;
  
      if (medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
      }
      let certificationGrade = 'regular';
      if (scoringGuide.stateWithLowCertification(candidate.originState)) {
        certificationGrade = 'low';
        result -= 5;
      }
      // lots more code like this
      result -= Math.max(healthLevel - 5, 0);
      return result;
    }
  }
  
  export class ScoringGuide {
    stateWithLowCertification(state) {
      return state < 5;
    }
  }
  
  // export function score(candidate, medicalExam, scoringGuide) {
  //   let result = 0;
  //   let healthLevel = 0;
  //   let highMedicalRiskFlag = false;
  
  //   if (medicalExam.isSmoker) {
  //     healthLevel += 10;
  //     highMedicalRiskFlag = true;
  //   }
  //   let certificationGrade = 'regular';
  //   if (scoringGuide.stateWithLowCertification(candidate.originState)) {
  //     certificationGrade = 'low';
  //     result -= 5;
  //   }
  //   // lots more code like this
  //   result -= Math.max(healthLevel - 5, 0);
  //   return result;
  // }
  
  // export class ScoringGuide {
  //   stateWithLowCertification(state) {
  //     return state < 5;
  //   }
  // }
  