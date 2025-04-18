import { getEntries } from "@/services/contentful";
export async function getModules ():Promise<Module[]>{
  const entries =  await getEntries('module', 1);

  if(entries){
    const modules:Module[] = entries.items.map((item:any):Module => {
        const iconId = item.fields.icon.sys.id;
        const icon  = entries.includes.Asset.find((asset:any) => asset.sys.id == iconId);

      return {
        id: item.sys.id,
        title: item.fields.title,
        description: item.fields.description,
        icon:  icon.fields.file.url,
        tutorials: [], 
        exercises: [],
        slug: item.fields.slug,
        order: item.fields.order,
      };
    });
    modules.sort((a,b) => a.order - b.order);
    return modules;
  }
  return [];

}