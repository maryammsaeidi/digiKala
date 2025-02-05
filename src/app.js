import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Sort from "./components/Sort";
import Content from "./components/Content";
import Pagination from "./components/Pagination";


const App = () => {
    // console.log(filterAll.menu);
    
  return `${Header()}
        <div class="body">
            <div class="body__header">
               <div class="body__tools">
                  <a href="#" class="tools__link tools__link--display">
                    <i class="icon icon--color fa fa-arrow-right"></i>
                  </a>
                  <div class="body__header_text">محصولات و کالا ها</div>
               </div>
               <div class="body__tool tools__item">
                        <a href="#" class="tools__link tools__link--display">
                            <i class="icon icon--color fa fa-search"></i>
                        </a>
               </div>
            </div>
            <div class="body__container" >
                <div class="sideBar" id="sideBar">
                    ${SideBar()}
                </div>    
                <div class="section">
                    <div id="sort" class="sort">
                        ${Sort()}
                    </div>
                    <div class="content">
                        ${Content()}
                    </div>
                    ${Pagination()}
                </div>
            </div>
         `;
};
export default App;
