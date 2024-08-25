Database:

Department: P/L/U/J

P:  C/NO/NT/K1/K2
L:  B1/B2/B3
U:  B4/B5/B6
J:  B7/B8/B9

Subject: Language/Culture/Number/Algebra

Content: title, passage, questions[]



export interface Set {
   cards: number;
   description: string;
   id: string;
   title: string;
   image?: any;
}


export interface Card {
   answer: string;
   id: string;
   question: string;
   image?: any;
   set: string;
}



