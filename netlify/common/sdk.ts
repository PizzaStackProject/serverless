import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type AdminGetOutput = {
  __typename?: 'AdminGetOutput';
  id: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AdminLoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  accessToken: Scalars['String']['output'];
};

export type AdminRegisterInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String']['output'];
};

export type CloudinarySignatureOutput = {
  __typename?: 'CloudinarySignatureOutput';
  apiKey: Scalars['String']['output'];
  cloudName: Scalars['String']['output'];
  publicId: Scalars['String']['output'];
  signature: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  /** filter the rows which have to be updated */
  where: Admin_Bool_Exp;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  menu_items: Array<Menu>;
  /** An aggregate relationship */
  menu_items_aggregate: Menu_Aggregate;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "category" */
export type CategoryMenu_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


/** columns and relationships of "category" */
export type CategoryMenu_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  menu_items?: InputMaybe<Menu_Bool_Exp>;
  menu_items_aggregate?: InputMaybe<Menu_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  menu_items?: InputMaybe<Menu_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  id?: InputMaybe<Order_By>;
  menu_items_aggregate?: InputMaybe<Menu_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

export type Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Category_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "menu" */
export type Menu = {
  __typename?: 'menu';
  category_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  ingredients?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  menu_category?: Maybe<Category>;
  price: Scalars['numeric']['output'];
  title: Scalars['String']['output'];
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "menu" */
export type Menu_Aggregate = {
  __typename?: 'menu_aggregate';
  aggregate?: Maybe<Menu_Aggregate_Fields>;
  nodes: Array<Menu>;
};

export type Menu_Aggregate_Bool_Exp = {
  count?: InputMaybe<Menu_Aggregate_Bool_Exp_Count>;
};

export type Menu_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Menu_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "menu" */
export type Menu_Aggregate_Fields = {
  __typename?: 'menu_aggregate_fields';
  avg?: Maybe<Menu_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Menu_Max_Fields>;
  min?: Maybe<Menu_Min_Fields>;
  stddev?: Maybe<Menu_Stddev_Fields>;
  stddev_pop?: Maybe<Menu_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Menu_Stddev_Samp_Fields>;
  sum?: Maybe<Menu_Sum_Fields>;
  var_pop?: Maybe<Menu_Var_Pop_Fields>;
  var_samp?: Maybe<Menu_Var_Samp_Fields>;
  variance?: Maybe<Menu_Variance_Fields>;
};


/** aggregate fields of "menu" */
export type Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "menu" */
export type Menu_Aggregate_Order_By = {
  avg?: InputMaybe<Menu_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Menu_Max_Order_By>;
  min?: InputMaybe<Menu_Min_Order_By>;
  stddev?: InputMaybe<Menu_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Menu_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Menu_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Menu_Sum_Order_By>;
  var_pop?: InputMaybe<Menu_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Menu_Var_Samp_Order_By>;
  variance?: InputMaybe<Menu_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "menu" */
export type Menu_Arr_Rel_Insert_Input = {
  data: Array<Menu_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** aggregate avg on columns */
export type Menu_Avg_Fields = {
  __typename?: 'menu_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "menu" */
export type Menu_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "menu". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Menu_Bool_Exp>>;
  _not?: InputMaybe<Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Menu_Bool_Exp>>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  menu_category?: InputMaybe<Category_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "menu" */
export enum Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuPkey = 'menu_pkey'
}

/** input type for incrementing numeric columns in table "menu" */
export type Menu_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "menu" */
export type Menu_Insert_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  menu_category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Menu_Max_Fields = {
  __typename?: 'menu_max_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  ingredients?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "menu" */
export type Menu_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Menu_Min_Fields = {
  __typename?: 'menu_min_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  ingredients?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "menu" */
export type Menu_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "menu" */
export type Menu_Mutation_Response = {
  __typename?: 'menu_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Menu>;
};

/** input type for inserting object relation for remote table "menu" */
export type Menu_Obj_Rel_Insert_Input = {
  data: Menu_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** on_conflict condition type for table "menu" */
export type Menu_On_Conflict = {
  constraint: Menu_Constraint;
  update_columns?: Array<Menu_Update_Column>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "menu". */
export type Menu_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  menu_category?: InputMaybe<Category_Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: menu */
export type Menu_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "menu" */
export enum Menu_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "menu" */
export type Menu_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Menu_Stddev_Fields = {
  __typename?: 'menu_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "menu" */
export type Menu_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Menu_Stddev_Pop_Fields = {
  __typename?: 'menu_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "menu" */
export type Menu_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Menu_Stddev_Samp_Fields = {
  __typename?: 'menu_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "menu" */
export type Menu_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "menu" */
export type Menu_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Menu_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Menu_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Menu_Sum_Fields = {
  __typename?: 'menu_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "menu" */
export type Menu_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "menu" */
export enum Menu_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

export type Menu_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Menu_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menu_Set_Input>;
  /** filter the rows which have to be updated */
  where: Menu_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Menu_Var_Pop_Fields = {
  __typename?: 'menu_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "menu" */
export type Menu_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Menu_Var_Samp_Fields = {
  __typename?: 'menu_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "menu" */
export type Menu_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Menu_Variance_Fields = {
  __typename?: 'menu_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "menu" */
export type Menu_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Admin Registration */
  adminRegister?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "menu" */
  delete_menu?: Maybe<Menu_Mutation_Response>;
  /** delete single row from the table: "menu" */
  delete_menu_by_pk?: Maybe<Menu>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "orders_menu" */
  delete_orders_menu?: Maybe<Orders_Menu_Mutation_Response>;
  /** delete single row from the table: "orders_menu" */
  delete_orders_menu_by_pk?: Maybe<Orders_Menu>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "menu" */
  insert_menu?: Maybe<Menu_Mutation_Response>;
  /** insert a single row into the table: "menu" */
  insert_menu_one?: Maybe<Menu>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert data into the table: "orders_menu" */
  insert_orders_menu?: Maybe<Orders_Menu_Mutation_Response>;
  /** insert a single row into the table: "orders_menu" */
  insert_orders_menu_one?: Maybe<Orders_Menu>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
  /** update data of the table: "menu" */
  update_menu?: Maybe<Menu_Mutation_Response>;
  /** update single row of the table: "menu" */
  update_menu_by_pk?: Maybe<Menu>;
  /** update multiples rows of table: "menu" */
  update_menu_many?: Maybe<Array<Maybe<Menu_Mutation_Response>>>;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update multiples rows of table: "order_status" */
  update_order_status_many?: Maybe<Array<Maybe<Order_Status_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "orders_menu" */
  update_orders_menu?: Maybe<Orders_Menu_Mutation_Response>;
  /** update single row of the table: "orders_menu" */
  update_orders_menu_by_pk?: Maybe<Orders_Menu>;
  /** update multiples rows of table: "orders_menu" */
  update_orders_menu_many?: Maybe<Array<Maybe<Orders_Menu_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MenuArgs = {
  where: Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Menu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Orders_MenuArgs = {
  where: Orders_Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_Menu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MenuArgs = {
  objects: Array<Menu_Insert_Input>;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Menu_OneArgs = {
  object: Menu_Insert_Input;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_MenuArgs = {
  objects: Array<Orders_Menu_Insert_Input>;
  on_conflict?: InputMaybe<Orders_Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_Menu_OneArgs = {
  object: Orders_Menu_Insert_Input;
  on_conflict?: InputMaybe<Orders_Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MenuArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  where: Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Menu_By_PkArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  pk_columns: Menu_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Menu_ManyArgs = {
  updates: Array<Menu_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_ManyArgs = {
  updates: Array<Order_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_MenuArgs = {
  _set?: InputMaybe<Orders_Menu_Set_Input>;
  where: Orders_Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Menu_By_PkArgs = {
  _set?: InputMaybe<Orders_Menu_Set_Input>;
  pk_columns: Orders_Menu_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Menu_ManyArgs = {
  updates: Array<Orders_Menu_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: 'order_status';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: 'order_status_aggregate';
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: 'order_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
};


/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  _not?: InputMaybe<Order_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderStatusPkey = 'order_status_pkey'
}

export enum Order_Status_Enum {
  /** Canceled */
  Canceled = 'CANCELED',
  /** Devilered */
  Delivered = 'DELIVERED',
  /** Done */
  Done = 'DONE',
  /** In Progress */
  InProgress = 'IN_PROGRESS',
  /** New */
  New = 'NEW'
}

/** Boolean expression to compare columns of type "order_status_enum". All fields are combined with logical 'AND'. */
export type Order_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_Status_Enum>;
  _in?: InputMaybe<Array<Order_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Order_Status_Enum>;
  _nin?: InputMaybe<Array<Order_Status_Enum>>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: 'order_status_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: 'order_status_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: 'order_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status>;
};

/** on_conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns?: Array<Order_Status_Update_Column>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status". */
export type Order_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_status */
export type Order_Status_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "order_status" */
export type Order_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Status_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

export type Order_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Status_Bool_Exp;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  client_address: Scalars['String']['output'];
  client_name: Scalars['String']['output'];
  client_phone: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  order_items: Array<Orders_Menu>;
  /** An aggregate relationship */
  order_items_aggregate: Orders_Menu_Aggregate;
  status?: Maybe<Order_Status_Enum>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  client_address?: InputMaybe<String_Comparison_Exp>;
  client_name?: InputMaybe<String_Comparison_Exp>;
  client_phone?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_items?: InputMaybe<Orders_Menu_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Orders_Menu_Aggregate_Bool_Exp>;
  status?: InputMaybe<Order_Status_Enum_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  client_address?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_items?: InputMaybe<Orders_Menu_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  client_address?: Maybe<Scalars['String']['output']>;
  client_name?: Maybe<Scalars['String']['output']>;
  client_phone?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** columns and relationships of "orders_menu" */
export type Orders_Menu = {
  __typename?: 'orders_menu';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  item?: Maybe<Menu>;
  menu_id: Scalars['uuid']['output'];
  order_id: Scalars['uuid']['output'];
};

/** aggregated selection of "orders_menu" */
export type Orders_Menu_Aggregate = {
  __typename?: 'orders_menu_aggregate';
  aggregate?: Maybe<Orders_Menu_Aggregate_Fields>;
  nodes: Array<Orders_Menu>;
};

export type Orders_Menu_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Menu_Aggregate_Bool_Exp_Count>;
};

export type Orders_Menu_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Menu_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders_menu" */
export type Orders_Menu_Aggregate_Fields = {
  __typename?: 'orders_menu_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Menu_Max_Fields>;
  min?: Maybe<Orders_Menu_Min_Fields>;
};


/** aggregate fields of "orders_menu" */
export type Orders_Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders_menu" */
export type Orders_Menu_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Menu_Max_Order_By>;
  min?: InputMaybe<Orders_Menu_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders_menu" */
export type Orders_Menu_Arr_Rel_Insert_Input = {
  data: Array<Orders_Menu_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_Menu_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders_menu". All fields are combined with a logical 'AND'. */
export type Orders_Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Menu_Bool_Exp>>;
  _not?: InputMaybe<Orders_Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Menu_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item?: InputMaybe<Menu_Bool_Exp>;
  menu_id?: InputMaybe<Uuid_Comparison_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders_menu" */
export enum Orders_Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersMenuPkey = 'orders_menu_pkey'
}

/** input type for inserting data into table "orders_menu" */
export type Orders_Menu_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  item?: InputMaybe<Menu_Obj_Rel_Insert_Input>;
  menu_id?: InputMaybe<Scalars['uuid']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Orders_Menu_Max_Fields = {
  __typename?: 'orders_menu_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  menu_id?: Maybe<Scalars['uuid']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "orders_menu" */
export type Orders_Menu_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  menu_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Menu_Min_Fields = {
  __typename?: 'orders_menu_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  menu_id?: Maybe<Scalars['uuid']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "orders_menu" */
export type Orders_Menu_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  menu_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders_menu" */
export type Orders_Menu_Mutation_Response = {
  __typename?: 'orders_menu_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders_Menu>;
};

/** on_conflict condition type for table "orders_menu" */
export type Orders_Menu_On_Conflict = {
  constraint: Orders_Menu_Constraint;
  update_columns?: Array<Orders_Menu_Update_Column>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "orders_menu". */
export type Orders_Menu_Order_By = {
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Menu_Order_By>;
  menu_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders_menu */
export type Orders_Menu_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orders_menu" */
export enum Orders_Menu_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MenuId = 'menu_id',
  /** column name */
  OrderId = 'order_id'
}

/** input type for updating data in table "orders_menu" */
export type Orders_Menu_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  menu_id?: InputMaybe<Scalars['uuid']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "orders_menu" */
export type Orders_Menu_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Menu_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Menu_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  menu_id?: InputMaybe<Scalars['uuid']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "orders_menu" */
export enum Orders_Menu_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MenuId = 'menu_id',
  /** column name */
  OrderId = 'order_id'
}

export type Orders_Menu_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Menu_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Menu_Bool_Exp;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  client_address?: Maybe<Scalars['String']['output']>;
  client_name?: Maybe<Scalars['String']['output']>;
  client_phone?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  client_address?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Orders_Menu_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  ClientAddress = 'client_address',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  client_address?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  client_address?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  ClientAddress = 'client_address',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

export type Orders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  adminGetMe?: Maybe<AdminGetOutput>;
  /** Login Admin */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** cloudinarySignature */
  cloudinarySignature?: Maybe<CloudinarySignatureOutput>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_menu" */
  orders_menu: Array<Orders_Menu>;
  /** fetch aggregated fields from the table: "orders_menu" */
  orders_menu_aggregate: Orders_Menu_Aggregate;
  /** fetch data from the table: "orders_menu" using primary key columns */
  orders_menu_by_pk?: Maybe<Orders_Menu>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Query_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Query_RootMenu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrders_MenuArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Query_RootOrders_Menu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Query_RootOrders_Menu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  category_stream: Array<Category>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table in a streaming manner: "menu" */
  menu_stream: Array<Menu>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table in a streaming manner: "order_status" */
  order_status_stream: Array<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_menu" */
  orders_menu: Array<Orders_Menu>;
  /** fetch aggregated fields from the table: "orders_menu" */
  orders_menu_aggregate: Orders_Menu_Aggregate;
  /** fetch data from the table: "orders_menu" using primary key columns */
  orders_menu_by_pk?: Maybe<Orders_Menu>;
  /** fetch data from the table in a streaming manner: "orders_menu" */
  orders_menu_stream: Array<Orders_Menu>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Subscription_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Subscription_RootMenu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMenu_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Menu_Stream_Cursor_Input>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrder_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_MenuArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Subscription_RootOrders_Menu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Subscription_RootOrders_Menu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_Menu_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Menu_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetAdminByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetAdminByUsernameQuery = { __typename?: 'query_root', admin: Array<{ __typename?: 'admin', id: any, password: string }> };

export type GetAdminByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetAdminByIdQuery = { __typename?: 'query_root', admin_by_pk?: { __typename?: 'admin', id: any, username: string } | null };

export type InsertAdminMutationVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type InsertAdminMutation = { __typename?: 'mutation_root', insert_admin_one?: { __typename?: 'admin', id: any } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', category: Array<{ __typename?: 'category', id: any }> };

export type GetMenuItemByCategoryIdQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type GetMenuItemByCategoryIdQuery = { __typename?: 'query_root', menu: Array<{ __typename?: 'menu', id: any }> };

export type CreateFakeOrderMutationVariables = Exact<{
  client_address: Scalars['String']['input'];
  client_name: Scalars['String']['input'];
  client_phone: Scalars['String']['input'];
  created_at: Scalars['timestamptz']['input'];
}>;


export type CreateFakeOrderMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', id: any } | null };

export type AddItemsToFakeOrderMutationVariables = Exact<{
  objects: Array<Orders_Menu_Insert_Input> | Orders_Menu_Insert_Input;
}>;


export type AddItemsToFakeOrderMutation = { __typename?: 'mutation_root', insert_orders_menu?: { __typename?: 'orders_menu_mutation_response', affected_rows: number } | null };


export const GetAdminByUsernameDocument = gql`
    query GetAdminByUsername($username: String!) {
  admin(where: {username: {_eq: $username}}) {
    id
    password
  }
}
    `;
export const GetAdminByIdDocument = gql`
    query GetAdminById($id: uuid!) {
  admin_by_pk(id: $id) {
    id
    username
  }
}
    `;
export const InsertAdminDocument = gql`
    mutation InsertAdmin($password: String!, $username: String!) {
  insert_admin_one(object: {password: $password, username: $username}) {
    id
  }
}
    `;
export const GetCategoriesDocument = gql`
    query GetCategories {
  category {
    id
  }
}
    `;
export const GetMenuItemByCategoryIdDocument = gql`
    query GetMenuItemByCategoryId($categoryId: uuid) {
  menu(where: {category_id: {_eq: $categoryId}}) {
    id
  }
}
    `;
export const CreateFakeOrderDocument = gql`
    mutation CreateFakeOrder($client_address: String!, $client_name: String!, $client_phone: String!, $created_at: timestamptz!) {
  insert_orders_one(
    object: {client_address: $client_address, client_name: $client_name, client_phone: $client_phone, status: DONE, created_at: $created_at}
  ) {
    id
  }
}
    `;
export const AddItemsToFakeOrderDocument = gql`
    mutation AddItemsToFakeOrder($objects: [orders_menu_insert_input!]!) {
  insert_orders_menu(objects: $objects) {
    affected_rows
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAdminByUsername(variables: GetAdminByUsernameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAdminByUsernameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByUsernameQuery>(GetAdminByUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminByUsername', 'query');
    },
    GetAdminById(variables: GetAdminByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAdminByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByIdQuery>(GetAdminByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminById', 'query');
    },
    InsertAdmin(variables: InsertAdminMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertAdminMutation>(InsertAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertAdmin', 'mutation');
    },
    GetCategories(variables?: GetCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCategories', 'query');
    },
    GetMenuItemByCategoryId(variables?: GetMenuItemByCategoryIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMenuItemByCategoryIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMenuItemByCategoryIdQuery>(GetMenuItemByCategoryIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMenuItemByCategoryId', 'query');
    },
    CreateFakeOrder(variables: CreateFakeOrderMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateFakeOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateFakeOrderMutation>(CreateFakeOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateFakeOrder', 'mutation');
    },
    AddItemsToFakeOrder(variables: AddItemsToFakeOrderMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddItemsToFakeOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddItemsToFakeOrderMutation>(AddItemsToFakeOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddItemsToFakeOrder', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;