import { Html, useProgress } from '@react-three/drei'

const ModelLoader = () => {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

export default ModelLoader

