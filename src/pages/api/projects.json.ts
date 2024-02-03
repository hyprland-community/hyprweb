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
}

const unwantedRepos = [".github", "hyprweb-old"]

export async function getCommunityRepos() {
  const data: readonly CommunityRepo[] = await octokit
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
          description:
            repo.description?.replace(/\[maintainers?=.*\]/, "") ?? undefined,
          maintainers: getMaintainterFromRepoDescription(
            repo.description ?? "",
          ),
          url: repo.url,
        })),
    )

  return data
}

function getMaintainterFromRepoDescription(description: string): string[] {
  const regex = /(?<=\[maintainers?=)(.*)(?=\]$)/

  return (
    description.trim().match(regex)?.[0]?.replaceAll("@", "").split(",") ?? []
  )
}
