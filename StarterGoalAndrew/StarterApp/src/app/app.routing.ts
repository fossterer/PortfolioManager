import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyChartComponent } from './Components/my-chart';


const routes: Routes = [
    { path: ' ', component: AppComponent },
    { path: 'graph', component: MyChartComponent },

    // otherwise redirect to home
    //{ path: '**', redirectTo: ' ' }
];

export const appRoutingModule = RouterModule.forRoot(routes);