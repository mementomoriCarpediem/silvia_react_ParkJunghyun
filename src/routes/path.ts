// ----------------------------------------------------------------------
function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT = '/';
const ROOT_HOME = '/home';
const ROOT_DASHBOARD = '/dashboard';
// ----------------------------------------------------------------------

export const PATH_SIMPLE = {
  root: ROOT,
  home: ROOT_HOME,
  summary: path(ROOT_DASHBOARD, '/summary'),
  cognitive_training: path(ROOT_DASHBOARD, '/cognitive-training'),
  life_management: path(ROOT_DASHBOARD, '/life-management'),
};
