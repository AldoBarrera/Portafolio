export function getAllOpenPositions(jobs: any) {
  const departmentExcluded = 'Bootcamp'
  const openPositionList = []
  const uniqueDepartments = []
  if (jobs != null && jobs.length > 0) {
    jobs.forEach((job) => {
      if (job.department_hierarchy.length > 0) {
        if (
          job.department_hierarchy[0].name.toLowerCase() !==
          departmentExcluded.toLowerCase()
        ) {
          openPositionList.push(job)
          if (!uniqueDepartments.includes(job.department)) {
            uniqueDepartments.push(job.department)
          }
        }
      }
    })
  }
  return { openPositionList, uniqueDepartments }
}

export function getJobsFormated(jobs: any, openPosition) {
  const content = []
  if (jobs != null && jobs.length > 0) {
    jobs.forEach((job) => {
      if (job.department.toLowerCase() === openPosition.toLowerCase()) {
        const jobContent = {
          title: job.title,
          button: {
            label: 'Apply',
            url: job.shortlink
          },
          description: 'Requirements',
          list: job.requirements
        }
        content.push(jobContent)
      }
    })
  }
  const jobFormat = {
    title: openPosition,
    iconEnable: '/img/OpenPositionsLayout/open-position-tabs-1.png',
    iconDisable: '/img/OpenPositionsLayout/open-position-tabs-0.png',
    content: content
  }
  return jobFormat
}

export function getJobsFormat(jobs: any, departments: any) {
  const jobsFormat = []
  departments.forEach((department) => {
    const jobFormat = getJobsFormated(jobs, department)
    jobsFormat.push(jobFormat)
  })
  return jobsFormat
}
