import React, { useState, useEffect } from 'react'
import DynamicSection from 'utils/DynamicComponent'
import { getDealByStageFromClient } from 'utils/activeCampaign/resources'
import Button from 'components/Common/Button'
import * as Style from './styles'
import { useRouter } from 'next/router'

function Search({ data, id, CompName }) {
  const { query } = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [currentStage, setCurrentStage] = useState('')
  const [dataDeals, setDataDeals] = useState<any>({})

  const [globalStageTags, setGlobalStageTags] = useState(new Map())
  let urlSearch
  if (typeof window !== 'undefined') {
    urlSearch = query.search
  }
  useEffect(() => {
    if (urlSearch) {
      setSearchValue(urlSearch)
    }
  }, [urlSearch])
  const {
    query: { idPipeline }
  } = useRouter()
  const filteredData =
    dataDeals.deals && dataDeals.deals.length > 0
      ? dataDeals?.deals?.filter((item) => {
          return item.title.toLowerCase().includes(searchValue.toLowerCase())
        })
      : []
  const contactsData = new Map()
  dataDeals.contacts && dataDeals.contacts.length > 0
    ? dataDeals.contacts.forEach((contact) => {
        contactsData.set(contact.id, contact)
      })
    : []
  const globalTags = new Map()
  dataDeals.tags && dataDeals.tags.length > 0
    ? dataDeals.tags.forEach((tag) => {
        globalTags.set(tag.id, tag.tag)
      })
    : []
  const contactTags = new Map()
  dataDeals.contactTags && dataDeals.contactTags.length > 0
    ? dataDeals.contactTags.forEach((contactTag) => {
        if (contactTags.has(contactTag.contact)) {
          const existingValue = contactTags.get(contactTag.contact)
          if (Array.isArray(existingValue)) {
            contactTags.set(
              contactTag.contact,
              existingValue.concat([globalTags.get(contactTag.tag)])
            )
          }
        } else {
          contactTags.set(contactTag.contact, [globalTags.get(contactTag.tag)])
        }
      })
    : []
  const handleChange = (e) => {
    if (!e) {
      setSearchValue('')
      return
    }
    setSearchValue(e.target.value)
  }

  const tagChange = async (e) => {
    if (!e) {
      return
    }
    displayModal()
    const result = await getDealByStageFromClient(
      idPipeline,
      currentStage,
      e.target.value
    )
    setDataDeals(result)
    hideModal()
  }

  const handleChangeStage = async (idStage) => {
    displayModal()
    const result = await getDealByStageFromClient(idPipeline, idStage)
    setDataDeals(result)
    setCurrentStage(idStage)
    const globalStageTagsRes = new Map()
    result.tags && result.tags.length > 0
      ? result.tags.forEach((tag) => {
          globalStageTagsRes.set(tag.id, tag.tag)
        })
      : []
    setGlobalStageTags(globalStageTagsRes)
    hideModal()
  }
  function searchList() {
    return DynamicSection({
      name: CompName,
      configuration: {
        handleChange,
        searchValue,
        tagChange
      },
      content: {
        id,
        deals: filteredData,
        contacts: contactsData,
        tags: contactTags,
        globalTags: globalStageTags
      }
    })
  }

  const displayModal = async () => {
    const element = Array.from(
      document.getElementsByClassName(
        'ACModal__Wrapper'
      ) as HTMLCollectionOf<HTMLElement>
    )
    if (element && element.length) element[0].style.display = 'flex'
  }
  const hideModal = async () => {
    const element = Array.from(
      document.getElementsByClassName(
        'ACModal__Wrapper'
      ) as HTMLCollectionOf<HTMLElement>
    )
    if (element && element.length) element[0].style.display = 'none'
  }
  return (
    <>
      {data && (
        <Style.TagContainer>
          {data.map((item, index) => (
            <Button
              key={index}
              as="a"
              variant="tag2"
              size="small"
              onClick={() => handleChangeStage(item.id)}
            >
              {item.title}
            </Button>
          ))}
        </Style.TagContainer>
      )}
      <section>{searchList()}</section>
    </>
  )
}

export default Search
