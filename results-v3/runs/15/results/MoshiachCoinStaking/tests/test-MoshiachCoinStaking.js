const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinghoZwSe = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressesoIKLt = accounts[2]
		const addressD7usvsr = accounts[1]
		const uintQesnXPB = BigInt("527")
		await MoshiachCoinStakinghoZwSe.claimDivs.call({from: accounts[4]});
		const uintTBznMC = await MoshiachCoinStakinghoZwSe.getPendingDivs.call(addressesoIKLt, {from: accounts[1]});
		const addresseJGQRzR = await MoshiachCoinStakinghoZwSe.transferOwnership.call(addressD7usvsr, {from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakinghoZwSe.onlyOwner.call({from: accounts[1]});
		const uintNZTnHhu = await MoshiachCoinStakinghoZwSe.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintG6y5PBN = await MoshiachCoinStakinghoZwSe.withdraw.call(uintQesnXPB, {from: accounts[2]});

		await expect(MoshiachCoinStakinghoZwSe.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingLE9GAa1 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintsvj2Fo4 = BigInt("1680")
		const uintXe8dXht = await MoshiachCoinStakingLE9GAa1.withdraw.call(uintsvj2Fo4, {from: "0x0000000000000000000000000000000000000001"});
		const uintBJDui5t = await MoshiachCoinStakingLE9GAa1.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(MoshiachCoinStakingLE9GAa1.withdraw.call(uintsvj2Fo4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingZQxdX0T = await MoshiachCoinStaking.new({from: accounts[1]});
		const addresskQoyi0S = accounts[3]
		const uintbOqJguR = BigInt("77")
		const addressZPOS4P = accounts[1]
		const uintXnehBzs = BigInt("754")
		const uintN8EZ1vf = await MoshiachCoinStakingZQxdX0T.getStakingAndDaoAmount.call({from: accounts[5]});
		const addresshUpYdDh = await MoshiachCoinStakingZQxdX0T.transferOwnership.call(addresskQoyi0S, {from: accounts[2]});
		const uintrTKDcee = await MoshiachCoinStakingZQxdX0T.getNumberOfHolders.call({from: accounts[4]});
		const uintE9STCdX = await MoshiachCoinStakingZQxdX0T.deposit.call(uintbOqJguR, {from: accounts[3]});
		const uintrZ6Tfg = await MoshiachCoinStakingZQxdX0T.getPendingDivs.call(addressZPOS4P, {from: accounts[1]});
		const uintKpveNQ1 = await MoshiachCoinStakingZQxdX0T.withdraw.call(uintXnehBzs, {from: accounts[2]});

		assert.equal(uintN8EZ1vf, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingZQxdX0T.transferOwnership.call(addresskQoyi0S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinge3M2oJZ = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintajBld5f = BigInt("1580")
		const uintLIX6hqK = BigInt("1832")
		const uintDTTz42f = await MoshiachCoinStakinge3M2oJZ.deposit.call(uintajBld5f, {from: accounts[4]});
		const uintopJvvLS = await MoshiachCoinStakinge3M2oJZ.deposit.call(uintLIX6hqK, {from: accounts[4]});

		await expect(MoshiachCoinStakinge3M2oJZ.deposit.call(uintajBld5f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingXPumB05 = await MoshiachCoinStaking.new({from: accounts[0]});
		await MoshiachCoinStakingXPumB05.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const uintdFMZbvl = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uint4p9zY3 = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[2]});

		await expect(MoshiachCoinStakingXPumB05.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingno9Lc7P = await MoshiachCoinStaking.new({from: accounts[4]});
		const addresslVBLxFy = accounts[0]
		const addresspBJ7gJB = accounts[0]
		await MoshiachCoinStakingno9Lc7P.onlyOwner.call({from: accounts[2]});
		const addressQRqgHce = await MoshiachCoinStakingno9Lc7P.transferOwnership.call(addresslVBLxFy, {from: "0x0000000000000000000000000000000000000001"});
		const addressxE886r3 = await MoshiachCoinStakingno9Lc7P.transferOwnership.call(addresspBJ7gJB, {from: accounts[2]});

		await expect(MoshiachCoinStakingno9Lc7P.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingzo2NkHc = await MoshiachCoinStaking.new({from: accounts[3]});
		const addresslhHmSWI = "0x0000000000000000000000000000000000000001"
		const uintOiMdYY = await MoshiachCoinStakingzo2NkHc.getStakingAndDaoAmount.call({from: accounts[1]});
		const addressttZhZ7j = await MoshiachCoinStakingzo2NkHc.transferOwnership.call(addresslhHmSWI, {from: accounts[3]});

		assert.equal(uintOiMdYY, BigInt("60000000000000000000000000"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakings9nhign = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEKGTBPC = accounts[2]
		const addressLqA1rdT = accounts[4]
		const addressQOCVWN9 = accounts[5]
		const addressfEJ9VRx = await MoshiachCoinStakings9nhign.transferOwnership.call(addressEKGTBPC, {from: accounts[2]});
		const addressBZefSV2 = await MoshiachCoinStakings9nhign.transferOwnership.call(addressLqA1rdT, {from: accounts[5]});
		const uintr826P1t = await MoshiachCoinStakings9nhign.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintckJb0uj = await MoshiachCoinStakings9nhign.getNumberOfHolders.call({from: accounts[1]});
		const uintOdDRYSQ = await MoshiachCoinStakings9nhign.getPendingDivs.call(addressQOCVWN9, {from: accounts[3]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingXPumB05 = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintJ2p7Pl1 = BigInt("1570")
		const addressfcMbkx0 = "0x0000000000000000000000000000000000000001"
		const addressgUobAvJ = "0x0000000000000000000000000000000000000001"
		await MoshiachCoinStakingXPumB05.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const addressJ4b1s1l = await MoshiachCoinStakingXPumB05.transferAnyERC20Tokens.call(addressgUobAvJ, addressfcMbkx0, uintJ2p7Pl1, {from: accounts[0]});
		const uintz07rCQ8 = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[0]});

		await expect(MoshiachCoinStakingXPumB05.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingXPumB05 = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintKaXgay = BigInt("0")
		const uintaLy6u0 = BigInt("1719")
		const uintojUs0a = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintXZXErK8 = await MoshiachCoinStakingXPumB05.deposit.call(uintKaXgay, {from: accounts[2]});
		const uintXjSs7OF = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintsmgZJjo = await MoshiachCoinStakingXPumB05.withdraw.call(uintaLy6u0, {from: accounts[1]});
		const uintjpJbtgz = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[1]});

		assert.equal(uintojUs0a, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingXPumB05.deposit.call(uintKaXgay, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingXPumB05 = await MoshiachCoinStaking.new({from: accounts[0]});
		const addresspOgQ8Rh = accounts[0]
		const uintlKd8Vse = BigInt("1573")
		const addressNtBAPiT = "0x00000000000000000000000000000000000000-1"
		const addresseCGjaVk = "0x0000000000000000000000000000000000000001"
		const addressqe3wR3P = accounts[1]
		const uintwOGX5D = BigInt("1334")
		const uintFGO5xu7 = BigInt("1922")
		const uintdoZdYES = BigInt("817")
		const addressW8TpKlE = accounts[4]
		const uintPeeHSgW = BigInt("1780")
		const addresspSoca66 = accounts[1]
		const addressXC6iwiw = accounts[0]
		const addressBrE6ezs = await MoshiachCoinStakingXPumB05.transferOwnership.call(addresspOgQ8Rh, {from: accounts[0]});
		const uintlZRps2W = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintOtR9ZMy = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[1]});
		const uintvAovleV = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[2]});
		const uintVu1VP4L = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[0]});
		const uintL1yUxpz = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[2]});
		const uinttdjSLZi = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[2]});
		const uintr4mai5g = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintMWgVv09 = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[3]});
		const addressJ4b1s1l = await MoshiachCoinStakingXPumB05.transferAnyERC20Tokens.call(addresseCGjaVk, addressNtBAPiT, uintlKd8Vse, {from: accounts[0]});
		const uintWjJTPlt = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[0]});
		await MoshiachCoinStakingXPumB05.claimDivs.call({from: accounts[0]});
		const uintTOBdJi = await MoshiachCoinStakingXPumB05.getPendingDivs.call(addressqe3wR3P, {from: accounts[0]});
		const uintJRAmNu = await MoshiachCoinStakingXPumB05.withdraw.call(uintwOGX5D, {from: accounts[1]});
		const uintU4i1hBe = await MoshiachCoinStakingXPumB05.deposit.call(uintFGO5xu7, {from: accounts[1]});
		const uintOiBvlUS = await MoshiachCoinStakingXPumB05.deposit.call(uintdoZdYES, {from: accounts[5]});
		const addressNZv0waY = await MoshiachCoinStakingXPumB05.transferOwnership.call(addressW8TpKlE, {from: accounts[2]});
		const addressnrClM4Y = await MoshiachCoinStakingXPumB05.transferAnyERC20Tokens.call(addressXC6iwiw, addresspSoca66, uintPeeHSgW, {from: accounts[4]});
		const uintPFLcVj = await MoshiachCoinStakingXPumB05.getNumberOfHolders.call({from: accounts[0]});

		assert.equal(uintL1yUxpz, BigInt("0"))
		assert.equal(uintMWgVv09, BigInt("60000000000000000000000000"))
		assert.equal(uintOtR9ZMy, BigInt("0"))
		assert.equal(uintVu1VP4L, BigInt("0"))
		assert.equal(uintlZRps2W, BigInt("60000000000000000000000000"))
		assert.equal(uintr4mai5g, BigInt("60000000000000000000000000"))
		assert.equal(uinttdjSLZi, BigInt("0"))
		assert.equal(uintvAovleV, BigInt("0"))
		await expect(MoshiachCoinStakingXPumB05.transferAnyERC20Tokens.call(addresseCGjaVk, addressNtBAPiT, uintlKd8Vse, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingXPumB05 = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressERF6J0t = accounts[2]
		const uintXmrmsT2 = BigInt("89")
		const addressk1YEOI = "0x0000000000000000000000000000000000000001"
		const addressZ4GwoE2 = "0x00000000000000000000000000000000000000-1"
		await MoshiachCoinStakingXPumB05.claimDivs.call({from: accounts[0]});
		const uinthsKEeCE = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintdvSsnCY = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintMl7UPQw = await MoshiachCoinStakingXPumB05.getPendingDivs.call(addressERF6J0t, {from: "0x0000000000000000000000000000000000000001"});
		const addressJ4b1s1l = await MoshiachCoinStakingXPumB05.transferAnyERC20Tokens.call(addressZ4GwoE2, addressk1YEOI, uintXmrmsT2, {from: accounts[0]});

		await expect(MoshiachCoinStakingXPumB05.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingXPumB05 = await MoshiachCoinStaking.new({from: accounts[0]});
		const addresszvbzD0c = accounts[1]
		const address7AhvDv = "0x00000000000000000000000000000000000000-1"
		const addressLTzQcpe = accounts[1]
		const uintqivhgUT = BigInt("97")
		const addressOFw3GwZ = "0x0000000000000000000000000000000000000001"
		const addressQj6v75 = "0x0000000000000000000000000000000000000000"
		const uintWFcHEtI = BigInt("656")
		const addressoXnPEV3 = accounts[5]
		const addressiF3e64 = "0x0000000000000000000000000000000000000001"
		const addresslKssiAd = accounts[0]
		await MoshiachCoinStakingXPumB05.claimDivs.call({from: accounts[0]});
		const uintdvSsnCY = await MoshiachCoinStakingXPumB05.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintgdLXkrN = await MoshiachCoinStakingXPumB05.getPendingDivs.call(addresszvbzD0c, {from: accounts[0]});
		const uintsvGMaCa = await MoshiachCoinStakingXPumB05.getPendingDivs.call(address7AhvDv, {from: accounts[1]});
		const addressIoFItJv = await MoshiachCoinStakingXPumB05.transferOwnership.call(addressLTzQcpe, {from: accounts[0]});
		const addressJ4b1s1l = await MoshiachCoinStakingXPumB05.transferAnyERC20Tokens.call(addressQj6v75, addressOFw3GwZ, uintqivhgUT, {from: accounts[0]});
		const addressSXb0rPL = await MoshiachCoinStakingXPumB05.transferAnyERC20Tokens.call(addressiF3e64, addressoXnPEV3, uintWFcHEtI, {from: "0x0000000000000000000000000000000000000001"});
		const addressBCw6b2U = await MoshiachCoinStakingXPumB05.transferOwnership.call(addresslKssiAd, {from: accounts[3]});

		await expect(MoshiachCoinStakingXPumB05.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})