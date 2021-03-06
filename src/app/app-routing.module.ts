import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', // Define página (rota) inicial do aplicativo.
    pathMatch: 'full'
  },
  {
    /**
     * Página original de template.
     * Não será usada no aplicativo e pode ser removida no futuro.
     */
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./page/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./page/docs/docs.module').then(m => m.DocsPageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./page/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./page/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./page/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    /**
     * Cria a coleção 'faq' no Firestore.
     * Página auxiliar (administrativa).
     * Não será usada no aplicativo e pode ser removida no futuro.
     */
    path: 'db/faq',
    loadChildren: () => import('./db/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    /**
     * Cria a coleção 'manual' no Firestore.
     * Página auxiliar (administrativa).
     * Não será usada no aplicativo e pode ser removida no futuro.
     */
    path: 'db/manual',
    loadChildren: () => import('./db/manual/manual.module').then(m => m.ManualPageModule)
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./page/view/view.module').then(m => m.ViewPageModule)
  },
  {
    /**
     * Oooops! Atenção!
     * Esta rota (path: '**') deve ser SEMPRE a última rota desta lista.
     * Se criar novas páginas, edite este arquivo para satisfazer a regra acima.
     */
    path: '**',
    loadChildren: () => import('./page/e404/e404.module').then(m => m.E404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
