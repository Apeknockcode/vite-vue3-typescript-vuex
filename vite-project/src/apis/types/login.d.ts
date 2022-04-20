
export interface Req {
  user: string|null
}
export interface Res {
  menu(menu: any, dynameicRoutes: { path: string; component: () => Promise<typeof import("*.vue")>; name: string; meta: { name: string; icon: string }; children: { path: string; component: () => Promise<typeof import("*.vue")>; name: string; meta: { ... } }[] }[])
  toke: string
}
