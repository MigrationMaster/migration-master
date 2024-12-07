import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
//   (auth, req, evt)=>{

//     // Handle users who aren't authenticated
//     if (!auth && !auth.isPublicRoute) {
//       return redirectToSignIn({ returnBackUrl: req.url });
//     }

//     // If the user isn't signed in and trying to access a public route, allow them to access route
//     if (!auth.userId && req.nextUrl.pathname == "/revenue-loss-calculator") {

//       // do nothing and stay on the page

//       //const url = new URL("/dashboard", "
// http://localhost:3000/
// ")
//   ,
//   {
//   publicRoutes: [
//     "/sign-in",
//     "/",
//     "/sign-up",
//     "/revenue-loss-calculator",
//     "/contact-us",
//   ],
// }

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };
