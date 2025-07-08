import type { Projects } from '../interfaces/projects.interface';

export const ProjectsList: Projects[] = [
  {
    image: 'projects/placeholder.jfif',
    title: 'Sales & Inventory System',
    description: 'Real-world Sales & Inventory System built with ASP.NET Core 7, featuring role-based access, inventory control, payment integration, and report generation.',
    stack: ['stack/1.csharp.svg', 'stack/4.dotnet.svg', 'stack/12.sqlserver.svg', 'stack/9.html.svg', 'stack/10.css.svg'],
    repository: 'https://github.com/ejbpz/inventory-app',
  },
  {
    image: 'projects/placeholder.jfif',
    title: 'Cinemapedia',
    description: 'Flutter movie app built with Dart and Riverpod. Features swipers, global state management, modular components, and TMDB integration.',
    stack: ['stack/6.dart.svg', 'stack/7.flutter.svg'],
    repository: 'https://github.com/ejbpz/cinemapedia-app',
  },
  {
    image: 'projects/placeholder.jfif',
    title: 'Teslo Shop Mobile',
    description: 'Flutter mobile administrative e-commerce consuming a NestJS API with role-based authentication.',
    stack: ['stack/6.dart.svg', 'stack/7.flutter.svg'],
    repository: 'https://github.com/ejbpz/teslo-shop-flutter-app',
  },
  {
    image: 'projects/placeholder.jfif',
    title: 'Teslo Shop Web',
    description: 'Angular e-commerce clothing store consuming a NestJS API with role-based auth and token guards.',
    stack: ['stack/2.typescript.svg', 'stack/3.angular.svg', 'stack/11.tailwind.svg', 'stack/15.rxjs.svg'],
    repository: 'https://github.com/ejbpz/teslo-shop-angular-app',
  },
]