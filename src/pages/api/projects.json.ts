import { JsonResponse } from "#lib/helper"
import { Octokit } from "octokit"
import { A } from "@mobily/ts-belt"
import type { Endpoints } from "@octokit/types"

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
}

const unwantedRepos = [".github", "hyprweb-old"]

export async function getCommunityRepos(): Promise<readonly CommunityRepo[]> {
  return octokit
    .request("get /orgs/{org}/repos{?type,sort,direction,per_page,page}", {
      org: "hyprland-community",
    })
    .then(({ data }) =>
      (
        data as readonly Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"][]
      )
        .filter(({ name }) => !unwantedRepos.includes(name))
        .map((repo) => ({
          name: repo.name,
          stars: repo.stargazers_count,
          language: repo.language ?? undefined,
          description:
            repo.description?.replace(/\[maintainers?=.*\]/, "") ?? undefined,
          maintainers: getMaintainterFromRepoDescription(
            repo.description ?? "",
          ),
          url: repo.html_url,
          stargazerUrl: repo.stargazers_url,
        }))
        .sort((a, b) => b.stars - a.stars),
    )
}

function getMaintainterFromRepoDescription(description: string): string[] {
  const regex = /(?<=\[maintainers?=)(.*)(?=\]$)/

  return (
    description.trim().match(regex)?.[0]?.replaceAll("@", "").split(",") ?? []
  )
}
