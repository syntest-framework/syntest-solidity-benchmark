const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTUQig18 = await SALESCONTRACT.new({from: accounts[3]});
		const uintj6NUkT0 = BigInt("1099")
		const addresskkUmkk = accounts[0]
//		await SALESCONTRACTUQig18.ff.call({from: accounts[4]});
//		const addressBGXLIpM = await SALESCONTRACTUQig18._setSalesPool.call(addresskkUmkk, uintj6NUkT0, {from: accounts[3]});
//		await SALESCONTRACTUQig18.clearETH.call({from: accounts[1]});

		await expect(SALESCONTRACTUQig18.ff.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTry0xAh2 = await SALESCONTRACT.new({from: accounts[4]});
		const addressOUL04RO = accounts[2]
		const uintvH6kNSE = BigInt("447")
//		await SALESCONTRACTry0xAh2.clearTokens.call({from: accounts[2]});
//		const boolnZK2aFt = await SALESCONTRACTry0xAh2.tokenSale.call(addressOUL04RO, {from: accounts[0]});
//		const uintjDwAw4u = await SALESCONTRACTry0xAh2._setStage.call(uintvH6kNSE, {from: accounts[0]});
//		await SALESCONTRACTry0xAh2.clearETH.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTry0xAh2.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBGHGmEZ = await SALESCONTRACT.new({from: accounts[2]});
		const addresska9g4OF = "0x0000000000000000000000000000000000000001"
		const uintnwJUV94 = BigInt("1560")
		const addresseYhghJl = accounts[4]
//		const boolJ3iqFwl = await SALESCONTRACTBGHGmEZ.tokenSale.call(addresska9g4OF, {from: accounts[0]});
//		await SALESCONTRACTBGHGmEZ.ff.call({from: accounts[1]});
//		const addressr6YDbz1 = await SALESCONTRACTBGHGmEZ._setSalesPool.call(addresseYhghJl, uintnwJUV94, {from: accounts[1]});

		await expect(SALESCONTRACTBGHGmEZ.tokenSale.call(addresska9g4OF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBGHGmEZ = await SALESCONTRACT.new({from: accounts[2]});
		const uintajBa3Sn = BigInt("1354")
		const uintZKsJnY = BigInt("1110")
		const addressTt5fpy = "0x0000000000000000000000000000000000000001"
		const addresskOwHh1J = accounts[0]
		const uintyax5ZKB = await SALESCONTRACTBGHGmEZ._setStage.call(uintajBa3Sn, {from: accounts[2]});
//		const addressa6QbzdN = await SALESCONTRACTBGHGmEZ._setSalesPool.call(addressTt5fpy, uintZKsJnY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUF7vcfZ = await SALESCONTRACTBGHGmEZ.tokenSale.call(addresskOwHh1J, {from: accounts[5]});

		await expect(SALESCONTRACTBGHGmEZ._setSalesPool.call(addressTt5fpy, uintZKsJnY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBGHGmEZ = await SALESCONTRACT.new({from: accounts[2]});
		const uintYX29dZT = BigInt("1783")
		const uint5yJvhu = BigInt("1415")
		const addressfL4FCN2 = accounts[4]
		const uintOpeGVCQ = BigInt("1110")
		const addressVdVFlmc = "0x0000000000000000000000000000000000000000"
		const address6iqINO = "0x0000000000000000000000000000000000000001"
		const uintGslVd4F = await SALESCONTRACTBGHGmEZ._setStage.call(uintYX29dZT, {from: accounts[2]});
		const addressS7QyPBg = await SALESCONTRACTBGHGmEZ._setSalesPool.call(addressfL4FCN2, uint5yJvhu, {from: accounts[2]});
//		const addressa6QbzdN = await SALESCONTRACTBGHGmEZ._setSalesPool.call(addressVdVFlmc, uintOpeGVCQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbWiBFRy = await SALESCONTRACTBGHGmEZ.tokenSale.call(address6iqINO, {from: accounts[0]});

		await expect(SALESCONTRACTBGHGmEZ._setSalesPool.call(addressVdVFlmc, uintOpeGVCQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBGHGmEZ = await SALESCONTRACT.new({from: accounts[2]});
		const uintFvYR9u9 = BigInt("1110")
		const addressmH0Kb4G = "0x0000000000000000000000000000000000000001"
		const addresszS4v2hk = "0x0000000000000000000000000000000000000001"
//		await SALESCONTRACTBGHGmEZ.clearTokens.call({from: accounts[2]});
//		const addressa6QbzdN = await SALESCONTRACTBGHGmEZ._setSalesPool.call(addressmH0Kb4G, uintFvYR9u9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCbM8RaO = await SALESCONTRACTBGHGmEZ.tokenSale.call(addresszS4v2hk, {from: accounts[0]});

		await expect(SALESCONTRACTBGHGmEZ.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBGHGmEZ = await SALESCONTRACT.new({from: accounts[2]});
		const addressrO2VA6e = accounts[2]
		const addressnVKdtlN = "0x0000000000000000000000000000000000000001"
		const uintj9NmLHk = BigInt("1124")
		const addressx8iHFwM = "0x0000000000000000000000000000000000000001"
		const addressXarYW7Y = await SALESCONTRACTBGHGmEZ.setToken.call(addressrO2VA6e, {from: accounts[2]});
//		const addresslPkH6u1 = await SALESCONTRACTBGHGmEZ.setToken.call(addressnVKdtlN, {from: accounts[4]});
//		const addressa6QbzdN = await SALESCONTRACTBGHGmEZ._setSalesPool.call(addressx8iHFwM, uintj9NmLHk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTBGHGmEZ.setToken.call(addressnVKdtlN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTW9AnV5O = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXwamTVM = BigInt("795")
		const address9MwKJX = accounts[0]
		const addressrf3IlWL = accounts[5]
		const uintIim73hw = BigInt("275")
		const addressqa1vVId = accounts[2]
		const addressA1Yi5tP = accounts[0]
		const addressypqelK3 = await SALESCONTRACTW9AnV5O._setSalesPool.call(address9MwKJX, uintXwamTVM, {from: accounts[3]});
		const addressZduJk7u = await SALESCONTRACTW9AnV5O.setToken.call(addressrf3IlWL, {from: accounts[1]});
		const addressCsgzrv4 = await SALESCONTRACTW9AnV5O._setSalesPool.call(addressqa1vVId, uintIim73hw, {from: accounts[5]});
		const addressK9r23fC = await SALESCONTRACTW9AnV5O.setToken.call(addressA1Yi5tP, {from: accounts[1]});
		await SALESCONTRACTW9AnV5O.ff.call({from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBGHGmEZ = await SALESCONTRACT.new({from: accounts[2]});
		const addresswUxebQx = accounts[2]
		const uintnI2OwF9 = BigInt("1110")
		const addressDCjWo4c = "0x0000000000000000000000000000000000000001"
		const uintzuXk8IK = BigInt("586")
		const addressxw0fKcb = accounts[3]
		const addressnQoi284 = await SALESCONTRACTBGHGmEZ.setToken.call(addresswUxebQx, {from: accounts[2]});
//		await SALESCONTRACTBGHGmEZ.clearETH.call({from: accounts[2]});
//		const addressa6QbzdN = await SALESCONTRACTBGHGmEZ._setSalesPool.call(addressDCjWo4c, uintnI2OwF9, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgeYqjob = await SALESCONTRACTBGHGmEZ._setSalesPool.call(addressxw0fKcb, uintzuXk8IK, {from: accounts[1]});

		await expect(SALESCONTRACTBGHGmEZ.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})