import { getEntries } from "@/services/contentful";

export async function getQuestionsByExercise(exerciseId:string):Promise<Question[]>{
  const entries =  await getEntries('question', 0,
     'fields.question,fields.options,fields.optionCorrect,fields.order,fields.exercise,sys.id', 
  `fields.exercise.sys.id=${exerciseId}`,
  );

  if(entries){
    const questions:Question[] = entries.items.map((item:any):Question => {
        
      return {
        id: item.sys.id,
        question: item.fields.question,
        exerciseId: item.fields.module.sys.id,
        options: item.fields.options,
        optionCorrect: item.fields.optionCorrect,
        order: item.fields.order,
      };
    });
    questions.sort((a,b) => a.order - b.order);
    return questions;
  }
  return [];

}