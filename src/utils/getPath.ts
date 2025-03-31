const nextRouter = (routerName: string) => {
       const { origin } = window.location;
       const normalizedPath = routerName.startsWith("/") ? routerName : `/${routerName}`;
       return `${origin}/${normalizedPath}`;
};
export { nextRouter };
