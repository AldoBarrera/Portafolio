import Button, { ButtonProps } from '@/app/ui/components/Common/ButtonV2'
import Container, {
  ContainerV3Props
} from '@/app/ui/components/Common/ContainerV3'
import Image, { ImageProps } from '@/app/ui/components/Common/ImageV2'
import FooterItem, {
  FooterItemProps
} from '@/app/ui/components/Common/Footer/FooterItem'
import NavItem from '@/app/ui/components/Common/Footer/NavItem'
import Text, { TextV2Props } from '@/app/ui/components/Common/TextV2'
import { getText } from '@/utils/app'
import theme from '@/styles/themeV2'
import css from './Footer.module.css'

type FooterProps = {
  navItems?: FooterItemProps[]
  copyright?: TextV2Props
  links?: ButtonProps[]
  socialMedia?: ButtonProps[]
  container?: ContainerV3Props
  logo?: ImageProps
  secondaryLogo?: ImageProps
}

function Footer({
  navItems,
  copyright,
  links,
  socialMedia,
  container,
  logo,
  secondaryLogo
}: Readonly<FooterProps>) {
  return (
    <Container
      bgColor="black"
      flex={{
        flexDirection: 'row',
        gap: theme.grid.gap6
      }}
      flexMobile={{
        flexDirection: 'column',
        gap: theme.grid.gap3
      }}
      {...container}
      {...container?.configuration}
    >
      <div className={css.Logo}>
        <div>
          <Image
            image={logo?.image ?? {}}
            width={logo?.width ?? 168}
            height={logo?.height ?? 60}
            mobileConfig={{
              image: logo?.mobileConfig?.image,
              width: logo?.mobileConfig?.width ?? 128,
              height: logo?.mobileConfig?.height ?? 40
            }}
          />
          <Text type="p" classType="footerlink" color="white">
            Powered by Jala
          </Text>
        </div>
        <Image
          image={secondaryLogo?.image ?? {}}
          width={secondaryLogo?.width ?? 72}
          height={secondaryLogo?.height ?? 30}
          mobileConfig={{
            image: secondaryLogo?.mobileConfig?.image,
            width: secondaryLogo?.mobileConfig?.width ?? 52,
            height: secondaryLogo?.mobileConfig?.height ?? 20
          }}
        />
      </div>
      <ul className={css.Content__Mobile}>
        {navItems?.map((item, key) => {
          return key !== navItems?.length - 1 ? (
            <NavItem key={key} {...item} />
          ) : (
            <div className={css.ContactButton} key={key}>
              <Button
                {...item?.item}
                size={item?.item?.size ?? 'large'}
                variant={item?.item?.variant ?? 'primary'}
              >
                {getText(item?.item?.label)}
              </Button>
            </div>
          )
        })}
      </ul>
      <ul className={css.Content__Desktop}>
        {navItems?.map((item, key) => {
          return key !== navItems?.length - 1 ? (
            <FooterItem key={key} {...item} />
          ) : (
            <div className={css.ContactButton} key={key}>
              <Button
                {...item?.item}
                size={item?.item?.size ?? 'large'}
                variant={item?.item?.variant ?? 'primary'}
              >
                {getText(item?.item?.label)}
              </Button>
            </div>
          )
        })}
      </ul>
      <div className={css.Information}>
        <Text type="p" {...copyright}>
          {getText(copyright ?? '')}
        </Text>
        <div className={css.Links}>
          {links?.map((link, key) => (
            <Button
              key={key}
              {...link}
              size={link?.size ?? 'link'}
              variant={link?.variant ?? 'link'}
            >
              {getText(link.label)}
            </Button>
          ))}
        </div>
        <div className={css.Links}>
          {socialMedia?.map((link, key) => (
            <Button
              key={key}
              {...link}
              size={link?.size ?? 'link'}
              variant={link?.variant ?? 'link'}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Footer
