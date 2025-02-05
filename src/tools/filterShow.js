import productList from "../data/productList";
import Products from "../components/Products";

export const filterAll = {
    sort: "",
    menu: "",
    sideBar: []
}

const filterShow = () => {
    let newProductList = productList;
    for (const key in filterAll) {
        switch (key) {
            case "sort":
                switch (filterAll[key]) {
                    case "cheapest":
                        newProductList = newProductList.sort((value1, value2) => {
                            return value1.price - value2.price;
                        });
                        break;
                    case "expensive":
                        newProductList = newProductList.sort((value1, value2) => {
                            return value2.price - value1.price;
                        });
                        break;
                    case "mostVisited":
                        newProductList = newProductList.sort((value1, value2) => {
                            return value2.Timeview - value1.Timeview;
                        });
                        break;
                    case "newest":
                        newProductList = newProductList.sort((value1, value2) => {
                            return (
                                value2.properties.productionYear - value1.properties.productionYear
                            );
                        });
                        break;
                    case "sells":
                        newProductList = newProductList.sort((value1, value2) => {
                            return value2.sells - value1.sells;
                        });
                        break;
                }
                break;

            case "menu":
                switch (filterAll[key]) {
                    case "mobile":
                        newProductList = newProductList.filter(item => {
                            if (item.type == "mobile") {
                                return item
                            }
                        });

                        break;
                    case "tv":
                        newProductList = newProductList.filter(item => {
                            if (item.type == "tv") {
                                return item
                            }
                        });

                        break;
                    case "laptop":
                        newProductList = newProductList.filter(item => {
                            if (item.type == "laptop") {
                                return item
                            }
                        });

                        break;
                    case "camera":
                        newProductList = newProductList.filter(item => {
                            if (item.type == "camera") {
                                return item
                            }
                        });

                        break;

                }
                break;

            case "sideBar":
                let newList = [];
                for (const productItem of newProductList) {
                    let count = 0;
                    for (const key in productItem.properties) {
                        for (const filterItem of filterAll.sideBar) {
                            if (key === filterItem.name && filterItem.value.includes(productItem.properties[key])) {
                                count++;
                            }
                        }
                    }
                    // console.log(count);
                    if (count === filterAll.sideBar.length) {
                        newList.push(productItem);
                    }
                }

                // console.log(filterAll.sideBar);
                newProductList = newList;
                break;
        }
    }
    $("#widgetGroup").html(Products(newProductList));
}

export default filterShow;








