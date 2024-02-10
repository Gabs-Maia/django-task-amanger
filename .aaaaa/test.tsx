interface Employee{

    id: number;
    name: string;
    department: string;
    isFullTime: boolean;
    skills: string[];
    manager?: Employee | undefined;
    startDate: Date;
    projects: Array<{
        projectId: number; 
        projectName: string;
        projectDeadline: Date;
    }>;
};

class Manager implements Employee {

    id: number;
    name: string;
    department: string;
    isFullTime: boolean;
    skills: string[];
    manager?: Employee | undefined;
    startDate: Date;
    projects: Array <{ 
        projectId: number;
        projectName: string; 
        projectDeadline: Date; }>;

    constructor(id: number, name: string, department: string, 

                isFullTime: boolean, skills: string[],
                
                startDate: Date, projects: Array<{projectId: number,
                
                projectName: string, projectDeadline: Date}>){

                    this.id = id;
                    this.name = name; 
                    this.department = department;
                    this.isFullTime = isFullTime;
                    this.skills = skills;
                    this.startDate = startDate; 
                    this.projects = projects; 
                }

                assignManager(manager: Employee) {
                    this.manager = manager;
                }
};