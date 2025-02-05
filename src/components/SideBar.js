import productList from "../data/productList";
import filterShow, { filterAll } from "../tools/filterShow";


const SideBar = () => {
    window.sideBarRendering = sideBarRendering;
    window.showHide = showHide;

    let productListFiltered = productList;
    if (filterAll.menu) {
        productListFiltered = productList.filter(item => {
            return item.type === filterAll.menu
        })
    }

    let filters = {};
    const properties = productListFiltered.map((item) => {
        return item.properties;
    });

    for (const property of properties) {
        for (const key in property) {
            if (!(key in filters)) {  //if there isn't key in filters
                filters[key] = [];    //create an key in arrayItrator and set empty array
            }
            else if (!filters[key].find((x) => {
                return x == property[key]
            })) {
                filters[key].push(property[key])
            }
            // console.log(filters);
        }
    }
    let filtersTemplate1 = ``;
    let index = 1;

    for (const filter in filters) {

        switch (filterType[filter]) {
            case 'checkBox':
                const checkItems = filters[filter].map((item) => {

                    return `
                        <div class="row__card" >
                            <input id="drop${index}" type="checkbox" name="${filter}" onClick="sideBarRendering(this,'${filter}','${item}')">
                            <label for="drop${index}">${item}</label>
                        </div>
                    `
                });
                filtersTemplate1 += `
                    <div class="row">
                        <div class="row__cards" onclick="showHide('drop${index}')">
                            <div class="sideBar__property">${filter}</div>
                            <div class="filterItem__button">
                                <i class='fa fa-chevron-down filterIcon filterIcon--size'></i>
                            </div>
                        </div>
                        <div class="row__item row__item--col row__item--display" id="drop${index}">
                            ${checkItems.join('')}
                        </div>
                    </div>
                `;
                index++;
                break;

            case 'color':
                const colorItems = filters[filter].map((item) => {
                    return `
                        <div class="row__card row__colorBox">
                            <input class="row__card_checkBox" id="drop${index}" type="checkbox" name="${filter}" onClick="sideBarRendering(this,'${filter}','${item}')">
                            <div class="row__color" style="background:${item}; width:30px; height:30px"></div>
                        </div>
                    `
                });
                filtersTemplate1 += `
                        <div class="row" >
                            <div class="row__cards" onclick="showHide('drop${index}')">
                                <div class="sideBar__property">${filter}</div>
                                <div class="filterItem__button">
                                    <i class='fa fa-chevron-down filterIcon filterIcon--size'></i>
                                </div>
                            </div>
                            <div class="row__item row__item--display" id="drop${index}">
                                ${colorItems.join('')}
                            </div>
                        </div>
                `;
                index++;
                break;
            default:
                break;
        }
    }


    return `    
            <div class="sideBar__titles">
                <span class="sideBar__title sideBar__title--size">فیلترها</span>
                <span class="sideBar__title sideBar__title--color">حذف فیلترها</span>
            </div>
            <div class="sideBar__body">
                <div class="sideBar__properties">
                    ${filtersTemplate1}
                </div>
            </div>
        `;
};


export default SideBar;



const showHide = (x) => {
    const element = document.getElementById(x);
    if (element.style.display === "flex") {
        element.style.display = "none";
    } else {
        element.style.display = "flex";
    }
};

export const filterType = {
    brand: "checkBox",
    RAMCapacity: "checkBox",
    memoryStorageCapacity: "checkBox",
    operationSystem: "checkBox",
    screenSize: "checkBox",
    color: "color",
    manufacturingCountry: "checkBox",
    productionYear: "checkBox",
    graphicsCoprocessor: "checkBox",
    displayTechnonlogy: "checkBox",
    resolution: "checkBox",
    sensorType: "checkBox"
};

const sideBarRendering = (e, filterName, filterValue) => {
    if (e.checked) {
        if (e.classList == "row__card_checkBox") {
            const a = e.classList;
            a.add("row__colorBox--brd");
        }

        selectedFilter(filterName, filterValue);
    } else {
        unSelectedFilter(filterName, filterValue);
    }
    filterShow();
}



const selectedFilter = (filterName, filterValue) => {

    if (filterAll.sideBar.filter(item => item.name === filterName).length === 0) {
        const newobject = { name: filterName, value: [filterValue] };
        filterAll.sideBar.push(newobject);
    }
    else {
        for (const item of filterAll.sideBar) {
            if (item.name === filterName && !item.value.includes(filterValue)) {
                item.value.push(filterValue);
            }
        }
    }
}

const unSelectedFilter = (filterName, filterValue) => {
    const filtered = filterAll.sideBar.filter(item => {
        return !(item.name === filterName && item.value.includes(filterValue) && item.value.length === 1)
    });
    filterAll.sideBar = filtered;

    filterAll.sideBar.map(item => {
        if (item.name === filterName && item.value.includes(filterValue)) {
            item.value = item.value.filter(x => x !== filterValue);
        }
    });
}

