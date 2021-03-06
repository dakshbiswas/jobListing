export interface Job {
  name?: string | null;
  type?: string | null;
}

export class FavouriteJob{
  jobid: string;

  constructor(obj?: any){
    this.jobid = obj && obj.jobid || null;
  }
}

export class User {
  userId:string;
  password:string;
  firstName:string;
  lastName:string;
  imageUrl:string
}

export class SearchResult {
  name: string;
  publication_date: string;
  location: string;
  category: string;
  level: string;
  url: string;
  company: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.publication_date = obj && obj.publication_date || null;
    this.location = obj && obj.location || null;
    this.category = obj && obj.category || null;
    this.level = obj && obj.level || null;
    this.url = obj && obj.url || null;
    this.company = obj && obj.company || null;
  }
}