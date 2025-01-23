<script setup lang="ts">
const router = useRouter()
const handleClickMenu = () => {
  router.push(`/menus`)
}
</script>

<template>
  <div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    style='font-family: "Noto Serif", "Noto Sans", sans-serif;'>
    <div class="layout-container flex h-full grow flex-col">
      <header
        class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f2f0] px-10 py-3">
        <div class="flex items-center gap-4 text-[#181511]">
          <div class="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"></path>
            </svg>
          </div>
          <h2 class="text-[#181511] text-lg font-bold leading-tight tracking-[-0.015em]">Web3 Innovation Competition
          </h2>
        </div>
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e68a19] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em]">
          <span class="truncate">Register</span>
        </button>
      </header>
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="@container">
            <div class="@[480px]:p-4">
              <div
                class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/4f65fefc-4be1-45c3-b1f3-c65678e05b5e.png");'>
                <div class="flex flex-col gap-2 text-center">
                  <h1
                    class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    The Web3 Innovation Competition
                  </h1>
                  <h2
                    class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    A showcase for the most innovative, impactful, and inspiring Web3 projects
                  </h2>
                </div>
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e68a19] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span class="truncate">Register</span>
                </button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            <div class="flex flex-col items-center gap-1 pt-5">
              <div class="size-2 rounded-full bg-[#181511]"></div>
              <div class="w-[1.5px] bg-[#e5e1dc] h-4 grow"></div>
            </div>
            <div class="flex flex-1 flex-col pt-3 pb-5">
              <p class="text-[#181511] text-base font-medium leading-normal">Competition launch</p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-[#e5e1dc] h-4"></div>
              <div class="size-2 rounded-full bg-[#181511]"></div>
              <div class="w-[1.5px] bg-[#e5e1dc] h-4 grow"></div>
            </div>
            <div class="flex flex-1 flex-col pt-3 pb-5">
              <p class="text-[#181511] text-base font-medium leading-normal">Submission deadline</p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-[#e5e1dc] h-4"></div>
              <div class="size-2 rounded-full bg-[#181511]"></div>
              <div class="w-[1.5px] bg-[#e5e1dc] h-4 grow"></div>
            </div>
            <div class="flex flex-1 flex-col pt-3 pb-5">
              <p class="text-[#181511] text-base font-medium leading-normal">Judging period</p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-[#e5e1dc] h-4"></div>
              <div class="size-2 rounded-full bg-[#181511]"></div>
              <div class="w-[1.5px] bg-[#e5e1dc] h-4 grow"></div>
            </div>
            <div class="flex flex-1 flex-col pt-3 pb-5">
              <p class="text-[#181511] text-base font-medium leading-normal">Finalists announced</p>
            </div>
            <div class="flex flex-col items-center gap-1 pb-3">
              <div class="w-[1.5px] bg-[#e5e1dc] h-4"></div>
              <div class="size-2 rounded-full bg-[#181511]"></div>
            </div>
            <div class="flex flex-1 flex-col pt-3 pb-5">
              <p class="text-[#181511] text-base font-medium leading-normal">Winners announced</p>
            </div>
          </div>
          <h2 class="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What is the
            Web3 Innovation Competition?</h2>
          <p class="text-[#181511] text-base font-normal leading-normal pb-3 pt-1 px-4">
            The Web3 Innovation Competition is a global showcase for the most innovative, impactful, and inspiring Web3
            projects. It is an opportunity to demonstrate your
            creativity, technical skills, and vision for the future of the internet.
          </p>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div class="flex flex-col gap-3 pb-3">
              <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                style='background-image: url("https://cdn.usegalileo.ai/stability/66f89d92-777a-41f2-af19-2509f4c87248.png");'>
              </div>
              <div>
                <p class="text-[#181511] text-base font-medium leading-normal">Who Should Participate?</p>
                <p class="text-[#887763] text-sm font-normal leading-normal">
                  Developers, designers, product managers, artists, entrepreneurs, and anyone who wants to build a
                  better internet.
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-3 pb-3">
              <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                style='background-image: url("https://cdn.usegalileo.ai/stability/5da73f40-9d85-49f3-b1b6-cbb6f2ee46b6.png");'>
              </div>
              <div>
                <p class="text-[#181511] text-base font-medium leading-normal">Why Participate?</p>
                <p class="text-[#887763] text-sm font-normal leading-normal">
                  Showcase your work to an audience of millions, gain recognition from industry leaders, and compete for
                  a share of $2M USD in prizes.
                </p>
              </div>
            </div>
          </div>
          <div class="@container">
            <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
              <div class="flex flex-col gap-2 text-center">
                <h1
                  class="text-[#181511] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Ready to participate?
                </h1>
                <p class="text-[#181511] text-base font-normal leading-normal max-w-[720px">Registration is open now
                  through August 31</p>
              </div>
              <div class="flex flex-1 justify-center">
                <div class="flex justify-center">
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e68a19] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                    <span class="truncate">Register</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 class="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Prizes</h2>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
            <div class="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#e5e1dc] bg-white p-6">
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <h1 class="text-[#181511] text-base font-bold leading-tight">Grand Prize</h1>
                  <p
                    class="text-[#181511] text-xs font-medium leading-normal tracking-[0.015em] rounded-lg bg-[#e68a19] px-3 py-[3px] text-center">
                    Grand Prize</p>
                </div>
                <p class="flex items-baseline gap-1 text-[#181511]">
                  <span class="text-[#181511] text-4xl font-black leading-tight tracking-[-0.033em]">$1,000,000</span>
                  <span class="text-[#181511] text-base font-bold leading-tight">USD</span>
                </p>
              </div>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4f2f0] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Learn More</span>
              </button>
              <div class="flex flex-col gap-2">
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  Recognition as a Web3 Innovation Competition Grand Prize Winner
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  Invitation to present your project at a high-profile event
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  Promotion to a global audience of millions
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  An exclusive Web3 Innovation Competition trophy
                </div>
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#e5e1dc] bg-white p-6">
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <h1 class="text-[#181511] text-base font-bold leading-tight">Runner Up</h1>
                  <p
                    class="text-[#181511] text-xs font-medium leading-normal tracking-[0.015em] rounded-lg bg-[#e68a19] px-3 py-[3px] text-center">
                    Runner Up</p>
                </div>
                <p class="flex items-baseline gap-1 text-[#181511]">
                  <span class="text-[#181511] text-4xl font-black leading-tight tracking-[-0.033em]">$500,000</span>
                  <span class="text-[#181511] text-base font-bold leading-tight">USD</span>
                </p>
              </div>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4f2f0] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Learn More</span>
              </button>
              <div class="flex flex-col gap-2">
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  Recognition as a Web3 Innovation Competition Runner-Up
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  Invitation to present your project at a high-profile event
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  Promotion to a global audience of millions
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  An exclusive Web3 Innovation Competition trophy
                </div>
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#e5e1dc] bg-white p-6">
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <h1 class="text-[#181511] text-base font-bold leading-tight">Honorable Mention</h1>
                  <p
                    class="text-[#181511] text-xs font-medium leading-normal tracking-[0.015em] rounded-lg bg-[#e68a19] px-3 py-[3px] text-center">
                    Honorable Mention</p>
                </div>
                <p class="flex items-baseline gap-1 text-[#181511]">
                  <span class="text-[#181511] text-4xl font-black leading-tight tracking-[-0.033em]">$250,000</span>
                  <span class="text-[#181511] text-base font-bold leading-tight">USD</span>
                </p>
              </div>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4f2f0] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Learn More</span>
              </button>
              <div class="flex flex-col gap-2">
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  Recognition as a Web3 Innovation Competition Honorable Mention
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  Promotion to a global audience of millions
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#181511]">
                  <div class="text-[#181511]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                      viewBox="0 0 256 256">
                      <path
                        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z">
                      </path>
                    </svg>
                  </div>
                  An exclusive Web3 Innovation Competition trophy
                </div>
              </div>
            </div>
          </div>
          <h2 class="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Submission
            guidelines</h2>
          <p class="text-[#181511] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Your submission should include a written description of your project, along with any relevant media, code,
            or other materials that help explain your vision. In
            addition to the written description, you may also choose to submit a short video (up to 3 minutes) that
            demonstrates your project in action.
          </p>
          <div class="flex items-center gap-4 bg-white px-4 min-h-14">
            <p class="text-[#181511] text-base font-normal leading-normal flex-1 truncate">
              Submissions must be your original work. You may not submit any content that you did not create.
            </p>
          </div>
          <div class="flex items-center gap-4 bg-white px-4 min-h-14">
            <p class="text-[#181511] text-base font-normal leading-normal flex-1 truncate">Submissions must be related
              to the theme of the competition: Web3 innovation.</p>
          </div>
          <div class="flex items-center gap-4 bg-white px-4 min-h-14">
            <p class="text-[#181511] text-base font-normal leading-normal flex-1 truncate">Submissions must be submitted
              by the submission deadline: September 30, 2022.</p>
          </div>
          <div class="flex items-center gap-4 bg-white px-4 min-h-14">
            <p class="text-[#181511] text-base font-normal leading-normal flex-1 truncate">Submissions must comply with
              all applicable laws and regulations.</p>
          </div>
          <h2 class="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How to
            submit</h2>
          <p class="text-[#181511] text-base font-normal leading-normal pb-3 pt-1 px-4">To submit your project to the
            Web3 Innovation Competition, please follow these steps:</p>
          <div class="flex gap-4 bg-white px-4 py-3">
            <div class="flex flex-1 flex-col justify-center">
              <p class="text-[#181511] text-base font-medium leading-normal">
                Step 1: Write a description of your project. Your description should be between 500 and 1,000 words and
                should include the following information:
              </p>
              <p class="text-[#887763] text-sm font-normal leading-normal">
                A brief summary of your project, A detailed explanation of how your project works, including any
                relevant technical details, An explanation of what makes your
                project innovative, impactful, or inspiring, A description of any challenges you faced during the
                development process and how you overcame them, Any additional
                information that you think is important for the judges to know
              </p>
            </div>
          </div>
          <div class="flex gap-4 bg-white px-4 py-3">
            <div class="flex flex-1 flex-col justify-center">
              <p class="text-[#181511] text-base font-medium leading-normal">
                Step 2: Gather any relevant media, code, or other materials that help explain your project. This may
                include:
              </p>
              <p class="text-[#887763] text-sm font-normal leading-normal">
                Images, diagrams, or other visual aids, Code snippets, links to code repositories, or other technical
                documentation, Video demonstrations (optional, up to 3
                minutes in length), Any other materials that you think are relevant to your submission
              </p>
            </div>
          </div>
          <div class="flex gap-4 bg-white px-4 py-3">
            <div class="flex flex-1 flex-col justify-center">
              <p class="text-[#181511] text-base font-medium leading-normal">
                Step 3: Submit your project by the submission deadline. To submit your project, please visit the Web3
                Innovation Competition website and follow the instructions
                on the submission page. If you have any questions about the submission process, please contact the
                competition organizers at submit@web3innovation.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
