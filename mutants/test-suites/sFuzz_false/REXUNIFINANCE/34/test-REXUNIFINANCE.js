const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCE5EVIg9 = await REXUNIFINANCE.new({from: accounts[0]});
		const uintlAZJKlR = BigInt("643")
		const addressiZK8a2E = accounts[4]
		const addressR0n67wO = accounts[4]
		const addressGl9L5oj = accounts[4]
		const uintxknUWs1 = BigInt("926")
		const addressCtzHqO = "0x0000000000000000000000000000000000000001"
		const addressusEy4G0 = accounts[0]
//		const boolTPRpGJL = await REXUNIFINANCE5EVIg9.transferFrom.call(addressR0n67wO, addressiZK8a2E, uintlAZJKlR, {from: accounts[0]});
//		const uint256mHjeAZ = await REXUNIFINANCE5EVIg9.transferableTokens.call(addressGl9L5oj, {from: accounts[3]});
//		const boolRy8IfQ3 = await REXUNIFINANCE5EVIg9.transferFrom.call(addressusEy4G0, addressCtzHqO, uintxknUWs1, {from: accounts[4]});

		await expect(REXUNIFINANCE5EVIg9.transferFrom.call(addressR0n67wO, addressiZK8a2E, uintlAZJKlR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEPVDhQNa = await REXUNIFINANCE.new({from: accounts[0]});
		const addressBDbpuKz = accounts[5]
		const uintAN14ka5 = BigInt("1239")
		const addressk6EFvgN = accounts[5]
		const addressBmaICVg = accounts[1]
		const uintnCeZE24 = BigInt("1208")
		const addressjNMmS9v = accounts[2]
//		const address7vu7iu = await REXUNIFINANCEPVDhQNa.transferOwnership.call(addressBDbpuKz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTKDSSvT = await REXUNIFINANCEPVDhQNa.transfer.call(addressk6EFvgN, uintAN14ka5, {from: accounts[2]});
//		const uint256R6jTcTQ = await REXUNIFINANCEPVDhQNa.transferableTokens.call(addressBmaICVg, {from: accounts[4]});
//		const boolOVHgFpG = await REXUNIFINANCEPVDhQNa.approve.call(addressjNMmS9v, uintnCeZE24, {from: accounts[0]});

		await expect(REXUNIFINANCEPVDhQNa.transferOwnership.call(addressBDbpuKz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEiomvquj = await REXUNIFINANCE.new({from: accounts[2]});
		const uinttYq8ig1 = BigInt("1757")
		const addressC4mhL6X = accounts[1]
		const addressRu8Y564 = accounts[4]
		const uintij5G7nb = BigInt("1736")
		const addressKU5t1TP = accounts[5]
		const bool1CmgND = await REXUNIFINANCEiomvquj.increaseApproval.call(addressC4mhL6X, uinttYq8ig1, {from: accounts[4]});
		const uint256kM78LLr = await REXUNIFINANCEiomvquj.balanceOf.call(addressRu8Y564, {from: accounts[2]});
//		const boolHAS825o = await REXUNIFINANCEiomvquj.transfer.call(addressKU5t1TP, uintij5G7nb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool1CmgND, true)
		assert.equal(uint256kM78LLr, BigInt("0"))
		await expect(REXUNIFINANCEiomvquj.transfer.call(addressKU5t1TP, uintij5G7nb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEW9zaYoP = await REXUNIFINANCE.new({from: accounts[0]});
		const uintIXRPuQc = BigInt("801")
		const addressQZZg7X0 = "0x0000000000000000000000000000000000000001"
		const uint2J4ak1 = BigInt("691")
		const addressSQTSMji = accounts[2]
		const addressWqLb9C = accounts[5]
		const uintHauS9Th = BigInt("765")
		const addressuBBIQSx = accounts[0]
		const boolyydKdN0 = await REXUNIFINANCEW9zaYoP.increaseApproval.call(addressQZZg7X0, uintIXRPuQc, {from: accounts[5]});
		const boolKXEUIr = await REXUNIFINANCEW9zaYoP.increaseApproval.call(addressSQTSMji, uint2J4ak1, {from: accounts[4]});
		const uint256tp11Rve = await REXUNIFINANCEW9zaYoP.balanceOf.call(addressWqLb9C, {from: accounts[4]});
		const boolZUvloB = await REXUNIFINANCEW9zaYoP.decreaseApproval.call(addressuBBIQSx, uintHauS9Th, {from: accounts[1]});

		assert.equal(boolKXEUIr, true)
		assert.equal(boolZUvloB, true)
		assert.equal(boolyydKdN0, true)
		assert.equal(uint256tp11Rve, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyAZGI1d = await REXUNIFINANCE.new({from: accounts[5]});
		const uintFiwvkCe = BigInt("458")
		const addressGjDrwEa = accounts[5]
		const uinthlF9DT = BigInt("369")
		const addressvdjSyNZ = "0x0000000000000000000000000000000000000001"
		const addressaCA7rHt = accounts[2]
		const addressQsSajp1 = accounts[0]
		const boolHX6HFPv = await REXUNIFINANCEyAZGI1d.increaseApproval.call(addressGjDrwEa, uintFiwvkCe, {from: accounts[2]});
		const boolrZ9U1iW = await REXUNIFINANCEyAZGI1d.decreaseApproval.call(addressvdjSyNZ, uinthlF9DT, {from: accounts[2]});
		const uint256hb4ZOgU = await REXUNIFINANCEyAZGI1d.allowance.call(addressQsSajp1, addressaCA7rHt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHX6HFPv, true)
		assert.equal(boolrZ9U1iW, true)
		assert.equal(uint256hb4ZOgU, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEDcApCiB = await REXUNIFINANCE.new({from: accounts[0]});
		const addressGwkrYJ = accounts[3]
		const addresskImqoLz = accounts[3]
		const uintn2Xerw8 = BigInt("792")
		const addressF7tafU8 = accounts[0]
		const uintYRjtv4y = BigInt("1913")
		const addressMiIhGJF = accounts[5]
		const uintx1gNbKU = BigInt("1243")
		const addresse6fB4o5 = "0x0000000000000000000000000000000000000001"
		const uintjEJ181p = BigInt("1430")
		const addressOW9iOoc = accounts[2]
		const uint256dHOrEh = await REXUNIFINANCEDcApCiB.allowance.call(addresskImqoLz, addressGwkrYJ, {from: accounts[0]});
		const boolTRq5Ias = await REXUNIFINANCEDcApCiB.approve.call(addressF7tafU8, uintn2Xerw8, {from: accounts[2]});
		const booll4tyJ1x = await REXUNIFINANCEDcApCiB.approve.call(addressMiIhGJF, uintYRjtv4y, {from: "0x0000000000000000000000000000000000000001"});
		const bool9hODS1 = await REXUNIFINANCEDcApCiB.decreaseApproval.call(addresse6fB4o5, uintx1gNbKU, {from: accounts[0]});
		const boolA8eUrEz = await REXUNIFINANCEDcApCiB.approve.call(addressOW9iOoc, uintjEJ181p, {from: accounts[4]});

		assert.equal(bool9hODS1, true)
		assert.equal(boolA8eUrEz, true)
		assert.equal(boolTRq5Ias, true)
		assert.equal(booll4tyJ1x, true)
		assert.equal(uint256dHOrEh, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEWSvfDgZ = await REXUNIFINANCE.new({from: accounts[3]});
		const uinthoZYgb = BigInt("761")
		const addressoHLpHZd = accounts[5]
		const uintGMIkhHC = BigInt("872")
		const addressG2y2NF5 = accounts[3]
		const addressqpzBWqd = accounts[3]
		const uintycvgIRU = BigInt("1879")
		const addressTI4p65N = accounts[5]
		const addresssxsyWy7 = accounts[3]
		const uinty58ELJc = BigInt("552")
		const addressFpYWSjy = accounts[1]
		const booll8a131 = await REXUNIFINANCEWSvfDgZ.increaseApproval.call(addressoHLpHZd, uinthoZYgb, {from: accounts[2]});
		const booliroQHuC = await REXUNIFINANCEWSvfDgZ.decreaseApproval.call(addressG2y2NF5, uintGMIkhHC, {from: accounts[0]});
		const uint256pXBujLl = await REXUNIFINANCEWSvfDgZ.balanceOf.call(addressqpzBWqd, {from: accounts[2]});
//		const boolP5OIkxL = await REXUNIFINANCEWSvfDgZ.transferFrom.call(addresssxsyWy7, addressTI4p65N, uintycvgIRU, {from: accounts[4]});
//		const boolYvFeBZr = await REXUNIFINANCEWSvfDgZ.approve.call(addressFpYWSjy, uinty58ELJc, {from: accounts[3]});

		assert.equal(booliroQHuC, true)
		assert.equal(booll8a131, true)
		assert.equal(uint256pXBujLl, BigInt("0"))
		await expect(REXUNIFINANCEWSvfDgZ.transferFrom.call(addresssxsyWy7, addressTI4p65N, uintycvgIRU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEuOLrIV = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFjFT4bS = accounts[3]
		const address2F7qiV = accounts[1]
		const uint256UVqpith = await REXUNIFINANCEuOLrIV.transferableTokens.call(addressFjFT4bS, {from: accounts[1]});
		const addressHSxSsux = await REXUNIFINANCEuOLrIV.transferOwnership.call(address2F7qiV, {from: accounts[0]});
	});
})