import{A as e,f as s,i as t,h as a,j as r,e as n,k as i,a4 as o}from"./trois.module.4a1ab1a7.js";import{r as l,o as p,c as d,w as c,b as m}from"./app.28651c2b.js";const u={components:{AmbientLight:e,Camera:s,Renderer:t,PointLight:a,Scene:r,Sphere:n,StandardMaterial:i,Texture:o}};u.render=function(e,s,t,a,r,n){const i=l("Camera"),o=l("AmbientLight"),u=l("PointLight"),_=l("Texture"),g=l("StandardMaterial"),h=l("Sphere"),f=l("Scene"),b=l("Renderer");return p(),d(b,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":{autoRotate:!0,enableDamping:!0,dampingFactor:.05}},{default:c((()=>[m(i,{position:{z:10}}),m(f,{background:"#000000"},{default:c((()=>[m(o,{intensity:.5},null,8,["intensity"]),m(u,{position:{y:50,z:0}}),m(u,{color:"#ff6000",intensity:.75,position:{y:-50,z:0}},null,8,["intensity"]),m(h,{ref:"mesh",radius:2.5,"width-segments":200,"height-segments":200},{default:c((()=>[m(g,{props:{displacementScale:.2}},{default:c((()=>[m(_,{src:"/assets/textures/Wood_Tiles_002_basecolor.jpg"}),m(_,{src:"/assets/textures/Wood_Tiles_002_height.png",name:"displacementMap"}),m(_,{src:"/assets/textures/Wood_Tiles_002_normal.jpg",name:"normalMap"}),m(_,{src:"/assets/textures/Wood_Tiles_002_roughness.jpg",name:"roughnessMap"}),m(_,{src:"/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg",name:"aoMap"})])),_:1},8,["props"])])),_:1},8,["radius"])])),_:1})])),_:1},8,["orbit-ctrl"])};export default u;
