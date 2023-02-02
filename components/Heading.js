import Head from "next/head"

const Heading = ({ tag, text, title }) => {
  const Tag = tag || "h1"
  return (
    <>
      <Head>
        <title>{title ? title : "DefaultMeta"}</title>
      </Head>

      <Tag>{text}</Tag>
    </>
  )
}

export default Heading
