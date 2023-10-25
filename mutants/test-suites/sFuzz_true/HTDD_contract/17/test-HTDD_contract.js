const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractXSxxsIP = await HTDD_contract.new({from: accounts[3]});
		const uintlP0voFD = BigInt("355")
		const addresstBymwe = "0x0000000000000000000000000000000000000001"
		const addressRBs7ee = accounts[1]
		const uintDWBsd6v = BigInt("178")
		const addressB58T3j8 = "0x0000000000000000000000000000000000000001"
		const uintbFXkYFM = BigInt("302")
		const addressyRjlVYq = accounts[0]
		const addressYaL5Fn6 = accounts[1]
		const addressWluPkbG = accounts[3]
//		const boolXQOify = await HTDD_contractXSxxsIP.transferFrom.call(addressRBs7ee, addresstBymwe, uintlP0voFD, {from: accounts[4]});
//		const bool57zquL = await HTDD_contractXSxxsIP.transfer.call(addressB58T3j8, uintDWBsd6v, {from: accounts[0]});
//		const boolne8eaCP = await HTDD_contractXSxxsIP.approve.call(addressyRjlVYq, uintbFXkYFM, {from: accounts[4]});
//		const uint256Q4txCh1 = await HTDD_contractXSxxsIP.allowance.call(addressWluPkbG, addressYaL5Fn6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractXSxxsIP.transferFrom.call(addressRBs7ee, addresstBymwe, uintlP0voFD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractbWw35U4 = await HTDD_contract.new({from: accounts[5]});
		const uintU9OIbLP = BigInt("804")
		const addresso1Y9REo = accounts[1]
		const uintNEhAVg = BigInt("745")
		const addressX7wzhC7 = accounts[2]
		const uintTwIdoaM = BigInt("128")
		const addressFeO5mg = accounts[4]
		const uintRL4ToFb = BigInt("1379")
		const addressOULKRrw = "0x0000000000000000000000000000000000000001"
//		const boolvHCd8E = await HTDD_contractbWw35U4.transfer.call(addresso1Y9REo, uintU9OIbLP, {from: accounts[3]});
//		const boolk2KHAyL = await HTDD_contractbWw35U4.approve.call(addressX7wzhC7, uintNEhAVg, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZiQERue = await HTDD_contractbWw35U4.approve.call(addressFeO5mg, uintTwIdoaM, {from: accounts[3]});
//		const booljsdsPsi = await HTDD_contractbWw35U4.approve.call(addressOULKRrw, uintRL4ToFb, {from: accounts[4]});

		await expect(HTDD_contractbWw35U4.transfer.call(addresso1Y9REo, uintU9OIbLP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractsEmgju2 = await HTDD_contract.new({from: accounts[0]});
		const uintBsa58ia = BigInt("1154")
		const addressrYKiNNq = accounts[3]
		const addresseimqim = accounts[3]
		const addressFd3l1JQ = accounts[0]
		const addressIM9Tnen = accounts[4]
		const addressu7qDhN6 = accounts[3]
		const uintJLll2K = BigInt("311")
		const addressW1onZhg = accounts[0]
		const addressg04wNHd = accounts[4]
		const uintUUUtuvY = BigInt("812")
		const addressEKs7Fi = accounts[5]
		const uinthrWHtT = BigInt("1997")
		const addressxfsXSri = "0x0000000000000000000000000000000000000001"
		const boolSwkGYb = await HTDD_contractsEmgju2.approve.call(addressrYKiNNq, uintBsa58ia, {from: accounts[3]});
		const uint256bo6b4R1 = await HTDD_contractsEmgju2.allowance.call(addressFd3l1JQ, addresseimqim, {from: accounts[2]});
		const uint256CTtVBjC = await HTDD_contractsEmgju2.allowance.call(addressu7qDhN6, addressIM9Tnen, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMTHdjYI = await HTDD_contractsEmgju2.transferFrom.call(addressg04wNHd, addressW1onZhg, uintJLll2K, {from: "0x0000000000000000000000000000000000000001"});
//		const booltge4AbN = await HTDD_contractsEmgju2.approve.call(addressEKs7Fi, uintUUUtuvY, {from: accounts[3]});
//		const boolNGE4hRo = await HTDD_contractsEmgju2.transfer.call(addressxfsXSri, uinthrWHtT, {from: accounts[4]});

		assert.equal(boolSwkGYb, true)
		assert.equal(uint256CTtVBjC, BigInt("0"))
		assert.equal(uint256bo6b4R1, BigInt("0"))
		await expect(HTDD_contractsEmgju2.transferFrom.call(addressg04wNHd, addressW1onZhg, uintJLll2K, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractwGxZjBC = await HTDD_contract.new({from: accounts[3]});
		const uinttn6mIxa = BigInt("323")
		const addressOT8h92A = "0x0000000000000000000000000000000000000001"
		const addressoFVcHt4 = accounts[3]
		const addressbOQ3OBr = accounts[0]
		const uintFt31vCn = BigInt("1939")
		const addressjaHnQH = accounts[0]
		const uintLpbBEO9 = BigInt("1134")
		const addressFWDy9PJ = accounts[0]
		const uintw1cCuul = BigInt("1259")
		const addressZB68HSR = "0x0000000000000000000000000000000000000001"
		const boolmt4uab6 = await HTDD_contractwGxZjBC.transfer.call(addressOT8h92A, uinttn6mIxa, {from: accounts[3]});
		const uint256qvzNWPi = await HTDD_contractwGxZjBC.allowance.call(addressbOQ3OBr, addressoFVcHt4, {from: accounts[3]});
		const boolxNiUqcO = await HTDD_contractwGxZjBC.approve.call(addressjaHnQH, uintFt31vCn, {from: accounts[0]});
		const booli5dmRW = await HTDD_contractwGxZjBC.approve.call(addressFWDy9PJ, uintLpbBEO9, {from: accounts[0]});
		const boolNro4V8m = await HTDD_contractwGxZjBC.approve.call(addressZB68HSR, uintw1cCuul, {from: accounts[1]});

		assert.equal(boolNro4V8m, true)
		assert.equal(booli5dmRW, true)
		assert.equal(boolmt4uab6, true)
		assert.equal(boolxNiUqcO, true)
		assert.equal(uint256qvzNWPi, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractUImiS1Q = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintji8cEhq = BigInt("1288")
		const addressU8Ud2KR = accounts[2]
		const uintjtxzdMb = BigInt("1463")
		const addressHQC1xs6 = accounts[2]
		const addresskv08ti7 = accounts[0]
		const boolQkDE9im = await HTDD_contractUImiS1Q.approve.call(addressU8Ud2KR, uintji8cEhq, {from: accounts[0]});
		const boolWfdC29F = await HTDD_contractUImiS1Q.transferFrom.call(addresskv08ti7, addressHQC1xs6, uintjtxzdMb, {from: accounts[5]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractXSxxsIP = await HTDD_contract.new({from: accounts[3]});
		const uintLMDReE = BigInt("1911")
		const addressmr4xosw = accounts[4]
		const addressd7wBn31 = accounts[3]
		const uintL4Jd1xL = BigInt("178")
		const addressav8eFpg = "0x0000000000000000000000000000000000000001"
		const addressoslszq8 = accounts[1]
		const addresszfgHf6b = accounts[3]
//		const boolceyYQM = await HTDD_contractXSxxsIP.transferFrom.call(addressd7wBn31, addressmr4xosw, uintLMDReE, {from: accounts[1]});
//		const bool57zquL = await HTDD_contractXSxxsIP.transfer.call(addressav8eFpg, uintL4Jd1xL, {from: accounts[0]});
//		const uint256Q4txCh1 = await HTDD_contractXSxxsIP.allowance.call(addresszfgHf6b, addressoslszq8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractXSxxsIP.transferFrom.call(addressd7wBn31, addressmr4xosw, uintLMDReE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})