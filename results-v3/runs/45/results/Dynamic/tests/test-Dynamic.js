const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicAe68H6k = await Dynamic.new({from: accounts[0]});
		const uintrTwM1Pv = BigInt("363")
		const stringgqA3SJk = "BCxRhMzbQgorlHOt"
		const uintF2yScqi = BigInt("1276")
		const boolVdJllUP = await DynamicAe68H6k.echidna_test.call({from: accounts[5]});
		const boolrkHRc3I = await DynamicAe68H6k.echidna_test.call({from: accounts[3]});
		const boolUfdPYNk = await DynamicAe68H6k.yolo.call(uintF2yScqi, stringgqA3SJk, uintrTwM1Pv, {from: accounts[1]});

		assert.equal(boolUfdPYNk, true)
		assert.equal(boolVdJllUP, true)
		assert.equal(boolrkHRc3I, true)
	});

	it('test for Dynamic', async () => {
		const DynamicxNPrWfJ = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintq1zsBYc = BigInt("1411")
		const stringH1MmBDL = "C4Y5pfWgKlOPO8BD8PNM5Wj5vQCIGyvJvsr67HtA7x42VszNe25mgHyMlE8bofJLjo8AK2vOXEfAkj5AoH57v3siD9gzA9Bo4J"
		const uintSFH1ltT = BigInt("922")
		const uintv2ATDIm = BigInt("237")
		const stringsbfc8MO = "PMBVO6Gq4cscUmSTNFqsUGX1aH9ku"
		const uintbPxOnMy = BigInt("776")
		const uintWP4cXmN = BigInt("1526")
		const stringjRdvRPe = "NtMYoiJ9liU44MBdU173EmgALgqrsgZNIgIRjSYiUvGlhJAOtUYtwEDCTpwF9lAdrjrQBNLOtPvRKEP7CfHueBhWqh98SWCQGS"
		const uintjPwG8Ul = BigInt("995")
		const uintnUGidIB = BigInt("973")
		const stringC3Ld2U2 = "yFaq18KmTpoSwe7wDtYEBALr9xyO0hoDC2bylg0cUPTRO3vBd8O72REgYdHRBaCrMpAr3ekGm3Mt"
		const uintZ8scHpG = BigInt("1011")
		const boolMXZt4L9 = await DynamicxNPrWfJ.yolo.call(uintSFH1ltT, stringH1MmBDL, uintq1zsBYc, {from: accounts[3]});
		const boolCuijiuL = await DynamicxNPrWfJ.yolo.call(uintbPxOnMy, stringsbfc8MO, uintv2ATDIm, {from: accounts[5]});
		const boolDGZMNnx = await DynamicxNPrWfJ.echidna_test.call({from: accounts[5]});
		const boolz3sutGx = await DynamicxNPrWfJ.yolo.call(uintjPwG8Ul, stringjRdvRPe, uintWP4cXmN, {from: accounts[1]});
		const boolnLrty7n = await DynamicxNPrWfJ.yolo.call(uintZ8scHpG, stringC3Ld2U2, uintnUGidIB, {from: accounts[5]});
	});
})