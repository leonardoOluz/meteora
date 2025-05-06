import Section from '@/components/Section'
import Typography from '@/components/Typography'
import { thema } from '@/styles/thema'

const Promocoes = () => {
  return (
    <Section classNameSection='secao-promocoes'>
      <Typography
        elementoHtml="h2"
        classNameTypograph="basicHeadingH3"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Confira nossas promoções
      </Typography>
    </Section>
  )
}

export default Promocoes