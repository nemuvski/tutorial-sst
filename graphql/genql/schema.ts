import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
}

export interface Article {
    id: Scalars['ID']
    title: Scalars['String']
    url: Scalars['String']
    __typename: 'Article'
}

export interface Mutation {
    createArticle: Article
    createProject: Project
    __typename: 'Mutation'
}

export interface Project {
    deleted: Scalars['Boolean']
    id: Scalars['ID']
    name: Scalars['String']
    tasks: Task[]
    __typename: 'Project'
}

export interface Query {
    article: Article
    articles: Article[]
    project: Project
    __typename: 'Query'
}

export interface Task {
    assignee: User
    id: Scalars['ID']
    name: Scalars['String']
    __typename: 'Task'
}

export interface User {
    email: Scalars['String']
    id: Scalars['ID']
    name: Scalars['String']
    __typename: 'User'
}

export interface ArticleRequest{
    id?: boolean | number
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    createArticle?: [{title: Scalars['String'],url: Scalars['String']},ArticleRequest]
    createProject?: [{name: Scalars['String']},ProjectRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectRequest{
    deleted?: boolean | number
    id?: boolean | number
    name?: boolean | number
    tasks?: TaskRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    article?: [{articleID: Scalars['String']},ArticleRequest]
    articles?: ArticleRequest
    project?: [{projectID: Scalars['String']},ProjectRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TaskRequest{
    assignee?: UserRequest
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserRequest{
    email?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Article_possibleTypes: string[] = ['Article']
export const isArticle = (obj?: { __typename?: any } | null): obj is Article => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Project_possibleTypes: string[] = ['Project']
export const isProject = (obj?: { __typename?: any } | null): obj is Project => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProject"')
  return Project_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Task_possibleTypes: string[] = ['Task']
export const isTask = (obj?: { __typename?: any } | null): obj is Task => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTask"')
  return Task_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes: string[] = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}


export interface ArticlePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ArticleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface MutationPromiseChain{
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>}),
    createProject: ((args: {name: Scalars['String']}) => ProjectPromiseChain & {get: <R extends ProjectRequest>(request: R, defaultValue?: FieldsSelection<Project, R>) => Promise<FieldsSelection<Project, R>>})
}

export interface MutationObservableChain{
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>}),
    createProject: ((args: {name: Scalars['String']}) => ProjectObservableChain & {get: <R extends ProjectRequest>(request: R, defaultValue?: FieldsSelection<Project, R>) => Observable<FieldsSelection<Project, R>>})
}

export interface ProjectPromiseChain{
    deleted: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tasks: ({get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>[]) => Promise<FieldsSelection<Task, R>[]>})
}

export interface ProjectObservableChain{
    deleted: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tasks: ({get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>[]) => Observable<FieldsSelection<Task, R>[]>})
}

export interface QueryPromiseChain{
    article: ((args: {articleID: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>}),
    articles: ({get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>[]) => Promise<FieldsSelection<Article, R>[]>}),
    project: ((args: {projectID: Scalars['String']}) => ProjectPromiseChain & {get: <R extends ProjectRequest>(request: R, defaultValue?: FieldsSelection<Project, R>) => Promise<FieldsSelection<Project, R>>})
}

export interface QueryObservableChain{
    article: ((args: {articleID: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>}),
    articles: ({get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>[]) => Observable<FieldsSelection<Article, R>[]>}),
    project: ((args: {projectID: Scalars['String']}) => ProjectObservableChain & {get: <R extends ProjectRequest>(request: R, defaultValue?: FieldsSelection<Project, R>) => Observable<FieldsSelection<Project, R>>})
}

export interface TaskPromiseChain{
    assignee: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface TaskObservableChain{
    assignee: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface UserPromiseChain{
    email: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface UserObservableChain{
    email: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}