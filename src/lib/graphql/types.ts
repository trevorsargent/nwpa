import client from "./client";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, MutationOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Int64: any;
};

export type AddArtistInput = {
  disciplines?: InputMaybe<Array<DisciplineRef>>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  shows?: InputMaybe<Array<PerformanceRef>>;
};

export type AddArtistPayload = {
  __typename?: 'AddArtistPayload';
  artist?: Maybe<Array<Maybe<Artist>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddArtistPayloadArtistArgs = {
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ArtistOrder>;
};

export type AddCompanyInput = {
  members?: InputMaybe<Array<ArtistRef>>;
  name?: InputMaybe<Scalars['String']>;
};

export type AddCompanyPayload = {
  __typename?: 'AddCompanyPayload';
  company?: Maybe<Array<Maybe<Company>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCompanyPayloadCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};

export type AddDisciplineInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type AddDisciplinePayload = {
  __typename?: 'AddDisciplinePayload';
  discipline?: Maybe<Array<Maybe<Discipline>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddDisciplinePayloadDisciplineArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DisciplineOrder>;
};

export type AddPerformanceInput = {
  closing?: InputMaybe<Scalars['DateTime']>;
  companies?: InputMaybe<Array<InputMaybe<CompanyRef>>>;
  opening?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type AddPerformancePayload = {
  __typename?: 'AddPerformancePayload';
  numUids?: Maybe<Scalars['Int']>;
  performance?: Maybe<Array<Maybe<Performance>>>;
};


export type AddPerformancePayloadPerformanceArgs = {
  filter?: InputMaybe<PerformanceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PerformanceOrder>;
};

export type AddRoleInput = {
  artist?: InputMaybe<ArtistRef>;
  performance?: InputMaybe<PerformanceRef>;
  roles?: InputMaybe<Array<InputMaybe<DisciplineRef>>>;
};

export type AddRolePayload = {
  __typename?: 'AddRolePayload';
  numUids?: Maybe<Scalars['Int']>;
  role?: Maybe<Array<Maybe<Role>>>;
};


export type AddRolePayloadRoleArgs = {
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Artist = {
  __typename?: 'Artist';
  disciplines?: Maybe<Array<Discipline>>;
  disciplinesAggregate?: Maybe<DisciplineAggregateResult>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  shows?: Maybe<Array<Performance>>;
  showsAggregate?: Maybe<PerformanceAggregateResult>;
};


export type ArtistDisciplinesArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DisciplineOrder>;
};


export type ArtistDisciplinesAggregateArgs = {
  filter?: InputMaybe<DisciplineFilter>;
};


export type ArtistShowsArgs = {
  filter?: InputMaybe<PerformanceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PerformanceOrder>;
};


export type ArtistShowsAggregateArgs = {
  filter?: InputMaybe<PerformanceFilter>;
};

export type ArtistAggregateResult = {
  __typename?: 'ArtistAggregateResult';
  count?: Maybe<Scalars['Int']>;
  firstnameMax?: Maybe<Scalars['String']>;
  firstnameMin?: Maybe<Scalars['String']>;
  lastnameMax?: Maybe<Scalars['String']>;
  lastnameMin?: Maybe<Scalars['String']>;
};

export type ArtistFilter = {
  and?: InputMaybe<Array<InputMaybe<ArtistFilter>>>;
  firstname?: InputMaybe<StringTermFilter>;
  has?: InputMaybe<Array<InputMaybe<ArtistHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  lastname?: InputMaybe<StringTermFilter>;
  not?: InputMaybe<ArtistFilter>;
  or?: InputMaybe<Array<InputMaybe<ArtistFilter>>>;
};

export enum ArtistHasFilter {
  Disciplines = 'disciplines',
  Firstname = 'firstname',
  Lastname = 'lastname',
  Shows = 'shows'
}

export type ArtistOrder = {
  asc?: InputMaybe<ArtistOrderable>;
  desc?: InputMaybe<ArtistOrderable>;
  then?: InputMaybe<ArtistOrder>;
};

export enum ArtistOrderable {
  Firstname = 'firstname',
  Lastname = 'lastname'
}

export type ArtistPatch = {
  disciplines?: InputMaybe<Array<DisciplineRef>>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  shows?: InputMaybe<Array<PerformanceRef>>;
};

export type ArtistRef = {
  disciplines?: InputMaybe<Array<DisciplineRef>>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastname?: InputMaybe<Scalars['String']>;
  shows?: InputMaybe<Array<PerformanceRef>>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  members?: Maybe<Array<Artist>>;
  membersAggregate?: Maybe<ArtistAggregateResult>;
  name?: Maybe<Scalars['String']>;
};


export type CompanyMembersArgs = {
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ArtistOrder>;
};


export type CompanyMembersAggregateArgs = {
  filter?: InputMaybe<ArtistFilter>;
};

export type CompanyAggregateResult = {
  __typename?: 'CompanyAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type CompanyFilter = {
  and?: InputMaybe<Array<InputMaybe<CompanyFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CompanyHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringTermFilter>;
  not?: InputMaybe<CompanyFilter>;
  or?: InputMaybe<Array<InputMaybe<CompanyFilter>>>;
};

export enum CompanyHasFilter {
  Members = 'members',
  Name = 'name'
}

export type CompanyOrder = {
  asc?: InputMaybe<CompanyOrderable>;
  desc?: InputMaybe<CompanyOrderable>;
  then?: InputMaybe<CompanyOrder>;
};

export enum CompanyOrderable {
  Name = 'name'
}

export type CompanyPatch = {
  members?: InputMaybe<Array<ArtistRef>>;
  name?: InputMaybe<Scalars['String']>;
};

export type CompanyRef = {
  id?: InputMaybe<Scalars['ID']>;
  members?: InputMaybe<Array<ArtistRef>>;
  name?: InputMaybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']>>;
  graphql?: InputMaybe<Scalars['String']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  ge?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  le?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteArtistPayload = {
  __typename?: 'DeleteArtistPayload';
  artist?: Maybe<Array<Maybe<Artist>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteArtistPayloadArtistArgs = {
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ArtistOrder>;
};

export type DeleteCompanyPayload = {
  __typename?: 'DeleteCompanyPayload';
  company?: Maybe<Array<Maybe<Company>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCompanyPayloadCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};

export type DeleteDisciplinePayload = {
  __typename?: 'DeleteDisciplinePayload';
  discipline?: Maybe<Array<Maybe<Discipline>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteDisciplinePayloadDisciplineArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DisciplineOrder>;
};

export type DeletePerformancePayload = {
  __typename?: 'DeletePerformancePayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  performance?: Maybe<Array<Maybe<Performance>>>;
};


export type DeletePerformancePayloadPerformanceArgs = {
  filter?: InputMaybe<PerformanceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PerformanceOrder>;
};

export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  role?: Maybe<Array<Maybe<Role>>>;
};


export type DeleteRolePayloadRoleArgs = {
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type Discipline = {
  __typename?: 'Discipline';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type DisciplineAggregateResult = {
  __typename?: 'DisciplineAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type DisciplineFilter = {
  and?: InputMaybe<Array<InputMaybe<DisciplineFilter>>>;
  has?: InputMaybe<Array<InputMaybe<DisciplineHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<DisciplineFilter>;
  or?: InputMaybe<Array<InputMaybe<DisciplineFilter>>>;
};

export enum DisciplineHasFilter {
  Name = 'name'
}

export type DisciplineOrder = {
  asc?: InputMaybe<DisciplineOrderable>;
  desc?: InputMaybe<DisciplineOrderable>;
  then?: InputMaybe<DisciplineOrder>;
};

export enum DisciplineOrderable {
  Name = 'name'
}

export type DisciplinePatch = {
  name?: InputMaybe<Scalars['String']>;
};

export type DisciplineRef = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']>;
  ge?: InputMaybe<Scalars['Int64']>;
  gt?: InputMaybe<Scalars['Int64']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']>>>;
  le?: InputMaybe<Scalars['Int64']>;
  lt?: InputMaybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addArtist?: Maybe<AddArtistPayload>;
  addCompany?: Maybe<AddCompanyPayload>;
  addDiscipline?: Maybe<AddDisciplinePayload>;
  addPerformance?: Maybe<AddPerformancePayload>;
  addRole?: Maybe<AddRolePayload>;
  deleteArtist?: Maybe<DeleteArtistPayload>;
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  deleteDiscipline?: Maybe<DeleteDisciplinePayload>;
  deletePerformance?: Maybe<DeletePerformancePayload>;
  deleteRole?: Maybe<DeleteRolePayload>;
  updateArtist?: Maybe<UpdateArtistPayload>;
  updateCompany?: Maybe<UpdateCompanyPayload>;
  updateDiscipline?: Maybe<UpdateDisciplinePayload>;
  updatePerformance?: Maybe<UpdatePerformancePayload>;
  updateRole?: Maybe<UpdateRolePayload>;
};


export type MutationAddArtistArgs = {
  input: Array<AddArtistInput>;
};


export type MutationAddCompanyArgs = {
  input: Array<AddCompanyInput>;
};


export type MutationAddDisciplineArgs = {
  input: Array<AddDisciplineInput>;
};


export type MutationAddPerformanceArgs = {
  input: Array<AddPerformanceInput>;
};


export type MutationAddRoleArgs = {
  input: Array<AddRoleInput>;
};


export type MutationDeleteArtistArgs = {
  filter: ArtistFilter;
};


export type MutationDeleteCompanyArgs = {
  filter: CompanyFilter;
};


export type MutationDeleteDisciplineArgs = {
  filter: DisciplineFilter;
};


export type MutationDeletePerformanceArgs = {
  filter: PerformanceFilter;
};


export type MutationDeleteRoleArgs = {
  filter: RoleFilter;
};


export type MutationUpdateArtistArgs = {
  input: UpdateArtistInput;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationUpdateDisciplineArgs = {
  input: UpdateDisciplineInput;
};


export type MutationUpdatePerformanceArgs = {
  input: UpdatePerformanceInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Performance = {
  __typename?: 'Performance';
  closing?: Maybe<Scalars['DateTime']>;
  companies?: Maybe<Array<Maybe<Company>>>;
  companiesAggregate?: Maybe<CompanyAggregateResult>;
  id: Scalars['ID'];
  opening?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type PerformanceCompaniesArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};


export type PerformanceCompaniesAggregateArgs = {
  filter?: InputMaybe<CompanyFilter>;
};

export type PerformanceAggregateResult = {
  __typename?: 'PerformanceAggregateResult';
  closingMax?: Maybe<Scalars['DateTime']>;
  closingMin?: Maybe<Scalars['DateTime']>;
  count?: Maybe<Scalars['Int']>;
  openingMax?: Maybe<Scalars['DateTime']>;
  openingMin?: Maybe<Scalars['DateTime']>;
  subtitleMax?: Maybe<Scalars['String']>;
  subtitleMin?: Maybe<Scalars['String']>;
  titleMax?: Maybe<Scalars['String']>;
  titleMin?: Maybe<Scalars['String']>;
};

export type PerformanceFilter = {
  and?: InputMaybe<Array<InputMaybe<PerformanceFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PerformanceHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<PerformanceFilter>;
  or?: InputMaybe<Array<InputMaybe<PerformanceFilter>>>;
  title?: InputMaybe<StringTermFilter>;
};

export enum PerformanceHasFilter {
  Closing = 'closing',
  Companies = 'companies',
  Opening = 'opening',
  Subtitle = 'subtitle',
  Title = 'title'
}

export type PerformanceOrder = {
  asc?: InputMaybe<PerformanceOrderable>;
  desc?: InputMaybe<PerformanceOrderable>;
  then?: InputMaybe<PerformanceOrder>;
};

export enum PerformanceOrderable {
  Closing = 'closing',
  Opening = 'opening',
  Subtitle = 'subtitle',
  Title = 'title'
}

export type PerformancePatch = {
  closing?: InputMaybe<Scalars['DateTime']>;
  companies?: InputMaybe<Array<InputMaybe<CompanyRef>>>;
  opening?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PerformanceRef = {
  closing?: InputMaybe<Scalars['DateTime']>;
  companies?: InputMaybe<Array<InputMaybe<CompanyRef>>>;
  id?: InputMaybe<Scalars['ID']>;
  opening?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Query = {
  __typename?: 'Query';
  aggregateArtist?: Maybe<ArtistAggregateResult>;
  aggregateCompany?: Maybe<CompanyAggregateResult>;
  aggregateDiscipline?: Maybe<DisciplineAggregateResult>;
  aggregatePerformance?: Maybe<PerformanceAggregateResult>;
  aggregateRole?: Maybe<RoleAggregateResult>;
  getArtist?: Maybe<Artist>;
  getCompany?: Maybe<Company>;
  getDiscipline?: Maybe<Discipline>;
  getPerformance?: Maybe<Performance>;
  getRole?: Maybe<Role>;
  queryArtist?: Maybe<Array<Maybe<Artist>>>;
  queryCompany?: Maybe<Array<Maybe<Company>>>;
  queryDiscipline?: Maybe<Array<Maybe<Discipline>>>;
  queryPerformance?: Maybe<Array<Maybe<Performance>>>;
  queryRole?: Maybe<Array<Maybe<Role>>>;
};


export type QueryAggregateArtistArgs = {
  filter?: InputMaybe<ArtistFilter>;
};


export type QueryAggregateCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
};


export type QueryAggregateDisciplineArgs = {
  filter?: InputMaybe<DisciplineFilter>;
};


export type QueryAggregatePerformanceArgs = {
  filter?: InputMaybe<PerformanceFilter>;
};


export type QueryAggregateRoleArgs = {
  filter?: InputMaybe<RoleFilter>;
};


export type QueryGetArtistArgs = {
  id: Scalars['ID'];
};


export type QueryGetCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryGetDisciplineArgs = {
  id: Scalars['ID'];
};


export type QueryGetPerformanceArgs = {
  id: Scalars['ID'];
};


export type QueryGetRoleArgs = {
  id: Scalars['ID'];
};


export type QueryQueryArtistArgs = {
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ArtistOrder>;
};


export type QueryQueryCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};


export type QueryQueryDisciplineArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DisciplineOrder>;
};


export type QueryQueryPerformanceArgs = {
  filter?: InputMaybe<PerformanceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PerformanceOrder>;
};


export type QueryQueryRoleArgs = {
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Role = {
  __typename?: 'Role';
  artist?: Maybe<Artist>;
  id: Scalars['ID'];
  performance?: Maybe<Performance>;
  roles?: Maybe<Array<Maybe<Discipline>>>;
  rolesAggregate?: Maybe<DisciplineAggregateResult>;
};


export type RoleArtistArgs = {
  filter?: InputMaybe<ArtistFilter>;
};


export type RolePerformanceArgs = {
  filter?: InputMaybe<PerformanceFilter>;
};


export type RoleRolesArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DisciplineOrder>;
};


export type RoleRolesAggregateArgs = {
  filter?: InputMaybe<DisciplineFilter>;
};

export type RoleAggregateResult = {
  __typename?: 'RoleAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type RoleFilter = {
  and?: InputMaybe<Array<InputMaybe<RoleFilter>>>;
  has?: InputMaybe<Array<InputMaybe<RoleHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<RoleFilter>;
  or?: InputMaybe<Array<InputMaybe<RoleFilter>>>;
};

export enum RoleHasFilter {
  Artist = 'artist',
  Performance = 'performance',
  Roles = 'roles'
}

export type RolePatch = {
  artist?: InputMaybe<ArtistRef>;
  performance?: InputMaybe<PerformanceRef>;
  roles?: InputMaybe<Array<InputMaybe<DisciplineRef>>>;
};

export type RoleRef = {
  artist?: InputMaybe<ArtistRef>;
  id?: InputMaybe<Scalars['ID']>;
  performance?: InputMaybe<PerformanceRef>;
  roles?: InputMaybe<Array<InputMaybe<DisciplineRef>>>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  aggregateArtist?: Maybe<ArtistAggregateResult>;
  aggregateCompany?: Maybe<CompanyAggregateResult>;
  aggregateDiscipline?: Maybe<DisciplineAggregateResult>;
  aggregatePerformance?: Maybe<PerformanceAggregateResult>;
  getArtist?: Maybe<Artist>;
  getCompany?: Maybe<Company>;
  getDiscipline?: Maybe<Discipline>;
  getPerformance?: Maybe<Performance>;
  queryArtist?: Maybe<Array<Maybe<Artist>>>;
  queryCompany?: Maybe<Array<Maybe<Company>>>;
  queryDiscipline?: Maybe<Array<Maybe<Discipline>>>;
  queryPerformance?: Maybe<Array<Maybe<Performance>>>;
};


export type SubscriptionAggregateArtistArgs = {
  filter?: InputMaybe<ArtistFilter>;
};


export type SubscriptionAggregateCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
};


export type SubscriptionAggregateDisciplineArgs = {
  filter?: InputMaybe<DisciplineFilter>;
};


export type SubscriptionAggregatePerformanceArgs = {
  filter?: InputMaybe<PerformanceFilter>;
};


export type SubscriptionGetArtistArgs = {
  id: Scalars['ID'];
};


export type SubscriptionGetCompanyArgs = {
  id: Scalars['ID'];
};


export type SubscriptionGetDisciplineArgs = {
  id: Scalars['ID'];
};


export type SubscriptionGetPerformanceArgs = {
  id: Scalars['ID'];
};


export type SubscriptionQueryArtistArgs = {
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ArtistOrder>;
};


export type SubscriptionQueryCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};


export type SubscriptionQueryDisciplineArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DisciplineOrder>;
};


export type SubscriptionQueryPerformanceArgs = {
  filter?: InputMaybe<PerformanceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PerformanceOrder>;
};

export type UpdateArtistInput = {
  filter: ArtistFilter;
  remove?: InputMaybe<ArtistPatch>;
  set?: InputMaybe<ArtistPatch>;
};

export type UpdateArtistPayload = {
  __typename?: 'UpdateArtistPayload';
  artist?: Maybe<Array<Maybe<Artist>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateArtistPayloadArtistArgs = {
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ArtistOrder>;
};

export type UpdateCompanyInput = {
  filter: CompanyFilter;
  remove?: InputMaybe<CompanyPatch>;
  set?: InputMaybe<CompanyPatch>;
};

export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  company?: Maybe<Array<Maybe<Company>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCompanyPayloadCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};

export type UpdateDisciplineInput = {
  filter: DisciplineFilter;
  remove?: InputMaybe<DisciplinePatch>;
  set?: InputMaybe<DisciplinePatch>;
};

export type UpdateDisciplinePayload = {
  __typename?: 'UpdateDisciplinePayload';
  discipline?: Maybe<Array<Maybe<Discipline>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateDisciplinePayloadDisciplineArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DisciplineOrder>;
};

export type UpdatePerformanceInput = {
  filter: PerformanceFilter;
  remove?: InputMaybe<PerformancePatch>;
  set?: InputMaybe<PerformancePatch>;
};

export type UpdatePerformancePayload = {
  __typename?: 'UpdatePerformancePayload';
  numUids?: Maybe<Scalars['Int']>;
  performance?: Maybe<Array<Maybe<Performance>>>;
};


export type UpdatePerformancePayloadPerformanceArgs = {
  filter?: InputMaybe<PerformanceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PerformanceOrder>;
};

export type UpdateRoleInput = {
  filter: RoleFilter;
  remove?: InputMaybe<RolePatch>;
  set?: InputMaybe<RolePatch>;
};

export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  numUids?: Maybe<Scalars['Int']>;
  role?: Maybe<Array<Maybe<Role>>>;
};


export type UpdateRolePayloadRoleArgs = {
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type PerformancesQueryVariables = Exact<{ [key: string]: never; }>;


export type PerformancesQuery = { __typename?: 'Query', queryPerformance?: Array<{ __typename?: 'Performance', id: string, title: string, subtitle?: string | null } | null> | null };

export type GetPerformanceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPerformanceQuery = { __typename?: 'Query', getPerformance?: { __typename?: 'Performance', id: string, title: string, subtitle?: string | null, opening?: any | null, closing?: any | null, companies?: Array<{ __typename?: 'Company', name?: string | null } | null> | null } | null };

export type AddPerformanceMutationVariables = Exact<{
  input: AddPerformanceInput;
}>;


export type AddPerformanceMutation = { __typename?: 'Mutation', addPerformance?: { __typename?: 'AddPerformancePayload', performance?: Array<{ __typename?: 'Performance', id: string, title: string } | null> | null } | null };

export type SavePerformanceMutationVariables = Exact<{
  input: UpdatePerformanceInput;
}>;


export type SavePerformanceMutation = { __typename?: 'Mutation', updatePerformance?: { __typename?: 'UpdatePerformancePayload', performance?: Array<{ __typename?: 'Performance', id: string, title: string, subtitle?: string | null, opening?: any | null, closing?: any | null } | null> | null } | null };


export const PerformancesDoc = gql`
    query Performances {
  queryPerformance {
    id
    title
    subtitle
  }
}
    `;
export const GetPerformanceDoc = gql`
    query GetPerformance($id: ID!) {
  getPerformance(id: $id) {
    id
    title
    subtitle
    opening
    closing
    companies {
      name
    }
  }
}
    `;
export const AddPerformanceDoc = gql`
    mutation AddPerformance($input: AddPerformanceInput!) {
  addPerformance(input: [$input]) {
    performance {
      id
      title
    }
  }
}
    `;
export const SavePerformanceDoc = gql`
    mutation SavePerformance($input: UpdatePerformanceInput!) {
  updatePerformance(input: $input) {
    performance {
      id
      title
      subtitle
      opening
      closing
    }
  }
}
    `;
export const Performances = (
            options: Omit<
              WatchQueryOptions<PerformancesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<PerformancesQuery> & {
              query: ObservableQuery<
                PerformancesQuery,
                PerformancesQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: PerformancesDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<PerformancesQuery> & {
                query: ObservableQuery<
                  PerformancesQuery,
                  PerformancesQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const GetPerformance = (
            options: Omit<
              WatchQueryOptions<GetPerformanceQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetPerformanceQuery> & {
              query: ObservableQuery<
                GetPerformanceQuery,
                GetPerformanceQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetPerformanceDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetPerformanceQuery> & {
                query: ObservableQuery<
                  GetPerformanceQuery,
                  GetPerformanceQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const AddPerformance = (
            options: Omit<
              MutationOptions<any, AddPerformanceMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<AddPerformanceMutation, AddPerformanceMutationVariables>({
              mutation: AddPerformanceDoc,
              ...options,
            });
            return m;
          }
export const SavePerformance = (
            options: Omit<
              MutationOptions<any, SavePerformanceMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<SavePerformanceMutation, SavePerformanceMutationVariables>({
              mutation: SavePerformanceDoc,
              ...options,
            });
            return m;
          }