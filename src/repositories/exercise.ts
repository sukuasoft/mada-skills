import { getEntries } from "@/services/contentful";
export async function getExercisesByModule (moduleId:string):Promise<Exercise[]>{
  const entries =  await getEntries('exercise', 0, 'fields.title,fields.slug,fields.order,fields.module,sys.id', 
  `fields.module.sys.id=${moduleId}`,
  );

  if(entries){
    const exercises:Exercise[] = entries.items.map((item:any):Exercise => {
        
      return {
        id: item.sys.id,
        title: item.fields.title,
        moduleId: item.fields.module.sys.id,
        questions: [],
        slug: item.fields.slug,
        order: item.fields.order,
      };
    });
    exercises.sort((a,b) => a.order - b.order);
    return exercises;
  }
  return [];

}