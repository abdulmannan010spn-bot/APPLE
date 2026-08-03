import { Environment, Lightformer, SpotLight } from "@react-three/drei"


const StudioLights = () => {
  return (
    <group name="lights">
        <Environment resolution={256}>
               <group>
                <Lightformer form="rect" position={[-10,5,-5]} intensity={10} scale={10} rotation={[0,Math.PI/2,0]} />

                <Lightformer form="rect" position={[10,0,1]} intensity={10} scale={10} rotation={[0,Math.PI/2,0]} />
               </group>
        </Environment>
        <SpotLight position={[0,15,5]} intensity={Math.PI * 0.2} angle={0.15} decay={0}/>
        <SpotLight position={[0,-25,10]} intensity={Math.PI * 0.2} angle={0.15} decay={0}/>
    </group>

  )
}
export default StudioLights