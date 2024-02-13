import { JsonResponse } from "#lib/helper"
import { Octokit } from "octokit"
import type { Endpoints } from "@octokit/types"
import { placeholderData } from "./projectsPlaceholder"
import { subDays } from "date-fns"

export async function GET() {
  return new JsonResponse(await getCommunityRepos())
}
const octokit = new Octokit({})

type CommunityRepo = {
  name: string
  description: string | undefined
  maintainers: string[]
  url: string
  stars: number
  language: string | undefined
  stargazerUrl: string
  createdAt: string
  isNew: boolean
}

const unwantedRepos = [".github", "hyprweb-old", "community", "submissions"]

export async function getCommunityRepos(): Promise<readonly CommunityRepo[]> {
  // dont ask me why Prettier wants this new line down there
  const responseData: readonly Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"][] =

      import.meta.env.DEV ?
        placeholderData
      : await octokit
          .request(
            "get /orgs/{org}/repos{?type,sort,direction,per_page,page}",
            {
              org: "hyprland-community",
            },
          )
          .then(({ data }) => data)

  return responseData
    .filter(({ name }) => !unwantedRepos.includes(name))
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
      language: repo.language ?? undefined,
      description:
        repo.description?.replace(/\[maintainers?=.*\]/, "") ?? undefined,
      maintainers: getMaintainterFromRepoDescription(repo.description ?? ""),
      url: repo.html_url,
      stargazerUrl: repo.stargazers_url,
      createdAt: repo.created_at,
      isNew:
        new Date(repo.created_at).getTime() > subDays(new Date(), 24).getTime(),
    }))
    .sort((a, b) =>
      b.isNew ? 1
      : a.isNew ? -1
      : b.stars - a.stars,
    )
}

function getMaintainterFromRepoDescription(description: string): string[] {
  const regex = /(?<=\[maintainers?=)(.*)(?=\]$)/

  return (
    description.trim().match(regex)?.[0]?.replaceAll("@", "").split(",") ?? []
  )
}

function getPlaceholderData(): readonly Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"][] {
  return [
    {
      name: "PLACEHOLDER DEV DATA!",
      stars: 9999,
      language: undefined,
      description: "Will fetch the actual data during build",
      maintainers: ["yavko"],
      url: "https://github.com/hyprland-community/awesome-hyprland",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/awesome-hyprland/stargazers",
      updatedAt: new Date().toISOString(),
    },
    {
      name: "awesome-hyprland",
      stars: 1413,
      language: undefined,
      description: "Awesome list for Hyprland ",
      maintainers: ["yavko"],
      url: "https://github.com/hyprland-community/awesome-hyprland",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/awesome-hyprland/stargazers",
      updatedAt: new Date().toISOString(),
    },
    {
      name: "hyprland-rs",
      stars: 157,
      language: "Rust",
      description: "An unofficial rust wrapper for hyprland's IPC ",
      maintainers: ["yavko", "cyrinux"],
      url: "https://github.com/hyprland-community/hyprland-rs",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprland-rs/stargazers",
      updatedAt: "2024-02-10T15:02:15Z",
    },
    {
      name: "hyprland-autoname-workspaces",
      stars: 144,
      language: "Rust",
      description: "Hyprland autoname workspaces 🪟  ",
      maintainers: ["cyrinux", "maximbaz"],
      url: "https://github.com/hyprland-community/hyprland-autoname-workspaces",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprland-autoname-workspaces/stargazers",
      updatedAt: "2024-02-08T18:06:09Z",
    },
    {
      name: "pyprland",
      stars: 119,
      language: "Python",
      description: "Hyprland extensions made easy ",
      maintainers: ["fdev31"],
      url: "https://github.com/hyprland-community/pyprland",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/pyprland/stargazers",
      updatedAt: "2024-02-11T18:57:44Z",
    },
    {
      name: "Hyprkeys",
      stars: 88,
      language: "Go",
      description:
        "A simple, scriptable keybind retrieval utility for Hyprland  ",
      maintainers: ["NotAShelf"],
      url: "https://github.com/hyprland-community/Hyprkeys",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/Hyprkeys/stargazers",
      updatedAt: "2024-02-08T23:06:43Z",
    },
    {
      name: "theme-repo",
      stars: 56,
      language: "Python",
      description: "a place to share your themes",
      maintainers: [],
      url: "https://github.com/hyprland-community/theme-repo",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/theme-repo/stargazers",
      updatedAt: "2024-02-11T05:14:34Z",
    },
    {
      name: "hyprset",
      stars: 41,
      language: "Python",
      description: "a gui hyprland configurator ",
      maintainers: ["flick0"],
      url: "https://github.com/hyprland-community/hyprset",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprset/stargazers",
      updatedAt: "2024-02-11T15:24:40Z",
    },
    {
      name: "hyprland-py",
      stars: 34,
      language: "Python",
      description: "An unoffical async python wrapper for hyprland's IPC ",
      maintainers: ["flick0"],
      url: "https://github.com/hyprland-community/hyprland-py",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprland-py/stargazers",
      updatedAt: "2024-01-25T20:21:26Z",
    },
    {
      name: "hyprtheme",
      stars: 32,
      language: "Rust",
      description: "a cli util to apply themes to hyprland ",
      maintainers: ["flick0"],
      url: "https://github.com/hyprland-community/hyprtheme",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprtheme/stargazers",
      updatedAt: "2024-02-01T10:09:59Z",
    },
    {
      name: "hypract",
      stars: 19,
      language: "Rust",
      description: "KDE activities for hyprland ",
      maintainers: ["yavko"],
      url: "https://github.com/hyprland-community/hypract",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hypract/stargazers",
      updatedAt: "2024-01-27T16:42:01Z",
    },
    {
      name: "hyprparse",
      stars: 18,
      language: "Rust",
      description: "Hyprland/Hyprpaper/Hypr configuration file parser ",
      maintainers: ["yavko"],
      url: "https://github.com/hyprland-community/hyprparse",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprparse/stargazers",
      updatedAt: "2024-01-31T09:43:47Z",
    },
    {
      name: "hyprland-plugin-template",
      stars: 12,
      language: "C++",
      description: 'A "convenient" Hyprland plugin template',
      maintainers: [],
      url: "https://github.com/hyprland-community/hyprland-plugin-template",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprland-plugin-template/stargazers",
      updatedAt: "2024-01-14T12:09:07Z",
    },
    {
      name: "hpr-scratcher",
      stars: 12,
      language: "Python",
      description: "Scratchpad management for Hyprland ",
      maintainers: ["fdev31"],
      url: "https://github.com/hyprland-community/hpr-scratcher",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hpr-scratcher/stargazers",
      updatedAt: "2023-12-05T20:05:33Z",
    },
    {
      name: "hyprland-nix",
      stars: 12,
      language: "Nix",
      description: undefined,
      maintainers: [],
      url: "https://github.com/hyprland-community/hyprland-nix",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprland-nix/stargazers",
      updatedAt: "2024-02-05T21:09:54Z",
    },
    {
      name: "hyprland.c",
      stars: 3,
      language: "C",
      description:
        "Very basic Hyprland IPC bindings, (use hyprland-rs for serious stuff) ",
      maintainers: ["yavko"],
      url: "https://github.com/hyprland-community/hyprland.c",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprland.c/stargazers",
      updatedAt: "2023-04-18T14:43:11Z",
    },
    {
      name: "hyprweb",
      stars: 2,
      language: "Astro",
      description: "Hyprland community website v2 [WIP] ",
      maintainers: ["Visual-Dawg"],
      url: "https://github.com/hyprland-community/hyprweb",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprweb/stargazers",
      updatedAt: "2024-01-27T19:28:51Z",
    },
    {
      name: "Fylgja",
      stars: 1,
      language: "Rust",
      description:
        "My personal swiss army knife for multi-language project development and system management, written in Rust. ",
      maintainers: ["NotAShelf"],
      url: "https://github.com/hyprland-community/Fylgja",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/Fylgja/stargazers",
      updatedAt: "2023-07-11T11:00:57Z",
    },
    {
      name: "hyprcombot",
      stars: 1,
      language: "Python",
      description: undefined,
      maintainers: [],
      url: "https://github.com/hyprland-community/hyprcombot",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hyprcombot/stargazers",
      updatedAt: "2023-04-15T06:14:26Z",
    },
    {
      name: "hypr-trans",
      stars: 1,
      language: "Shell",
      description:
        "hypr-trans is a tiny bash utility that sets alpha attribute of an Hyprland window",
      maintainers: [],
      url: "https://github.com/hyprland-community/hypr-trans",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/hypr-trans/stargazers",
      updatedAt: "2024-01-28T22:54:06Z",
    },
    {
      name: "submissions",
      stars: 0,
      language: undefined,
      description: "Place to request repos on this org",
      maintainers: [],
      url: "https://github.com/hyprland-community/submissions",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/submissions/stargazers",
      updatedAt: "2023-07-01T01:49:28Z",
    },
    {
      name: "community",
      stars: 0,
      language: undefined,
      description: "Discussions repo, and maybe more in the future!",
      maintainers: [],
      url: "https://github.com/hyprland-community/community",
      stargazerUrl:
        "https://api.github.com/repos/hyprland-community/community/stargazers",
      updatedAt: "2023-02-11T05:17:15Z",
    },
  ]
}
