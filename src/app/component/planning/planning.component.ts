import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { PlanningService } from '../../service/planning.service';
import { Planning } from '../../model/planning';
import { Router } from '@angular/router';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-planning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  view = 'week';
  locale = 'fr';
  viewDate: Date = new Date();

  // @ViewChild('modalContent') modalContent: TemplateRef<any>;
  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };
  // refresh: Subject<any> = new Subject();
  // activeDayIsOpen = true;

  planning: Planning[];

  constructor(private planningService: PlanningService, private router: Router) {}

  ngOnInit() {
    this.planning = this.planningService.getPlanning();
  }

  generateErrandList() {
    // let errandList = this.planningService.getAllIngredientFromPlanning();
    this.router.navigate(['errandList']);
  }

}
