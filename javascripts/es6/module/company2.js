import {company,getCompany} from './company1.js'
console.log(company)
console.log(getCompany())

// OR
import {company as x, getCompany as y} from './company1.js'
console.log(x)
console.log(y())

// OR
import * as myCompany from './company1.js'
console.log(myCompany.getCompany())
console.log(myCompany.company)
