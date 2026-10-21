// Each Edge Function must be deployable on its own (the Supabase dashboard editor only sees one
// function's folder). The single source of truth is supabase/functions/_shared; this script copies
// it into every function as ./shared. Run after editing anything in _shared:
//   node scripts/sync-function-shared.mjs
import fs from "fs";
import path from "path";

const root = "supabase/functions";
const shared = path.join(root, "_shared");
const copyDir = (from, to) => {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, e.name), b = path.join(to, e.name);
    e.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b);
  }
};
for (const fn of fs.readdirSync(root, { withFileTypes: true })) {
  if (!fn.isDirectory() || fn.name.startsWith("_")) continue;
  const target = path.join(root, fn.name, "shared");
  fs.rmSync(target, { recursive: true, force: true });
  copyDir(shared, target);
  console.log("synced", target);
}
