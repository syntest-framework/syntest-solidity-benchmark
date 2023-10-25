const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCE2IMuQB = await REXUNIFINANCE.new({from: accounts[2]});
		const addressGGuh3A = accounts[3]
		const uintkcxVRMh = BigInt("1722")
		const addressmnCgsk = accounts[3]
		const addressUTHwdDn = accounts[1]
		const uintYQ9UjDZ = BigInt("1276")
		const addresspnO21H = accounts[4]
		const addressUdiObpe = "0x0000000000000000000000000000000000000001"
		const uintAQTtfZg = BigInt("235")
		const addressiLB7HlH = accounts[2]
		const uint256eCGaUIL = await REXUNIFINANCE2IMuQB.balanceOf.call(addressGGuh3A, {from: accounts[2]});
//		const boolUnyxvO3 = await REXUNIFINANCE2IMuQB.transferFrom.call(addressUTHwdDn, addressmnCgsk, uintkcxVRMh, {from: accounts[2]});
//		const boolXNNLCMb = await REXUNIFINANCE2IMuQB.approve.call(addresspnO21H, uintYQ9UjDZ, {from: accounts[2]});
//		const addresswkJVWWz = await REXUNIFINANCE2IMuQB.transferOwnership.call(addressUdiObpe, {from: accounts[0]});
//		const boolOvLq9c6 = await REXUNIFINANCE2IMuQB.increaseApproval.call(addressiLB7HlH, uintAQTtfZg, {from: accounts[0]});

		assert.equal(uint256eCGaUIL, BigInt("0"))
		await expect(REXUNIFINANCE2IMuQB.transferFrom.call(addressUTHwdDn, addressmnCgsk, uintkcxVRMh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCETdHhfbM = await REXUNIFINANCE.new({from: accounts[3]});
		const addressVezq1SG = accounts[4]
		const addressuyg4Ii = accounts[1]
//		const addressm06ZP0t = await REXUNIFINANCETdHhfbM.transferOwnership.call(addressVezq1SG, {from: accounts[0]});
//		const uint256ke5slmW = await REXUNIFINANCETdHhfbM.transferableTokens.call(addressuyg4Ii, {from: accounts[3]});

		await expect(REXUNIFINANCETdHhfbM.transferOwnership.call(addressVezq1SG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEKGolAAr = await REXUNIFINANCE.new({from: accounts[2]});
		const addressNWKdQT1 = accounts[2]
		const addressfMg286H = accounts[0]
		const uintN7tmIVr = BigInt("1092")
		const addressEuzqShz = accounts[3]
		const addresseQ6C10b = accounts[3]
		const uinttn3DdPM = BigInt("1824")
		const addressZvBclNt = accounts[0]
		const uint256v75UGuO = await REXUNIFINANCEKGolAAr.allowance.call(addressfMg286H, addressNWKdQT1, {from: accounts[0]});
//		const boolCJsrufu = await REXUNIFINANCEKGolAAr.transferFrom.call(addresseQ6C10b, addressEuzqShz, uintN7tmIVr, {from: accounts[0]});
//		const boolK53CJSl = await REXUNIFINANCEKGolAAr.decreaseApproval.call(addressZvBclNt, uinttn3DdPM, {from: accounts[4]});

		assert.equal(uint256v75UGuO, BigInt("0"))
		await expect(REXUNIFINANCEKGolAAr.transferFrom.call(addresseQ6C10b, addressEuzqShz, uintN7tmIVr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCE8DU86H = await REXUNIFINANCE.new({from: accounts[5]});
		const uintrBtLae = BigInt("1299")
		const addresseMA8Y36 = accounts[4]
		const addressQ8LxNdK = accounts[1]
		const addressRupfohx = accounts[0]
		const boolk0ij2N = await REXUNIFINANCE8DU86H.decreaseApproval.call(addresseMA8Y36, uintrBtLae, {from: accounts[0]});
//		const addressDTrHEzX = await REXUNIFINANCE8DU86H.transferOwnership.call(addressQ8LxNdK, {from: accounts[0]});
//		const uint256DAZ8zFp = await REXUNIFINANCE8DU86H.balanceOf.call(addressRupfohx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolk0ij2N, true)
		await expect(REXUNIFINANCE8DU86H.transferOwnership.call(addressQ8LxNdK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEMyrLge5 = await REXUNIFINANCE.new({from: accounts[0]});
		const uintdGKtQWu = BigInt("699")
		const addressp1U1wSc = "0x0000000000000000000000000000000000000001"
		const uintXJ0itB = BigInt("82")
		const addressDVT4zc8 = "0x0000000000000000000000000000000000000001"
		const uintPFNfSiM = BigInt("294")
		const addressqwlARJ4 = accounts[3]
		const addressVJPdM31 = accounts[0]
		const uintKgoMXwI = BigInt("1946")
		const addressvPkR8Y = accounts[3]
		const addresswCOnadO = accounts[4]
		const uintacP0yer = BigInt("1279")
		const addressFez4eG5 = accounts[3]
		const boolJUUOVHq = await REXUNIFINANCEMyrLge5.approve.call(addressp1U1wSc, uintdGKtQWu, {from: accounts[0]});
		const boolF9zLTlM = await REXUNIFINANCEMyrLge5.approve.call(addressDVT4zc8, uintXJ0itB, {from: accounts[5]});
//		const boolTydcKHF = await REXUNIFINANCEMyrLge5.transferFrom.call(addressVJPdM31, addressqwlARJ4, uintPFNfSiM, {from: accounts[1]});
//		const booljpz1cz5 = await REXUNIFINANCEMyrLge5.transferFrom.call(addresswCOnadO, addressvPkR8Y, uintKgoMXwI, {from: accounts[3]});
//		const boolhDUpMyT = await REXUNIFINANCEMyrLge5.decreaseApproval.call(addressFez4eG5, uintacP0yer, {from: accounts[0]});

		assert.equal(boolF9zLTlM, true)
		assert.equal(boolJUUOVHq, true)
		await expect(REXUNIFINANCEMyrLge5.transferFrom.call(addressVJPdM31, addressqwlARJ4, uintPFNfSiM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEmGRZKnW = await REXUNIFINANCE.new({from: accounts[0]});
		const addressDdkUKQ = "0x0000000000000000000000000000000000000001"
		const uintCA0QjFm = BigInt("1988")
		const addressG89X8tA = accounts[3]
		const uintTEwc57 = BigInt("322")
		const addressSZxBPTL = accounts[0]
		const addressFGcLjFb = accounts[4]
		const addresstQ60COD = accounts[2]
		const uint256vlcT4v2 = await REXUNIFINANCEmGRZKnW.balanceOf.call(addressDdkUKQ, {from: accounts[3]});
		const boolaXpZioX = await REXUNIFINANCEmGRZKnW.increaseApproval.call(addressG89X8tA, uintCA0QjFm, {from: "0x0000000000000000000000000000000000000001"});
		const boolrTwf39F = await REXUNIFINANCEmGRZKnW.increaseApproval.call(addressSZxBPTL, uintTEwc57, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uuScxlu = await REXUNIFINANCEmGRZKnW.transferableTokens.call(addressFGcLjFb, {from: accounts[2]});
		const uint256GxdmSUz = await REXUNIFINANCEmGRZKnW.balanceOf.call(addresstQ60COD, {from: accounts[2]});

		assert.equal(boolaXpZioX, true)
		assert.equal(boolrTwf39F, true)
		assert.equal(uint256GxdmSUz, BigInt("0"))
		assert.equal(uint256uuScxlu, BigInt("0"))
		assert.equal(uint256vlcT4v2, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEfeYjtKh = await REXUNIFINANCE.new({from: accounts[4]});
		const uints7fQuug = BigInt("1939")
		const addresshO3Uq57 = accounts[2]
		const addressPPW7mfV = accounts[1]
		const uint4SUA4z = BigInt("921")
		const addressW7IDpww = "0x0000000000000000000000000000000000000001"
		const addressNhs6bSZ = accounts[4]
		const uintuGM662c = BigInt("64")
		const addressJUSNw6L = accounts[2]
		const addressh3vLHed = accounts[2]
		const booldqX5Qfb = await REXUNIFINANCEfeYjtKh.increaseApproval.call(addresshO3Uq57, uints7fQuug, {from: accounts[0]});
		const uint256F7EIfvi = await REXUNIFINANCEfeYjtKh.balanceOf.call(addressPPW7mfV, {from: accounts[3]});
//		const boolHVmGH94 = await REXUNIFINANCEfeYjtKh.transfer.call(addressW7IDpww, uint4SUA4z, {from: accounts[3]});
//		const uint256BwP4JkP = await REXUNIFINANCEfeYjtKh.transferableTokens.call(addressNhs6bSZ, {from: accounts[3]});
//		const boolKKkejvb = await REXUNIFINANCEfeYjtKh.increaseApproval.call(addressJUSNw6L, uintuGM662c, {from: accounts[2]});
//		const addressZzxPdG1 = await REXUNIFINANCEfeYjtKh.transferOwnership.call(addressh3vLHed, {from: accounts[4]});

		assert.equal(booldqX5Qfb, true)
		assert.equal(uint256F7EIfvi, BigInt("0"))
		await expect(REXUNIFINANCEfeYjtKh.transfer.call(addressW7IDpww, uint4SUA4z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEXbsdaDf = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKnvp9Wh = accounts[4]
		const uintpWlZKcB = BigInt("881")
		const addresstz9YZR = accounts[0]
		const addressXMMiP0U = accounts[5]
		const addressFw5Sd9H = accounts[0]
		const uintQyAiODZ = BigInt("858")
		const addresss4ZTjPW = accounts[4]
		const addressJsA8Npz = await REXUNIFINANCEXbsdaDf.transferOwnership.call(addressKnvp9Wh, {from: accounts[2]});
		const boolyJbX7JF = await REXUNIFINANCEXbsdaDf.increaseApproval.call(addresstz9YZR, uintpWlZKcB, {from: accounts[0]});
		const uint256PDW5nA0 = await REXUNIFINANCEXbsdaDf.balanceOf.call(addressXMMiP0U, {from: accounts[1]});
		const addressrSBfnvi = await REXUNIFINANCEXbsdaDf.transferOwnership.call(addressFw5Sd9H, {from: accounts[2]});
		const boolc9R79Op = await REXUNIFINANCEXbsdaDf.increaseApproval.call(addresss4ZTjPW, uintQyAiODZ, {from: accounts[1]});
	});
})