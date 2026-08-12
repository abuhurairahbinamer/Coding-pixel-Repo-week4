export function isActive(pathname: string, href: string) {

  return pathname === href || pathname.startsWith(href + "/")  // here href + "/" is also handling  deeper part

}
console.log("P6 task donw with deeepr : isActive('/dashboard/settings', '/dashboard') = ",isActive('/dashboard/settings', '/dashboard'))
console.log("P6 task donw with deeepr : isActive('/dashboardish', '/dashboard') = ",isActive('/dashboardish', '/dashboard'))
