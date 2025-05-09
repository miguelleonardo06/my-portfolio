/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeImport } from './routes/_home'
import { Route as HomeIndexImport } from './routes/_home/index'
import { Route as HomeTechStackImport } from './routes/_home/tech-stack'
import { Route as HomePersonalImport } from './routes/_home/personal'

// Create/Update Routes

const HomeRoute = HomeImport.update({
  id: '/_home',
  getParentRoute: () => rootRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => HomeRoute,
} as any)

const HomeTechStackRoute = HomeTechStackImport.update({
  id: '/tech-stack',
  path: '/tech-stack',
  getParentRoute: () => HomeRoute,
} as any)

const HomePersonalRoute = HomePersonalImport.update({
  id: '/personal',
  path: '/personal',
  getParentRoute: () => HomeRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_home': {
      id: '/_home'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/_home/personal': {
      id: '/_home/personal'
      path: '/personal'
      fullPath: '/personal'
      preLoaderRoute: typeof HomePersonalImport
      parentRoute: typeof HomeImport
    }
    '/_home/tech-stack': {
      id: '/_home/tech-stack'
      path: '/tech-stack'
      fullPath: '/tech-stack'
      preLoaderRoute: typeof HomeTechStackImport
      parentRoute: typeof HomeImport
    }
    '/_home/': {
      id: '/_home/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof HomeImport
    }
  }
}

// Create and export the route tree

interface HomeRouteChildren {
  HomePersonalRoute: typeof HomePersonalRoute
  HomeTechStackRoute: typeof HomeTechStackRoute
  HomeIndexRoute: typeof HomeIndexRoute
}

const HomeRouteChildren: HomeRouteChildren = {
  HomePersonalRoute: HomePersonalRoute,
  HomeTechStackRoute: HomeTechStackRoute,
  HomeIndexRoute: HomeIndexRoute,
}

const HomeRouteWithChildren = HomeRoute._addFileChildren(HomeRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof HomeRouteWithChildren
  '/personal': typeof HomePersonalRoute
  '/tech-stack': typeof HomeTechStackRoute
  '/': typeof HomeIndexRoute
}

export interface FileRoutesByTo {
  '/personal': typeof HomePersonalRoute
  '/tech-stack': typeof HomeTechStackRoute
  '/': typeof HomeIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_home': typeof HomeRouteWithChildren
  '/_home/personal': typeof HomePersonalRoute
  '/_home/tech-stack': typeof HomeTechStackRoute
  '/_home/': typeof HomeIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/personal' | '/tech-stack' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/personal' | '/tech-stack' | '/'
  id:
    | '__root__'
    | '/_home'
    | '/_home/personal'
    | '/_home/tech-stack'
    | '/_home/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  HomeRoute: typeof HomeRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  HomeRoute: HomeRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_home"
      ]
    },
    "/_home": {
      "filePath": "_home.tsx",
      "children": [
        "/_home/personal",
        "/_home/tech-stack",
        "/_home/"
      ]
    },
    "/_home/personal": {
      "filePath": "_home/personal.tsx",
      "parent": "/_home"
    },
    "/_home/tech-stack": {
      "filePath": "_home/tech-stack.tsx",
      "parent": "/_home"
    },
    "/_home/": {
      "filePath": "_home/index.tsx",
      "parent": "/_home"
    }
  }
}
ROUTE_MANIFEST_END */
