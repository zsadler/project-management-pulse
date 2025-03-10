drop table if exists tasks;

create table
tasks (
  id bigint primary key generated always as identity not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  name text not null,
  status text not null,
  description text not null,
  due_date date default null,
  project_id bigint references projects (id) default null,
  collaborators text array default array[]::varchar[] not null
);

-- Add row level security to the tasks table
-- alter table tasks enable row level security;
