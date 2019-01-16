export const STAT_LIMIT_MAP = {
  openIssues: {
    isHigherBad: true,
    limit: 500,
  },
  forks: {
    isHigherBad: false,
    limit: 50,
  },
  starred: {
    isHigherBad: false,
    limit: 500,
  },
  watchers: {
    isHigherBad: false,
    limit: 50,
  },
}

export const ICONS = {
  success:
    'M7.42449 14.5737L2.42002 9.56926C1.86238 9.01162 0.975871 9.01162 0.418231 9.56926C-0.13941 10.1269 -0.13941 11.0134 0.418231 11.571L6.40929 17.5621C6.96693 18.1197 7.86774 18.1197 8.42538 17.5621L23.5818 2.42002C24.1394 1.86238 24.1394 0.975871 23.5818 0.418231C23.0241 -0.13941 22.1376 -0.13941 21.58 0.418231L7.42449 14.5737Z',
}
