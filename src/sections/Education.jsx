// import { Suspense, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// import Developer from '../components/Developer.jsx';
// import CanvasLoader from '../components/Loading.jsx';
// import { workExperiences } from '../constants/index.js';

// const Education = () => {
//   const [animationName, setAnimationName] = useState('idle');

//   return (
//     <section className="c-space my-20" id="work">
//       <div className="w-full text-white-600">
//         <p className="head-text">Education Details</p>

//         <div className="work-container">
//           <div className="work-canvas">
//             <Canvas>
//               <ambientLight intensity={7} />
//               <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//               <directionalLight position={[10, 10, 10]} intensity={1} />
//               <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

//               <Suspense fallback={<CanvasLoader />}>
//                 <Developer position-y={-3} scale={3} animationName={animationName} />
//               </Suspense>
//             </Canvas>
//           </div>

//           <div className="work-content">
//             <div className="sm:py-10 py-5 sm:px-5 px-2.5">
//               {workExperiences.map((item, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setAnimationName(item.animation.toLowerCase())}
//                   onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
//                   onPointerOut={() => setAnimationName('idle')}
//                   className="work-content_container group">
//                   <div className="flex flex-col h-full justify-start items-center py-2">
//                     <div className="work-content_logo">
//                       <img className="w-full h-full" src={item.icon} alt="" />
//                     </div>

//                     <div className="work-content_bar" />
//                   </div>

//                   <div className="sm:p-5 px-2.5 py-5">
//                     <p className="font-bold text-white-800">{item.name}</p>
//                     <p className="text-sm mb-5">
//                       {item.pos} -- <span>{item.duration}</span>
//                     </p>
//                     <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const Education = () => {
  const [animationName, setAnimationName] = useState('idle');

  // Function to bold specific keywords
  const formatText = (text) => {
    if (!text) return null;
    return text
      .replace(/(Coursework:)/gi, '<strong>Coursework:</strong>')
      .replace(/(Subjects:)/gi, '<strong>Subjects:</strong>')
      .replace(/(Achievements:)/gi, '<br/><strong>Achievements:</strong>');
  };

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">Education Details</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  
                  {/* Left side logo + bar */}
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt={item.name} />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  {/* Right side content */}
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-1">{item.pos}</p>
                    <p className="text-sm mb-1"><span className="font-semibold">Duration:</span> {item.duration}</p>

                    {/* Show CGPA or Percentage if present */}
                    {item.cgpa && (
                      <p className="text-sm mb-1"><span className="font-semibold">CGPA:</span> {item.cgpa}</p>
                    )}
                    {item.Percentage && (
                      <p className="text-sm mb-1"><span className="font-semibold">Percentage:</span> {item.Percentage}</p>
                    )}

                    {/* Description with bolded keywords */}
                    <p
                      className="group-hover:text-white transition-all ease-in-out duration-500 mt-2"
                      dangerouslySetInnerHTML={{ __html: formatText(item.title) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
