create schema api;
create table api.posts (
  id serial primary key,
  title text not null,
  teaser text not null,
  body text not null,
  average_note text not null,
  published_at timestamptz
);

grant all on api.posts to web_anon;
grant usage, select on sequence api.posts_id_seq to web_anon;