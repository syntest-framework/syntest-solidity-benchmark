const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinGf0g3ZU = await DJCoin.new({from: accounts[5]});
		const uinto8y9He5 = BigInt("615")
		const uintKjmUjek = BigInt("1932")
		const uinthGfcZqS = BigInt("457")
		const addresswXuKuD8 = accounts[4]
		const addressFZk3L2 = "0x0000000000000000000000000000000000000001"
		const addressv1hFG1x = accounts[2]
//		const uint256yt4DWiV = await DJCoinGf0g3ZU.burn.call(uintKjmUjek, uinto8y9He5, {from: accounts[0]});
//		const boolPXEowiF = await DJCoinGf0g3ZU.transferFrom.call(addressFZk3L2, addresswXuKuD8, uinthGfcZqS, {from: accounts[5]});
//		const uint256SGBRi7 = await DJCoinGf0g3ZU.balanceOf.call(addressv1hFG1x, {from: accounts[2]});
//		await DJCoinGf0g3ZU.renounceOwnership.call({from: accounts[0]});

		await expect(DJCoinGf0g3ZU.burn.call(uintKjmUjek, uinto8y9He5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinAjby5T6 = await DJCoin.new({from: accounts[3]});
		const uintW2ABeLR = BigInt("1536")
		const addressTMtFF7F = accounts[2]
		const addressLWiIHUB = accounts[2]
		const addressOeVdphX = accounts[3]
		const addressraqFZU3 = accounts[2]
		const boolOVS5CFM = await DJCoinAjby5T6.increaseAllowance.call(addressTMtFF7F, uintW2ABeLR, {from: accounts[2]});
//		const addressHEsfIQ1 = await DJCoinAjby5T6.validRecipient.call(addressLWiIHUB, {from: accounts[1]});
//		const uint256QmviFWK = await DJCoinAjby5T6.allowance.call(addressraqFZU3, addressOeVdphX, {from: accounts[3]});

		assert.equal(boolOVS5CFM, true)
		await expect(DJCoinAjby5T6.validRecipient.call(addressLWiIHUB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoine0G9UOm = await DJCoin.new({from: accounts[4]});
		const addressGJxkF5r = accounts[3]
		const addressb1Q0PH = accounts[2]
		const uintdKKdnB6 = BigInt("83")
		const addressEsjdC6 = accounts[1]
		const addressFS3Aeg = "0x0000000000000000000000000000000000000001"
		const uintGTqfeTE = BigInt("1225")
		const addressPRNSymo = accounts[5]
		const addressXRdKr4c = accounts[2]
		const addressJClhoKP = await DJCoine0G9UOm.owner.call({from: accounts[1]});
		const uint256QMFvQKL = await DJCoine0G9UOm.allowance.call(addressb1Q0PH, addressGJxkF5r, {from: accounts[1]});
		const boolwzlpdFy = await DJCoine0G9UOm.decreaseAllowance.call(addressEsjdC6, uintdKKdnB6, {from: accounts[2]});
		const uint256SMRIXuN = await DJCoine0G9UOm.balanceOf.call(addressFS3Aeg, {from: accounts[3]});
//		const boolO9Enec0 = await DJCoine0G9UOm.transferFrom.call(addressXRdKr4c, addressPRNSymo, uintGTqfeTE, {from: accounts[0]});

		assert.equal(addressJClhoKP, 0xCADbf56de8743791687A4fc2C52b2ed590b097E5)
		assert.equal(boolwzlpdFy, true)
		assert.equal(uint256QMFvQKL, BigInt("0"))
		assert.equal(uint256SMRIXuN, BigInt("0"))
		await expect(DJCoine0G9UOm.transferFrom.call(addressXRdKr4c, addressPRNSymo, uintGTqfeTE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinXEaACOG = await DJCoin.new({from: accounts[4]});
		const uintn4RZ1NZ = BigInt("1015")
		const addressyNac79S = "0x0000000000000000000000000000000000000001"
		const addresskXDD7KN = accounts[0]
		const uintvwBsbbw = BigInt("255")
		const addressmaPjTZ2 = accounts[2]
		const addresshTtDlaY = accounts[2]
		const addressokhXnDz = accounts[1]
		const uintuIKtjKL = BigInt("628")
		const uintgsV1Fql = BigInt("1268")
		const booljqXMoC0 = await DJCoinXEaACOG.approve.call(addressyNac79S, uintn4RZ1NZ, {from: accounts[2]});
//		const addressESDjf6m = await DJCoinXEaACOG.transferOwnership.call(addresskXDD7KN, {from: accounts[3]});
//		const boolpmYY2PF = await DJCoinXEaACOG.transfer.call(addressmaPjTZ2, uintvwBsbbw, {from: accounts[1]});
//		const uint256K9uM2C = await DJCoinXEaACOG.allowance.call(addressokhXnDz, addresshTtDlaY, {from: accounts[2]});
//		const uint256B6dSKIV = await DJCoinXEaACOG.burn.call(uintgsV1Fql, uintuIKtjKL, {from: accounts[3]});

		assert.equal(booljqXMoC0, true)
		await expect(DJCoinXEaACOG.transferOwnership.call(addresskXDD7KN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin9UvbB2 = await DJCoin.new({from: accounts[3]});
		const addressaaa71M = accounts[0]
		const uintradLUyg = BigInt("833")
		const uintMyMPmj = BigInt("1786")
		const addressm8H8KwE = accounts[2]
		const uintUnnq68E = BigInt("503")
		const addressAum9Sq = accounts[0]
		const uint256MikFMRQ = await DJCoin9UvbB2.balanceOf.call(addressaaa71M, {from: accounts[3]});
		const boolCUaeHC9 = await DJCoin9UvbB2.changetokensPerBlock.call(uintradLUyg, {from: accounts[5]});
//		await DJCoin9UvbB2.onlyOwner.call({from: accounts[4]});
//		const boolUgPZVCT = await DJCoin9UvbB2.approve.call(addressm8H8KwE, uintMyMPmj, {from: accounts[5]});
//		const boolPpjPBqn = await DJCoin9UvbB2.decreaseAllowance.call(addressAum9Sq, uintUnnq68E, {from: accounts[3]});

		assert.equal(boolCUaeHC9, true)
		assert.equal(uint256MikFMRQ, BigInt("0"))
		await expect(DJCoin9UvbB2.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin2w2oW5 = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWyRFy4i = accounts[3]
		const uintoGV2EdV = BigInt("1311")
		const addresshwDV8we = accounts[5]
		const uintsuWPFZT = BigInt("1763")
		const addresssyGFB1i = accounts[0]
		const addressL49ULke = accounts[4]
		const addressK4HNDOP = accounts[3]
		const uintgZ9cW07 = BigInt("1967")
		const addressHfd1qc1 = accounts[1]
		const addressyKrT9VJ = "0x0000000000000000000000000000000000000001"
		const addressbXjAK1O = await DJCoin2w2oW5.transferOwnership.call(addressWyRFy4i, {from: accounts[0]});
		const boolhZtn0u4 = await DJCoin2w2oW5.decreaseAllowance.call(addresshwDV8we, uintoGV2EdV, {from: accounts[1]});
		const boolum5Qm8 = await DJCoin2w2oW5.changetokensPerBlock.call(uintsuWPFZT, {from: accounts[2]});
		const uint256cF6mzv = await DJCoin2w2oW5.allowance.call(addressL49ULke, addresssyGFB1i, {from: accounts[3]});
		const uint256el7PK7W = await DJCoin2w2oW5.balanceOf.call(addressK4HNDOP, {from: accounts[3]});
		const boolqLsqzWZ = await DJCoin2w2oW5.transferFrom.call(addressyKrT9VJ, addressHfd1qc1, uintgZ9cW07, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinXEaACOG = await DJCoin.new({from: accounts[4]});
		const uintb5iV8cP = BigInt("1015")
		const addressFO93TIT = "0x0000000000000000000000000000000000000001"
		const uintpAOVY2Q = BigInt("255")
		const addressAMLVyf = accounts[2]
		const uintHzB22hz = BigInt("1189")
		const addressr9Pw7bZ = accounts[1]
		const addressV20xLke = accounts[2]
		const addressICeUZgF = accounts[1]
		const uintpZ1UODp = BigInt("628")
		const uintAEZvA6s = BigInt("1268")
		const uintLNDFD3C = BigInt("958")
		const address9GJUhX = accounts[5]
		const addressLjxWjjt = accounts[2]
		const booljqXMoC0 = await DJCoinXEaACOG.approve.call(addressFO93TIT, uintb5iV8cP, {from: accounts[2]});
//		const boolpmYY2PF = await DJCoinXEaACOG.transfer.call(addressAMLVyf, uintpAOVY2Q, {from: accounts[1]});
//		const boolwkjWrLr = await DJCoinXEaACOG.transfer.call(addressr9Pw7bZ, uintHzB22hz, {from: accounts[4]});
//		const uint256K9uM2C = await DJCoinXEaACOG.allowance.call(addressICeUZgF, addressV20xLke, {from: accounts[2]});
//		const uint256B6dSKIV = await DJCoinXEaACOG.burn.call(uintAEZvA6s, uintpZ1UODp, {from: accounts[3]});
//		const boolOksWNHJ = await DJCoinXEaACOG.transferFrom.call(addressLjxWjjt, address9GJUhX, uintLNDFD3C, {from: accounts[3]});

		assert.equal(booljqXMoC0, true)
		await expect(DJCoinXEaACOG.transfer.call(addressAMLVyf, uintpAOVY2Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjoFrYO8 = await DJCoin.new({from: accounts[4]});
		const uintrwbKWh = BigInt("679")
		const uintuL50nP8 = BigInt("1140")
		const uintGUVzeWx = BigInt("1927")
		const addressfBmM4PF = accounts[2]
		const uint256GkIbRm = await DJCoinjoFrYO8.burn.call(uintuL50nP8, uintrwbKWh, {from: accounts[4]});
		const boolZXa1hsx = await DJCoinjoFrYO8.decreaseAllowance.call(addressfBmM4PF, uintGUVzeWx, {from: accounts[0]});

		assert.equal(boolZXa1hsx, true)
		assert.equal(uint256GkIbRm, BigInt("1957410000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinXEaACOG = await DJCoin.new({from: accounts[4]});
		const uintr8GlfN = BigInt("1015")
		const addressK1e5lWk = "0x0000000000000000000000000000000000000002"
		const uintNPcxz97 = BigInt("233")
		const addressTkxxUbi = accounts[2]
		const uintjD6Eo5M = BigInt("1540")
		const addressfwznc3N = accounts[0]
		const addressdRSO0ya = accounts[4]
		const addressmXZ2r2i = accounts[0]
		const addressFwVX0n1 = accounts[1]
		const addressHwJADMq = accounts[1]
		const uintkqOP41F = BigInt("1189")
		const addressteDAblH = accounts[1]
		const addresszZjWdHL = accounts[3]
		const addressuv0hEbH = accounts[2]
		const uintqfPqMUb = BigInt("958")
		const addressk4peSH = accounts[5]
		const addressTww8iUo = accounts[2]
		const uint256BKkylPo = await DJCoinXEaACOG.totalSupply.call({from: accounts[1]});
		const booljqXMoC0 = await DJCoinXEaACOG.approve.call(addressK1e5lWk, uintr8GlfN, {from: accounts[2]});
//		const boolpmYY2PF = await DJCoinXEaACOG.transfer.call(addressTkxxUbi, uintNPcxz97, {from: accounts[1]});
//		const booleq7VtrC = await DJCoinXEaACOG.approve.call(addressfwznc3N, uintjD6Eo5M, {from: accounts[0]});
//		const uint256xYBAEbC = await DJCoinXEaACOG.balanceOf.call(addressdRSO0ya, {from: accounts[0]});
//		const uint256bfKtrSa = await DJCoinXEaACOG.allowance.call(addressFwVX0n1, addressmXZ2r2i, {from: accounts[0]});
//		const addressjeU75Fc = await DJCoinXEaACOG.transferOwnership.call(addressHwJADMq, {from: accounts[1]});
//		const boolwkjWrLr = await DJCoinXEaACOG.transfer.call(addressteDAblH, uintkqOP41F, {from: accounts[4]});
//		const uint256K9uM2C = await DJCoinXEaACOG.allowance.call(addressuv0hEbH, addresszZjWdHL, {from: accounts[2]});
//		const boolOksWNHJ = await DJCoinXEaACOG.transferFrom.call(addressTww8iUo, addressk4peSH, uintqfPqMUb, {from: accounts[3]});

		assert.equal(booljqXMoC0, true)
		assert.equal(uint256BKkylPo, BigInt("2100000000000"))
		await expect(DJCoinXEaACOG.transfer.call(addressTkxxUbi, uintNPcxz97, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjoFrYO8 = await DJCoin.new({from: accounts[4]});
		const uintNVnBlu4 = BigInt("872")
		const address0V4hzo = accounts[5]
		const uintplsvGvQ = BigInt("1187")
		const addressgCOdBW3 = "0x0000000000000000000000000000000000000001"
		const uintEO7Nk1f = BigInt("1927")
		const addressAHJJ3TH = accounts[2]
//		await DJCoinjoFrYO8.renounceOwnership.call({from: accounts[4]});
//		const booltU2WnT = await DJCoinjoFrYO8.transfer.call(address0V4hzo, uintNVnBlu4, {from: accounts[4]});
//		const boolOmkcs1t = await DJCoinjoFrYO8.increaseAllowance.call(addressgCOdBW3, uintplsvGvQ, {from: accounts[0]});
//		const boolZXa1hsx = await DJCoinjoFrYO8.decreaseAllowance.call(addressAHJJ3TH, uintEO7Nk1f, {from: accounts[0]});

		await expect(DJCoinjoFrYO8.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinoYjle9 = await DJCoin.new({from: accounts[3]});
		const addressT2PVTL8 = "0x0000000000000000000000000000000000000001"
		const uintIe3yXiP = BigInt("1891")
		const uintSUl0WMy = BigInt("679")
		const uintblZZik = BigInt("1009")
		const addressVNeJxz0 = await DJCoinoYjle9.transferOwnership.call(addressT2PVTL8, {from: accounts[3]});
//		const uint256bEtOVOH = await DJCoinoYjle9.burn.call(uintSUl0WMy, uintIe3yXiP, {from: accounts[0]});
//		await DJCoinoYjle9.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolGGEVy8M = await DJCoinoYjle9.changetokensPerBlock.call(uintblZZik, {from: accounts[2]});

		await expect(DJCoinoYjle9.burn.call(uintSUl0WMy, uintIe3yXiP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinXEaACOG = await DJCoin.new({from: accounts[4]});
		const uintXhbTKaY = BigInt("0")
		const addressDUAbUA = accounts[5]
		const uintKR4OCzY = BigInt("849")
		const addressXNcE7DZ = accounts[4]
		const booluzVpOJt = await DJCoinXEaACOG.transfer.call(addressDUAbUA, uintXhbTKaY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsWnaTVR = await DJCoinXEaACOG.transfer.call(addressXNcE7DZ, uintKR4OCzY, {from: accounts[2]});

		assert.equal(booluzVpOJt, true)
		await expect(DJCoinXEaACOG.transfer.call(addressXNcE7DZ, uintKR4OCzY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})