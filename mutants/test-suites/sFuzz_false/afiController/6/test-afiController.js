const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressdkz8CEH = accounts[2]
		const afiControllerJ7wmGY = await afiController.new(addressdkz8CEH, {from: accounts[2]});
		const addressemrKK0X = accounts[4]
		const uintSFkh5Rh = BigInt("1527")
		const addressMYe9Wqs = await afiControllerJ7wmGY.setGovernance.call(addressemrKK0X, {from: accounts[2]});
//		const uintLox51Pd = await afiControllerJ7wmGY.setSplit.call(uintSFkh5Rh, {from: accounts[1]});

		await expect(afiControllerJ7wmGY.setSplit.call(uintSFkh5Rh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address5cRHci = accounts[4]
		const afiControllergGYJgz = await afiController.new(address5cRHci, {from: accounts[2]});
		const uintKv9MwEV = BigInt("927")
		const addressuVCtr56 = accounts[0]
		const addresskC1S4u7 = accounts[0]
		const uintE1M7gtk = BigInt("148")
		const addressINiaMED = accounts[2]
		const addressUShqmE = accounts[5]
//		const addressiP4nhqA = await afiControllergGYJgz.yearn.call(addresskC1S4u7, addressuVCtr56, uintKv9MwEV, {from: accounts[4]});
//		const addressAdSndjz = await afiControllergGYJgz.yearn.call(addressUShqmE, addressINiaMED, uintE1M7gtk, {from: accounts[4]});

		await expect(afiControllergGYJgz.yearn.call(addresskC1S4u7, addressuVCtr56, uintKv9MwEV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfDmUT74 = accounts[5]
		const afiControllernrtcFX0 = await afiController.new(addressfDmUT74, {from: accounts[3]});
		const addressWLW8oXu = accounts[0]
		const addressaDmR9mM = accounts[2]
		const addressRKPO1aA = accounts[2]
		const uinto8zzTM4 = BigInt("1601")
		const addressKYeem1 = "0x0000000000000000000000000000000000000001"
//		const addressxFz2yOm = await afiControllernrtcFX0.inCaseStrategyTokenGetStuck.call(addressaDmR9mM, addressWLW8oXu, {from: accounts[0]});
//		const addressKSP2TSL = await afiControllernrtcFX0.setOneSplit.call(addressRKPO1aA, {from: accounts[4]});
//		const addressMCpQV3L = await afiControllernrtcFX0.inCaseTokensGetStuck.call(addressKYeem1, uinto8zzTM4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllernrtcFX0.inCaseStrategyTokenGetStuck.call(addressaDmR9mM, addressWLW8oXu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIlvFR5r = accounts[0]
		const afiControllerbnZ4ROX = await afiController.new(addressIlvFR5r, {from: accounts[2]});
		const addressJVsLOn = accounts[3]
		const addressdtRQU9H = accounts[3]
//		const uintLIUBxwP = await afiControllerbnZ4ROX.balanceOf.call(addressJVsLOn, {from: accounts[3]});
//		const addressBFpJGU = await afiControllerbnZ4ROX.setStrategist.call(addressdtRQU9H, {from: accounts[1]});

		await expect(afiControllerbnZ4ROX.balanceOf.call(addressJVsLOn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTTK5nx = accounts[5]
		const afiControllervq0M0x = await afiController.new(addressTTK5nx, {from: "0x0000000000000000000000000000000000000001"});
		const addressC2iKOKL = accounts[0]
		const addresshUso5Ku = "0x0000000000000000000000000000000000000001"
		const addressk0Pkd1k = accounts[0]
		const addressqBmxV62 = accounts[2]
		const addressqUtzevL = accounts[3]
		const addressPA7CcxQ = await afiControllervq0M0x.setGovernance.call(addressC2iKOKL, {from: accounts[4]});
		const addressZzfF1o = await afiControllervq0M0x.setVault.call(addressk0Pkd1k, addresshUso5Ku, {from: accounts[2]});
		const addresscQEgK64 = await afiControllervq0M0x.setGovernance.call(addressqBmxV62, {from: accounts[4]});
		const addresshpzLtx = await afiControllervq0M0x.setRewards.call(addressqUtzevL, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressgJNCmcB = accounts[5]
		const afiControllerFl1cAnC = await afiController.new(addressgJNCmcB, {from: accounts[3]});
		const addressCb08cG = accounts[5]
		const addressk7wllFj = accounts[1]
		const addressCxXcMaA = accounts[5]
		const addressrQlH7uU = accounts[1]
		const addressI7vnBmJ = accounts[3]
//		const addressS51SAXa = await afiControllerFl1cAnC.setConverter.call(addressCxXcMaA, addressk7wllFj, addressCb08cG, {from: accounts[2]});
//		const uinteoRUXWA = await afiControllerFl1cAnC.balanceOf.call(addressrQlH7uU, {from: accounts[2]});
//		const addressGzueC98 = await afiControllerFl1cAnC.setOneSplit.call(addressI7vnBmJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerFl1cAnC.setConverter.call(addressCxXcMaA, addressk7wllFj, addressCb08cG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSZFRaiZ = accounts[4]
		const afiControllergGYJgz = await afiController.new(addressSZFRaiZ, {from: accounts[2]});
		const addressstaPjKz = accounts[0]
		const addressvvo0XeO = accounts[0]
		const uintTUxd5wY = BigInt("500")
		const addressq5aTEN = accounts[3]
		const uintb9mysj = BigInt("148")
		const addressNpnBSCS = accounts[2]
		const addressj4w1hmH = accounts[5]
		const addresskSxnxSp = accounts[2]
//		const addressXpYULtC = await afiControllergGYJgz.setStrategy.call(addressvvo0XeO, addressstaPjKz, {from: accounts[2]});
//		const addressrRnBMXq = await afiControllergGYJgz.inCaseTokensGetStuck.call(addressq5aTEN, uintTUxd5wY, {from: accounts[3]});
//		const addressAdSndjz = await afiControllergGYJgz.yearn.call(addressj4w1hmH, addressNpnBSCS, uintb9mysj, {from: accounts[4]});
//		const addressEU6iKTv = await afiControllergGYJgz.setOneSplit.call(addresskSxnxSp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllergGYJgz.setStrategy.call(addressvvo0XeO, addressstaPjKz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressl7PTeZ7 = accounts[2]
		const afiControllerJ7wmGY = await afiController.new(addressl7PTeZ7, {from: accounts[2]});
		const address7OsQon = accounts[0]
		const addressuC2ifSv = "0x0000000000000000000000000000000000000001"
		const addressllhlnHN = accounts[4]
		const uintvAvlwL2 = BigInt("1848")
//		const addressacoc4Uy = await afiControllerJ7wmGY.setVault.call(addressuC2ifSv, address7OsQon, {from: accounts[1]});
//		const addressMYe9Wqs = await afiControllerJ7wmGY.setGovernance.call(addressllhlnHN, {from: accounts[2]});
//		const uintLox51Pd = await afiControllerJ7wmGY.setSplit.call(uintvAvlwL2, {from: accounts[1]});

		await expect(afiControllerJ7wmGY.setVault.call(addressuC2ifSv, address7OsQon, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOVUaWTg = accounts[2]
		const afiControllerJ7wmGY = await afiController.new(addressOVUaWTg, {from: accounts[2]});
		const addressjhTifZd = accounts[5]
		const uintFYVokPJ = BigInt("1085")
		const addressVmCUZcd = accounts[0]
		const uintyIqDu89 = BigInt("695")
		const addressi5eM3Pn = accounts[4]
		const uintJK2nzeS = BigInt("1527")
		const addressMYe9Wqs = await afiControllerJ7wmGY.setGovernance.call(addressjhTifZd, {from: accounts[2]});
//		const addressWiTtWE3 = await afiControllerJ7wmGY.earn.call(addressVmCUZcd, uintFYVokPJ, {from: accounts[3]});
//		const addressxcDmrdS = await afiControllerJ7wmGY.earn.call(addressi5eM3Pn, uintyIqDu89, {from: accounts[1]});
//		const uintLox51Pd = await afiControllerJ7wmGY.setSplit.call(uintJK2nzeS, {from: accounts[1]});

		await expect(afiControllerJ7wmGY.earn.call(addressVmCUZcd, uintFYVokPJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstoK8yNV = accounts[4]
		const afiControllergGYJgz = await afiController.new(addresstoK8yNV, {from: accounts[2]});
		const uintLBPfnw2 = BigInt("139")
		const addressoI1fHa1 = accounts[2]
		const addressYZ2zn2K = accounts[2]
		const uintbfOCZ0d = BigInt("927")
		const addressuK3zyrq = accounts[1]
		const addressnr7XFL1 = accounts[0]
		const uintHQxSGE = BigInt("385")
		const addressNrHHEYK = accounts[3]
		const uinteVoYbV8 = BigInt("148")
		const addressDKRFHp6 = accounts[2]
		const addressJ4SM4oA = accounts[5]
		const addressKXLdRGk = accounts[2]
		const addressJvojCE8 = accounts[5]
//		const uintgW4tl7s = await afiControllergGYJgz.getExpectedReturn.call(addressYZ2zn2K, addressoI1fHa1, uintLBPfnw2, {from: accounts[3]});
//		const addressiP4nhqA = await afiControllergGYJgz.yearn.call(addressnr7XFL1, addressuK3zyrq, uintbfOCZ0d, {from: accounts[4]});
//		const addressQ0fKEC5 = await afiControllergGYJgz.inCaseTokensGetStuck.call(addressNrHHEYK, uintHQxSGE, {from: accounts[2]});
//		const addressAdSndjz = await afiControllergGYJgz.yearn.call(addressJ4SM4oA, addressDKRFHp6, uinteVoYbV8, {from: accounts[4]});
//		const addressQ5PXBql = await afiControllergGYJgz.setVault.call(addressJvojCE8, addressKXLdRGk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllergGYJgz.getExpectedReturn.call(addressYZ2zn2K, addressoI1fHa1, uintLBPfnw2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCgeHonV = accounts[2]
		const afiControllerJ7wmGY = await afiController.new(addressCgeHonV, {from: accounts[2]});
		const addressvtoVJlK = accounts[4]
		const addressql3FnQB = accounts[0]
		const addressyOu9OWv = accounts[4]
		const addressTq5tGo4 = accounts[2]
		const addressZeEBNcS = accounts[1]
		const addressXdQjRK = accounts[4]
		const uintd4KNABb = BigInt("1548")
//		const addressIvCL2nm = await afiControllerJ7wmGY.revokeStrategy.call(addressql3FnQB, addressvtoVJlK, {from: accounts[4]});
//		const addressOPWP1nG = await afiControllerJ7wmGY.setStrategy.call(addressTq5tGo4, addressyOu9OWv, {from: accounts[2]});
//		const addresso3HXdZP = await afiControllerJ7wmGY.withdrawAll.call(addressZeEBNcS, {from: accounts[3]});
//		const addressMYe9Wqs = await afiControllerJ7wmGY.setGovernance.call(addressXdQjRK, {from: accounts[2]});
//		const uintLox51Pd = await afiControllerJ7wmGY.setSplit.call(uintd4KNABb, {from: accounts[1]});

		await expect(afiControllerJ7wmGY.revokeStrategy.call(addressql3FnQB, addressvtoVJlK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOpNAtVB = accounts[0]
		const afiControllernSLgjFQ = await afiController.new(addressOpNAtVB, {from: accounts[1]});
		const addressdAR3Nl9 = accounts[3]
		const addressTGflP1X = accounts[5]
		const uintJcEBI0Z = BigInt("1301")
		const addresszMqHkVU = accounts[1]
		const uintrkbYnN = BigInt("1160")
		const addresshkKFYJg = accounts[0]
		const uintI0QZ5J3 = BigInt("1310")
		const addressj7yuhJb = accounts[1]
		const addresseXXChrZ = accounts[0]
		const addressG1UEn4i = await afiControllernSLgjFQ.approveStrategy.call(addressTGflP1X, addressdAR3Nl9, {from: accounts[1]});
//		const addressitmJBJ5 = await afiControllernSLgjFQ.earn.call(addresszMqHkVU, uintJcEBI0Z, {from: accounts[5]});
//		const addressjvYQGM4 = await afiControllernSLgjFQ.inCaseTokensGetStuck.call(addresshkKFYJg, uintrkbYnN, {from: accounts[0]});
//		const uintCbInxz1 = await afiControllernSLgjFQ.getExpectedReturn.call(addresseXXChrZ, addressj7yuhJb, uintI0QZ5J3, {from: accounts[1]});

		await expect(afiControllernSLgjFQ.earn.call(addresszMqHkVU, uintJcEBI0Z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressYySKONp = accounts[2]
		const afiControllerJ7wmGY = await afiController.new(addressYySKONp, {from: accounts[2]});
		const addressFuIFQq4 = accounts[3]
		const addressJL34do = accounts[2]
		const uintTIEEjD1 = BigInt("1503")
		const addressMYe9Wqs = await afiControllerJ7wmGY.setGovernance.call(addressFuIFQq4, {from: accounts[2]});
//		const addresshBEPAmj = await afiControllerJ7wmGY.setStrategist.call(addressJL34do, {from: accounts[3]});
//		const uintLox51Pd = await afiControllerJ7wmGY.setSplit.call(uintTIEEjD1, {from: accounts[1]});

		await expect(afiControllerJ7wmGY.setStrategist.call(addressJL34do, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIYIE9zS = accounts[4]
		const afiControllergGYJgz = await afiController.new(addressIYIE9zS, {from: accounts[2]});
		const addressCJXVzJ = accounts[1]
		const uintzwFkHgB = BigInt("1360")
		const addressC1rl4HV = "0x0000000000000000000000000000000000000001"
		const addressTn8JOj = "0x0000000000000000000000000000000000000001"
		const addresstBJO1KJ = accounts[0]
		const addressIDkXxSe = accounts[0]
		const uintlR4rpGo = BigInt("148")
		const addressv5JOd6A = accounts[2]
		const addressQYUX2a = accounts[6]
//		const addressrYgxwWs = await afiControllergGYJgz.setOneSplit.call(addressCJXVzJ, {from: accounts[3]});
//		const uintdzY58hu = await afiControllergGYJgz.getExpectedReturn.call(addressTn8JOj, addressC1rl4HV, uintzwFkHgB, {from: accounts[5]});
//		const addresswAWk303 = await afiControllergGYJgz.setStrategy.call(addressIDkXxSe, addresstBJO1KJ, {from: accounts[3]});
//		const addressAdSndjz = await afiControllergGYJgz.yearn.call(addressQYUX2a, addressv5JOd6A, uintlR4rpGo, {from: accounts[4]});

		await expect(afiControllergGYJgz.setOneSplit.call(addressCJXVzJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAQpobh = accounts[4]
		const afiControllergGYJgz = await afiController.new(addressAQpobh, {from: accounts[2]});
		const addressfjsAOZp = "0x0000000000000000000000000000000000000001"
		const uintzMduH7P = BigInt("148")
		const addresskkYVyw = accounts[3]
		const addressESFBf5Q = accounts[4]
		const addressDLhjfWN = accounts[2]
//		const addresshQULjL = await afiControllergGYJgz.withdrawAll.call(addressfjsAOZp, {from: accounts[2]});
//		const addressAdSndjz = await afiControllergGYJgz.yearn.call(addressESFBf5Q, addresskkYVyw, uintzMduH7P, {from: accounts[4]});
//		const addresssjZgCY3 = await afiControllergGYJgz.setStrategist.call(addressDLhjfWN, {from: accounts[0]});

		await expect(afiControllergGYJgz.withdrawAll.call(addressfjsAOZp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswWA7Gst = accounts[4]
		const afiControllergGYJgz = await afiController.new(addresswWA7Gst, {from: accounts[2]});
		const uinty01h9rt = BigInt("1286")
		const addressizYcTDh = accounts[0]
		const addressgaRNF5 = accounts[4]
		const uintEHLCiA = BigInt("148")
		const addressX80aqhJ = accounts[2]
		const addressR7Cwsz = accounts[6]
//		const addressGzPxTO = await afiControllergGYJgz.inCaseTokensGetStuck.call(addressizYcTDh, uinty01h9rt, {from: accounts[2]});
//		const addresskAGfHgV = await afiControllergGYJgz.setStrategist.call(addressgaRNF5, {from: accounts[3]});
//		const addressAdSndjz = await afiControllergGYJgz.yearn.call(addressR7Cwsz, addressX80aqhJ, uintEHLCiA, {from: accounts[4]});

		await expect(afiControllergGYJgz.inCaseTokensGetStuck.call(addressizYcTDh, uinty01h9rt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressu1yAlxl = accounts[4]
		const afiControllergGYJgz = await afiController.new(addressu1yAlxl, {from: accounts[2]});
		const addresslndQWD = accounts[3]
		const addressZNRvqa5 = accounts[3]
		const addressl6t7lE7 = accounts[1]
//		const addressEQ5mLC = await afiControllergGYJgz.setRewards.call(addresslndQWD, {from: accounts[4]});
//		const uintrzxciN5 = await afiControllergGYJgz.balanceOf.call(addressZNRvqa5, {from: accounts[4]});
//		const addressanXAwTI = await afiControllergGYJgz.setGovernance.call(addressl6t7lE7, {from: accounts[1]});

		await expect(afiControllergGYJgz.setRewards.call(addresslndQWD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressD2jZNIr = accounts[4]
		const afiControllergGYJgz = await afiController.new(addressD2jZNIr, {from: accounts[2]});
		const uintQcEONdD = BigInt("342")
		const addressSH9fdsm = accounts[1]
		const address7UpZTi = accounts[1]
//		const addresszg6UdJu = await afiControllergGYJgz.withdraw.call(addressSH9fdsm, uintQcEONdD, {from: "0x0000000000000000000000000000000000000001"});
//		const addressanXAwTI = await afiControllergGYJgz.setGovernance.call(address7UpZTi, {from: accounts[1]});

		await expect(afiControllergGYJgz.withdraw.call(addressSH9fdsm, uintQcEONdD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})