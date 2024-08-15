import ButtonLink, { ButtonProps } from '@/app/ui/components/Common/ButtonV2'
import ContainerV3, {
  ContainerV3Props
} from '@/app/ui/components/Common/ContainerV3'
import { getText } from '@/utils/app'
import { ImageType } from '@/app/ui/components/Common/ImageV2'
import DynamicImage from '@/app/ui/components/Common/DynamicImage'
import Text, { TextV2Props } from '@/app/ui/components/Common/TextV2'
import css from './MosaicAndText.module.css'

export type MosaicAndTextProps = {
  title: TextV2Props
  description: TextV2Props
  button?: ButtonProps
  list: {
    id: string
    image: ImageType
    alt: string
  }[]
  container?: ContainerV3Props
  isReverse?: boolean
  template?:
    | 'variant1'
    | 'variant2'
    | 'variant3'
    | 'variant4'
    | 'variant5'
    | 'variant6'
    | 'variant7'
}

export type ChildrenGrid = {
  child1?: { gridColumn?: string; gridRow?: string }
  child2?: { gridColumn: string }
  child3?: { gridColumn: string }
}

const getChildrenGrid = (template: string) => {
  let childrenGrid: ChildrenGrid
  switch (template) {
    case 'variant1': {
      childrenGrid = {
        child1: {
          gridColumn: 'span 2',
          gridRow: 'span 2'
        }
      }
      break
    }
    case 'variant2':
    case 'variant5': {
      childrenGrid = {
        child1: {
          gridColumn: 'span 2'
        }
      }
      break
    }
    case 'variant4': {
      childrenGrid = {
        child1: {
          gridColumn: 'span 2'
        },
        child2: {
          gridColumn: 'span 2'
        }
      }
      break
    }
    case 'variant6': {
      childrenGrid = {
        child3: {
          gridColumn: 'span 2'
        }
      }
      break
    }
    case 'variant3':
    case 'variant7':
    default: {
      childrenGrid = {}
      break
    }
  }
  return childrenGrid
}

function MosaicAndText({
  title,
  description,
  button,
  list,
  container,
  isReverse = false,
  template = 'variant7'
}: Readonly<MosaicAndTextProps>) {
  const setGridAreas = () => {
    return isReverse ? '"mosaic text"' : '"text mosaic"'
  }
  const childrenGrid = getChildrenGrid(template)

  return (
    <ContainerV3 bgColor="color4" {...container} {...container?.configuration}>
      <div
        className={css.Container}
        style={
          {
            '--mosaicandtext-grid-areas': setGridAreas()
          } as React.CSSProperties
        }
      >
        <div
          className={css.TextContainer}
          style={
            {
              '--mosaicandtext-justify-self': isReverse ?? 'end'
            } as React.CSSProperties
          }
        >
          {title && <Text {...(title as TextV2Props)}>{getText(title)}</Text>}
          {description && (
            <Text {...(description as TextV2Props)}>
              {getText(description)}
            </Text>
          )}
          {button && <ButtonLink {...button} />}
        </div>
        <div
          className={css.MosaicContainer}
          style={
            {
              '--mosaicandtext-justify-self': isReverse ?? 'end',
              '--mosaicandtext-child1-gridcolumn':
                childrenGrid?.child1?.gridColumn,
              '--mosaicandtext-child2-gridcolumn':
                childrenGrid?.child2?.gridColumn,
              '--mosaicandtext-child3-gridcolumn':
                childrenGrid?.child3?.gridColumn,
              '--mosaicandtext-child1-gridrow': childrenGrid?.child1?.gridRow
            } as React.CSSProperties
          }
        >
          {list?.length > 0 &&
            list
              .slice(0, Math.ceil(Number(template.split('variant')[1]) / 2))
              .map((item) => (
                <DynamicImage key={item.id} classes={css.Image} {...item} />
              ))}
        </div>
      </div>
    </ContainerV3>
  )
}

export default MosaicAndText
