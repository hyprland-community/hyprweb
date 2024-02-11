import type { Endpoints } from "@octokit/types"
import { subDays, subSeconds } from "date-fns"

export const placeholderData = [
  {
    id: 519049194,
    node_id: "R_kgDOHvAP6g",
    name: "hyprland-rs",
    full_name: "hyprland-community/hyprland-rs",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprland-rs",
    description:
      "An unofficial rust wrapper for hyprland's IPC [maintainers=@yavko,@cyrinux]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprland-rs",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-rs/deployments",
    created_at: "2022-07-29T02:00:51Z",
    updated_at: "2024-02-10T15:02:15Z",
    pushed_at: "2024-02-08T02:57:59Z",
    git_url: "git://github.com/hyprland-community/hyprland-rs.git",
    ssh_url: "git@github.com:hyprland-community/hyprland-rs.git",
    clone_url: "https://github.com/hyprland-community/hyprland-rs.git",
    svn_url: "https://github.com/hyprland-community/hyprland-rs",
    homepage: "",
    size: 511,
    stargazers_count: 157,
    watchers_count: 157,
    language: "Rust",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 29,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 19,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["hyprland", "hyprland-ipc", "ipc", "rust", "socket"],
    visibility: "public",
    forks: 29,
    open_issues: 19,
    watchers: 157,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 552937986,
    node_id: "R_kgDOIPUqAg",
    name: "Hyprkeys",
    full_name: "hyprland-community/Hyprkeys",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/Hyprkeys",
    description:
      "A simple, scriptable keybind retrieval utility for Hyprland  [maintainer=@NotAShelf]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/Hyprkeys",
    forks_url: "https://api.github.com/repos/hyprland-community/Hyprkeys/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/hyprland-community/Hyprkeys/teams",
    hooks_url: "https://api.github.com/repos/hyprland-community/Hyprkeys/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/Hyprkeys/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/Hyprkeys/deployments",
    created_at: "2022-10-17T13:11:11Z",
    updated_at: "2024-02-08T23:06:43Z",
    pushed_at: "2023-12-11T03:44:27Z",
    git_url: "git://github.com/hyprland-community/Hyprkeys.git",
    ssh_url: "git@github.com:hyprland-community/Hyprkeys.git",
    clone_url: "https://github.com/hyprland-community/Hyprkeys.git",
    svn_url: "https://github.com/hyprland-community/Hyprkeys",
    homepage: "",
    size: 169,
    stargazers_count: 88,
    watchers_count: 88,
    language: "Go",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 5,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["go", "hyprland", "wayland", "wlroots"],
    visibility: "public",
    forks: 5,
    open_issues: 1,
    watchers: 88,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 576140850,
    node_id: "R_kgDOIlc2Mg",
    name: ".github",
    full_name: "hyprland-community/.github",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/.github",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/.github",
    forks_url: "https://api.github.com/repos/hyprland-community/.github/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/.github/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/.github/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/hyprland-community/.github/teams",
    hooks_url: "https://api.github.com/repos/hyprland-community/.github/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/.github/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/.github/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/.github/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/.github/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/.github/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/.github/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/.github/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/.github/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/.github/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/.github/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/.github/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/.github/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/.github/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/.github/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/.github/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/.github/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/.github/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/.github/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/.github/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/.github/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/.github/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/.github/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/.github/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/.github/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/.github/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/.github/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/.github/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/.github/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/.github/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/.github/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/.github/deployments",
    created_at: "2022-12-09T05:13:46Z",
    updated_at: "2022-12-09T05:13:49Z",
    pushed_at: "2023-02-11T20:30:00Z",
    git_url: "git://github.com/hyprland-community/.github.git",
    ssh_url: "git@github.com:hyprland-community/.github.git",
    clone_url: "https://github.com/hyprland-community/.github.git",
    svn_url: "https://github.com/hyprland-community/.github",
    homepage: null,
    size: 4,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 576141241,
    node_id: "R_kgDOIlc3uQ",
    name: "submissions",
    full_name: "hyprland-community/submissions",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/submissions",
    description: "Place to request repos on this org",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/submissions",
    forks_url:
      "https://api.github.com/repos/hyprland-community/submissions/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/submissions/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/submissions/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/submissions/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/submissions/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/submissions/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/submissions/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/submissions/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/submissions/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/submissions/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/submissions/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/submissions/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/submissions/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/submissions/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/submissions/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/submissions/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/submissions/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/submissions/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/submissions/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/submissions/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/submissions/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/submissions/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/submissions/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/submissions/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/submissions/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/submissions/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/submissions/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/submissions/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/submissions/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/submissions/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/submissions/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/submissions/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/submissions/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/submissions/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/submissions/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/submissions/deployments",
    created_at: "2022-12-09T05:15:23Z",
    updated_at: "2023-07-01T01:49:28Z",
    pushed_at: "2022-12-09T05:30:57Z",
    git_url: "git://github.com/hyprland-community/submissions.git",
    ssh_url: "git@github.com:hyprland-community/submissions.git",
    clone_url: "https://github.com/hyprland-community/submissions.git",
    svn_url: "https://github.com/hyprland-community/submissions",
    homepage: null,
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 576150049,
    node_id: "R_kgDOIldaIQ",
    name: "awesome-hyprland",
    full_name: "hyprland-community/awesome-hyprland",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/awesome-hyprland",
    description: "Awesome list for Hyprland [maintainer=@yavko]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/awesome-hyprland",
    forks_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/awesome-hyprland/deployments",
    created_at: "2022-12-09T05:50:16Z",
    updated_at: "2024-02-11T15:47:12Z",
    pushed_at: "2024-02-11T12:28:13Z",
    git_url: "git://github.com/hyprland-community/awesome-hyprland.git",
    ssh_url: "git@github.com:hyprland-community/awesome-hyprland.git",
    clone_url: "https://github.com/hyprland-community/awesome-hyprland.git",
    svn_url: "https://github.com/hyprland-community/awesome-hyprland",
    homepage: "",
    size: 163,
    stargazers_count: 1413,
    watchers_count: 1413,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 31,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 4,
    license: {
      key: "cc0-1.0",
      name: "Creative Commons Zero v1.0 Universal",
      spdx_id: "CC0-1.0",
      url: "https://api.github.com/licenses/cc0-1.0",
      node_id: "MDc6TGljZW5zZTY=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "awesome",
      "awesome-list",
      "awesome-lists",
      "awesome-readme",
      "awesome-resources",
      "hyprland",
      "hyprland-ipc",
      "list",
      "resources",
    ],
    visibility: "public",
    forks: 31,
    open_issues: 4,
    watchers: 1413,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 580761857,
    node_id: "R_kgDOIp25AQ",
    name: "hyprland-py",
    full_name: "hyprland-community/hyprland-py",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprland-py",
    description:
      "An unoffical async python wrapper for hyprland's IPC [maintainer=@flick0]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprland-py",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-py/deployments",
    created_at: "2022-12-21T11:36:50Z",
    updated_at: "2024-01-25T20:21:26Z",
    pushed_at: "2023-12-21T15:50:59Z",
    git_url: "git://github.com/hyprland-community/hyprland-py.git",
    ssh_url: "git@github.com:hyprland-community/hyprland-py.git",
    clone_url: "https://github.com/hyprland-community/hyprland-py.git",
    svn_url: "https://github.com/hyprland-community/hyprland-py",
    homepage: "",
    size: 209,
    stargazers_count: 34,
    watchers_count: 34,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 5,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 5,
    open_issues: 2,
    watchers: 34,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 583332897,
    node_id: "R_kgDOIsT0IQ",
    name: "hyprset",
    full_name: "hyprland-community/hyprset",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprset",
    description: "a gui hyprland configurator [maintainer=@flick0]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprset",
    forks_url: "https://api.github.com/repos/hyprland-community/hyprset/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprset/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprset/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/hyprland-community/hyprset/teams",
    hooks_url: "https://api.github.com/repos/hyprland-community/hyprset/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprset/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprset/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprset/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprset/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hyprset/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprset/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprset/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprset/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprset/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprset/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprset/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprset/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprset/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprset/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprset/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprset/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprset/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprset/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprset/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprset/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprset/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprset/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprset/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprset/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprset/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprset/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprset/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprset/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprset/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprset/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprset/deployments",
    created_at: "2022-12-29T13:14:35Z",
    updated_at: "2024-02-11T20:38:01Z",
    pushed_at: "2023-01-21T05:31:58Z",
    git_url: "git://github.com/hyprland-community/hyprset.git",
    ssh_url: "git@github.com:hyprland-community/hyprset.git",
    clone_url: "https://github.com/hyprland-community/hyprset.git",
    svn_url: "https://github.com/hyprland-community/hyprset",
    homepage: "",
    size: 14,
    stargazers_count: 42,
    watchers_count: 42,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["config", "gui", "hyprland", "wayland"],
    visibility: "public",
    forks: 1,
    open_issues: 1,
    watchers: 42,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 586531306,
    node_id: "R_kgDOIvXB6g",
    name: "hyprtheme",
    full_name: "hyprland-community/hyprtheme",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprtheme",
    description: "a cli util to apply themes to hyprland [maintainer=@flick0]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprtheme",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hyprtheme/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprtheme/deployments",
    created_at: "2023-01-08T13:31:35Z",
    updated_at: "2024-02-01T10:09:59Z",
    pushed_at: "2024-01-22T08:57:49Z",
    git_url: "git://github.com/hyprland-community/hyprtheme.git",
    ssh_url: "git@github.com:hyprland-community/hyprtheme.git",
    clone_url: "https://github.com/hyprland-community/hyprtheme.git",
    svn_url: "https://github.com/hyprland-community/hyprtheme",
    homepage: "",
    size: 143,
    stargazers_count: 32,
    watchers_count: 32,
    language: "Rust",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["cli", "hyprland", "rust", "theme-switcher"],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 32,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 586646957,
    node_id: "R_kgDOIveFrQ",
    name: "hyprland-autoname-workspaces",
    full_name: "hyprland-community/hyprland-autoname-workspaces",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url:
      "https://github.com/hyprland-community/hyprland-autoname-workspaces",
    description:
      "Hyprland autoname workspaces 🪟 [maintainers=@cyrinux,@maximbaz] ",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/deployments",
    created_at: "2023-01-08T21:11:23Z",
    updated_at: "2024-02-08T18:06:09Z",
    pushed_at: "2024-02-03T08:10:35Z",
    git_url:
      "git://github.com/hyprland-community/hyprland-autoname-workspaces.git",
    ssh_url:
      "git@github.com:hyprland-community/hyprland-autoname-workspaces.git",
    clone_url:
      "https://github.com/hyprland-community/hyprland-autoname-workspaces.git",
    svn_url:
      "https://github.com/hyprland-community/hyprland-autoname-workspaces",
    homepage: "",
    size: 294,
    stargazers_count: 144,
    watchers_count: 144,
    language: "Rust",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 8,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 4,
    license: {
      key: "isc",
      name: "ISC License",
      spdx_id: "ISC",
      url: "https://api.github.com/licenses/isc",
      node_id: "MDc6TGljZW5zZTEw",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "desktop",
      "desktop-application",
      "eww",
      "hyprland",
      "hyrpland",
      "icons",
      "linux",
      "rust",
      "waybar",
      "wayland",
    ],
    visibility: "public",
    forks: 8,
    open_issues: 4,
    watchers: 144,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 587806568,
    node_id: "R_kgDOIwk3aA",
    name: "theme-repo",
    full_name: "hyprland-community/theme-repo",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/theme-repo",
    description: "a place to share your themes",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/theme-repo",
    forks_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/theme-repo/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/theme-repo/deployments",
    created_at: "2023-01-11T16:23:33Z",
    updated_at: "2024-02-11T05:14:34Z",
    pushed_at: "2024-01-23T03:23:00Z",
    git_url: "git://github.com/hyprland-community/theme-repo.git",
    ssh_url: "git@github.com:hyprland-community/theme-repo.git",
    clone_url: "https://github.com/hyprland-community/theme-repo.git",
    svn_url: "https://github.com/hyprland-community/theme-repo",
    homepage: "",
    size: 87,
    stargazers_count: 56,
    watchers_count: 56,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["hyprland", "themes"],
    visibility: "public",
    forks: 1,
    open_issues: 1,
    watchers: 56,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 589736060,
    node_id: "R_kgDOIyaofA",
    name: "hyprweb-old",
    full_name: "hyprland-community/hyprweb-old",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprweb-old",
    description:
      "Hyprland community website written in pure js and lit [maintainer=@yavko]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprweb-old",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprweb-old/deployments",
    created_at: "2023-01-16T20:16:54Z",
    updated_at: "2024-01-27T20:15:51Z",
    pushed_at: "2023-04-14T04:28:33Z",
    git_url: "git://github.com/hyprland-community/hyprweb-old.git",
    ssh_url: "git@github.com:hyprland-community/hyprweb-old.git",
    clone_url: "https://github.com/hyprland-community/hyprweb-old.git",
    svn_url: "https://github.com/hyprland-community/hyprweb-old",
    homepage: "https://community.hyprland.org/",
    size: 31,
    stargazers_count: 3,
    watchers_count: 3,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 2,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 6,
    license: {
      key: "agpl-3.0",
      name: "GNU Affero General Public License v3.0",
      spdx_id: "AGPL-3.0",
      url: "https://api.github.com/licenses/agpl-3.0",
      node_id: "MDc6TGljZW5zZTE=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 2,
    open_issues: 6,
    watchers: 3,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 590736298,
    node_id: "R_kgDOIzXrqg",
    name: "hyprparse",
    full_name: "hyprland-community/hyprparse",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprparse",
    description:
      "Hyprland/Hyprpaper/Hypr configuration file parser [maintainer=@yavko]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprparse",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hyprparse/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprparse/deployments",
    created_at: "2023-01-19T04:29:28Z",
    updated_at: "2024-01-31T09:43:47Z",
    pushed_at: "2023-02-14T00:28:52Z",
    git_url: "git://github.com/hyprland-community/hyprparse.git",
    ssh_url: "git@github.com:hyprland-community/hyprparse.git",
    clone_url: "https://github.com/hyprland-community/hyprparse.git",
    svn_url: "https://github.com/hyprland-community/hyprparse",
    homepage: "",
    size: 52,
    stargazers_count: 18,
    watchers_count: 18,
    language: "Rust",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "agpl-3.0",
      name: "GNU Affero General Public License v3.0",
      spdx_id: "AGPL-3.0",
      url: "https://api.github.com/licenses/agpl-3.0",
      node_id: "MDc6TGljZW5zZTE=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["config", "configuration", "hypr", "hyprland", "parser"],
    visibility: "public",
    forks: 1,
    open_issues: 1,
    watchers: 18,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 600315460,
    node_id: "R_kgDOI8gWRA",
    name: "community",
    full_name: "hyprland-community/community",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/community",
    description: "Discussions repo, and maybe more in the future!",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/community",
    forks_url:
      "https://api.github.com/repos/hyprland-community/community/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/community/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/community/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/community/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/community/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/community/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/community/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/community/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/community/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/community/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/community/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/community/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/community/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/community/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/community/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/community/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/community/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/community/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/community/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/community/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/community/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/community/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/community/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/community/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/community/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/community/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/community/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/community/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/community/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/community/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/community/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/community/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/community/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/community/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/community/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/community/deployments",
    created_at: "2023-02-11T05:17:13Z",
    updated_at: "2023-02-11T05:17:15Z",
    pushed_at: "2023-02-11T05:17:14Z",
    git_url: "git://github.com/hyprland-community/community.git",
    ssh_url: "git@github.com:hyprland-community/community.git",
    clone_url: "https://github.com/hyprland-community/community.git",
    svn_url: "https://github.com/hyprland-community/community",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 602849871,
    node_id: "R_kgDOI-7CTw",
    name: "Fylgja",
    full_name: "hyprland-community/Fylgja",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/Fylgja",
    description:
      "My personal swiss army knife for multi-language project development and system management, written in Rust. [maintainer=@NotAShelf]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/Fylgja",
    forks_url: "https://api.github.com/repos/hyprland-community/Fylgja/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/hyprland-community/Fylgja/teams",
    hooks_url: "https://api.github.com/repos/hyprland-community/Fylgja/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/issues/events{/number}",
    events_url: "https://api.github.com/repos/hyprland-community/Fylgja/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/Fylgja/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/hyprland-community/Fylgja/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/Fylgja/deployments",
    created_at: "2023-02-17T04:11:05Z",
    updated_at: "2023-07-11T11:00:57Z",
    pushed_at: "2023-04-14T01:13:49Z",
    git_url: "git://github.com/hyprland-community/Fylgja.git",
    ssh_url: "git@github.com:hyprland-community/Fylgja.git",
    clone_url: "https://github.com/hyprland-community/Fylgja.git",
    svn_url: "https://github.com/hyprland-community/Fylgja",
    homepage: "",
    size: 31,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Rust",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 624411565,
    node_id: "R_kgDOJTfDrQ",
    name: "hyprland-plugin-template",
    full_name: "hyprland-community/hyprland-plugin-template",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprland-plugin-template",
    description: 'A "convenient" Hyprland plugin template',
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprland-plugin-template",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/deployments",
    created_at: "2023-04-06T12:10:33Z",
    updated_at: "2024-01-14T12:09:07Z",
    pushed_at: "2023-05-08T10:49:51Z",
    git_url: "git://github.com/hyprland-community/hyprland-plugin-template.git",
    ssh_url: "git@github.com:hyprland-community/hyprland-plugin-template.git",
    clone_url:
      "https://github.com/hyprland-community/hyprland-plugin-template.git",
    svn_url: "https://github.com/hyprland-community/hyprland-plugin-template",
    homepage: "",
    size: 16,
    stargazers_count: 12,
    watchers_count: 12,
    language: "C++",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "bsd-3-clause",
      name: 'BSD 3-Clause "New" or "Revised" License',
      spdx_id: "BSD-3-Clause",
      url: "https://api.github.com/licenses/bsd-3-clause",
      node_id: "MDc6TGljZW5zZTU=",
    },
    allow_forking: true,
    is_template: true,
    web_commit_signoff_required: false,
    topics: ["hyprland", "hyprland-plugin", "hyprload"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 12,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 627715156,
    node_id: "R_kgDOJWosVA",
    name: "hyprcombot",
    full_name: "hyprland-community/hyprcombot",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprcombot",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprcombot",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hyprcombot/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprcombot/deployments",
    created_at: "2023-04-14T03:31:57Z",
    updated_at: "2023-04-15T06:14:26Z",
    pushed_at: "2023-04-14T03:32:25Z",
    git_url: "git://github.com/hyprland-community/hyprcombot.git",
    ssh_url: "git@github.com:hyprland-community/hyprcombot.git",
    clone_url: "https://github.com/hyprland-community/hyprcombot.git",
    svn_url: "https://github.com/hyprland-community/hyprcombot",
    homepage: null,
    size: 0,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 627740782,
    node_id: "R_kgDOJWqQbg",
    name: "hyprweb",
    full_name: "hyprland-community/hyprweb",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprweb",
    description:
      "Hyprland community website v2 [WIP] [maintainers=@Visual-Dawg]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprweb",
    forks_url: "https://api.github.com/repos/hyprland-community/hyprweb/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/hyprland-community/hyprweb/teams",
    hooks_url: "https://api.github.com/repos/hyprland-community/hyprweb/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hyprweb/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprweb/deployments",
    created_at: "2023-04-14T05:21:28Z",
    updated_at: "2024-01-27T19:28:51Z",
    pushed_at: "2024-02-11T19:11:43Z",
    git_url: "git://github.com/hyprland-community/hyprweb.git",
    ssh_url: "git@github.com:hyprland-community/hyprweb.git",
    clone_url: "https://github.com/hyprland-community/hyprweb.git",
    svn_url: "https://github.com/hyprland-community/hyprweb",
    homepage: "",
    size: 700,
    stargazers_count: 2,
    watchers_count: 2,
    language: "Astro",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "agpl-3.0",
      name: "GNU Affero General Public License v3.0",
      spdx_id: "AGPL-3.0",
      url: "https://api.github.com/licenses/agpl-3.0",
      node_id: "MDc6TGljZW5zZTE=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 2,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 629303819,
    node_id: "R_kgDOJYJqCw",
    name: "hyprland.c",
    full_name: "hyprland-community/hyprland.c",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprland.c",
    description:
      "Very basic Hyprland IPC bindings, (use hyprland-rs for serious stuff) [maintainer=@yavko]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprland.c",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hyprland.c/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprland.c/deployments",
    created_at: "2023-04-18T03:32:25Z",
    updated_at: "2023-04-18T14:43:11Z",
    pushed_at: "2023-04-18T07:45:46Z",
    git_url: "git://github.com/hyprland-community/hyprland.c.git",
    ssh_url: "git@github.com:hyprland-community/hyprland.c.git",
    clone_url: "https://github.com/hyprland-community/hyprland.c.git",
    svn_url: "https://github.com/hyprland-community/hyprland.c",
    homepage: null,
    size: 21,
    stargazers_count: 3,
    watchers_count: 3,
    language: "C",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 3,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 629400757,
    node_id: "R_kgDOJYPktQ",
    name: "hpr-scratcher",
    full_name: "hyprland-community/hpr-scratcher",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hpr-scratcher",
    description: "Scratchpad management for Hyprland [maintainer=@fdev31]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hpr-scratcher",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hpr-scratcher/deployments",
    created_at: "2023-04-18T08:34:18Z",
    updated_at: "2023-12-05T20:05:33Z",
    pushed_at: "2023-05-16T16:49:50Z",
    git_url: "git://github.com/hyprland-community/hpr-scratcher.git",
    ssh_url: "git@github.com:hyprland-community/hpr-scratcher.git",
    clone_url: "https://github.com/hyprland-community/hpr-scratcher.git",
    svn_url: "https://github.com/hyprland-community/hpr-scratcher",
    homepage: "",
    size: 53,
    stargazers_count: 12,
    watchers_count: 12,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 12,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 633571482,
    node_id: "R_kgDOJcOImg",
    name: "pyprland",
    full_name: "hyprland-community/pyprland",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/pyprland",
    description: "Hyprland extensions made easy [maintainer=@fdev31]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/pyprland",
    forks_url: "https://api.github.com/repos/hyprland-community/pyprland/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/pyprland/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/pyprland/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/hyprland-community/pyprland/teams",
    hooks_url: "https://api.github.com/repos/hyprland-community/pyprland/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/pyprland/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/pyprland/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/pyprland/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/pyprland/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/pyprland/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/pyprland/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/pyprland/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/pyprland/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/pyprland/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/pyprland/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/pyprland/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/pyprland/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/pyprland/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/pyprland/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/pyprland/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/pyprland/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/pyprland/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/pyprland/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/pyprland/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/pyprland/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/pyprland/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/pyprland/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/pyprland/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/pyprland/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/pyprland/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/pyprland/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/pyprland/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/pyprland/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/pyprland/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/pyprland/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/pyprland/deployments",
    created_at: "2023-04-27T20:01:13Z",
    updated_at: "2024-02-11T18:57:44Z",
    pushed_at: "2024-02-11T13:00:16Z",
    git_url: "git://github.com/hyprland-community/pyprland.git",
    ssh_url: "git@github.com:hyprland-community/pyprland.git",
    clone_url: "https://github.com/hyprland-community/pyprland.git",
    svn_url: "https://github.com/hyprland-community/pyprland",
    homepage: "",
    size: 376,
    stargazers_count: 119,
    watchers_count: 119,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 7,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 7,
    open_issues: 0,
    watchers: 119,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 663968557,
    node_id: "R_kgDOJ5NbLQ",
    name: "hypract",
    full_name: "hyprland-community/hypract",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hypract",
    description: "KDE activities for hyprland [maintainer=@yavko]",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hypract",
    forks_url: "https://api.github.com/repos/hyprland-community/hypract/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hypract/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hypract/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/hyprland-community/hypract/teams",
    hooks_url: "https://api.github.com/repos/hyprland-community/hypract/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hypract/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hypract/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hypract/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hypract/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hypract/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hypract/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hypract/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hypract/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hypract/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hypract/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hypract/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hypract/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hypract/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hypract/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hypract/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hypract/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hypract/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hypract/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hypract/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hypract/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hypract/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hypract/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hypract/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hypract/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hypract/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hypract/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hypract/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hypract/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hypract/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hypract/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hypract/deployments",
    created_at: "2023-07-08T15:07:18Z",
    updated_at: "2024-01-27T16:42:01Z",
    pushed_at: "2024-02-01T07:32:53Z",
    git_url: "git://github.com/hyprland-community/hypract.git",
    ssh_url: "git@github.com:hyprland-community/hypract.git",
    clone_url: "https://github.com/hyprland-community/hypract.git",
    svn_url: "https://github.com/hyprland-community/hypract",
    homepage: null,
    size: 61,
    stargazers_count: 19,
    watchers_count: 19,
    language: "Rust",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 19,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 673875919,
    node_id: "R_kgDOKCqHzw",
    name: "hyprland-nix",
    full_name: "hyprland-community/hyprland-nix",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hyprland-nix",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hyprland-nix",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hyprland-nix/deployments",
    created_at: "2023-08-02T16:12:01Z",
    updated_at: "2024-02-05T21:09:54Z",
    pushed_at: "2024-02-08T12:34:29Z",
    git_url: "git://github.com/hyprland-community/hyprland-nix.git",
    ssh_url: "git@github.com:hyprland-community/hyprland-nix.git",
    clone_url: "https://github.com/hyprland-community/hyprland-nix.git",
    svn_url: "https://github.com/hyprland-community/hyprland-nix",
    homepage: null,
    size: 186,
    stargazers_count: 12,
    watchers_count: 12,
    language: "Nix",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 4,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 4,
    watchers: 12,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 736765710,
    node_id: "R_kgDOK-onDg",
    name: "hypr-trans",
    full_name: "hyprland-community/hypr-trans",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hypr-trans",
    description:
      "hypr-trans is a tiny bash utility that sets alpha attribute of an Hyprland window",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hypr-trans",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hypr-trans/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/deployments",
    created_at: "2023-12-28T20:15:13Z",
    updated_at: "2024-01-28T22:54:06Z",
    pushed_at: "2024-01-28T22:59:27Z",
    git_url: "git://github.com/hyprland-community/hypr-trans.git",
    ssh_url: "git@github.com:hyprland-community/hypr-trans.git",
    clone_url: "https://github.com/hyprland-community/hypr-trans.git",
    svn_url: "https://github.com/hyprland-community/hypr-trans",
    homepage: "",
    size: 21,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Shell",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 420000,
    node_id: "A_kgDOK-onDg",
    name: "PLACEHOLDER DATA",
    full_name: "hyprland-community/PLACEHOLDER_DATA",
    private: false,
    owner: {
      login: "hyprland-community",
      id: 120158726,
      node_id: "O_kgDOByl6Bg",
      avatar_url: "https://avatars.githubusercontent.com/u/120158726?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hyprland-community",
      html_url: "https://github.com/hyprland-community",
      followers_url:
        "https://api.github.com/users/hyprland-community/followers",
      following_url:
        "https://api.github.com/users/hyprland-community/following{/other_user}",
      gists_url:
        "https://api.github.com/users/hyprland-community/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/hyprland-community/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/hyprland-community/subscriptions",
      organizations_url: "https://api.github.com/users/hyprland-community/orgs",
      repos_url: "https://api.github.com/users/hyprland-community/repos",
      events_url:
        "https://api.github.com/users/hyprland-community/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/hyprland-community/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/hyprland-community/hypr-trans",
    description: "Used in Dev mode. Build to see updated real data.",
    fork: false,
    url: "https://api.github.com/repos/hyprland-community/hypr-trans",
    forks_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/forks",
    keys_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/teams",
    hooks_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/hooks",
    issue_events_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/events",
    assignees_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/branches{/branch}",
    tags_url: "https://api.github.com/repos/hyprland-community/hypr-trans/tags",
    blobs_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/languages",
    stargazers_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/stargazers",
    contributors_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/contributors",
    subscribers_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/subscribers",
    subscription_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/subscription",
    commits_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/merges",
    archive_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/downloads",
    issues_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/labels{/name}",
    releases_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/hyprland-community/hypr-trans/deployments",
    created_at: subDays(new Date(), 1),
    updated_at: subSeconds(new Date(), 69),
    pushed_at: "2024-01-28T22:59:27Z",
    git_url: "git://github.com/hyprland-community/hypr-trans.git",
    ssh_url: "git@github.com:hyprland-community/hypr-trans.git",
    clone_url: "https://github.com/hyprland-community/hypr-trans.git",
    svn_url: "https://github.com/hyprland-community/hypr-trans",
    homepage: "",
    size: 21,
    stargazers_count: 9001,
    watchers_count: 1,
    language: "Shell",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
] as unknown as readonly Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"][]
