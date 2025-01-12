import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'unit-test-example',
    loadChildren: () =>
      import('./unit-test-example/unit-test-example.module').then(
        (m) => m.UnitTestExampleModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
