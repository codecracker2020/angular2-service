//in angular2/core we have decorator called component. Decorators are functions
import {Component} from 'angular2/core'
import {CourseService} from './course.service'

//decorators are prefixed with @ sign
//component encapsulates the data and logic behind the view
//ngFor is a directive
@Component({
    selector: 'courses',
    template: `
                <h2>Courses</h2>
                {{ title }}
                <ul>
                    <li *ngFor="#course of courses">
                        {{ course }}
                    </li>
                </ul>
                `,
    providers: [CourseService]
})
//export is said to be a model
//angular will look for some meta data to treat this class as a template
//apply component decorator to this class to consider this class as a template
export class CoursesComponent{
    title: string = "The title of the courses page";
    //title = "The title of the courses page";
    courses;
    constructor(courseService: CourseService){
        this.courses=courseService.getCourses();
    }
}