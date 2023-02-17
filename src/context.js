import React,{useState,createContext,useContext} from "react";
import dataMenu from "./dataMenu"
const AppContext = createContext()
const AppProvider = ({children}) =>{
   const [indexSlide, setIndexSlide] = useState(0)
   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
   const[isSidebarNavOpen,setIsSidebarNavOpen]= useState(false)
   const openSidebarNav = () => {
     setIsSidebarNavOpen(true)
   }
   const closeSidebarNav = () => {
     setIsSidebarNavOpen(false)
   }

    const openSidebar = () => {
      setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
      setIsSidebarOpen(false)
    }
    const [page, setPage] = useState({ page: '', links: [] })
    const [location, setLocation] = useState({})
    const openSubmenu = (text, coordinates) => {
      const page = dataMenu.find((link) => link.page === text)
      setPage(page)
      setLocation(coordinates)
      setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
      setIsSubmenuOpen(false)
    }
    const [slide, setSlide] = useState([
      {
        id: 1,
        image: './images/s1.png',
        title: 'welcome to mi mexico restaurant.',
        desc: 'the best restaurant in minot north dakota.',
      },

      {
        id: 2,
        image: './images/s2.png',
        title: 'Come for a drink, stay for a meal.',
        desc: 'Experience a taste of Mexico',
      },
      {
        id: 3,
        image: './images/s3.png',
        title: 'Creativity is always on our menu',
        desc: 'We’re here to spice things up',
      },
      {
        id: 4,
        image: './images/s4.png',
        title: 'Next level Mexican food and warm hospitality. ',
        desc: 'Modern Mexican cuisine made with local ingredients.',
      },
      {
        id: 5,
        image: './images/s5.png',
        title: 'Like your Abuela used to make.',
        desc: 'From our casa to yours.',
      },
    ])
 return (
   <AppContext.Provider
     value={{
       isSidebarOpen,
       openSidebar,
       closeSidebar,
       isSubmenuOpen,
       openSubmenu,
       closeSubmenu,
       page,
       location,
       openSidebarNav,
       closeSidebarNav,
       setIsSidebarNavOpen,
       isSidebarNavOpen,
       slide,
       setSlide,
       indexSlide,
       setIndexSlide
       
     }}
   >
     {children}
   </AppContext.Provider>
 )
 }
 export const useGlobalContext = () => {
   return useContext(AppContext)
 }
 export { AppContext, AppProvider }