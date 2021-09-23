import Commerce from '@chec/commerce.js'

export const commerce = new Commerce(
  process.env.GATSBY_CHEC_PUBLIC_TEST_KEY,
  true,
)
