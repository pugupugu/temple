-- 100대 사찰 순례 가이드: 순례 완료 표시 + 사진 (100대 명산 mt100_* 와 같은 구조)
-- 번호 상한은 300 (기본 100곳 + 추가 추천 사찰 101번~ 대응)
-- 이미 프로젝트 hriogfnsqbnvaiixjmko(doc-prompt)에 적용되어 있습니다. 다른 프로젝트에서 쓰려면 SQL Editor에 그대로 실행하세요.
create table if not exists public.tp100_done (
  tp integer primary key check (tp >= 1 and tp <= 300),
  done_at timestamptz not null default now()
);

create table if not exists public.tp100_photos (
  tp integer not null check (tp >= 1 and tp <= 300),
  slot integer not null check (slot >= 0 and slot <= 19),
  path text not null,
  updated_at timestamptz not null default now(),
  primary key (tp, slot)
);

alter table public.tp100_done enable row level security;
alter table public.tp100_photos enable row level security;

create policy "tp100_done read"   on public.tp100_done for select to anon using (true);
create policy "tp100_done insert" on public.tp100_done for insert to anon with check (true);
create policy "tp100_done delete" on public.tp100_done for delete to anon using (true);

create policy "tp100_photos read"   on public.tp100_photos for select to anon using (true);
create policy "tp100_photos insert" on public.tp100_photos for insert to anon with check (true);
create policy "tp100_photos update" on public.tp100_photos for update to anon using (true) with check (true);
create policy "tp100_photos delete" on public.tp100_photos for delete to anon using (true);

-- 사진 버킷: 공개 읽기, 파일당 5MB, 이미지 형식만
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('tp100-photos', 'tp100-photos', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public = true, file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg','image/png','image/webp'];

create policy "tp100 photos insert" on storage.objects for insert to anon with check (bucket_id = 'tp100-photos');
create policy "tp100 photos update" on storage.objects for update to anon using (bucket_id = 'tp100-photos') with check (bucket_id = 'tp100-photos');
create policy "tp100 photos delete" on storage.objects for delete to anon using (bucket_id = 'tp100-photos');
