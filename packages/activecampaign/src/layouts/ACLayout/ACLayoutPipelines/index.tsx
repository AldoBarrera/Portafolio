import * as Style from './styles'
import Link from 'next/link'
import Button from 'components/Common/Button'
import SiteLayout from 'layouts/SiteLayout'

function ACLayoutPipelines({ pipelines }) {
  return (
    <SiteLayout>
      <Style.ACPipelinesWrapper>
        {pipelines?.dealGroups?.map((pipeline, index) => (
          <Link key={index} href={`/ac-pipelines/${pipeline.id}`} passHref>
            <Button
              as="a"
              textContent={pipeline.title}
              textProperties={{
                fontFamily: 'Nunito',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                color: 'black'
              }}
              variant="isBasic"
              size="small"
            />
          </Link>
        ))}
      </Style.ACPipelinesWrapper>
    </SiteLayout>
  )
}

export default ACLayoutPipelines
