import { getEntries } from "@/services/contentful";
export async function getTutorialsByModule (moduleId:string):Promise<Tutorial[]>{
  const entries =  await getEntries('tutorial', 0, 'fields.title,fields.slug,fields.order,fields.module,sys.id', 
  `fields.module.sys.id=${moduleId}`,
  );

  if(entries){
    const tutorials:Tutorial[] = entries.items.map((item:any):Tutorial => {
        
      return {
        id: item.sys.id,
        title: item.fields.title,
        content: null,
        moduleId: item.fields.module.sys.id,
        slug: item.fields.slug,
        order: item.fields.order,
      };
    });
    tutorials.sort((a,b) => a.order - b.order);
    return tutorials;
  }
  return [];

}

export async function getTutorialBySlug (slug:string):Promise<Tutorial | null>{
  const entries =  await getEntries('tutorial', 0, 'fields.title,fields.slug,fields.order,fields.content,fields.module,sys.id', 
  `fields.slug=${slug}`,
  );

  if(entries && entries.items.length > 0){
    const item = entries.items[0];
    return {
      id: item.sys.id,
      title: item.fields.title,
      content: item.fields.content,
      moduleId: item.fields.module.sys.id,
      slug: item.fields.slug,
      order: item.fields.order,
    };
  }
  return null;
}