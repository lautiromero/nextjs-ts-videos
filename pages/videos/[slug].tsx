import { GetStaticPaths, GetStaticProps } from "next"
import { Video } from "../../interfaces/video.interface"

interface Props {
  video: Video
}

const VideoBySlug: React.FC<Props> = ({video}) => {
  return (
    <div>
      <h1>
      {
        video.title
      }
      </h1>
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  // Call videos api to get videos
  const res = await fetch('http://localhost:3002/videos')
  const videos = await res.json()

  // Get the paths we want to prerender based on videos
  const paths = videos.map((video: Video) => ({
      params: { slug: video.slug },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  // Call videos api to get videos
  const res = await fetch(`http://localhost:3002/videos/${params?.slug}`)
  const video = await res.json()

  return {
    props: {
      video
    }
  }
}

export default VideoBySlug