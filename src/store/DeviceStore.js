import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {
                id: 1,
                name: "Холодильник"
            },
            {
                id: 2,
                name: "Смартфоны"
            }
        ]
        this._brands = [
            {
                id: 1,
                name: "Samsungus"
            },
            {
                id: 2,
                name: "Apple",
            }
        ]
        this._devices = []
        this._selectedType = {}
        this._seletedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._seletedBrand = brand
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._seletedBrand
    }
}