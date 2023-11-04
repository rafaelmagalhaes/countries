create table "public"."cities" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "country" text,
    "name" text,
    "lat" text,
    "lng" text
);


alter table "public"."cities" enable row level security;

create table "public"."countries" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "flag" text,
    "flags" jsonb,
    "name" text,
    "code" text,
    "idd" jsonb
);


alter table "public"."countries" enable row level security;

CREATE UNIQUE INDEX cities_pkey ON public.cities USING btree (id);

CREATE UNIQUE INDEX countries_pkey ON public.countries USING btree (id);

alter table "public"."cities" add constraint "cities_pkey" PRIMARY KEY using index "cities_pkey";

alter table "public"."countries" add constraint "countries_pkey" PRIMARY KEY using index "countries_pkey";

create policy "Enable read access for all users"
on "public"."cities"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."countries"
as permissive
for select
to public
using (true);


alter table "public"."cities" add column "country_id" uuid;

alter table "public"."cities" add constraint "cities_country_id_fkey" FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE not valid;

alter table "public"."cities" validate constraint "cities_country_id_fkey";

