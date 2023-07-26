import React, { useState } from 'react'
import * as Style from './styles'
import Tabs, { TabPane } from 'rc-tabs'
import Text from 'components/Common/Text'
import Button from 'components/Common/Button'
import {
  getCustomFieldsByIdContactFromClient,
  getSearchTagsFromClient
} from 'utils/activeCampaign/resources'
import Grid from 'components/Common/Grid'
import Select from 'components/Common/Form/SelectNew'
import { InputHTMLAttributes } from 'react'
import Link from 'next/link'

export type DealsProps = {
  title: string
  contact: string
}

export type VerticalPositionTabsProps = {
  deals: DealsProps[]
  contacts: any
  tags: any
  globalTags: any
  handleChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void
  tagChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void
  searchValue?: string
}

type ValidationProps = {
  name?: string
  email?: string
  workEmail?: string
  phoneNumber?: string
  company?: string
}

export type InputProps = {
  error?: string
  validation?: ValidationProps
} & InputHTMLAttributes<HTMLInputElement>

function VerticalPositionTabs({
  deals,
  contacts,
  tags,
  globalTags,
  handleChange,
  tagChange,
  searchValue
}: VerticalPositionTabsProps) {
  const [customFields, setCustomFields] = useState({})
  const [inputTag, setInputTag] = useState('')
  const [displayinputTag, setDisplayinputTag] = useState(false)
  const [searchTags, setSearchTags] = useState([])

  const handleInputTag = async (contact: string) => {
    setInputTag(contact)
    const searchTagsResult = await getSearchTagsFromClient(contact)
    setSearchTags(searchTagsResult)
  }

  const handleExistNewTag = async () => {
    setSearchTags([])
    setInputTag('')
    console.log('insert exist tag')
    setDisplayinputTag(false)
  }

  const handleContactDetails = async (contact: string) => {
    const customFields = await getCustomFieldsByIdContactFromClient(contact)
    const fields = {}
    customFields.map((item) => {
      if (item.field === '15') {
        fields['interest'] = `Interest: ${item.value}`
      }
      if (item.field === '14') {
        fields['country'] = `Country: ${item.value}`
      }
      if (item.field === '16') {
        fields['prevUrl'] = `Previus Url: ${item.value}`
      }
      if (item.field === '20') {
        fields['dateOfBirth'] = `Date Of Birth: ${item.value}`
      }
      if (item.field === '6') {
        fields['message'] = `Message: ${item.value}`
      }
      if (item.field === '29') {
        fields['availability'] = `Availability: ${item.value}`
      }
      if (item.field === '19') {
        fields['academicYear'] = `Academic Year: ${item.value}`
      }
      if (item.field === '18') {
        fields['dataUsage'] = `Data Usage: ${item.value}`
      }
      if (item.field === '21') {
        fields['state'] = `State: ${item.value}`
      }
      if (item.field === '22') {
        fields['id'] = `Id: ${item.value}`
      }
      if (item.field === '36') {
        fields['referred'] = `Referred: ${item.value}`
      }
      if (item.field === '32') {
        fields['referredProviderName'] = `Referred Provider Name: ${item.value}`
      }
      if (item.field === '35') {
        fields[
          'referredProviderLastName'
        ] = `Referred Provider Last Name: ${item.value}`
      }
      if (item.field === '33') {
        fields['referredProviderId'] = `Referred Provider Id: ${item.value}`
      }
      if (item.field === '37') {
        fields['referredProviderRole'] = `Referred Provider Role: ${item.value}`
      }
    })
    setCustomFields(fields)
  }

  const hasResult = deals.length > 0
  const arr = Array.from(globalTags, function (entry) {
    return { key: entry[0], value: entry[1] }
  })

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const searchTagsResult = await getSearchTagsFromClient(inputTag)
      if (searchTagsResult.length > 0) {
        console.log('create new tag ' + searchTagsResult[0].id)
      } else {
        console.log('create new tag ' + inputTag)
      }
      setSearchTags([])
      setInputTag('')
      setDisplayinputTag(false)
    }
  }
  return (
    <Style.VerticalPositionTabsWrapper>
      <Grid gap={'0'} columns={12} columnMinSizes={30}>
        <Grid.Column size={5} className="search-input">
          <Style.SearchInputWrapper>
            <Select
              id="interest"
              name="interest"
              defaultOption="Select your tag"
              options={arr}
              onChange={(e) => {
                if (tagChange) tagChange(e)
              }}
            />
          </Style.SearchInputWrapper>
          <Style.SearchInputWrapper>
            <Style.SearchInput
              type="text"
              placeholder="Search for your dream job"
              value={searchValue}
              onChange={(e) => {
                if (handleChange) handleChange(e)
              }}
            />
            {!searchValue ? (
              <Style.IconInputSearch />
            ) : (
              <Style.IconInputSearchClose
                onClick={() => {
                  if (handleChange) handleChange()
                }}
              />
            )}
          </Style.SearchInputWrapper>
        </Grid.Column>
        <Grid.Column size={7}>
          <div className={hasResult ? 'empty-box' : 'empty-box-white'}></div>
        </Grid.Column>
      </Grid>
      <Tabs tabPosition="left">
        <TabPane
          id="tabsLeft2"
          tab={
            <Style.ResultText>
              {searchValue ? (
                <Text color="gray5" fontFamily="nunito" fontSize="1.6rem">
                  Total results: {hasResult ? deals.length : 0}
                </Text>
              ) : (
                <div className="empty-space"> </div>
              )}
            </Style.ResultText>
          }
          disabled
        />
        {deals?.map((deal, index) => (
          <TabPane
            tab={
              hasResult ? (
                <Style.VerticalTabHeader
                  onClick={() => handleContactDetails(deal.contact)}
                >
                  <Style.VerticalTabIcon />
                  <Style.VerticalTabHeadersWrapper>
                    <Text type="h5">{deal.title}</Text>
                    <Text type="p">
                      phone:{contacts.get(deal.contact)?.phone}
                    </Text>
                    {tags && (
                      <Style.TagContainer>
                        {tags.get(deal.contact)?.map((item, index) => (
                          <Button
                            key={index}
                            as="a"
                            variant="tag2"
                            size="small"
                          >
                            {item}
                          </Button>
                        ))}
                      </Style.TagContainer>
                    )}
                  </Style.VerticalTabHeadersWrapper>
                  <Style.Arrow />
                </Style.VerticalTabHeader>
              ) : (
                <></>
              )
            }
            key={index}
          >
            <Style.VerticalTabContent>
              <Style.VerticalTabItems>
                <Style.VerticalTabInformation>
                  <Text type="h1">
                    {contacts.get(deal.contact)?.firstName}{' '}
                    {contacts.get(deal.contact)?.lastName}
                  </Text>
                  <Text type="p">
                    {contacts.get(deal.contact)?.email}
                    <Link
                      href={`https://jalasoft24288.activehosted.com/app/contacts/${
                        contacts.get(deal.contact)?.id
                      }`}
                      passHref
                    >
                      <a target="_blank">
                        <Text type="p">Ver Contacto</Text>
                      </a>
                    </Link>
                  </Text>
                  <Text type="p">
                    Phone: {contacts.get(deal.contact)?.phone}
                  </Text>
                  <Style.TagContainer>
                    {tags.get(deal.contact)?.map((item, index) => (
                      <Button key={index} as="a" variant="tag2" size="small">
                        {item}
                      </Button>
                    ))}
                    {displayinputTag ? (
                      <Style.AddNewTag>
                        <Style.Input
                          type={'text'}
                          name={'newTag'}
                          placeholder={'Add new tag'}
                          value={inputTag}
                          onChange={(event) => {
                            handleInputTag(event.target.value)
                          }}
                          onKeyPress={handleKeyPress}
                        />
                        <Style.Listbox>
                          {searchTags.map((item, index) => (
                            <Style.ListItem
                              key={index}
                              onClick={() => handleExistNewTag()}
                            >
                              {item.tag}
                            </Style.ListItem>
                          ))}
                        </Style.Listbox>
                      </Style.AddNewTag>
                    ) : (
                      <Button
                        key={index}
                        as="a"
                        variant="tag2"
                        size="small"
                        onClick={() => setDisplayinputTag(true)}
                      >
                        Add new tag +
                      </Button>
                    )}
                  </Style.TagContainer>
                  <Text type="h3">Custom Fields</Text>
                  {Object.values(customFields).map((value, index) => (
                    <Text key={index} type="p">
                      {value}
                    </Text>
                  ))}
                </Style.VerticalTabInformation>
              </Style.VerticalTabItems>
            </Style.VerticalTabContent>
          </TabPane>
        ))}
      </Tabs>
    </Style.VerticalPositionTabsWrapper>
  )
}

export default VerticalPositionTabs
