export interface Action {
    key?: string;
    userid: string;
    goalid: string;
    previousAction?: string;
    nextAction?: string;
    content: string;
    attributes?: string[];
    priority: any;
    deadline?: any;
    deadlineid?: string;
    time: number;
    taken: boolean;
    active?: boolean;
    createDate?: any;
    deleteDate?: any;
    startDate?: any;
    endDate?: any;
}